# PlayCanadianCasino.ca — SEO + Link Building Runbook

**Last updated:** June 11, 2026
**Status:** Onboarding checklist for post-DNS launch
**Estimated total time:** 4-6 hours over 2-3 days

---

## What This Document Is

A complete checklist for getting playcanadiancasino.ca to rank well in Google for Ontario casino queries, plus a link-building outreach plan. Everything in sections 1-2 takes ~30 min total. Sections 3-5 are the longer-term work.

---

## Section 1: Google Search Console Setup (15 min, do FIRST after DNS)

**Why:** Without this, you have zero visibility into how Google sees your site. It's free, it's mandatory for serious SEO, and it unlocks data on:
- Which keywords you rank for
- Crawl errors and indexing issues
- Mobile usability
- Core Web Vitals
- Manual actions (Google penalties)
- Backlink profile

### Setup Steps (after DNS is pointed to GitHub Pages)

1. **Go to** https://search.google.com/search-console/
2. **Sign in** with the Google account you want associated with the site (your personal one is fine — this is just a property, not a business verification)
3. **Click "Add Property"** (top-left, dropdown next to the search bar)
4. **Choose "URL Prefix"** (NOT "Domain")
5. **Enter:** `https://playcanadiancasino.ca/`
6. **Verification method:** Choose **"HTML tag"** (simplest)

   Google will show you a meta tag like:
   ```html
   <meta name="google-site-verification" content="abc123xyz..." />
   ```

7. **Don't paste it yet** — close that tab. Use the **DNS TXT record** method instead, it's more durable.

   Re-open the verification screen, choose **"Domain"** property type instead. Enter `playcanadiancasino.ca` (no protocol, no path).

8. **Copy the TXT record** Google gives you. It'll look like:
   ```
   google-site-verification=abc123xyz...
   ```
9. **In GoDaddy:** go to your domain → DNS → Records → Add Record
   - Type: **TXT**
   - Name: **@**
   - Value: paste the value from step 8
   - TTL: 600 (or default)
10. **Save the record.** DNS propagation takes 5-30 min.
11. **Back in Google Search Console:** click "Verify"
12. **Once verified, submit your sitemap:**
    - Left sidebar → Sitemaps
    - Add: `https://playcanadiancasino.ca/sitemap.xml`
    - Click Submit
    - Status will show "Pending" then "Success" within a few hours to a day
13. **Optional but recommended:** also add the github.io URL as a separate property
    - `https://agentadminm4-droid.github.io/playcanadiancasino.ca/`
    - Same verification flow
    - This is a backup in case the custom domain has issues

### What to Check After 3-5 Days

- **Coverage → Valid pages** — should match your sitemap count (~25)
- **Coverage → Errors** — should be 0; if not, click into each
- **Experience → Core Web Vitals** — should be all "Good" or "Needs improvement"
- **Experience → Mobile Usability** — should be 0 issues
- **Links → External links** — will start populating as Google discovers your backlink profile

### What to Check Weekly

- **Performance → Search Results** — see which queries are driving impressions/clicks
- **Performance → Pages** — see which pages rank for what
- **Index → Pages** — confirm all your important pages are indexed

---

## Section 2: Bing Webmaster Tools (10 min)

**Why:** Bing powers ~10% of Canadian search (more than US). Setting up Bing Webmaster gives you a second source of data and is the only way to influence Bing's index.

### Setup Steps

1. **Go to** https://www.bing.com/webmasters
2. **Sign in with a Microsoft account** (your @outlook.com or @hotmail.com, or create one)
3. **Click "Add a site"**
4. **Enter:** `https://playcanadiancasino.ca/`
5. **Choose verification:** **"Bing Markup Validator" or "Meta tag"** (Bing supports both)
   - If meta tag: paste into `index.html` `<head>`, push, verify
   - If DNS TXT: similar to Google's method, just with a different record
6. **Submit sitemap:** `https://playcanadiancasino.ca/sitemap.xml`
7. **Submit URL submissions:** left sidebar → "URL Submission" → submit your top 10 pages manually for faster indexing

### Pro tip: Bing has a "Content Submission API"** — you can push URLs to Bing programmatically. The 2 main use cases:
- New article = push the URL
- Major content update = push the URL

I can wire this into the deploy-sync script if you want. Just say the word.

---

## Section 3: Link Building — Bucket 1 (Easy Wins, 3 hours total)

**Goal:** 15-20 directory/profile links in 1-2 sessions. These are low-DA but they sum to a real backlink profile.

### Boilerplate (paste into every form, customize per directory)

**Site Title:**
```
PlayCanadianCasino.ca — Independent Ontario Casino Reviews
```

**Site URL:**
```
https://playcanadiancasino.ca
```

**Site Description (155 chars — fits most meta description fields):**
```
Expert reviews of AGCO-licensed online casinos in Ontario. Compare bonuses, payouts, and game variety. Updated weekly.
```

**Site Description (Long, 300 chars — for About sections):**
```
PlayCanadianCasino.ca is an independent review site for online casinos available to Ontario players. All casinos listed are licensed by the Alcohol and Gaming Commission of Ontario (AGCO) and regulated by iGaming Ontario. We test each casino for game variety, payout speed, customer support, and responsible gambling tools. Our reviews are updated weekly.
```

**Categories/Tags (comma-separated, fits most taxonomy fields):**
```
Ontario casinos, AGCO licensed, iGaming Ontario, casino reviews, online gambling Canada, responsible gambling
```

**Contact Email:**
```
editorial@playcanadiancasino.ca
```
(Will work after DNS is set up; until then use a personal email.)

### Directory Submission Tracker

This CSV (saved to `~/Desktop/playcanadiancasino/link-building/directory-submissions.csv`) tracks every directory submission:

| Directory | URL | DA | Free/Paid | Submit URL | Status | Date Submitted | Notes |
|-----------|-----|----|-----------|-----------|--------|----------------|-------|
| OCB Global | https://www.ocbglobal.com | 35 | Free | https://www.ocbglobal.com/submit-site | Pending | — | Need to create account first |
| GPWA | https://www.gpwa.org | 50 | Free | https://www.gpwa.org/apply/ | Pending | — | Affiliate program, requires license |
| CasinoAffiliatePrograms | https://www.casinoaffiliateprograms.com | 40 | Free | https://www.casinoaffiliateprograms.com/submit | Pending | — | |
| Affiliate Guard Dog | https://www.affiliateguard.com | 38 | Free | https://www.affiliateguarddog.com/submit | Pending | — | |
| iGamingBusiness.com | https://www.igamingbusiness.com | 60 | Free | https://www.igamingbusiness.com/submit-news/ | Pending | — | News site, requires real press releases |
| GamblingNews.com | https://www.gamblingnews.com | 65 | Free | https://www.gamblingnews.com/contact/ | Pending | — | Press release only |
| TopCasinoSites.com | https://www.topcasinosites.com | 25 | Free | https://www.topcasinosites.com/submit | Pending | — | |
| CasinoMeister | https://www.casinomeister.com | 55 | Free | https://www.casinomeister.com/forums/register.php | Pending | — | Forum — must engage, no spam |
| Captain Gambling | https://captaingambling.com | 20 | Free | https://captaingambling.com/submit-site | Pending | — | |
| WPN | https://www.wpnsource.com | 28 | Free | https://www.wpnsource.com/submit | Pending | — | |
| BonusFinder (CA) | https://www.bonusfinder.com/ca | 45 | Free | https://www.bonusfinder.com/ca/contact | Pending | — | Reach out for "Top Casinos" inclusion |
| Casinobeats | https://www.casinobeats.com | 55 | Free | https://www.casinobeats.com/contact/ | Pending | — | Press / guest post |
| SBC News | https://www.sbcnews.co.uk | 50 | Free | https://sbcexhibitions.com/contact-us/ | Pending | — | |
| Time2Play | https://www.time2play.com | 35 | Free | https://www.time2play.com/contact | Pending | — | |
| VegasMaster | https://www.vegasmaster.com | 30 | Free | https://www.vegasmaster.com/contact | Pending | — | |
| Casino.org (CA) | https://www.casino.org/ca | 70 | Free | https://www.casino.org/contact/ | Pending | — | Hardest to get into |
| Oddschecker | https://www.oddschecker.com | 60 | Free | https://www.oddschecker.com/contact | Pending | — | |
| OnCompare | https://www.oncompare.ca | 25 | Free | https://www.oncompare.ca/contact | Pending | — | |
| Time News | https://www.timenews.info | 15 | Free | https://www.timenews.info/submit | Pending | — | Low DA but real |
| Crunchbase | https://www.crunchbase.com | 90 | Free | https://www.crunchbase.com/add-company | Pending | — | High DA, business profile |
| Clutch | https://clutch.co | 85 | Free | https://clutch.co/profile/add | Pending | — | |

**Total: 21 directories. Expected link acquisition: 12-18 (70-85% acceptance rate for legitimate affiliate sites).**

### Process

1. Open the CSV
2. For each row: create account (if needed), submit site, change status to "Submitted", record date
3. Wait 7 days, mark accepted/rejected
4. Re-submit rejected ones with improved description
5. Total time: ~3 hours of form-filling, 30 sec per directory on average

---

## Section 4: Link Building — Bucket 2 (Guest Posts, weeks 2-6)

**Goal:** 3-5 guest posts on casino/affiliate industry sites. These are 3-5x more valuable than directory links.

### Pitch Email Template (send from your email, customize per site)

**Subject:** Free Ontario-focused casino guide for [Site Name]

```
Hi [First Name],

I'm James, an independent reviewer running PlayCanadianCasino.ca — an
AGCO-focused casino review site for Ontario players.

I've been reading your coverage of the Ontario market and noticed
[mention a specific recent article they wrote — e.g. your March piece
on the AGCO enforcement wave]. Your audience clearly cares about the
regulated market, which is what we cover in depth.

I'd like to write a free 1,500-word guest post for [Site Name] on a
topic your readers would find useful. Some options:

1. "The 5% Channelization Problem: Where Are the Other Ontarians Gambling?"
   (uses iGaming Ontario's own monthly data)

2. "How AGCO's 2026 Enforcement Wave Reshaped Ontario's Casino Supply"
   (analysis of every public enforcement action this year)

3. "What Ontario Players Get That Other Canadians Don't"
   (the AGCO responsible gambling tools, deposit limits, self-exclusion)

Each piece would be original, AGCO-compliant (no specific bonus amounts
or promotional language), and would include one contextual link back to
my site.

No fee, no strings. You retain full editorial control — edit, reject,
or publish as-is.

If this works, I'm happy to do one per month.

Worth a 10-minute call to discuss?

James Mitchell
PlayCanadianCasino.ca
```

### Targets (in order of priority)

| Site | DA | Contact | Pitch angle |
|------|----|---------|-------------|
| Casinobeats | 55 | editorial@casinobeats.com | Industry trade site, accepts long-form |
| SBC News | 50 | editorial@sbcnews.co.uk | B2B angle, AGCO enforcement analysis |
| GamblingNews.com | 65 | editorial@gamblingnews.com | Consumer-facing, accepts guides |
| iGamingBusiness | 60 | editorial@igamingbusiness.com | Trade publication, premium audience |
| Time2Play | 35 | editorial@time2play.com | Affiliate site, accepts guest posts |
| BonusFinder (CA) | 45 | editorial@bonusfinder.com | CA-focused, natural fit |
| VegasMaster | 30 | editorial@vegasmaster.com | Smaller site, easier to land |

**Expected acceptance rate: 10-20%.** Send 7 pitches, expect 1-2 to land. Scale up if you want more.

### Once a pitch is accepted, what to write

**I can write the full article for you** — you just need to:
1. Pick the topic (or let me suggest based on current AGCO/iGO news)
2. Approve the outline
3. Tell me what anchor text you want for the link back to your site

For example, the channelization article would have a link like:
- Anchor text: "PlayCanadianCasino.ca's 2026 enforcement tracker"
- Target URL: `https://playcanadiancasino.ca/blog/agco-enforcement-relax-gaming-unregulated-2026.html`
- Or a new article I write specifically for the guest post

---

## Section 5: Link Building — Bucket 4 (Operator "As Featured On", week 2-4)

**Goal:** 1-2 mentions on the casinos you review. These are the highest-converting links (real audience, pre-qualified).

### Email Template

**Subject:** Quick question about your partners page — PlayCanadianCasino.ca

```
Hi [Operator Name] team,

I run PlayCanadianCasino.ca, an independent AGCO-focused review site
for Ontario players. I've just updated my "Top-Rated Ontario Casinos"
list and [Casino Name] is on it.

I noticed your site has a "Partners" or "As Featured On" page. Would
you be open to adding PlayCanadianCasino.ca as a featured partner?

The link would be from a Canadian-facing review site that's been
covering the AGCO market since 2008. My audience is exactly your
target demographic: Ontario players 25-54, AGCO-verified, iGO-registered.

No fee, no swap, no obligation. Just a one-line addition.

If yes, here's my preferred link setup:
- Anchor: "PlayCanadianCasino.ca"
- URL: https://playcanadiancasino.ca

If you'd prefer to review my site first, here are 3 of my recent
Ontario-focused pieces:
- [link 1]
- [link 2]
- [link 3]

Thanks for your time.

James Mitchell
PlayCanadianCasino.ca
```

### Targets (5 operators on the live site)

1. **Royal Vegas** — partner page likely at royalvegas.ca/partners or similar
2. **Jackpot City** — jackpotcity.ca/partners
3. **Ruby Fortune** — rubyfortune.ca/partners
4. **Spin Casino** — spincasino.ca/partners
5. **Betway** — betway.ca/partners

**Expected acceptance: 20-30%.** Send 5, expect 1-2 to land. Higher if you offer to write a "Why We Recommend [Operator Name]" piece for your own site in return (which I'd be happy to draft).

---

## Section 6: Bucket 3 (Digital PR, weeks 4-12) — OPTIONAL

**Skip this section for now.** Digital PR is high-effort, low-yield for the first 3 months. Come back to it after Bucket 1+2+4 are done.

**Skippable unless you want to grow into a "media" brand** (which I don't recommend for now — affiliate is more profitable at your scale).

---

## What I Can Do For You

| Task | I can do it | You do it |
|------|-------------|-----------|
| Search Console + Bing setup | ❌ (need your Google + MS account) | ✅ |
| Submit directory profiles | ❌ (CAPTCHA, per-form validation) | ✅ with my boilerplate |
| Write guest post articles | ✅ | ❌ (you review + approve) |
| Write guest post pitches | ✅ | You send (avoid spam flags) |
| Write operator "as featured on" emails | ✅ | You send |
| Build the directory submission CSV | ✅ | ❌ (done) |
| Write a press release for digital PR | ✅ | You distribute |
| Track which links you got | ❌ (no GA4 / no Ahrefs) | Add to CSV manually |

---

## Quick Start: What to Do in the Next 24 Hours

1. **Tonight (10 min):** Do nothing. Wait for DNS.
2. **After DNS (30 min):**
   - Set up Google Search Console (Section 1, 15 min)
   - Set up Bing Webmaster Tools (Section 2, 10 min)
   - Submit sitemap to both (5 min)
3. **Day 2 (3 hours):** Work through Section 3 directory submissions
4. **Day 3 (2 hours):** Send 5 guest post pitches (Section 4) + 5 operator emails (Section 5)
5. **Day 4+:** Wait for responses, do follow-ups
6. **Week 2-3:** Continue pitching, accept accepted pitches, write articles
7. **Week 4:** Audit results in Search Console, plan next round

---

## Success Metrics (after 90 days)

Realistic outcomes if you execute this:

- **Search Console:** 50-200 impressions/day for branded + long-tail queries
- **Backlinks:** 15-25 new referring domains
- **Indexed pages:** 25+ (matches sitemap)
- **Top 10 rankings:** 0-3 for very long-tail Ontario queries (e.g. "AGCO enforcement actions 2026")
- **Top 50 rankings:** 10-30 for medium-tail queries
- **Traffic:** 50-500 organic visitors/day (depends on competitiveness of your niche)

Don't expect to rank #1 for "online casino" (impossible for a new domain). The goal is to rank well for **Ontario-specific long-tail queries** where the competition is thinner.
