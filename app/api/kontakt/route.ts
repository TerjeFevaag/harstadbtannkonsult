import { NextRequest, NextResponse } from 'next/server'

const MAILERSEND_API_URL = 'https://api.mailersend.com/v1/email'
const TO_EMAIL = 'post@harstadbrannkonsult.no'
const FROM_EMAIL = 'post@harstadbrannkonsult.no'
const FROM_NAME = 'Brannkonsult AS – kontaktskjema'

const GENERIC_ERROR = 'Noe gikk galt. Prøv igjen senere, eller ring oss direkte.'

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

  const { navn, epost, telefon, prosjekttype, melding } = body as Record<string, unknown>

  if (typeof navn !== 'string' || navn.trim().length < 2) {
    return NextResponse.json({ error: 'Vennligst oppgi navnet ditt.' }, { status: 400 })
  }
  if (typeof epost !== 'string' || !isValidEmail(epost.trim())) {
    return NextResponse.json({ error: 'Vennligst oppgi en gyldig e-postadresse.' }, { status: 400 })
  }
  if (typeof melding !== 'string' || melding.trim().length < 5) {
    return NextResponse.json({ error: 'Vennligst skriv en melding.' }, { status: 400 })
  }
  if (telefon !== undefined && typeof telefon !== 'string') {
    return NextResponse.json({ error: 'Ugyldig telefonnummer.' }, { status: 400 })
  }
  if (prosjekttype !== undefined && typeof prosjekttype !== 'string') {
    return NextResponse.json({ error: 'Ugyldig prosjekttype.' }, { status: 400 })
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

  const textBody = [
    `Navn: ${safeNavn}`,
    `E-post: ${safeEpost}`,
    `Telefon: ${safeTelefon || 'Ikke oppgitt'}`,
    `Prosjekttype: ${safeProsjekttype || 'Ikke oppgitt'}`,
    '',
    'Melding:',
    safeMelding,
  ].join('\n')

  const htmlBody = `
    <p><strong>Navn:</strong> ${escapeHtml(safeNavn)}</p>
    <p><strong>E-post:</strong> ${escapeHtml(safeEpost)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(safeTelefon || 'Ikke oppgitt')}</p>
    <p><strong>Prosjekttype:</strong> ${escapeHtml(safeProsjekttype || 'Ikke oppgitt')}</p>
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
