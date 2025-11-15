# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Ghawdex Solar Landing Page** - A professional, single-page website for a solar installation company in Malta. The landing page showcases their unique 14-day installation promise and real-time building analysis technology.

**Tech Stack:**
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React (icons)

## Development Commands

### Local Development
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build for production
npm start            # Start production server (after build)
npm run lint         # Run ESLint
```

### Railway Deployment
```bash
railway init         # Initialize Railway project (interactive)
railway up           # Deploy to Railway
railway logs         # View deployment logs
railway domain       # Manage custom domain
railway status       # Check project status
```

## Architecture & Structure

### Component Architecture

The application uses a **component-based architecture** with all page sections as separate components:

```
app/
├── layout.tsx          # Root layout with SEO metadata
├── page.tsx            # Main page importing all sections
└── globals.css         # Global styles with Tailwind v4 theme

components/
├── Hero.tsx            # Hero section with animated CTA
├── ValueProposition.tsx # Features grid with stats
├── AppShowcase.tsx     # App preview with mockup
├── Portfolio.tsx       # Project gallery
└── Footer.tsx          # Footer with contact info
```

**Component Flow:**
```
page.tsx
  └─> Hero (full-screen landing)
  └─> ValueProposition (4 feature cards + stats)
  └─> AppShowcase (2-column layout with mockup)
  └─> Portfolio (project grid)
  └─> Footer (company info)
```

### Styling System (Tailwind CSS v4)

This project uses **Tailwind CSS v4** (not v3) with the new `@theme inline` syntax in CSS:

**Color Theme:**
```css
/* globals.css */
--solar-blue: #0284c7     /* Primary brand color */
--solar-gold: #f59e0b     /* Secondary/accent */
--solar-green: #10b981    /* Success/sustainability */
```

**Important:** Tailwind v4 configuration is in `globals.css`, not `tailwind.config.js`.

### Animation Patterns

All animations use **Framer Motion** with consistent patterns:

1. **Scroll animations:** `whileInView` with `viewport={{ once: true }}`
2. **Initial state:** `initial={{ opacity: 0, y: 20 }}`
3. **Animated state:** `animate={{ opacity: 1, y: 0 }}`
4. **Staggered delays:** `delay: index * 0.1`

Example:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

## Key Customization Points

### 1. Brand Assets
Replace placeholder elements with real assets:

**Logo:** Add to `/public/logo/ghawdex-logo.svg` and update:
- `Hero.tsx` - Replace Sun icon with actual logo
- `Footer.tsx` - Replace Sun icon with actual logo

**Project Photos:** Add to `/public/projects/` and update `Portfolio.tsx`:
```tsx
// Replace gradient placeholders with:
<Image
  src="/projects/project-1.jpg"
  alt="Project description"
  fill
  className="object-cover"
/>
```

### 2. Content Updates

**Company Stats** (ValueProposition.tsx line 85-97):
- Update "500+" installations count
- Update "98%" satisfaction rate
- Verify "14 days" average

**Contact Information** (Footer.tsx line 80-95):
- Email: Update `info@ghawdex.pro`
- Phone: Replace `+356 XXXX XXXX` with real number
- Address: Add full Malta address

**Project Data** (Portfolio.tsx line 9-48):
- Replace placeholder projects with real installations
- Update capacities, panel counts, completion times
- Add actual project titles and locations

### 3. SEO & Metadata

Update `app/layout.tsx` (line 15-32) for:
- Open Graph images (add to `/public/og/`)
- Social media card images
- Twitter/Facebook preview optimization

## Common Development Tasks

### Adding a New Landing Page
1. Create new route in `app/[page-name]/page.tsx`
2. Reuse existing components or create new ones in `components/`
3. Update navigation if needed
4. Follow same animation patterns

### Updating Colors
Edit `app/globals.css`:
```css
:root {
  --solar-blue: #NEW_COLOR;  /* Changes throughout site */
}
```

### Adding Contact Form
1. Create `components/ContactForm.tsx`
2. Add form backend (e.g., FormSpree, Netlify Forms, or API route)
3. Insert in desired section (typically before Footer)
4. Add form validation with react-hook-form or similar

### Performance Optimization
- Images: Use Next.js `<Image>` component (auto-optimization)
- Fonts: Already optimized with Geist font loading
- Lazy loading: Components below fold auto-lazy-loaded
- Build: `npm run build` includes automatic optimizations

## Deployment Notes

**Railway Configuration:**
- Build command: `npm run build` (auto-detected)
- Start command: `npm start` (defined in railway.toml)
- Health check: `/` (root path)
- Auto-deploy: Pushes to `main` branch

**Custom Domain Setup:**
See detailed instructions in `DEPLOYMENT.md`

## Environment-Specific Behavior

**Development:** (`npm run dev`)
- Fast Refresh enabled
- Detailed error messages
- Hot module replacement

**Production:** (`npm run build && npm start`)
- Optimized bundles
- Server-side rendering
- Image optimization
- Minified assets

## Integration Points (Future)

The landing page is ready to integrate with:

1. **Google Solar API** (mentioned in AppShowcase)
   - Add API key to environment variables
   - Implement actual analysis tool
   - Connect to backend service

2. **Zoho CRM** (per project .env)
   - Lead capture from contact forms
   - Track conversions

3. **Telegram Bot** (per project .env)
   - Notifications for new leads
   - Customer communication

## File Conventions

- **Components:** PascalCase (e.g., `Hero.tsx`)
- **Utilities:** camelCase (e.g., `formatDate.ts`)
- **Types:** PascalCase in `types.ts` or co-located
- **CSS:** BEM naming for custom classes (rare, prefer Tailwind utilities)

## Testing Checklist

Before deploying updates:
1. Run `npm run build` - must succeed
2. Run `npm run lint` - no errors
3. Test on mobile (responsive design)
4. Check all links work
5. Verify animations on scroll
6. Test in Chrome, Safari, Firefox
7. Lighthouse score > 90 (all categories)

## Common Issues & Solutions

**Build fails:**
- Clear `.next/` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

**Animations not working:**
- Ensure Framer Motion is installed
- Check component is marked `'use client'`

**Styles not applying:**
- Tailwind v4 uses CSS-based config (globals.css)
- No tailwind.config.js in v4
- Check @import "tailwindcss" is first in globals.css

**Images not loading:**
- Use Next.js Image component with proper paths
- Images must be in `/public` directory
- Reference without `/public` prefix (e.g., `/logo/file.svg`)
