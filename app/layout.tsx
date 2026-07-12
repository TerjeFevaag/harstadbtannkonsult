import type { Metadata } from 'next'
import { Lato, Dancing_Script } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { buildMetadata, SITE_URL, SITE_NAME } from '@/lib/metadata'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: '/images/Favicon.png',
  },
  ...buildMetadata({
    title: 'Brannprosjektering i Harstad | Brannkonsult AS',
    description:
      'Brannkonsult AS tilbyr brannkonsept, brannprosjektering og branninspeksjon i Harstad og Sør-Troms. Sentralt godkjent foretak. Få uforpliktende tilbud i dag.',
    path: '/',
  }),
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: SITE_NAME,
  description: 'Brannprosjektering og brannkonsept i Harstad',
  image: `${SITE_URL}/images/om-oss.jpg`,
  telephone: '+47 400 51 437',
  email: 'post@harstadbrannkonsult.no',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Harstad',
    addressCountry: 'NO',
  },
  areaServed: [
    { '@type': 'City', name: 'Harstad' },
    { '@type': 'AdministrativeArea', name: 'Sør-Troms' },
    { '@type': 'AdministrativeArea', name: 'Troms' },
    { '@type': 'AdministrativeArea', name: 'Nordland' },
  ],
  url: SITE_URL,
  priceRange: 'Fra kr 15 000',
  hasCredential: 'Sentralt godkjent tiltaksklasse 1 og 2',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-black.png`,
  telephone: '+47 400 51 437',
  email: 'post@harstadbrannkonsult.no',
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'nb-NO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className={`${lato.variable} ${dancing.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={lato.className}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
