import { MetadataRoute } from 'next'
import { localities } from '@/lib/data/localities'
import { services } from '@/lib/data/services'
import { systemSizes } from '@/lib/data/system-sizes'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ghawdex.pro'

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/analysis`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Add locality pages (68 pages)
  const localityPages = localities.map(locality => ({
    url: `${baseUrl}/solar-panels-${locality.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Add service-locality pages (1,020 pages)
  const serviceLocalityPages = []
  for (const service of services) {
    for (const locality of localities) {
      serviceLocalityPages.push({
        url: `${baseUrl}/${service.slug}-${locality.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })
    }
  }

  // Add system size pages (816 pages)
  const systemSizePages = []
  for (const size of systemSizes) {
    for (const locality of localities) {
      systemSizePages.push({
        url: `${baseUrl}/${size.slug}-solar-system-${locality.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })
    }
  }

  return [
    ...routes,
    ...localityPages,
    ...serviceLocalityPages,
    ...systemSizePages,
  ]
}

// Revalidate sitemap every day
export const revalidate = 86400
