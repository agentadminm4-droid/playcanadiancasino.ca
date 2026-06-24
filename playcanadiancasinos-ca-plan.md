# playcanadiancasinos.ca — Build Plan (MVP)

**Goal:** Stand up a dark-themed Ontario live dealer / slots sub-niche affiliate site on GitHub Pages, validated in 2-3 weeks, ready to scale or kill based on early traffic signals.

**Niche (default — change if you want full casino reviews):** Ontario-licensed live dealer games, table games, and slots deep-dives. Does NOT cannibalize playcanadiancasino.ca.

**Stack:** GitHub Pages + custom domain (playcanadiancasinos.ca), static HTML/CSS, Umami Cloud for analytics (free, no API needed — same as playcanadiancasino.ca).

**Repo:** `~/Desktop/playcanadiancasinos/` (new dir, parallel to playcanadiancasino/).

---

## Why this niche + dark theme works

- **Dark theme = natural fit for casino gaming aesthetic** (game screenshots, provider logos, card tables all look better on dark)
- **Sub-niche (live dealer/slots) is less competitive** than "Ontario casino reviews" — long-tail terms like "best live dealer blackjack Ontario" or "Evolution Gaming Ontario" are winnable
- **Doesn't compete with playcanadiancasino.ca** — Google treats them as siblings, not duplicates
- **Content reuse**: live dealer providers (Evolution, Pragmatic Play Live) and slot providers (NetEnt, Microgaming, Play'n GO) are the same across both sites, so research compounds

---

## Phase 0 — Domain & repo (Day 1, ~30 min)

- [ ] **Register playcanadiancasinos.ca** (~$15-20/yr from a .ca registrar — CIRA-accredited: Rebel, Sav, etc.). *Confirm before you start: do you have this domain?*
- [ ] **Create GitHub repo**: `playcanadiancasinos` (private until launch, public after)
- [ ] **Clone to local**: `~/Desktop/playcanadiancasinos/`
- [ ] **Set up GitHub Pages**: Settings → Pages → deploy from main branch
- [ ] **Add custom domain** in repo Settings → Pages → Custom domain: `playcanadiancasinos.ca`
- [ ] **DNS at registrar**: point `www` CNAME to `yourusername.github.io`, A records for apex to GitHub Pages IPs (185.199.108.153, etc.)
- [ ] **Enable HTTPS** in Pages settings (may take up to 24h after DNS propagates)

---

## Phase 1 — Design system + base templates (Days 1-3, ~6 hrs)

### Color palette (dark theme)
- Background: `#0a0e1a` (near-black with blue tint)
- Surface: `#141925` (cards, nav)
- Surface elevated: `#1d2433` (modals, hovers)
- Primary: `#d4af37` (gold accent — premium casino feel)
- Text: `#e8eaed` (off-white, easier on eyes than pure white)
- Muted: `#8b95a7`
- Success: `#10b981` (for "AGCO licensed" badges)
- Danger: `#ef4444` (for responsible gambling warnings)

### Typography
- Headings: **Inter** (clean, modern, good weights)
- Body: **Inter** (single font for speed)
- Numerics: tabular-nums for RTP, payout stats

### Layout templates to build
1. `index.html` — homepage with hero, top game categories, recent news, featured providers
2. `reviews/_template.html` — review page structure (game title, provider, RTP, where to play)
3. `blog/_template.html` — blog post structure
4. `games/_template.html` — game detail page
5. `compare/_template.html` — comparison table (e.g., "best live blackjack sites")

### Key design elements
- **Sticky nav** with categories: Live Casino | Slots | Table Games | Bonuses | News
- **AGCO-licensed badge** on every review (same compliance standard as site #1)
- **Responsible gambling footer** (mandatory in Ontario — PlaySense, ConnexOntario links)
- **Game thumbnails** with hover-to-play preview (static image, no actual autoplay)
- **Provider logo strip** (Evolution, Pragmatic Play Live, NetEnt, etc.)
- **Comparison tables** with sticky header for long scroll

---

## Phase 2 — Initial content (Days 4-14, ~30 hrs)

### Homepage (`index.html`)
- Hero: "Ontario's Premier Live Dealer & Slots Guide" + tagline
- Top 3 live dealer games (with thumbnails)
- Top 3 slot titles
- "New at Ontario casinos this month" (3-4 recent news blurbs)
- Provider spotlight strip
- AGCO compliance callout

### Core pages (5-6 pages)
1. `/live-dealer/` — overview of Ontario live dealer options
2. `/slots/` — best Ontario slots roundup
3. `/providers/` — list of game providers active in Ontario
4. `/about/` — who we are, editorial standards, compliance
5. `/contact/` — contact form
6. `/responsible-gambling/` — mandatory page with PlaySense, ConnexOntario, RG Ontario

### Reviews (5-6 game reviews)
Pick popular Ontario-licensed live dealer & slot titles:
- Evolution Live Blackjack (Ontario)
- Pragmatic Play Live Roulette
- Lightning Roulette (Evolution)
- Mega Moolah (Microgaming)
- Book of Dead (Play'n GO)
- Starburst XXXtreme (NetEnt)

Each review: 600-900 words, RTP, volatility, max win, where to play in Ontario, screenshots.

### Blog posts (3-4 articles)
1. "How Live Dealer Games Work in Ontario" (explainer, evergreen)
2. "Best Live Blackjack Strategies for Ontario Players" (long-tail SEO play)
3. "RTP Guide: What Ontario Slot Players Need to Know" (evergreen, citable)
4. "Evolution vs Pragmatic Play Live: Which is Better in Ontario?" (comparison)

**Total content: ~12-15 pages** — matches your MVP scope.

---

## Phase 3 — SEO + analytics (Days 10-14, ~3 hrs)

- [ ] **sitemap.xml** with all pages
- [ ] **robots.txt** allowing all, pointing to sitemap
- [ ] **Meta tags**: title, description, OG image for every page
- [ ] **Schema.org**: Review schema for game reviews, Article for blog, Organization for homepage
- [ ] **Umami Cloud setup** (same workflow as playcanadiancasino.ca, new site ID)
- [ ] **Internal linking**: hub-and-spoke from category pages to game reviews
- [ ] **OG image generator** (cron-driven, same as site #1)

---

## Phase 4 — Launch + validate (Days 15-21)

### Pre-launch checklist
- [ ] Test on mobile (dark themes need extra mobile QA)
- [ ] Test all internal links (no 404s)
- [ ] Verify HTTPS works on custom domain
- [ ] Check Umami tracking fires on all pages
- [ ] Verify all AGCO-licensed claims (cross-check against iGaming Ontario public registry)
- [ ] Check responsible gambling links all work
- [ ] Submit sitemap to Google Search Console

### Post-launch (week 3+)
- **Monitor traffic** via Umami dashboard (manual screenshot, same as site #1 — free tier has no API)
- **Validate niche**: are live dealer / slots terms ranking? If not after 4-6 weeks, kill the site
- **Don't link from playcanadiancasino.ca** to playcanadiancasinos.ca yet — let them stand alone first

---

## Success criteria (decide at 6 weeks)

- **500+ unique visitors/month** → scale up (more content, more reviews, link-building)
- **100-500/month** → keep going, more content, wait for SEO momentum
- **<100/month** → kill the site, redirect to playcanadiancasino.ca

---

## Cost summary
- Domain: ~$15-20/yr
- Hosting: $0 (GitHub Pages)
- Analytics: $0 (Umami Cloud free tier)
- **Total: ~$20/yr**

---

## What I need from you before starting

1. **Domain confirmation**: do you own playcanadiancasinos.ca, or should I include registration in the plan?
2. **Niche confirmation**: happy with live dealer / slots sub-niche, or want full Ontario casino reviews instead?
3. **Visual reference**: any dark-themed casino sites you like the look of? (I'll match the aesthetic, not copy)
4. **GitHub org**: should this go in your existing GitHub account, or a new one?

Once you answer these 4, I can start Phase 0 today.
