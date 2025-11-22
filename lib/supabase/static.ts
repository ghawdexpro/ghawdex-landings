import { createClient as createSupabaseClient } from '@supabase/supabase-js'

// Static client for use in generateStaticParams (build time)
// Does not use cookies
export function createClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
