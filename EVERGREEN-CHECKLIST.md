# Evergreen Checklist (Static+Policy)

This repository is a static site (HTML/CSS/JS). There is no Node build system, so “evergreen” means keeping external dependencies, caching, and security policies healthy.

## Frozen asset filenames (cache-safe)
Current frozen files (content-hashed):
- `/rotybroi.296e9eb8.css`
- `/js/creeps.720b60cb.js`
- `/js/croots.56a19516.js`
- `/js/allData.bdfdb1ed.js`

If you ever change CSS/JS in the future, you MUST:
1. Generate a new hash filename.
2. Update all HTML references.

## External dependencies
- Google Analytics gtag: `G-VXLXTMNG5V`
- Vercel Insights: `/_vercel/insights/script.js`
- GSAP CDN: `cdnjs.cloudflare.com` (pinned version in `index.html`)

## Hosting policy (Vercel)
`vercel.json` sets:
- long-term immutable caching for versioned assets
- no-cache for HTML
- basic security headers

## Repo hygiene
- `.DS_Store` is ignored.
