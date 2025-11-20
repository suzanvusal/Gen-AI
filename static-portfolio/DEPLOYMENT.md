# GitHub Pages Deployment Guide

## Quick Start (3 minutes)

### Method 1: Direct Upload (Easiest)

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Repository name: `portfolio` (or any name you prefer)
   - Make it Public
   - Click "Create repository"

2. **Upload Files**
   - Click "uploading an existing file"
   - Drag and drop all 5 files:
     - `index.html`
     - `blog.html`
     - `styles.css`
     - `script.js`
     - `README.md`
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`, Folder: `/ (root)`
   - Click Save

4. **Access Your Site**
   - Wait 1-2 minutes
   - Your site will be at: `https://yourusername.github.io/portfolio/`

---

### Method 2: For Root Domain (yourusername.github.io)

If you want your portfolio at `https://yourusername.github.io` (no /portfolio):

1. Create repository named: `yourusername.github.io` (replace with your actual GitHub username)
2. Upload all files
3. GitHub Pages auto-enabled
4. Site live at: `https://yourusername.github.io/`

---

### Method 3: Using Git (Command Line)

```bash
# Navigate to the portfolio folder
cd static-portfolio

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: DevOps Portfolio"

# Create repository on GitHub first, then:
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings as described above.

---

## Testing Locally Before Deployment

### Option 1: Using Python (if installed)

```bash
# Navigate to folder
cd static-portfolio

# Start server
python3 -m http.server 8000

# Open browser to: http://localhost:8000
```

### Option 2: Using Live Server (VS Code)

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Direct File Open

Simply double-click `index.html` to open in your browser.

---

## Customization Checklist

Before deploying, update:

- [ ] Name in Hero section
- [ ] Email address (3 places: Contact links, form, footer)
- [ ] GitHub URL (3 places: Hero, Contact, Footer)
- [ ] LinkedIn URL (3 places: Hero, Contact, Footer)
- [ ] Profile information in About section
- [ ] Skills (add/remove as needed)
- [ ] Projects (add your own projects)
- [ ] Experience (your work history)
- [ ] Certifications (your certifications)

---

## Troubleshooting

**Site not loading?**
- Wait 2-3 minutes after enabling GitHub Pages
- Check if repository is Public
- Verify branch name is correct (main or master)

**Styles not loading?**
- Make sure `styles.css` is in the same folder as `index.html`
- Check file names are exactly: `styles.css`, `script.js`

**Images not showing?**
- All skill logos load from CDN (internet required)
- Check your internet connection

---

## Custom Domain (Optional)

To use your own domain (e.g., `sujanbhusal.com`):

1. Buy domain from any registrar
2. In GitHub repo: Settings → Pages → Custom domain
3. Enter your domain and click Save
4. Add DNS records at your registrar:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```
5. Wait for DNS propagation (10 minutes - 48 hours)

---

## File Structure

```
portfolio/
├── index.html          # Main portfolio page
├── blog.html           # Blog placeholder page
├── styles.css          # All styling and animations
├── script.js           # Interactive features
└── README.md           # Documentation
```

---

## Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Smooth scroll navigation
✅ Interactive carousel in About section
✅ Wire connection animations on hover (Skills)
✅ Circuit board effects
✅ Contact form (opens email client)
✅ Social media links
✅ Back to top button
✅ Mobile hamburger menu
✅ SEO optimized

---

## Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages
- Create an issue on GitHub
- Check browser console for errors (F12)

---

**🎉 Your portfolio is ready to deploy! Good luck!**
