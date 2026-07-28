import { NextRequest, NextResponse } from 'next/server'

const MAILERSEND_API_URL = 'https://api.mailersend.com/v1/email'
const TO_EMAIL = 'post@harstadbrannkonsult.no'
const FROM_EMAIL = 'post@harstadbrannkonsult.no'
const FROM_NAME = 'Brannkonsult AS – kontaktskjema'

const GENERIC_ERROR = 'Noe gikk galt. Prøv igjen senere, eller ring oss direkte.'

const MAX_FILES = 5
const MAX_TOTAL_BYTES = 4 * 1024 * 1024 // 4 MB — trygt under Vercels grense for forespørselsstørrelse
const ALLOWED_TYPES = new Set(['application/pdf', 'image/jpeg', 'image/png', 'image/webp'])

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

function sanitizeFilename(name: string) {
  return name.replace(/[^a-zA-Z0-9æøåÆØÅ.\-_ ]/g, '_').slice(0, 150) || 'vedlegg'
}

export async function POST(request: NextRequest) {
  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Ugyldig forespørsel.' }, { status: 400 })
  }

  const navn = formData.get('navn')
  const epost = formData.get('epost')
  const telefon = formData.get('telefon')
  const prosjekttype = formData.get('prosjekttype')
  const melding = formData.get('melding')

  if (typeof navn !== 'string' || navn.trim().length < 2) {
    return NextResponse.json({ error: 'Vennligst oppgi navnet ditt.' }, { status: 400 })
  }
  if (typeof epost !== 'string' || !isValidEmail(epost.trim())) {
    return NextResponse.json({ error: 'Vennligst oppgi en gyldig e-postadresse.' }, { status: 400 })
  }
  if (typeof melding !== 'string' || melding.trim().length < 5) {
    return NextResponse.json({ error: 'Vennligst skriv en melding.' }, { status: 400 })
  }
  if (telefon !== null && typeof telefon !== 'string') {
    return NextResponse.json({ error: 'Ugyldig telefonnummer.' }, { status: 400 })
  }
  if (prosjekttype !== null && typeof prosjekttype !== 'string') {
    return NextResponse.json({ error: 'Ugyldig prosjekttype.' }, { status: 400 })
  }

  const safeNavn = navn.trim()
  const safeEpost = epost.trim()
  const safeTelefon = typeof telefon === 'string' ? telefon.trim() : ''
  const safeProsjekttype = typeof prosjekttype === 'string' ? prosjekttype.trim() : ''
  const safeMelding = melding.trim()

  const uploadedFiles = formData
    .getAll('vedlegg')
    .filter((entry): entry is File => entry instanceof File && entry.size > 0)

  if (uploadedFiles.length > MAX_FILES) {
    return NextResponse.json({ error: `Du kan laste opp maks ${MAX_FILES} filer.` }, { status: 400 })
  }

  let totalBytes = 0
  for (const file of uploadedFiles) {
    if (!ALLOWED_TYPES.has(file.type)) {
      return NextResponse.json(
        { error: `${file.name} har et filformat vi ikke støtter. Bruk PDF, JPG, PNG eller WEBP.` },
        { status: 400 }
      )
    }
    totalBytes += file.size
  }
  if (totalBytes > MAX_TOTAL_BYTES) {
    return NextResponse.json(
      { error: `Vedleggene er til sammen for store. Maks ${(MAX_TOTAL_BYTES / (1024 * 1024)).toFixed(0)} MB totalt.` },
      { status: 400 }
    )
  }

  const apiKey = process.env.MAILERSEND_API_KEY
  if (!apiKey) {
    console.error('MAILERSEND_API_KEY er ikke satt')
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 })
  }

  let attachments: { content: string; filename: string; disposition: string }[]
  try {
    attachments = await Promise.all(
      uploadedFiles.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer())
        return {
          content: buffer.toString('base64'),
          filename: sanitizeFilename(file.name),
          disposition: 'attachment',
        }
      })
    )
  } catch (error) {
    console.error('Kunne ikke lese vedlegg', error)
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 })
  }

  const textBody = [
    `Navn: ${safeNavn}`,
    `E-post: ${safeEpost}`,
    `Telefon: ${safeTelefon || 'Ikke oppgitt'}`,
    `Prosjekttype: ${safeProsjekttype || 'Ikke oppgitt'}`,
    attachments.length > 0 ? `Vedlegg: ${attachments.map((a) => a.filename).join(', ')}` : '',
    '',
    'Melding:',
    safeMelding,
  ]
    .filter((line) => line !== '')
    .join('\n')

  const htmlBody = `
    <p><strong>Navn:</strong> ${escapeHtml(safeNavn)}</p>
    <p><strong>E-post:</strong> ${escapeHtml(safeEpost)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(safeTelefon || 'Ikke oppgitt')}</p>
    <p><strong>Prosjekttype:</strong> ${escapeHtml(safeProsjekttype || 'Ikke oppgitt')}</p>
    ${attachments.length > 0 ? `<p><strong>Vedlegg:</strong> ${escapeHtml(attachments.map((a) => a.filename).join(', '))}</p>` : ''}
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
        ...(attachments.length > 0 ? { attachments } : {}),
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
