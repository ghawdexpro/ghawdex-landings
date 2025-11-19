'use client';

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  faqs: FAQItem[];
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const categories: FAQCategory[] = [
    {
      title: "Pricing & ROI",
      faqs: [
        {
          question: "How much does a solar panel system cost in Malta?",
          answer: "System costs typically range from €4,000 to €15,000+ depending on capacity, equipment quality, and installation complexity. A standard residential 5kW system averages €6,000-€8,000. Factors affecting price include roof type, electrical upgrades needed, and whether you include battery storage. Government subsidies can significantly reduce upfront costs."
        },
        {
          question: "What payment options and financing are available?",
          answer: "We offer flexible payment options: full upfront payment, installment plans (6-24 months), and green energy financing through Maltese banks (up to 10 years). Many customers combine government subsidies with bank financing to minimize out-of-pocket expenses. We can connect you with preferred financing partners."
        },
        {
          question: "What is the return on investment (ROI) for solar panels in Malta?",
          answer: "Typical ROI is 5-7 years in Malta due to high electricity rates (€0.25-€0.35/kWh) and excellent solar irradiance (>5.5 kWh/m²/day). Annual savings range from €400-€800 depending on system size and consumption. Over 25 years, most systems save €10,000-€20,000. With rising electricity prices, payback periods are decreasing."
        },
        {
          question: "Are there government subsidies available in Malta?",
          answer: "Yes. The Malta government offers grants through various schemes including the ENABLE program for energy efficiency improvements. Subsidies can cover 25-40% of installation costs for eligible applicants. We handle the entire subsidy application process and advise on eligibility requirements. Funding availability varies annually, so early application is recommended."
        },
        {
          question: "Are there hidden costs or ongoing fees?",
          answer: "No hidden costs. Our quotes include: panels, inverters, mounting systems, electrical work, grid connection, permits, and installation. Optional extras (clearly quoted separately): battery storage, extended warranties, monitoring systems, maintenance plans. Annual operating costs are minimal—primarily occasional cleaning and inverter replacement after 10-15 years (€1,000-€2,500)."
        },
        {
          question: "How much can I save annually with solar panels?",
          answer: "Average savings in Malta: €400-€800/year for residential systems. Actual savings depend on: system size, energy consumption, electricity tariff, export rates, and usage patterns. High daytime consumption maximizes savings. With net metering, excess production is credited at export rates. Over 25 years, total savings typically exceed €10,000-€20,000."
        }
      ]
    },
    {
      title: "Installation Process",
      faqs: [
        {
          question: "How long does the installation take?",
          answer: "Ghawdex averages 9 days from contract signing to grid connection—significantly faster than the industry standard. Physical installation typically takes 2-3 days. The timeline includes: site survey (1 day), design approval (1-2 days), permit processing (3-5 days in parallel), installation (2-3 days), grid connection approval (1-2 days). Timeline varies based on permit complexity and roof conditions."
        },
        {
          question: "What happens during the site survey?",
          answer: "Our AI-powered analysis tool provides an instant preliminary assessment using Google Earth. The on-site survey includes: structural roof inspection, electrical panel assessment, shading analysis throughout the day, measurements for exact panel placement, identification of electrical upgrade needs, and discussion of your energy goals. Survey takes 1-2 hours and results in a detailed installation proposal."
        },
        {
          question: "Is my roof suitable for solar panels?",
          answer: "Most roofs in Malta are suitable. We assess: roof orientation (south-facing ideal, east/west acceptable), tilt angle (10-40° optimal), structural load capacity (solar adds ~15kg/m²), roof condition and material (tile, concrete, flat all work), shading from buildings/trees, and available space (min. 15-20m² for small systems). Our 30+ years roofing expertise ensures proper evaluation."
        },
        {
          question: "How do you size the system for my needs?",
          answer: "System sizing is data-driven: we analyze 12 months of electricity bills, identify consumption patterns (day vs. night usage), calculate peak demand, assess roof capacity, and factor in future needs (EV charging, pool pumps). Our AI tool models production vs. consumption to optimize system size. Typical residential systems: 3-8kW. We design for maximum ROI, not maximum roof coverage."
        },
        {
          question: "What is included in the installation?",
          answer: "Complete turnkey installation includes: solar panels with 25-30 year warranties, inverter with 5-10 year warranty, mounting system (aluminum rails, waterproof flashings), AC/DC electrical wiring and safety disconnects, grid connection and metering equipment, all permits and approvals, Enemalta interconnection, system commissioning and testing, and monitoring app setup. We leave your property clean—no mess left behind."
        },
        {
          question: "Can I expand my system later?",
          answer: "Yes, if designed for expansion. We typically oversize inverters and ensure adequate roof space. Adding panels later requires: inverter capacity headroom, compatible panel models (voltage/current matching), permit amendments, and re-inspection. Best practice: install full capacity initially to avoid duplicated costs (scaffolding, permits, electrical work). Battery storage can be added to most existing systems."
        }
      ]
    },
    {
      title: "Permits & Regulations (Malta)",
      faqs: [
        {
          question: "What permits are required in Malta for solar installation?",
          answer: "Most residential installations require: Building Permit from Planning Authority (PA), Enemalta grid connection approval, and electrical safety certificate. Planning Permission (full PA application) may be needed for: heritage areas, protected zones, visible installations in sensitive locations, or ground-mounted systems. We handle all permit applications, documentation, and liaison with authorities."
        },
        {
          question: "How long does permit approval take?",
          answer: "Timeline varies: Building Permit (standard residential): 3-5 weeks, Planning Permission (if required): 8-12 weeks, Enemalta grid approval: 1-2 weeks. We submit permits in parallel with system design to minimize delays. Most residential installations qualify for streamlined permitting. Heritage areas and UCA zones take longer due to architectural review requirements."
        },
        {
          question: "Do I need local council approval?",
          answer: "Local council input is part of the PA process for certain installations, particularly in Urban Conservation Areas (UCA) or near scheduled properties. Councils review visual impact and neighborhood compatibility. Most standard residential roof installations are approved without council objection. We have established relationships with local councils across Malta and Gozo to facilitate smooth approvals."
        },
        {
          question: "How does grid connection with Enemalta work?",
          answer: "Enemalta interconnection process: submit technical application with system specs, receive approval and grid connection agreement, install bi-directional meter (net metering), commission system with Enemalta inspector present, activate export credit mechanism. Timeline: 1-3 weeks from application to meter installation. We coordinate all Enemalta interactions and ensure compliance with their technical requirements."
        },
        {
          question: "Are there restrictions in heritage or protected areas?",
          answer: "Yes. Heritage areas, Urban Conservation Areas (UCA), and Areas of Ecological Importance (AEI) have stricter requirements: panels may need to be non-reflective, positioned to minimize visual impact from streets, or require full Planning Permission with architectural heritage assessment. Some listed buildings prohibit visible installations. We specialize in navigating these restrictions and have successfully completed installations in sensitive areas."
        }
      ]
    },
    {
      title: "Performance & Maintenance",
      faqs: [
        {
          question: "What is the lifespan of solar panels and warranties?",
          answer: "Panel lifespan: 30-35 years with minimal degradation. Warranties: Product warranty: 25-30 years (manufacturer defects), Performance warranty: 25 years (guaranteed 80-90% output), Inverter warranty: 5-10 years (replaceable component), Workmanship warranty: 5-10 years (our installation). Panels degrade ~0.5-0.8%/year. After 25 years, panels still produce 80-85% of original capacity."
        },
        {
          question: "How much maintenance do solar panels need?",
          answer: "Minimal maintenance required. Annual tasks: visual inspection for damage/shading, inverter performance check, cleaning if needed (2-4 times/year in dusty/coastal areas), electrical connection inspection. Malta's rainfall provides natural cleaning, but bird droppings, dust from sirocco winds, and coastal salt spray may require professional cleaning. We offer maintenance plans: €100-€200/year including inspections and cleaning."
        },
        {
          question: "How often should I clean my solar panels in Malta?",
          answer: "Recommended cleaning frequency in Malta: Coastal areas: 3-4 times/year (salt spray), Inland areas: 2-3 times/year, After sirocco dust storms: within 1-2 weeks. Dirty panels lose 5-20% efficiency. Rain helps, but doesn't remove bird droppings or sticky residue. Professional cleaning costs €50-€150 depending on system size and access. Our monitoring system alerts you to underperformance that may indicate cleaning needs."
        },
        {
          question: "Do solar panels work on cloudy or rainy days?",
          answer: "Yes, but at reduced capacity. Cloudy days: 10-25% of full output (diffuse light still produces energy), Rainy days: 5-10% of full output, Malta's advantage: 300+ sunny days/year with minimal cloud cover. Annual production accounts for all weather conditions—systems are sized based on yearly averages, not peak days. Even in winter, Malta's solar irradiance outperforms Northern Europe's summer."
        },
        {
          question: "How do I monitor my system's performance?",
          answer: "All systems include monitoring via app or web portal: real-time production data (current power output), daily/monthly/yearly energy generation, performance comparison to expected output, export vs. self-consumption breakdown, inverter status and fault codes, environmental impact metrics (CO2 saved). Alerts notify you of: underperformance, inverter errors, or grid disconnections. We remotely monitor systems and proactively identify issues."
        }
      ]
    },
    {
      title: "Technical & Equipment",
      faqs: [
        {
          question: "What is an inverter and how long does it last?",
          answer: "Inverters convert DC electricity (from panels) to AC electricity (for home use). They are the only component that typically needs replacement during system lifetime. Lifespan: 10-15 years (vs. 30+ for panels). Types: String inverters (one for entire array, €800-€2,500 replacement cost), Micro-inverters (one per panel, more expensive but better shade tolerance). Warranties: 5-10 years standard, extended warranties available. Budget €1,000-€2,500 for replacement around year 12."
        },
        {
          question: "Should I add battery storage to my system?",
          answer: "Battery storage makes sense if you: have high nighttime consumption, experience frequent grid outages, want energy independence, or have time-of-use tariffs. Costs: €3,000-€8,000 for residential batteries (5-10kWh). Benefits: store daytime production for nighttime use, backup power during outages, maximize self-consumption. ROI: 8-12 years currently. Most customers start without batteries and add later when prices drop or needs change."
        },
        {
          question: "How does net metering work in Malta?",
          answer: "Net metering allows you to export excess solar production to the grid for credit. How it works: bi-directional meter tracks import and export, daytime excess is credited at export rate (~€0.06-€0.08/kWh), credits offset nighttime grid consumption, net billing monthly (you pay only the difference). Export rates are lower than import rates (€0.25-€0.35/kWh), so maximizing self-consumption is most economical. Excess annual credits don't carry over."
        },
        {
          question: "What about shading on my roof?",
          answer: "Shading significantly impacts production—even partial shade reduces output. Solutions: Trim nearby trees if feasible, use micro-inverters or power optimizers (allow shaded panels to underperform without affecting others, add 10-15% to system cost), avoid shaded roof sections entirely, redesign system layout. Our AI analysis tool identifies shading patterns throughout the year. We conduct on-site shade surveys at peak sun hours to ensure accurate production estimates."
        }
      ]
    },
    {
      title: "Company & Guarantees",
      faqs: [
        {
          question: "Why choose Ghawdex over other solar companies?",
          answer: "Ghawdex advantages: 30+ years technical energy infrastructure experience (including offshore systems where precision is critical), 2000+ solar installations completed across Malta, 9-day average installation (industry-leading speed), AI-powered analysis tool for instant, accurate assessments, 7+ years developing AI-driven technology, proven track record in high-tech projects (agriculture, hydroponics), 98% customer satisfaction rate, comprehensive warranties and post-installation support."
        },
        {
          question: "What warranties and guarantees do you offer?",
          answer: "Comprehensive warranty coverage: Panel product warranty: 25-30 years (manufacturer), Panel performance guarantee: 25 years (80-90% output), Inverter warranty: 5-10 years (manufacturer), Workmanship guarantee: 10 years (our installation), Roof penetration waterproofing: 10 years. Performance guarantee: if system underperforms projections by >10% due to installation issues, we rectify at no cost. All warranties transferable if you sell your property."
        },
        {
          question: "What post-installation support do you provide?",
          answer: "Ongoing support includes: remote system monitoring and diagnostics, annual performance reports, troubleshooting assistance (phone/email/WhatsApp), maintenance scheduling and reminders, warranty claim processing, system expansion consulting, inverter replacement planning. Response times: Emergency issues: <24 hours, Routine service: <5 business days, Remote monitoring: proactive alerts. Support continues for system lifetime—we're invested in your long-term satisfaction."
        },
        {
          question: "What if my system underperforms or stops working?",
          answer: "Performance guarantee and troubleshooting: our monitoring system alerts us to issues (often before you notice), we remotely diagnose 80% of problems, on-site service within 2-5 days for issues requiring physical inspection. Common issues: inverter faults (often resetable remotely), grid disconnections (usually utility-side), dirty panels (cleaning recommended). If system underperforms due to our design/installation error, we rectify at no cost under workmanship warranty. Panel/inverter defects covered by manufacturer warranties."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sky-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-sky-100 leading-relaxed">
            Everything you need to know about solar installation in Malta. Honest answers from 30+ years of energy expertise.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Categories */}
        {categories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{category.title}</h2>

            <div className="space-y-4">
              {category.faqs.map((faq, faqIndex) => {
                const key = `${categoryIndex}-${faqIndex}`;
                const isOpen = openIndex === key;

                return (
                  <div
                    key={faqIndex}
                    className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
                  >
                    <button
                      onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-lg font-semibold text-gray-900 pr-8">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Still Have Questions CTA */}
        <div className="mt-16 bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <MessageCircle className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help. Get in touch via WhatsApp or try our free solar analysis tool.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/35679055156"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white hover:bg-gray-50 text-sky-600 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us on WhatsApp
            </a>
            <a
              href="https://app.ghawdex.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-sky-700 hover:bg-sky-800 text-white font-semibold rounded-full border-2 border-sky-400 transition-all duration-300"
            >
              Try Free Solar Analysis
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
