# UASC – Bilingual School Website (Next.js + Decap CMS)

**Features**
- Bangla/English with language switcher
- CMS for Notices, Events, Gallery, Staff, Pages (Admissions/Academics)
- Static export for GitHub Pages
- Optional Cloudinary media library

## Dev
```bash
npm i
npm run dev
# http://localhost:3000/en  (Bangla: /bn)
```
## Deploy to GitHub Pages
- Push to `main`. The included GitHub Action builds and deploys `/out` to Pages.
- In repo Settings → Pages: set "Build and deployment" to **GitHub Actions**.

## CMS Login
- Best hosted on **Netlify** or **Vercel** for Decap authentication.
- If using GitHub Pages only, consider Netlify Identity + Git Gateway (keep site on Pages, use Netlify only for CMS auth) or run CMS locally.

## Content
- `content/<locale>/notices|events|gallery|staff`
- `content/<locale>/pages/admissions.md`, `academics.md`
- Upload images to `/public/uploads` (or configure Cloudinary in `public/admin/config.yml`).
