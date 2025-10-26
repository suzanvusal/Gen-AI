# Only Green - Deployment Guide (Cheapest Options)

This guide covers the most cost-effective ways to deploy your eCommerce website.

## 🎯 Recommended Setup (100% Free)

### Frontend: Vercel (Free)
### Backend: Railway.app or Render (Free)
### Database: MongoDB Atlas (Free)

**Total Monthly Cost: $0** ✨

---

## Option 1: Full Free Deployment (Recommended)

### Step 1: Deploy Database (MongoDB Atlas - FREE)

1. **Create Account**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
   - Sign up for free

2. **Create Cluster**:
   - Click "Create" → Choose "FREE" tier (M0)
   - Select a cloud provider and region (choose closest to your users)
   - Click "Create Cluster"

3. **Setup Access**:
   - Go to "Database Access" → "Add New Database User"
   - Create username and password (save these!)
   - Go to "Network Access" → "Add IP Address" → "Allow Access from Anywhere" (0.0.0.0/0)

4. **Get Connection String**:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your actual password
   - Example: `mongodb+srv://user:pass123@cluster0.xxxxx.mongodb.net/onlygreen`

---

### Step 2: Deploy Backend (Railway.app - FREE)

1. **Create Account**:
   - Go to [Railway.app](https://railway.app/)
   - Sign up with GitHub

2. **Create New Project**:
   - Click "New Project" → "Deploy from GitHub repo"
   - Connect your GitHub account
   - Select your repository (you'll need to push code to GitHub first)

3. **Configure Backend**:
   - Select the `backend` folder as root directory
   - Railway will auto-detect Python/FastAPI

4. **Add Environment Variables**:
   - Go to "Variables" tab
   - Add:
     ```
     MONGO_URL=<your-mongodb-atlas-connection-string>
     DB_NAME=onlygreen
     PORT=8001
     ```

5. **Deploy**:
   - Railway will automatically deploy
   - Copy your backend URL (e.g., `https://your-app.railway.app`)

**Alternative: Render.com (Also Free)**
- Go to [Render.com](https://render.com/)
- Create "New Web Service"
- Connect GitHub repo
- Select Python environment
- Add environment variables
- Deploy!

---

### Step 3: Deploy Frontend (Vercel - FREE)

1. **Create Account**:
   - Go to [Vercel](https://vercel.com/)
   - Sign up with GitHub

2. **Import Project**:
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect React

3. **Configure Build Settings**:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Create React App
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`

4. **Add Environment Variables**:
   - Before deploying, click "Environment Variables"
   - Add:
     ```
     REACT_APP_BACKEND_URL=<your-railway-backend-url>
     ```
   - Example: `REACT_APP_BACKEND_URL=https://your-app.railway.app`

5. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes
   - You'll get a URL like: `https://only-green.vercel.app`

6. **Custom Domain (Optional)**:
   - Go to "Settings" → "Domains"
   - Add your custom domain (if you have one)
   - Or use the free `.vercel.app` domain

---

## Option 2: Using GitHub Pages (Frontend Only - FREE)

If you want to deploy just the frontend with mock data:

1. **Build the frontend**:
   ```bash
   cd frontend
   yarn build
   ```

2. **Install gh-pages**:
   ```bash
   yarn add -D gh-pages
   ```

3. **Add to package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/only-green",
     "scripts": {
       "predeploy": "yarn build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy**:
   ```bash
   yarn deploy
   ```

**Note**: This keeps the mock data. For real backend, use Option 1.

---

## Option 3: Netlify (Frontend Alternative - FREE)

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up with GitHub
3. "New site from Git" → Select your repo
4. Configure:
   - Base directory: `frontend`
   - Build command: `yarn build`
   - Publish directory: `frontend/build`
5. Add environment variable:
   - `REACT_APP_BACKEND_URL=<your-backend-url>`
6. Deploy!

---

## Quick Comparison

| Service | Free Tier | Best For |
|---------|-----------|----------|
| **Vercel** | Unlimited sites | Frontend (Recommended) |
| **Railway** | $5 free/month | Backend (Easy setup) |
| **Render** | 750 hrs/month | Backend (Alternative) |
| **MongoDB Atlas** | 512MB storage | Database |
| **Netlify** | 100GB bandwidth | Frontend (Alternative) |
| **GitHub Pages** | Unlimited | Static frontend only |

---

## Before Deploying - GitHub Setup

1. **Create GitHub Repository**:
   ```bash
   cd your-project
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**:
   - Create a new repo on GitHub.com
   - Follow instructions to push existing repository
   ```bash
   git remote add origin https://github.com/yourusername/only-green.git
   git branch -M main
   git push -u origin main
   ```

---

## Post-Deployment Checklist

- [ ] MongoDB Atlas cluster is active
- [ ] Backend is deployed and accessible
- [ ] Frontend is deployed and loads
- [ ] Frontend can connect to backend
- [ ] Test adding products to cart
- [ ] Test all pages (Home, Shop, About, Contact)
- [ ] Test on mobile devices
- [ ] Share your live URL!

---

## Custom Domain Setup (Optional)

### Buy a Domain (~$10-15/year)

**Cheapest registrars**:
- [Namecheap](https://www.namecheap.com/) - $8-12/year
- [Porkbun](https://porkbun.com/) - $7-10/year
- [Google Domains](https://domains.google/) - $12/year

### Connect to Vercel:
1. Buy domain from registrar
2. Go to Vercel project → Settings → Domains
3. Add your domain
4. Update DNS records at your registrar (Vercel will show instructions)
5. Wait 24-48 hours for propagation

---

## Scaling Up Later

When you grow beyond free tiers:

### Small Scale ($10-20/month)
- **Frontend**: Stay on Vercel Free
- **Backend**: Railway Pro ($5/month) or DigitalOcean ($6/month)
- **Database**: MongoDB Atlas M10 ($9/month)

### Medium Scale ($50-100/month)
- **Frontend**: Vercel Pro ($20/month)
- **Backend**: DigitalOcean Droplet ($12-24/month) or AWS EC2
- **Database**: MongoDB Atlas M20 ($57/month)
- **CDN**: Cloudflare (Free)

---

## Monitoring Your Site

### Free Tools:
- **Uptime**: [UptimeRobot](https://uptimerobot.com/) - Free monitoring
- **Analytics**: [Google Analytics](https://analytics.google.com/) - Free
- **Errors**: [Sentry](https://sentry.io/) - Free tier available
- **Performance**: [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Free

---

## Marketing on a Budget

### Free Marketing Channels:
1. **Social Media**: Instagram, TikTok, Twitter
2. **Reddit**: r/ecommerce, niche sustainability subreddits
3. **Product Hunt**: Launch for free exposure
4. **Local Groups**: Facebook groups for sustainable living
5. **Content**: Start a blog about sustainability

### Paid (Low Budget - $5-10/day):
1. **Facebook/Instagram Ads**: Target eco-conscious users
2. **Google Ads**: Local sustainable fashion keywords
3. **Influencer Micro-campaigns**: Partner with small eco-influencers

---

## Troubleshooting Deployment

### Backend Not Connecting
- Check environment variables are set correctly
- Verify MongoDB connection string
- Check backend logs in Railway/Render
- Ensure PORT is set to what the platform expects

### Frontend Not Loading Backend Data
- Verify `REACT_APP_BACKEND_URL` is correct
- Check CORS is enabled in backend
- Open browser console for errors
- Test backend URL directly in browser

### Slow Performance
- Enable caching
- Optimize images (use WebP format)
- Use CDN for static assets
- Consider upgrading to paid tier

---

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://docs.railway.app/
- **MongoDB Atlas Docs**: https://docs.atlas.mongodb.com/
- **FastAPI Docs**: https://fastapi.tiangolo.com/
- **React Docs**: https://react.dev/

---

## Cost Summary

### Completely Free Setup:
- Frontend (Vercel): **$0/month**
- Backend (Railway): **$0/month** (with $5 free credit)
- Database (MongoDB Atlas): **$0/month**
- **Total: $0/month** 🎉

### With Custom Domain:
- Everything above + Domain: **~$1/month** ($12/year)

### First Paid Upgrade Path:
- When you hit Railway's free limit (~500 hours):
  - Move to Railway Pro: **$5/month**
  - Or DigitalOcean: **$6/month**
- **Total: $5-6/month**

---

**Good luck with your launch! 🚀🌱**