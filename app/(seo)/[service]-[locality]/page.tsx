import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { localities } from '@/lib/data/localities'
import { services } from '@/lib/data/services'
import { generatePageContent, saveGeneratedContent } from '@/lib/content/generator'

interface PageProps {
  params: Promise<{ service: string; locality: string }>
}

export async function generateStaticParams() {
  const params = []
  for (const service of services) {
    for (const locality of localities) {
      params.push({
        service: service.slug,
        locality: locality.slug,
      })
    }
  }

  return params // Returns 1,020 combinations
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const supabase = await createClient()
  const { service: serviceSlug, locality: localitySlug } = await params

  const [{ data: service }, { data: locality }] = await Promise.all([
    supabase.from('services').select('*').eq('slug', serviceSlug).single(),
    supabase.from('localities').select('*').eq('slug', localitySlug).single(),
  ])

  if (!service || !locality) return {}

  return {
    title: `${service.name} in ${locality.name} | Ghawdex Solar Malta`,
    description: `Professional ${service.name.toLowerCase()} in ${locality.name}. ${service.install_time_days}-day installation. ${service.grant_available ? 'Grant available.' : ''} Free quote today.`,
    openGraph: {
      title: `${service.name} - ${locality.name}, Malta`,
      description: `Expert ${service.name.toLowerCase()} services in ${locality.name}`,
      url: `https://www.ghawdex.pro/${serviceSlug}-${localitySlug}`,
    },
    alternates: {
      canonical: `https://www.ghawdex.pro/${serviceSlug}-${localitySlug}`,
    },
  }
}

export default async function ServiceLocalityPage({ params }: PageProps) {
  const supabase = await createClient()
  const { service: serviceSlug, locality: localitySlug } = await params

  const [{ data: service }, { data: locality }] = await Promise.all([
    supabase.from('services').select('*').eq('slug', serviceSlug).single(),
    supabase.from('localities').select('*').eq('slug', localitySlug).single(),
  ])

  if (!service || !locality) notFound()

  // Fetch or generate content
  const pageContent = await supabase
    .from('generated_pages')
    .select('content_json')
    .eq('url_path', `/${serviceSlug}-${localitySlug}`)
    .single()

  let content: any

  if (!pageContent.data) {
    const generated = await generatePageContent('service-locality', {
      locality: {
        name: locality.name,
        slug: locality.slug,
        sunHours: locality.avg_sun_hours_year,
        population: locality.population,
        grantAmount: locality.gozo_premium ? 11550 : 10200,
        region: locality.region,
      },
      service: {
        name: service.name,
        description: service.description,
        avgCost: (service.avg_cost_min + service.avg_cost_max) / 2,
      },
    })

    await saveGeneratedContent(
      supabase,
      `/${serviceSlug}-${localitySlug}`,
      'service-locality',
      generated,
      { localityId: locality.id, serviceId: service.id }
    )

    content = generated
  } else {
    content = pageContent.data.content_json as any
  }

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 bg-gradient-to-br from-sky-900 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            {content.h1 || `${service.name} in ${locality.name}`}
          </h1>
          <p className="text-xl mb-8">
            {content.heroContent}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-amber-300">
                {service.install_time_days} Days
              </div>
              <div className="text-sm mt-2">Installation Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-amber-300">
                €{service.avg_cost_min.toLocaleString()}+
              </div>
              <div className="text-sm mt-2">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-amber-300">
                {service.grant_available ? '✓' : '—'}
              </div>
              <div className="text-sm mt-2">Grant Available</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content.mainContent }}
        />
      </section>

      {content.faqItems && content.faqItems.length > 0 && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              FAQ - {service.name} in {locality.name}
            </h2>
            <div className="space-y-4">
              {content.faqItems.map((faq: any, index: number) => (
                <details key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <summary className="font-semibold text-lg cursor-pointer">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-gray-700">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-sky-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get {service.name} in {locality.name}
          </h2>
          <p className="text-xl mb-8">Free quote. Expert installation. Local service.</p>
          <a
            href={`https://wa.me/35679055156?text=Hi! I want ${service.name} in ${locality.name}`}
            className="inline-block bg-white text-sky-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Free Quote
          </a>
        </div>
      </section>
    </div>
  )
}

export const revalidate = 604800
