import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { localities } from '@/lib/data/localities'

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
  const { locality: localitySlug } = await params

  const locality = localities.find(l => l.slug === localitySlug)
  if (!locality) return {}

  const grantAmount = 10200 // Malta grant amount

  return {
    title: `Solar Panels ${locality.name} | €${grantAmount} Grant | Ghawdex Solar`,
    description: `Get solar panels in ${locality.name}, Malta with up to €${grantAmount} government grant. 14-day installation. 3,000+ sun hours/year. Free quote today!`,
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
  const { locality: localitySlug } = await params

  const locality = localities.find(l => l.slug === localitySlug)
  if (!locality) {
    notFound()
  }

  const grantAmount = 10200

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center text-white">
          <div className="text-sm mb-4 opacity-90">
            Home / Solar Panels Malta / {locality.name}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Solar Panels in {locality.name}
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Professional solar installation in {locality.name} with 14-day guarantee. Government grants available up to €{grantAmount.toLocaleString()}.
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
                3,000+
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
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-sky-600">
          <h2>Professional Solar Installation in {locality.name}</h2>
          <p>
            Transform your {locality.name} property with professional solar panels from Ghawdex Solar.
            With Malta's abundant sunshine and generous government grants, there's never been a better
            time to make the switch to clean, renewable energy.
          </p>

          <h3>Why Choose Solar in {locality.name}?</h3>
          <ul>
            <li><strong>Government Grants:</strong> Up to €10,200 available for qualified installations</li>
            <li><strong>Fast Installation:</strong> Complete setup in just 14 days guaranteed</li>
            <li><strong>High Returns:</strong> Save approximately €3,450 per year on electricity bills</li>
            <li><strong>Perfect Climate:</strong> Malta receives over 3,000 hours of sunshine annually</li>
            <li><strong>Property Value:</strong> Increase your home's value with renewable energy</li>
          </ul>

          <h3>Our Installation Process</h3>
          <p>
            We make solar installation simple and stress-free for {locality.name} homeowners:
          </p>
          <ol>
            <li><strong>Free Consultation:</strong> We assess your property and energy needs</li>
            <li><strong>Custom Design:</strong> Tailored solar system designed for your roof</li>
            <li><strong>Grant Application:</strong> We handle all paperwork for government grants</li>
            <li><strong>Professional Installation:</strong> Expert team completes installation in 14 days</li>
            <li><strong>Testing & Handover:</strong> Full system testing and training on your new solar panels</li>
          </ol>

          <h3>Malta Solar Grants 2025</h3>
          <p>
            The Maltese government offers substantial grants for solar installations in {locality.name}:
          </p>
          <ul>
            <li>Up to €10,200 for residential installations</li>
            <li>Additional €1,350 for Gozo properties</li>
            <li>No income means testing required</li>
            <li>Quick approval process</li>
          </ul>
        </div>
      </section>

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
