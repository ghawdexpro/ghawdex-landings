import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/server'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createClient()
  const baseUrl = 'https://www.ghawdex.pro'

  // Fetch all generated pages from database
  const { data: pages } = await supabase
    .from('generated_pages')
    .select('url_path, last_generated')
    .order('url_path')

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Static pages
  sitemapEntries.push(
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/analysis`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    }
  )

  // Dynamic SEO pages
  for (const page of pages || []) {
    sitemapEntries.push({
      url: `${baseUrl}${page.url_path}`,
      lastModified: new Date(page.last_generated),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  }

  return sitemapEntries
}

// Revalidate sitemap every day
export const revalidate = 86400
