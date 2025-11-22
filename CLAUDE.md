# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Ghawdex Solar Landing Page** - Professional single-page website for a solar installation company in Malta, featuring 14-day installation promise and real-time building analysis technology.

**Tech Stack:**
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4 (CSS-based config)
- Framer Motion (animations)
- Lucide React (icons)

## Development Commands

```bash
npm run dev          # Development server (http://localhost:3000)
npm run build        # Production build
npm start            # Start production server
npm run lint         # Run ESLint
```

**Railway Deployment:**
```bash
railway init         # Initialize project (interactive)
railway up           # Deploy to Railway
railway logs         # View logs
railway domain       # Manage custom domain
```

## Architecture

### Component Structure

Single-page app with section-based components in linear flow:

```
app/
├── layout.tsx          # Root layout, SEO metadata, WhatsAppButton
├── page.tsx            # Main page - imports all sections
└── globals.css         # Tailwind v4 config + theme

components/
├── Hero.tsx            # Full-screen hero with logo
├── VideoShowcase.tsx   # Auto-cycling video gallery (3 videos)
├── Services.tsx        # Service offerings showcase (7 services)
├── ValueProposition.tsx # Feature grid + stats
├── AppShowcase.tsx     # App mockup showcase
├── Portfolio.tsx       # Project gallery
├── WhatsAppButton.tsx  # Fixed floating button (global)
└── Footer.tsx          # Contact info + social links
```

**Page Flow:**
`Hero` → `VideoShowcase` → `Services` → `Portfolio` → `AppShowcase` → `ValueProposition` → `Footer`

### Analysis Page (`/analysis`)

**Purpose:** Conversion-focused solar ROI calculator showcasing Malta-specific savings.

**Route:** `/app/analysis/page.tsx`

**Key Features:**
- Hero counter: €69,000 total income over 20 years
- ROI cards: Monthly (€287.50), Yearly (€3,450), System Size (15 kWp)
- Cumulative savings chart (Recharts AreaChart)
- Payback timeline chart (break even under 2 years)
- Property details grid
- CTA section with contact buttons

**Malta Solar Calculations:**
```
15 kWp × 1.5 MWh/kWp = 23 MWh/year production
23 MWh × €150/MWh feed-in tariff = €3,450/year income
€5,000 investment = Under 2-year break even
20-year profit = €64,000
```

**Data Arrays:**
- `cumulativeSavingsData`: Monthly income with seasonal variation (totals €3,450)
- `paybackTimeline`: Year-by-year profit from -€5,000 to +€64,000

**Components Used:**
- `AnimatedCounter`: Number count-up animations with European formatting (dots every 3 digits)
- `MagneticButton`: CTAs for quotes and consultations
- Recharts: `AreaChart` for data visualization

### Tailwind CSS v4 Configuration

**CRITICAL:** This project uses Tailwind CSS v4 with CSS-based configuration (NOT `tailwind.config.js`).

Configuration location: `app/globals.css`

```css
/* globals.css structure */
@import "tailwindcss";  /* Must be first */

:root {
  --solar-blue: #0284c7
  --solar-gold: #f59e0b
  --solar-green: #10b981
  /* ... other CSS variables */
}

@theme inline {
  --color-primary: var(--solar-blue);
  /* ... theme mappings */
}
```

**To change brand colors:** Edit CSS variables in `globals.css` `:root` section.

### Services Section (`components/Services.tsx`)

**Purpose:** Showcase 7 core service offerings with image-based cards.

**Design Style:**
- Dark theme matching Portfolio section (`bg-[#1a1a1a]`)
- Glassmorphism effects with backdrop blur
- 3D tilt animation on hover (same as Portfolio cards)
- Shimmer effect that sweeps across on hover
- Gradient overlay animations
- Amber accent colors and badges

**Service List (7 total):**
1. **Solar Panel Installation** - Premium photovoltaic systems with 14-day guarantee
2. **Energy Storage Solutions** - Advanced battery systems
3. **Solar Pergolas** - Outdoor structures with integrated panels
4. **Custom Roof Frames** - Structural support for roofs unable to bear weight
5. **Liquid Membrane** - Waterproofing solutions
6. **Electrical Services** - Complete electrical installations
7. **Indoor Farming Systems** - Solar-powered sustainable agriculture

**Service Images:**
- Location: `/public/services ghawdex/`
- Format: JPG/jpg files
- Images referenced without `/public` prefix
- Each service has dedicated image showing real project work

**Component Features:**
- Grid layout: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- Category badges: Energy, Storage, Outdoor, Construction, Electrical, Innovation
- MagneticButton CTA at bottom linking to WhatsApp
- Same animation patterns as Portfolio (3D tilt, shimmer, gradient overlays)

**Editing Services:**
To modify services, edit the `services` array in `components/Services.tsx:11-61`:
```tsx
{
  id: 1,
  title: 'Service Name',
  description: 'Brief description',
  image: '/services ghawdex/filename.JPG',
  category: 'Category',
}
```

### Animation Patterns

All components use Framer Motion with `'use client'` directive.

**Standard pattern:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

**Staggered animations:** Use `delay: index * 0.1`

**3D Tilt Effect (Portfolio & Services):**
Uses Framer Motion's `useMotionValue`, `useSpring`, and `useTransform` for smooth 3D card tilting on mouse movement. See `Portfolio.tsx:76-109` or `Services.tsx:49-82` for implementation.

**Continuous animations:** See `Hero.tsx` background elements for looping patterns

### Global Components

**WhatsAppButton** (`components/WhatsAppButton.tsx`):
- Rendered in `app/layout.tsx` (appears on all pages)
- Fixed position: `bottom-8 right-8`
- Phone number: `+356 79055156`
- WhatsApp green: `#25D366`

### Video Handling

**VideoShowcase** component cycles through 3 videos:
- Videos located in `/public/projects/`
- Auto-advance on video end
- Fallback if autoplay blocked
- All videos converted to MP4 for browser compatibility

**Important:** Videos must be in `/public/projects/` and referenced without `/public` prefix.

### Analytics & Tracking

**Overview:** Comprehensive event tracking using Google Analytics 4 (GA4) and Facebook Pixel to monitor user engagement, conversions, and behavior.

**Core Files:**
- `lib/analytics.ts` - Helper functions for all tracking events
- `components/GoogleAnalytics.tsx` - GA4 initialization component
- `components/FacebookPixel.tsx` - Facebook Pixel initialization component
- `components/TimeTracker.tsx` - Invisible component for time-on-site tracking
- `.env.local` - Analytics configuration (gitignored)
- `.env.local.example` - Template for environment variables

**Environment Variables Required:**
```bash
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX          # Google Analytics 4 ID
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX  # Facebook Pixel ID
```

**Tracking Events Implemented:**

1. **User Engagement:**
   - Phone clicks (`trackPhoneClick`)
   - WhatsApp clicks (`trackWhatsAppClick`)
   - Email clicks (`trackEmailClick`)
   - Social media clicks (`trackSocialClick`)
   - External link clicks (`trackExternalLinkClick`)

2. **Conversion Events:**
   - CTA button clicks (`trackCTAClick`) - includes button text and location
   - Analysis page views (`trackAnalysisPageView`)

3. **Content Engagement:**
   - Video play events (`trackVideoPlay`) - tracks when each video starts
   - Video completion events (`trackVideoComplete`) - tracks when videos finish
   - Scroll depth tracking (`trackScrollDepth`) - milestones at 25%, 50%, 75%, 100%
   - Time on site tracking (`trackTimeOnSite`) - intervals at 30s, 1min, 3min, 5min, 10min

**Implementation Locations:**

| Event Type | Implemented In | Details |
|------------|----------------|---------|
| Phone clicks | `Footer.tsx`, `analysis/page.tsx` | Phone number links |
| WhatsApp clicks | `WhatsAppButton.tsx`, `Footer.tsx` | WhatsApp chat button |
| Email clicks | `Footer.tsx` | Email contact link |
| Social clicks | `Footer.tsx` | Facebook, Instagram links |
| CTA clicks | `Hero.tsx`, `analysis/page.tsx` | All call-to-action buttons |
| Video tracking | `VideoShowcase.tsx` | Auto-play and completion tracking |
| Scroll depth | `page.tsx` | Main page scroll tracking |
| Time on site | `layout.tsx` via `TimeTracker.tsx` | Global site-wide tracking |
| Analysis views | `analysis/page.tsx` | Page load tracking |

**How Tracking Works:**

All tracking uses the dual-tracking pattern from `lib/analytics.ts`:
```tsx
import { trackPhoneClick, trackCTAClick } from '@/lib/analytics';

// Simple event
<a onClick={trackPhoneClick}>Call Us</a>

// Parameterized event
<button onClick={() => trackCTAClick('Get Free Quote', 'Hero Section')}>
  Get Quote
</button>
```

**Video Tracking Example:**
```tsx
// In VideoShowcase.tsx
useEffect(() => {
  trackVideoPlay(getVideoName(currentVideoIndex)); // Track when video starts
  videoElement.play();
}, [currentVideoIndex]);

const handleVideoEnd = () => {
  trackVideoComplete(getVideoName(currentVideoIndex)); // Track completion
  setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
};
```

**Scroll Depth Tracking:**
- Implemented in `app/page.tsx` (client component)
- Debounced scroll events (100ms)
- Tracks once per milestone using `useRef` to prevent duplicates
- Milestones: 25%, 50%, 75%, 100%

**Time on Site Tracking:**
- Implemented via `TimeTracker.tsx` component in layout
- Checks every 5 seconds
- Tracks milestones: 30s, 60s, 180s, 300s, 600s
- Runs globally on all pages

**Adding New Tracking Events:**

1. **Define event in `lib/analytics.ts`:**
   ```tsx
   export const trackCustomEvent = (param: string) => {
     trackEvent('custom_event', {
       event_category: 'engagement',
       event_label: param,
       value: 1,
     });
   };
   ```

2. **Import and use in component:**
   ```tsx
   import { trackCustomEvent } from '@/lib/analytics';

   <button onClick={() => trackCustomEvent('Button Clicked')}>
     Click Me
   </button>
   ```

**Event Structure:**
```typescript
trackEvent(eventName: string, {
  event_category: 'engagement' | 'conversion',
  event_label: string,        // Descriptive label
  value: number,              // Importance score (1-3)
  [key: string]: any,         // Custom parameters
});
```

**Testing Analytics:**

1. **Development Testing:**
   ```bash
   npm run dev
   # Open browser console
   # Check for gtag() and fbq() calls in Network tab
   ```

2. **GA4 Real-Time Reports:**
   - Visit Google Analytics 4 dashboard
   - Go to Reports → Real-time
   - Perform actions on site and verify events appear

3. **Facebook Events Manager:**
   - Visit Facebook Events Manager
   - Check "Test Events" tab with your browser session
   - Verify events are being received

**Privacy & GDPR Considerations:**
- Analytics scripts load from Google/Facebook CDNs
- No personally identifiable information (PII) is tracked
- User IP addresses are processed by GA4 and Facebook
- Consider adding cookie consent banner for EU compliance

## Key File Locations

**SEO & Metadata:** `app/layout.tsx` (lines 16-45)
- Update title, description, Open Graph images
- OpenGraph image path: `/og/og-image.png`
- Favicon: `/icon.png`

**Contact Information:**
- Phone (WhatsApp): `components/WhatsAppButton.tsx:9`
- Footer contact details: `components/Footer.tsx`
- Social media links: `components/Footer.tsx`

**Brand Assets:**
- Logo: `/public/logo/Ghawdex engineering logo.svg`
- Used in: `Hero.tsx:47-51`, `Footer.tsx`
- Project images: `/public/projects/`
- Service images: `/public/services ghawdex/` (7 service photos)

**Videos:**
- Installation showcases: `/public/projects/installation-*.mp4`
- Configured in: `components/VideoShowcase.tsx:6-10`

## Common Development Tasks

### Adding New Videos to Showcase

1. Convert video to MP4 (browser compatibility)
2. Place in `/public/projects/`
3. Update `components/VideoShowcase.tsx:6-10` array:
   ```tsx
   const videos = [
     '/projects/installation-showcase.mp4',
     '/projects/new-video.mp4',
   ];
   ```

### Updating Contact Phone Number

1. WhatsApp button: `components/WhatsAppButton.tsx:9`
   ```tsx
   href="https://wa.me/35679055156"
   ```
2. Footer: `components/Footer.tsx` (phone link)

### Changing Brand Colors

Edit `app/globals.css`:
```css
:root {
  --solar-blue: #NEW_COLOR;
  --solar-gold: #NEW_COLOR;
  --solar-green: #NEW_COLOR;
}
```

Colors auto-update throughout site via Tailwind theme.

### Adding or Editing Services

**To add a new service:**
1. Add service image to `/public/services ghawdex/`
2. Edit `components/Services.tsx` and add to `services` array (lines 11-61):
   ```tsx
   {
     id: 8,
     title: 'New Service Name',
     description: 'Brief description of the service',
     image: '/services ghawdex/new-service.jpg',
     category: 'Category Name',
   }
   ```

**To edit existing service:**
- Modify the corresponding object in the `services` array
- Update title, description, image path, or category as needed

**Service image requirements:**
- Format: JPG or jpg
- Location: `/public/services ghawdex/`
- Reference in code: `/services ghawdex/filename.JPG` (no `/public` prefix)
- Aspect ratio: 4:3 works best with the card design

### Adding New Section Component

1. Create `components/NewSection.tsx` with `'use client'` directive
2. Import and add to `app/page.tsx` in desired order
3. Follow existing animation patterns (see Services.tsx or Portfolio.tsx for examples)
4. Use responsive padding: `section-padding` class or `py-20`
5. For dark sections, use `bg-[#1a1a1a]` to match Portfolio/Services theme

## Deployment

**Railway Configuration** (`railway.toml`):
- Builder: NIXPACKS (auto-detected)
- Start: `npm start`
- Health check: `/`
- Auto-deploy on push to `main` branch

**Deployment Process:**
1. `railway init` (first time only)
2. `railway up` (deploys)
3. `railway domain` (add custom domain)

See `DEPLOYMENT.md` for DNS configuration details.

## Important Conventions

**Client Components:**
- All components with animations must have `'use client'` directive
- All interactive components (buttons, forms) need `'use client'`

**Image Paths:**
- Store in `/public/` directory
- Reference WITHOUT `/public` prefix: `/logo/file.svg` ✓
- NOT: `/public/logo/file.svg` ✗

**Next.js Image Component:**
```tsx
<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={200}
  height={200}
  // or use fill with object-cover for backgrounds
/>
```

**Responsive Design:**
- Mobile-first approach
- Section padding adjusts: `--section-padding: 5rem` (desktop) → `3rem` (mobile)
- Test all changes on mobile viewport

## Build Troubleshooting

**Build fails:**
```bash
rm -rf .next
npm install
npm run build
```

**Animations not working:**
- Verify `'use client'` directive at top of file
- Check Framer Motion is installed

**Tailwind styles not applying:**
- Ensure `@import "tailwindcss"` is FIRST line in `globals.css`
- Tailwind v4 config is in CSS, not `tailwind.config.js`
- Run `npm run dev` to regenerate styles

**Videos not loading:**
- Videos must be MP4 format (not MOV)
- Check path excludes `/public` prefix
- Verify file exists in `/public/projects/`

## Pre-Deployment Checklist

1. `npm run build` succeeds
2. `npm run lint` passes
3. Test mobile responsiveness
4. Verify all videos play
5. Check WhatsApp link works
6. Test animations on scroll
7. Verify logo displays correctly

## Node Version

Required: Node.js ≥ 20.9.0 (specified in `package.json` engines)

Check current: `node --version`

## Production Deployment

**Platform:** Railway

**Custom Domain:** www.ghawdex.pro

**DNS Configuration (Namecheap):**
```
Type     Host    Value
CNAME    www     v66r7fpe.up.railway.app
```

**Production URLs:**
- Main site: https://www.ghawdex.pro
- Analysis page: https://www.ghawdex.pro/analysis
- Railway fallback: https://web-production-39617.up.railway.app

**Deployment Process:**
1. Push to `main` branch triggers automatic Railway deployment
2. Build completes in ~2-3 minutes
3. DNS changes propagate in 5-60 minutes

**SSL/HTTPS:**
Automatically provided by Railway for custom domains

## Agentic SEO System (1,917 Pages)

### Overview

Complete **programmatic SEO system** generating 1,917 unique, optimized pages automatically. Deployed to production and submitted to Google Search Console.

**Status:** ✅ Live | **Pages:** 1,917 | **Route:** `/seo/*`

### Page Types

**1. Locality Pages (68 pages)**
- Route: `/seo/solar-panels-[locality]`
- Example: `/seo/solar-panels-valletta`
- Content: Solar panels specific to each Maltese city
- Data source: `lib/data/localities.ts`

**2. Service Pages (1,020 pages)**
- Route: `/seo/[service]-[locality]`
- Example: `/seo/residential-solar-valletta`
- Content: Service offerings in each location
- Data source: `lib/data/services.ts` (15 services × 68 localities)

**3. System Size Pages (816 pages)**
- Route: `/seo/[size]-solar-system-[locality]`
- Example: `/seo/6kw-solar-system-valletta`
- Content: Specific system sizes for each location
- Data source: `lib/data/system-sizes.ts` (12 sizes × 68 localities)

### Architecture

**Route Structure:**
```
app/seo/
├── [...]slug]/page.tsx    # Unified catch-all handler (413 lines)
└── layout.tsx             # Shared layout with Footer + WhatsApp

lib/data/
├── localities.ts          # 68 Maltese cities
├── services.ts            # 15 service types
└── system-sizes.ts        # 12 system sizes with descriptions
```

**How It Works:**
1. Single `[...slug]` catch-all route accepts any URL pattern
2. `generateStaticParams()` creates all 1,917 combinations at build time
3. Route handler intelligently parses slug to determine page type:
   - If starts with "solar-panels-" → Locality template
   - If contains "-solar-system-" → System size template
   - Otherwise → Service template
4. Each page gets unique SEO metadata
5. All pages pre-rendered as static HTML during build
6. Sitemap auto-generated with all URLs and priorities

### Key Files

**Page Handler:**
- `app/seo/[...slug]/page.tsx` (413 lines)
  - `generateStaticParams()` - Creates 1,917 page combinations
  - `generateMetadata()` - Generates unique SEO metadata per page
  - Three render branches for different page templates
  - Malta-specific content (grant amounts, sun hours, ROI)

**Layout:**
- `app/seo/layout.tsx` - Shared layout with Footer, WhatsApp button, Analytics

**Data:**
- `lib/data/localities.ts` - 68 Maltese cities (slug, name)
- `lib/data/services.ts` - 15 service types (slug, name)
- `lib/data/system-sizes.ts` - 12 system sizes (slug, kw, name, description)

**SEO:**
- `app/sitemap.ts` - Dynamic XML sitemap with all 1,917 URLs
- `app/robots.txt` - Crawler config + sitemap declaration

### Deployment

**Status:** ✅ Live on Railway

- **Domain:** www.ghawdex.pro
- **Build time:** ~35 seconds (all 1,917 pages)
- **Deployment:** Auto-deploy from main branch
- **Sitemap:** https://www.ghawdex.pro/sitemap.xml (submitted to Google ✅)

### SEO Optimization

**Metadata per Page:**
- **Title:** Location/service-specific (72 chars optimal)
- **Description:** Grant info + benefits (155 chars optimal)
- **Keywords:** 5-7 Malta-specific terms
- **Open Graph:** Social media preview cards
- **Canonical:** Self-referential (prevent duplicates)

**URL Structure:**
- Keyword-rich (service + location in URL)
- Memorable and shareable
- Good for CTR
- Clear hierarchy for crawlers

**Content Sections:**
- Hero with location-specific heading
- Stats grid (grant amounts, sun hours, installation time)
- Why choose this service/location
- Installation process (5 steps)
- Government grants section (Malta 2025)
- Final CTA (WhatsApp + Phone)

### Conversion Setup

**CTAs on Every Page:**
- **WhatsApp:** `https://wa.me/35679055156?text=Hi! I'm interested in [service] in [location]`
- **Phone:** `tel:+35679055156`
- **Tracking:** GA4 + Facebook Pixel integration

### Google Search Console

**Status:** ✅ Submitted successfully (Nov 22, 2025)

- Sitemap URL: `https://www.ghawdex.pro/sitemap.xml`
- Total URLs: 1,917
- Status: Success
- Declared in: robots.txt

**Expected Indexing:**
- Week 1: 200-500 indexed
- Month 1: 1,000+ indexed
- Month 3: 80%+ indexed
- Month 6: 95%+ indexed

### Monitoring & Maintenance

**Daily (Week 1):**
- Google Search Console > Coverage tab
- Real-time analytics for organic traffic

**Weekly:**
- Search Console > Performance (keywords, CTR)
- Top performing pages
- Conversion rates

**Monthly:**
- Total indexed pages
- Organic traffic growth
- Lead quality/conversion

**If Changes Needed:**
- Update data files → `npm run build` → `git push` → Auto-deploy
- Rebuild entire system in ~35 seconds
- Sitemap auto-updates

### Expected Results

**Conservative Estimates:**
| Timeline | Pages Indexed | Organic Visits/Day | Leads/Month |
|----------|---------------|-------------------|------------|
| Month 1 | 200-500 | 10-20 | 5-10 |
| Month 3 | 1,000-1,400 | 100-200 | 50-100 |
| Month 6 | 1,600+ | 300-500 | 150-300 |

**Revenue Impact:**
- 30 leads/month @ €12k average = €360k/month
- 300 leads/month @ €12k average = €3.6M/month
- ROI: Essentially infinite (minimal dev cost)

### Documentation

See these files for complete details:
- **`SEO_SYSTEM_LIVE.md`** - Current status and monitoring guide
- **`SEO_DEPLOYMENT_GUIDE.md`** - Original setup instructions
- **`SEO_QUICK_START.md`** - Quick reference
- **`SYSTEM_COMPLETE.md`** - Architecture overview

### Git Commits

- **`9a70409`** - Fix SEO routing - consolidate to single catch-all route
- **`b1c3ffe`** - Fix SEO pages to work without database
- **`f3bb708`** - Add programmatic SEO system with 1,900+ pages

