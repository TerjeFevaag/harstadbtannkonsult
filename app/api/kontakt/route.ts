import { NextRequest, NextResponse } from 'next/server'
import { MAX_FILES, BLOB_PATH_PREFIX } from '@/lib/attachments'

const MAILERSEND_API_URL = 'https://api.mailersend.com/v1/email'
const TO_EMAIL = 'post@harstadbrannkonsult.no'
const FROM_EMAIL = 'post@harstadbrannkonsult.no'
const FROM_NAME = 'Brannkonsult AS – kontaktskjema'

const GENERIC_ERROR = 'Noe gikk galt. Prøv igjen senere, eller ring oss direkte.'

type Vedlegg = { url: string; filename: string }

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function isValidBlobUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return (
      parsed.protocol === 'https:' &&
      parsed.hostname.endsWith('.public.blob.vercel-storage.com') &&
      parsed.pathname.startsWith(`/${BLOB_PATH_PREFIX}`)
    )
  } catch {
    return false
  }
}

function parseVedlegg(value: unknown): Vedlegg[] | null {
  if (value === undefined || value === null) return []
  if (!Array.isArray(value)) return null
  if (value.length > MAX_FILES) return null

  const result: Vedlegg[] = []
  for (const entry of value) {
    if (
      typeof entry !== 'object' ||
      entry === null ||
      typeof (entry as Record<string, unknown>).url !== 'string' ||
      typeof (entry as Record<string, unknown>).filename !== 'string'
    ) {
      return null
    }
    const { url, filename } = entry as { url: string; filename: string }
    if (!isValidBlobUrl(url)) return null
    result.push({ url, filename: filename.slice(0, 150) })
  }
  return result
}

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Ugyldig forespørsel.' }, { status: 400 })
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json({ error: 'Ugyldig forespørsel.' }, { status: 400 })
  }

  const { navn, epost, telefon, prosjekttype, melding, vedlegg } = body as Record<string, unknown>

  if (typeof navn !== 'string' || navn.trim().length < 2) {
    return NextResponse.json({ error: 'Vennligst oppgi navnet ditt.' }, { status: 400 })
  }
  if (typeof epost !== 'string' || !isValidEmail(epost.trim())) {
    return NextResponse.json({ error: 'Vennligst oppgi en gyldig e-postadresse.' }, { status: 400 })
  }
  if (typeof melding !== 'string' || melding.trim().length < 5) {
    return NextResponse.json({ error: 'Vennligst skriv en melding.' }, { status: 400 })
  }
  if (telefon !== undefined && telefon !== null && typeof telefon !== 'string') {
    return NextResponse.json({ error: 'Ugyldig telefonnummer.' }, { status: 400 })
  }
  if (prosjekttype !== undefined && prosjekttype !== null && typeof prosjekttype !== 'string') {
    return NextResponse.json({ error: 'Ugyldig prosjekttype.' }, { status: 400 })
  }

  const safeVedlegg = parseVedlegg(vedlegg)
  if (safeVedlegg === null) {
    return NextResponse.json({ error: 'Ugyldige vedlegg.' }, { status: 400 })
  }

  const safeNavn = navn.trim()
  const safeEpost = epost.trim()
  const safeTelefon = typeof telefon === 'string' ? telefon.trim() : ''
  const safeProsjekttype = typeof prosjekttype === 'string' ? prosjekttype.trim() : ''
  const safeMelding = melding.trim()

  const apiKey = process.env.MAILERSEND_API_KEY
  if (!apiKey) {
    console.error('MAILERSEND_API_KEY er ikke satt')
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 })
  }

  const vedleggTextLines = safeVedlegg.map((v) => `- ${v.filename}: ${v.url}`)
  const textBody = [
    `Navn: ${safeNavn}`,
    `E-post: ${safeEpost}`,
    `Telefon: ${safeTelefon || 'Ikke oppgitt'}`,
    `Prosjekttype: ${safeProsjekttype || 'Ikke oppgitt'}`,
    ...(vedleggTextLines.length > 0 ? ['', 'Vedlegg:', ...vedleggTextLines] : []),
    '',
    'Melding:',
    safeMelding,
  ].join('\n')

  const vedleggHtml =
    safeVedlegg.length > 0
      ? `<p><strong>Vedlegg:</strong></p><ul>${safeVedlegg
          .map((v) => `<li><a href="${v.url}">${escapeHtml(v.filename)}</a></li>`)
          .join('')}</ul>`
      : ''

  const htmlBody = `
    <p><strong>Navn:</strong> ${escapeHtml(safeNavn)}</p>
    <p><strong>E-post:</strong> ${escapeHtml(safeEpost)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(safeTelefon || 'Ikke oppgitt')}</p>
    <p><strong>Prosjekttype:</strong> ${escapeHtml(safeProsjekttype || 'Ikke oppgitt')}</p>
    ${vedleggHtml}
    <p><strong>Melding:</strong></p>
    <p>${escapeHtml(safeMelding).replace(/\n/g, '<br>')}</p>
  `.trim()

  try {
    const mailerSendRes = await fetch(MAILERSEND_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: { email: FROM_EMAIL, name: FROM_NAME },
        to: [{ email: TO_EMAIL }],
        reply_to: { email: safeEpost, name: safeNavn },
        subject: `Ny henvendelse fra ${safeNavn}`,
        text: textBody,
        html: htmlBody,
      }),
    })

    if (!mailerSendRes.ok) {
      const errorDetails = await mailerSendRes.text()
      console.error('MailerSend-forespørsel feilet', mailerSendRes.status, errorDetails)
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Uventet feil ved sending av kontaktskjema', error)
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 })
  }
}
