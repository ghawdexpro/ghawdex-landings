import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { localities } from '@/lib/data/localities'
import { services } from '@/lib/data/services'

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
  const { service: serviceSlug, locality: localitySlug } = await params

  const service = services.find(s => s.slug === serviceSlug)
  const locality = localities.find(l => l.slug === localitySlug)

  if (!service || !locality) return {}

  return {
    title: `${service.name} in ${locality.name} | Ghawdex Solar Malta`,
    description: `Professional ${service.name.toLowerCase()} in ${locality.name}. 14-day installation. Government grants available. Free quote today.`,
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
  const { service: serviceSlug, locality: localitySlug } = await params

  const service = services.find(s => s.slug === serviceSlug)
  const locality = localities.find(l => l.slug === localitySlug)

  if (!service || !locality) notFound()

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 bg-gradient-to-br from-sky-900 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            {service.name} in {locality.name}
          </h1>
          <p className="text-xl mb-8">
            Professional {service.name.toLowerCase()} services in {locality.name}, Malta.
            Fast installation, competitive prices, government grants available.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-amber-300">
                14 Days
              </div>
              <div className="text-sm mt-2">Installation Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-amber-300">
                €10,200
              </div>
              <div className="text-sm mt-2">Max Grant Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-amber-300">
                ✓
              </div>
              <div className="text-sm mt-2">Professional Installation</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2>Professional {service.name} in {locality.name}</h2>
          <p>
            Ghawdex Solar provides expert {service.name.toLowerCase()} services in {locality.name} and throughout Malta.
            With our 14-day installation guarantee and comprehensive government grant support, we make solar energy
            accessible and affordable.
          </p>

          <h3>Why Choose Ghawdex for {service.name}?</h3>
          <ul>
            <li>14-day installation guarantee</li>
            <li>Government grant assistance</li>
            <li>Professional certified installers</li>
            <li>Premium quality equipment</li>
            <li>Full warranty and support</li>
          </ul>

          <h3>{service.name} Process</h3>
          <ol>
            <li><strong>Free Consultation:</strong> We assess your property and requirements</li>
            <li><strong>Custom Design:</strong> Tailored solution designed for your needs</li>
            <li><strong>Grant Application:</strong> We handle all government grant paperwork</li>
            <li><strong>Professional Installation:</strong> Expert installation completed within 14 days</li>
            <li><strong>Testing & Support:</strong> Full system testing and ongoing support</li>
          </ol>
        </div>
      </section>

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
