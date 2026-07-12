import type { Metadata } from 'next'

export const SITE_URL = 'https://harstadbrannkonsult.no'
export const SITE_NAME = 'Brannkonsult AS'

export function buildMetadata({
  title,
  description,
  path,
  ogImage = '/images/hero.jpg',
}: {
  title: string
  description: string
  path: string
  ogImage?: string
}): Metadata {
  const url = `${SITE_URL}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'nb_NO',
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
  }
}
