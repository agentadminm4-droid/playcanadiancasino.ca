# PlayCanadianCasino.ca

Ontario AGCO-licensed casino review site. Static HTML, no build step.

## Stack
- HTML5 + CSS3 (no framework)
- Vanilla JavaScript
- Hosted on GitHub Pages

## Local preview
```bash
cd ~/Desktop/playcanadiancasino-deploy
python3 -m http.server 8785
# Open http://localhost:8785
```

## Deploy
```bash
cd ~/Desktop/playcanadiancasino-deploy
TOKEN=*** /tmp/hermes_gh_token)
git add -A
git commit -m "deploy: v3 site"
git push https://agentadminm4-droid:${TOKEN}@github.com/agentadminm4-droid/playcanadiancasino.ca.git main
```

## Structure
- `index.html` — homepage
- `reviews/` — casino review pages
- `blog/` — 16 editorial articles
- `css/` — stylesheets
- `js/` — scripts
- `images/` — logos, OG images, news photos
- `favicon*.png`, `apple-touch-icon.png` — favicon set
- `sitemap.xml`, `robots.txt`, `feed.xml` — SEO
- `CNAME` — custom domain (`playcanadiancasino.ca`)
- `privacy-policy.html`, `terms-of-service.html`, `affiliate-disclosure.html`, `cookie-policy.html` — legal

## Compliance
- AGCO + iGaming Ontario regulated market
- No casino promotions on site
- iGO "19+ Play Safe" badge in nav
- Affiliate disclosure page present
- All affiliate links tagged with `?s=sp51774`
