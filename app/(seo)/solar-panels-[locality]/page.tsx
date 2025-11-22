import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { localities } from '@/lib/data/localities'
import { generatePageContent, saveGeneratedContent } from '@/lib/content/generator'

interface PageProps {
  params: Promise<{ locality: string }>
}

// Generate all 68 locality pages at build time
export async function generateStaticParams() {
  return localities.map((locality) => ({
    locality: locality.slug,
  }))
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const supabase = await createClient()
  const { locality: localitySlug } = await params

  const { data: locality } = await supabase
    .from('localities')
    .select('*')
    .eq('slug', localitySlug)
    .single()

  if (!locality) return {}

  const grantAmount = locality.gozo_premium ? 11550 : 10200

  return {
    title: `Solar Panels ${locality.name} | €${grantAmount} Grant | Ghawdex Solar`,
    description: `Get solar panels in ${locality.name}, Malta with up to €${grantAmount} government grant. 14-day installation. ${locality.avg_sun_hours_year} sun hours/year. Free quote today!`,
    keywords: [
      `solar panels ${locality.name}`,
      `solar installation ${locality.name}`,
      `solar grant ${locality.name}`,
      `photovoltaic ${locality.name}`,
      `renewable energy ${locality.name} Malta`,
    ],
    openGraph: {
      title: `Solar Panel Installation in ${locality.name}, Malta`,
      description: `Save €3,450/year with solar in ${locality.name}. Up to €${grantAmount} government grant available.`,
      url: `https://www.ghawdex.pro/solar-panels-${locality.slug}`,
      siteName: 'Ghawdex Solar',
      locale: 'en_MT',
      type: 'website',
    },
    alternates: {
      canonical: `https://www.ghawdex.pro/solar-panels-${locality.slug}`,
    },
  }
}

export default async function LocalityPage({ params }: PageProps) {
  const supabase = await createClient()
  const { locality: localitySlug } = await params

  // Fetch locality data
  const { data: locality, error } = await supabase
    .from('localities')
    .select('*')
    .eq('slug', localitySlug)
    .single()

  if (error || !locality) {
    notFound()
  }

  // Fetch or generate page content
  const pageContent = await supabase
    .from('generated_pages')
    .select('content_json')
    .eq('url_path', `/solar-panels-${localitySlug}`)
    .single()

  let content: any

  // If content doesn't exist, generate it
  if (!pageContent.data) {
    const generated = await generatePageContent('locality', {
      locality: {
        name: locality.name,
        slug: locality.slug,
        sunHours: locality.avg_sun_hours_year,
        population: locality.population,
        grantAmount: locality.gozo_premium ? 11550 : 10200,
        region: locality.region,
      },
    })

    await saveGeneratedContent(
      supabase,
      `/solar-panels-${localitySlug}`,
      'locality',
      generated,
      { localityId: locality.id }
    )

    content = generated
  } else {
    content = pageContent.data.content_json as any
  }
  const grantAmount = locality.gozo_premium ? 11550 : 10200

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center text-white">
          <div className="text-sm mb-4 opacity-90">
            Home / Solar Panels Malta / {locality.region} / {locality.name}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {content.h1 || `Solar Panels in ${locality.name}`}
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            {content.heroContent}
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-amber-300">
                €{grantAmount.toLocaleString()}
              </div>
              <div className="text-sm">Max Grant</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-amber-300">
                {locality.avg_sun_hours_year?.toLocaleString()}
              </div>
              <div className="text-sm">Sun Hours/Year</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-amber-300">
                14 Days
              </div>
              <div className="text-sm">Installation</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-amber-300">
                €3,450
              </div>
              <div className="text-sm">Annual Savings</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/35679055156?text=Hi! I'm interested in solar panels in ${locality.name}`}
              className="bg-[#25D366] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#20BA5A] transition-all shadow-lg hover:shadow-xl"
            >
              Get Free Quote via WhatsApp
            </a>

            <a
              href="tel:+35679055156"
              className="border-2 border-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-sky-700 transition-all shadow-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-sky-600"
          dangerouslySetInnerHTML={{ __html: content.mainContent }}
        />
      </section>

      {/* FAQ Section */}
      {content.faqItems && content.faqItems.length > 0 && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked Questions - {locality.name}
            </h2>
            <div className="space-y-4">
              {content.faqItems.map((faq: any, index: number) => (
                <details key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <summary className="font-semibold text-lg cursor-pointer hover:text-sky-600">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-sky-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Solar in {locality.name}?
          </h2>
          <p className="text-xl mb-8">
            Get your free quote today. 14-day installation guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/35679055156?text=Hi! I want a quote for solar panels in ${locality.name}`}
              className="bg-white text-sky-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              WhatsApp Quote
            </a>
            <a
              href="tel:+35679055156"
              className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sky-700 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

// Enable ISR (Incremental Static Regeneration) - rebuild every 7 days
export const revalidate = 604800
