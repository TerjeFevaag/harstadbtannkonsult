import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/brannkonsept`, lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/brannprosjektering`, lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/branninspeksjon`, lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/uavhengig-kontroll`, lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/om-oss`, lastModified: '2026-07-10', changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/kontakt-oss`, lastModified: '2026-07-10', changeFrequency: 'yearly', priority: 0.8 },
    { url: `${SITE_URL}/artikler`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/artikler/pipebrann`, lastModified: '2026-07-10', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/artikler/brannslokker`, lastModified: '2026-07-09', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/artikler/roykvarsler`, lastModified: '2026-07-09', changeFrequency: 'yearly', priority: 0.6 },
  ]
}
