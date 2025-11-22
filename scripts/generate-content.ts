import { createClient } from '@supabase/supabase-js'
import { generatePageContent, saveGeneratedContent } from '../lib/content/generator'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

interface GenerationTask {
  urlPath: string
  pageType: string
  data: any
  relationIds: {
    localityId?: number
    serviceId?: number
    systemSizeId?: number
    propertyTypeId?: number
  }
}

async function generateAllContent() {
  console.log('🚀 Starting content generation for SEO pages...\n')

  const tasks: GenerationTask[] = []

  // Fetch all base data
  const [
    { data: localities },
    { data: services },
    { data: systemSizes },
  ] = await Promise.all([
    supabase.from('localities').select('*'),
    supabase.from('services').select('*'),
    supabase.from('system_sizes').select('*'),
  ])

  console.log(`📊 Loaded data:`)
  console.log(`  - ${localities?.length || 0} localities`)
  console.log(`  - ${services?.length || 0} services`)
  console.log(`  - ${systemSizes?.length || 0} system sizes\n`)

  // TIER 1A: Locality pages (68 pages)
  console.log('📝 Queuing Tier 1A: Locality pages...')
  for (const locality of localities || []) {
    tasks.push({
      urlPath: `/solar-panels-${locality.slug}`,
      pageType: 'locality',
      data: {
        locality: {
          name: locality.name,
          slug: locality.slug,
          sunHours: locality.avg_sun_hours_year,
          population: locality.population,
          grantAmount: locality.gozo_premium ? 11550 : 10200,
          region: locality.region,
        },
      },
      relationIds: { localityId: locality.id },
    })
  }
  console.log(`  ✓ Queued ${tasks.length} pages\n`)

  // TIER 1B: Service + Locality pages (1,020 pages)
  console.log('📝 Queuing Tier 1B: Service + Locality pages...')
  const tier1bStart = tasks.length
  for (const service of services || []) {
    for (const locality of localities || []) {
      tasks.push({
        urlPath: `/${service.slug}-${locality.slug}`,
        pageType: 'service-locality',
        data: {
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
        },
        relationIds: {
          localityId: locality.id,
          serviceId: service.id,
        },
      })
    }
  }
  console.log(`  ✓ Queued ${tasks.length - tier1bStart} pages\n`)

  // TIER 1C: System Size + Locality pages (816 pages)
  console.log('📝 Queuing Tier 1C: System Size + Locality pages...')
  const tier1cStart = tasks.length
  for (const size of systemSizes || []) {
    for (const locality of localities || []) {
      tasks.push({
        urlPath: `/${size.slug}-solar-system-${locality.slug}`,
        pageType: 'system-size-locality',
        data: {
          locality: {
            name: locality.name,
            slug: locality.slug,
            sunHours: locality.avg_sun_hours_year,
            grantAmount: locality.gozo_premium ? 11550 : 10200,
          },
          systemSize: {
            kw: size.kw,
            annualSavings: size.annual_savings_eur,
            panelCount: size.typical_panel_count,
          },
        },
        relationIds: {
          localityId: locality.id,
          systemSizeId: size.id,
        },
      })
    }
  }
  console.log(`  ✓ Queued ${tasks.length - tier1cStart} pages\n`)

  console.log(`📊 Total tasks queued: ${tasks.length}`)
  console.log(`\n🔄 Starting batch generation...\n`)

  // Process in batches
  const BATCH_SIZE = parseInt(process.env.CONTENT_GENERATION_BATCH_SIZE || '50')
  const DELAY_MS = parseInt(process.env.CONTENT_GENERATION_DELAY_MS || '2000')

  let successCount = 0
  let skipCount = 0
  let errorCount = 0

  for (let i = 0; i < tasks.length; i += BATCH_SIZE) {
    const batch = tasks.slice(i, i + BATCH_SIZE)
    const batchNum = Math.floor(i / BATCH_SIZE) + 1
    const totalBatches = Math.ceil(tasks.length / BATCH_SIZE)

    console.log(`\n📦 Processing batch ${batchNum}/${totalBatches} (${batch.length} pages)...`)

    await Promise.all(
      batch.map(async (task) => {
        try {
          // Check if already exists
          const { data: existing } = await supabase
            .from('generated_pages')
            .select('id')
            .eq('url_path', task.urlPath)
            .single()

          if (existing) {
            console.log(`  ⏭️  Skip: ${task.urlPath}`)
            skipCount++
            return
          }

          // Generate content
          const content = await generatePageContent(task.pageType, task.data)

          // Save to database
          await saveGeneratedContent(
            supabase,
            task.urlPath,
            task.pageType,
            content,
            task.relationIds
          )

          console.log(`  ✅ Generated: ${task.urlPath}`)
          successCount++
        } catch (error) {
          console.error(`  ❌ Failed: ${task.urlPath}`, error instanceof Error ? error.message : error)
          errorCount++
        }
      })
    )

    // Delay between batches to avoid rate limits
    if (i + BATCH_SIZE < tasks.length) {
      console.log(`  ⏳ Waiting ${DELAY_MS / 1000}s before next batch...`)
      await new Promise(resolve => setTimeout(resolve, DELAY_MS))
    }
  }

  console.log('\n✅ Content generation complete!')
  console.log(`📊 Results:`)
  console.log(`  - Successfully generated: ${successCount}`)
  console.log(`  - Skipped (already exists): ${skipCount}`)
  console.log(`  - Failed: ${errorCount}`)
  console.log(`  - Total: ${tasks.length}`)
}

// Run the script
generateAllContent().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})
