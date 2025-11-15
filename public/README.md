# Assets Directory

This directory contains all public assets for the Ghawdex landing page.

## Directory Structure

```
/public
  /logo
    - ghawdex-logo.svg (or .png) - Main company logo
    - ghawdex-icon.svg (or .png) - Icon/favicon version
  /projects
    - project-1.jpg
    - project-2.jpg
    - project-3.jpg
    ... (add your installation project photos here)
  /og
    - og-image.jpg - Open Graph image for social media (1200x630px recommended)
```

## Image Guidelines

### Logo
- Format: SVG preferred, or PNG with transparent background
- Size: Flexible (SVG recommended for scalability)
- Place in: `/public/logo/`

### Project Photos
- Format: JPG or WebP
- Recommended size: 1200x900px (4:3 aspect ratio)
- Optimize for web (compress before uploading)
- Place in: `/public/projects/`
- Naming convention: `project-[number].jpg` or descriptive names

### Open Graph Image
- Format: JPG or PNG
- Size: 1200x630px (Facebook/Twitter recommended size)
- Place in: `/public/og/`
- This image appears when sharing the website on social media

## Next Steps

1. Add your Ghawdex logo to `/public/logo/`
2. Add installation project photos to `/public/projects/`
3. Create an Open Graph image for social sharing
4. Update component imports to reference these images using Next.js Image component

## Current Placeholder Images

The website currently uses placeholder gradients and icons. Replace these with:
- Your actual company logo in the Hero and Footer
- Real installation photos in the Portfolio section
- An Open Graph image for better social media sharing
