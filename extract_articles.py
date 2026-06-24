#!/usr/bin/env python3
"""Extract news story metadata from the 15 blog articles for v3 banner gen.

Outputs a JSON file with one entry per article, suitable for piping
into the OpenAI banner image generator.
"""
import json
import re
from pathlib import Path
from html import unescape

BLOG = Path.home() / "Desktop" / "playcanadiancasino" / "v1" / "blog"
OUT = Path.home() / "Desktop" / "playcanadiancasino" / "v3_articles.json"

# Skip the index page
SKIP = {"index.html"}

def strip_html(s: str) -> str:
    s = re.sub(r"<[^>]+>", " ", s)
    s = unescape(s)
    s = re.sub(r"\s+", " ", s).strip()
    return s

def first_n_words(s: str, n: int = 10) -> str:
    return " ".join(s.split()[:n])

articles = []
for f in sorted(BLOG.glob("*.html")):
    if f.name in SKIP:
        continue
    text = f.read_text(encoding="utf-8", errors="replace")

    # <title>...</title>
    m = re.search(r"<title>(.*?)</title>", text, re.S)
    title = strip_html(m.group(1)) if m else ""
    # strip " | Top Ontario Casinos" suffix
    title = re.sub(r"\s*\|.*$", "", title)

    # og:description
    m = re.search(r'<meta property="og:description"\s+content="([^"]+)"', text)
    desc = m.group(1).strip() if m else ""

    # og:image
    m = re.search(r'<meta property="og:image"\s+content="([^"]+)"', text)
    og_image = m.group(1).strip() if m else ""

    # article:published_time
    m = re.search(r'<meta property="article:published_time"\s+content="([^"]+)"', text)
    date = m.group(1).strip() if m else ""

    # slug
    slug = f.stem

    # short subject (first 10 words of description) for the image-gen prompt
    subject = first_n_words(desc, 12) if desc else title

    articles.append({
        "slug": slug,
        "title": title,
        "description": desc,
        "og_image": og_image,
        "date": date,
        "subject": subject,
    })

OUT.write_text(json.dumps(articles, indent=2, ensure_ascii=False))
print(f"✓ Wrote {len(articles)} articles to {OUT}")
for a in articles:
    print(f"  - {a['date']}  {a['slug'][:50]:50}  {a['title'][:60]}")
