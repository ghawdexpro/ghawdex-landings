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
├── ValueProposition.tsx # Feature grid + stats
├── AppShowcase.tsx     # App mockup showcase
├── Portfolio.tsx       # Project gallery
├── WhatsAppButton.tsx  # Fixed floating button (global)
└── Footer.tsx          # Contact info + social links
```

**Page Flow:**
`Hero` → `VideoShowcase` → `ValueProposition` → `AppShowcase` → `Portfolio` → `Footer`

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

### Adding New Section Component

1. Create `components/NewSection.tsx` with `'use client'` directive
2. Import and add to `app/page.tsx` in desired order
3. Follow existing animation patterns
4. Use responsive padding: `section-padding` class or `py-20`

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
