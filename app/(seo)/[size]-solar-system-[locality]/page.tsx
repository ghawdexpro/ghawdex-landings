import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { localities } from '@/lib/data/localities'
import { systemSizes } from '@/lib/data/system-sizes'

interface PageProps {
  params: Promise<{ size: string; locality: string }>
}

export async function generateStaticParams() {
  const params = []
  for (const size of systemSizes) {
    for (const locality of localities) {
      params.push({
        size: size.slug,
        locality: locality.slug,
      })
    }
  }

  return params // Returns 816 combinations
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { size: sizeSlug, locality: localitySlug } = await params

  const systemSize = systemSizes.find(s => s.slug === sizeSlug)
  const locality = localities.find(l => l.slug === localitySlug)

  if (!systemSize || !locality) return {}

  const grantAmount = 10200

  return {
    title: `${systemSize.kw}kW Solar System in ${locality.name} | €${grantAmount} Grant`,
    description: `Install a ${systemSize.kw}kW solar system in ${locality.name}. €${grantAmount} grant available. Save €3,450/year. Professional installation. Free quote.`,
    openGraph: {
      title: `${systemSize.kw}kW Solar System - ${locality.name}`,
      url: `https://www.ghawdex.pro/${sizeSlug}-solar-system-${localitySlug}`,
    },
    alternates: {
      canonical: `https://www.ghawdex.pro/${sizeSlug}-solar-system-${localitySlug}`,
    },
  }
}

export default async function SystemSizeLocalityPage({ params }: PageProps) {
  const { size: sizeSlug, locality: localitySlug } = await params

  const systemSize = systemSizes.find(s => s.slug === sizeSlug)
  const locality = localities.find(l => l.slug === localitySlug)

  if (!systemSize || !locality) notFound()

  const grantAmount = 10200
  const totalCost = systemSize.kw * 1500 // Approx €1,500 per kW
  const costAfterGrant = Math.max(0, totalCost - grantAmount)
  const annualSavings = systemSize.kw * 230 // Approx €230 per kW per year
  const panelCount = Math.ceil(systemSize.kw / 0.4) // Approx 400W panels
  const paybackYears = Math.ceil(costAfterGrant / annualSavings)

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 bg-gradient-to-br from-sky-900 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            {systemSize.kw}kW Solar System in {locality.name}
          </h1>
          <p className="text-xl mb-8">
            Complete solar installation with {panelCount} panels
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-amber-300">
                €{grantAmount.toLocaleString()}
              </div>
              <div className="text-sm mt-2">Grant Amount</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-amber-300">
                €{costAfterGrant.toLocaleString()}
              </div>
              <div className="text-sm mt-2">Your Cost</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-amber-300">
                €{annualSavings.toLocaleString()}
              </div>
              <div className="text-sm mt-2">Annual Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-amber-300">
                {paybackYears}yr
              </div>
              <div className="text-sm mt-2">Payback Period</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">System Specifications</h2>
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Panel Count:</span>
                <span>{panelCount} panels</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">System Size:</span>
                <span>{systemSize.kw} kW</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Annual Production:</span>
                <span>{(systemSize.kw * 1500).toLocaleString()} kWh</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">CO₂ Offset:</span>
                <span>{(systemSize.kw * 900).toLocaleString()} kg/year</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Investment Breakdown</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-lg">
                <span>System Cost:</span>
                <span>€{totalCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg text-green-600">
                <span>Government Grant:</span>
                <span>-€{grantAmount.toLocaleString()}</span>
              </div>
              <div className="border-t-2 pt-4 flex justify-between text-2xl font-bold">
                <span>Your Cost:</span>
                <span>€{costAfterGrant.toLocaleString()}</span>
              </div>
              <div className="mt-6 p-4 bg-amber-100 rounded-lg">
                <p className="text-sm text-center">
                  <strong>20-Year Profit:</strong> €{((annualSavings * 20) - costAfterGrant).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={`https://wa.me/35679055156?text=Hi! I want a ${systemSize.kw}kW solar system in ${locality.name}`}
                className="block w-full bg-[#25D366] text-white text-center px-6 py-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const revalidate = 604800
