# Sujan Bhusal - DevOps Engineer Portfolio

A modern, professional portfolio website showcasing cloud engineering and DevOps expertise.

## Features

- ✨ Modern, clean design with professional blue theme
- 🎨 DevOps aesthetic with floating icons and cloud connections
- 🔗 Interactive wire animations connecting skills on hover
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading with no dependencies
- 🎯 SEO optimized
- 🌐 GitHub Pages ready

## Sections

1. **Hero** - Introduction with animated DevOps icons
2. **About** - Interactive carousel with professional background
3. **Skills** - 11 technical skills with brand logos and wire connection effects
4. **Projects** - 5 featured projects with detailed descriptions
5. **Experience** - Professional timeline with 3 positions
6. **Certifications** - AWS certifications display
7. **Contact** - Contact form with social links
8. **Blog** - Placeholder for future blog posts

## Technologies Used

- HTML5
- CSS3 (with animations and transitions)
- Vanilla JavaScript
- Canvas API (for wire effects)
- Google Fonts (IBM Plex Sans, Inter)
- Brand logos from DevIcons CDN

## Deployment to GitHub Pages

### Option 1: Using GitHub UI

1. Create a new repository on GitHub (e.g., `portfolio`)
2. Upload all files:
   - `index.html`
   - `blog.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Go to repository Settings → Pages
4. Under "Source", select "Deploy from a branch"
5. Select `main` branch and `/ (root)` folder
6. Click Save
7. Your site will be live at `https://yourusername.github.io/portfolio/`

### Option 2: Using Git Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: DevOps Portfolio"

# Add remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/portfolio.git

# Push to main branch
git branch -M main
git push -u origin main

# Enable GitHub Pages in repository settings
```

### Option 3: Deploy to Root Domain (yourusername.github.io)

If you want your portfolio at `https://yourusername.github.io`:

1. Create a repository named exactly: `yourusername.github.io`
2. Upload all files to this repository
3. GitHub Pages will automatically be enabled
4. Your site will be live at `https://yourusername.github.io/`

## Customization

### Update Personal Information

1. **Name & Title**: Edit in `index.html`:
   ```html
   <h1 class="hero-name">Your Name</h1>
   <p class="hero-title">Your Title</p>
   ```

2. **Contact Email**: Update in both files:
   - `index.html` (contact links)
   - `script.js` (form submission)

3. **Social Links**: Update URLs in `index.html`:
   ```html
   href="https://github.com/yourusername"
   href="https://www.linkedin.com/in/yourprofile/"
   ```

4. **Profile Image**: If you want to add a profile image in the About or Contact section, simply add an `<img>` tag with your image source.

### Update Content

- **Skills**: Modify the skills cards in the Skills section
- **Projects**: Edit project cards with your own projects
- **Experience**: Update experience timeline with your positions
- **Certifications**: Add or modify certification cards

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
  --color-primary: #0066CC;
  --color-primary-dark: #003D82;
  --color-primary-light: #E8F2FF;
  /* ... more colors */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- No external JavaScript libraries
- Optimized animations
- Fast loading time
- Minimal HTTP requests

## License

Free to use for personal portfolios. Please update with your own information.

## Credits

Built with passion for DevOps and Cloud Engineering.

---

**Need help?** Feel free to open an issue or reach out!
