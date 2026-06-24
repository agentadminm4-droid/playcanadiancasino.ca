# PlayCanadianCasino.ca
A Canadian-owned, independent online casino review site for Ontario players.

## Overview
This is a static HTML/CSS/JS site built for GitHub Pages deployment. It features:
- Homepage with 6 featured casino cards (affiliate links with tracking params)
- Individual casino review pages (6 full reviews)
- Blog section with news/guides about Ontario iGaming
- Legal pages (Privacy Policy, Terms of Service, Affiliate Disclosure, Cookie Policy)
- Reviews index page with all 6 casinos
- Mobile-responsive design with dark theme

## Site Structure
```
├── index.html                 # Homepage
├── reviews/
│   ├── index.html            # Reviews listing page
│   ├── royal-vegas.html
│   ├── jackpot-city.html
│   ├── ruby-fortune.html
│   ├── spin-casino.html
│   ├── playojo.html
│   └── betway.html
├── blog/
│   ├── index.html
│   └── [article files]
├── css/
│   └── style.css
├── js/
│   └── main.js
├── sitemap.xml
├── robots.txt
├── about.html
├── affiliate-disclosure.html
├── privacy-policy.html
├── terms-of-service.html
└── cookie-policy.html
```

## Tech Stack
- Pure HTML5 + CSS3 + Vanilla JavaScript
- Google Fonts (Inter + Playfair Display)
- GitHub Pages hosting (static, no build step)
- No frameworks, no dependencies to install

## Deployment
1. Push to GitHub repo
2. Enable GitHub Pages in repo settings → Pages → Source: main branch
3. Custom domain: playcanadiancasino.ca (set in repo settings + DNS)

## Development
- Local preview: `python3 -m http.server 8080` then visit `http://localhost:8080`
- No build process required
- CSS follows BEM naming convention