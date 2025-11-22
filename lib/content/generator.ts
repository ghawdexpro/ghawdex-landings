import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

interface PageData {
  locality?: {
    name: string
    slug: string
    sunHours: number
    population: number
    grantAmount: number
    region: string
  }
  service?: {
    name: string
    description: string
    avgCost: number
  }
  systemSize?: {
    kw: number
    annualSavings: number
    panelCount: number
  }
  propertyType?: {
    name: string
    typicalRoofSpace: number
  }
}

interface GeneratedContent {
  title: string
  metaDescription: string
  h1: string
  heroContent: string
  mainContent: string
  faqItems: Array<{ question: string; answer: string }>
  ctaText: string
}

export async function generatePageContent(
  pageType: string,
  data: PageData
): Promise<GeneratedContent> {

  const prompt = buildPrompt(pageType, data)

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 4096,
      temperature: 0.7,
      messages: [{
        role: 'user',
        content: prompt,
      }],
    })

    const firstBlock = message.content[0]
    if (firstBlock.type !== 'text') {
      throw new Error('Expected text response from Claude')
    }
    const content = firstBlock.text
    return parseGeneratedContent(content)
  } catch (error) {
    console.error('Failed to generate content:', error)
    // Return fallback content
    return generateFallbackContent(pageType, data)
  }
}

function buildPrompt(pageType: string, data: PageData): string {
  const localityInfo = data.locality ? `
Location: ${data.locality.name}, Malta
Region: ${data.locality.region}
Population: ${data.locality.population}
Sun Hours/Year: ${data.locality.sunHours}
Grant Amount Available: €${data.locality.grantAmount}
` : ''

  const serviceInfo = data.service ? `
Service: ${data.service.name}
Description: ${data.service.description}
Average Cost: €${data.service.avgCost}
` : ''

  const systemSizeInfo = data.systemSize ? `
System Size: ${data.systemSize.kw}kW
Panel Count: ${data.systemSize.panelCount}
Annual Savings: €${data.systemSize.annualSavings}
` : ''

  const propertyTypeInfo = data.propertyType ? `
Property Type: ${data.propertyType.name}
Typical Roof Space: ${data.propertyType.typicalRoofSpace}m²
` : ''

  return `You are an expert solar energy consultant writing for Ghawdex Solar, Malta's leading solar installation company with 14-day installation guarantee.

Generate unique, high-value SEO content for this page:

${localityInfo}${serviceInfo}${systemSizeInfo}${propertyTypeInfo}

REQUIREMENTS:
- 1,200-1,500 words of unique, valuable content
- Include specific Malta 2025 grant information
- Use actual ROI calculations based on provided data
- Natural keyword integration (no keyword stuffing)
- Conversational, helpful, professional tone
- Focus on benefits and local relevance
- Include 5 FAQs with detailed, helpful answers
- Real data and specifics (never use placeholders like [INSERT])
- Malta-specific details and context

MALTA-SPECIFIC CONTEXT (2025):
- Grants: €10,200 max (Malta), €11,550 (Gozo)
- Feed-in tariff: €0.105-€0.15 per kWh for 20 years
- Installation time: 14 days guaranteed by Ghawdex
- Climate: 300+ sunny days per year, Mediterranean
- Energy costs: High electricity prices make solar very attractive
- Grid connection: Simple process in Malta

OUTPUT FORMAT (strict JSON):
{
  "title": "SEO title 50-60 chars",
  "metaDescription": "Meta description 150-160 chars",
  "h1": "Main heading for the page",
  "heroContent": "2-3 compelling sentences for hero section",
  "mainContent": "Full article content 1200+ words in HTML format with <h2>, <h3>, <p>, <ul>, <li> tags. Make it engaging and informative.",
  "faqItems": [
    {"question": "Relevant question?", "answer": "Detailed helpful answer with specifics"}
  ],
  "ctaText": "Call-to-action text"
}

Generate the content now in valid JSON format:`
}

function parseGeneratedContent(content: string): GeneratedContent {
  try {
    // Extract JSON from response
    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error('No JSON found in response')
    }

    const parsed = JSON.parse(jsonMatch[0])

    // Validate required fields
    if (!parsed.title || !parsed.metaDescription || !parsed.mainContent) {
      throw new Error('Missing required fields in generated content')
    }

    return {
      title: parsed.title,
      metaDescription: parsed.metaDescription,
      h1: parsed.h1 || parsed.title,
      heroContent: parsed.heroContent || '',
      mainContent: parsed.mainContent,
      faqItems: parsed.faqItems || [],
      ctaText: parsed.ctaText || 'Get Your Free Quote Today',
    }
  } catch (error) {
    console.error('Failed to parse generated content:', error)
    throw error
  }
}

function generateFallbackContent(pageType: string, data: PageData): GeneratedContent {
  // Fallback content if AI generation fails
  const locality = data.locality?.name || 'Malta'
  const service = data.service?.name || 'Solar Panel Installation'

  return {
    title: `${service} in ${locality} | Ghawdex Solar`,
    metaDescription: `Professional ${service.toLowerCase()} in ${locality}. 14-day installation. Government grants available. Free quote today.`,
    h1: `${service} in ${locality}`,
    heroContent: `Expert ${service.toLowerCase()} services in ${locality}, Malta. Fast installation, competitive prices, government grants available.`,
    mainContent: `<h2>Professional ${service} in ${locality}</h2><p>Ghawdex Solar provides expert ${service.toLowerCase()} services in ${locality} and throughout Malta. With our 14-day installation guarantee and comprehensive government grant support, we make solar energy accessible and affordable.</p>`,
    faqItems: [
      {
        question: `How much does ${service.toLowerCase()} cost in ${locality}?`,
        answer: `The cost varies based on system size and requirements. Contact us for a free, personalized quote for your ${locality} property.`
      }
    ],
    ctaText: 'Get Free Quote',
  }
}

export async function saveGeneratedContent(
  supabase: any,
  urlPath: string,
  pageType: string,
  content: GeneratedContent,
  relationIds: {
    localityId?: number
    serviceId?: number
    systemSizeId?: number
    propertyTypeId?: number
  }
) {
  const { data, error } = await supabase
    .from('generated_pages')
    .insert({
      url_path: urlPath,
      page_type: pageType,
      title: content.title,
      meta_description: content.metaDescription,
      h1: content.h1,
      content_json: content as any,
      content_html: content.mainContent,
      locality_id: relationIds.localityId,
      service_id: relationIds.serviceId,
      system_size_id: relationIds.systemSizeId,
      property_type_id: relationIds.propertyTypeId,
      last_generated: new Date().toISOString(),
    })
    .select()
    .single()

  if (error) {
    console.error('Failed to save generated content:', error)
    throw error
  }

  return data
}
