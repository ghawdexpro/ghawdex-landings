# Deployment Guide - Ghawdex Landing Page

This guide will help you deploy the Ghawdex solar landing page to Railway and connect your custom domain.

## Prerequisites

- Railway account (logged in via `railway whoami`)
- Domain: ghawdex.pro (purchased and accessible)
- Git repository initialized (✓ already done)

## Option 1: Deploy via Railway CLI (Recommended)

### Step 1: Create a New Railway Project

Run the following command interactively in your terminal:

```bash
railway init
```

Select:
- Workspace: **Max's Projects** (your current workspace)
- Project name: **ghawdex-landing** (or your preferred name)

### Step 2: Deploy to Railway

```bash
railway up
```

This will:
- Upload your code to Railway
- Automatically detect Next.js
- Build and deploy your application
- Provide you with a deployment URL

### Step 3: Connect Custom Domain (ghawdex.pro)

1. In your terminal, run:
   ```bash
   railway domain
   ```

2. Or via Railway Dashboard:
   - Go to https://railway.app
   - Open your **ghawdex-landing** project
   - Go to **Settings** → **Domains**
   - Click **Add Custom Domain**
   - Enter: `ghawdex.pro`
   - Follow DNS configuration instructions

### Step 4: Configure DNS

Railway will provide you with DNS records to add to your domain registrar:

**For ghawdex.pro:**
- Add an **A record** or **CNAME record** as instructed by Railway
- Wait 5-60 minutes for DNS propagation

Example DNS configuration:
```
Type: CNAME
Name: @
Value: [provided by Railway, e.g., ghawdex-landing-production.up.railway.app]
TTL: Automatic
```

**For www subdomain (optional):**
```
Type: CNAME
Name: www
Value: ghawdex.pro
TTL: Automatic
```

## Option 2: Deploy via Railway Dashboard

If CLI deployment doesn't work:

1. Go to https://railway.app
2. Click **New Project**
3. Select **Deploy from GitHub repo**
4. If you haven't pushed to GitHub yet:
   ```bash
   # Create a GitHub repo and push
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
5. Connect your GitHub repository
6. Railway will auto-detect Next.js and deploy
7. Follow Step 3-4 above for domain connection

## Environment Variables

This project doesn't require environment variables for the landing page.
If you add contact forms or integrations later, you can set them via:

```bash
railway variables set KEY=value
```

Or via the Railway Dashboard → Variables section.

## Verify Deployment

After deployment:

1. Check the Railway-provided URL (e.g., `https://ghawdex-landing-production.up.railway.app`)
2. Wait for DNS propagation (5-60 minutes)
3. Visit https://ghawdex.pro
4. Test on mobile devices

## Continuous Deployment

Railway automatically redeploys when you push to your main branch:

```bash
git add .
git commit -m "Update landing page"
git push origin main
```

## SSL/HTTPS

Railway automatically provides SSL certificates for:
- Railway subdomain (immediate)
- Custom domain (after DNS verification, usually 5-10 minutes)

## Troubleshooting

### Build Failures
- Check build logs: `railway logs`
- Ensure `npm run build` works locally
- Verify all dependencies are in package.json

### Domain Not Working
- Verify DNS records are correct
- Wait longer (DNS can take up to 24 hours, usually 1 hour)
- Check Railway dashboard for domain status
- Ensure SSL certificate is issued

### Custom Domain Shows "Not Secure"
- Wait for SSL certificate provisioning (5-10 minutes after DNS verification)
- Check domain status in Railway dashboard

## Project Structure on Railway

```
Railway Project: ghawdex-landing
├── Production Service (main branch)
│   ├── Build: npm run build
│   ├── Start: npm start
│   └── Domains:
│       ├── ghawdex-landing-production.up.railway.app (Railway subdomain)
│       └── ghawdex.pro (custom domain)
└── Settings
    ├── Environment Variables (none required initially)
    └── Build Configuration (auto-detected)
```

## Next Steps After Deployment

1. **Add your logo**: Upload to `/public/logo/`
2. **Add project photos**: Upload to `/public/projects/`
3. **Update components** to use real images instead of placeholders
4. **Test performance**: Use Google PageSpeed Insights
5. **Set up analytics**: Add Google Analytics or similar
6. **Configure contact forms**: When ready to collect leads

## Support

- Railway Documentation: https://docs.railway.app
- Railway Community: https://discord.gg/railway
- Next.js Documentation: https://nextjs.org/docs

---

**Current Status:**
✓ Project built and ready to deploy
✓ Git repository initialized
✓ Railway CLI authenticated
✓ Railway configuration file created (railway.toml)

**Ready to deploy!** Run `railway init` followed by `railway up`
