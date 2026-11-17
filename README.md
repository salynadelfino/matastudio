# MATA Studio — website

Single-page site built with [Astro](https://astro.build). Static output, no runtime framework, self-hosted fonts.

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into dist/
```

Deploy `dist/` to any static host (Netlify, Vercel, Cloudflare Pages).

## Editing content (no layout changes needed)

| What | File |
| --- | --- |
| Email, socials, location, founder bio & portrait | `src/data/site.ts` |
| Services list and "Why MATA" points | `src/data/services.ts` |
| Portfolio projects | `src/data/projects.ts` (instructions at the top of the file) |

Project images go in `src/assets/work/` and are resized/converted to modern formats automatically at build time.
Use `attribution: 'prior'` for work delivered before MATA Studio — it's labelled as "Prior experience" on the site.

## Contact form

Set `PUBLIC_FORM_ENDPOINT` (see `.env.example`, or the host's environment variables) to a form service URL such as Formspree.
Without it, the form validates and then opens the visitor's email app with their message pre-filled — and tells them so.

## Before launch

- [ ] Real email address and Instagram / LinkedIn URLs in `src/data/site.ts`
- [ ] Founder bio and portrait
- [ ] Real projects and images (remove placeholders)
- [ ] Live domain in `astro.config.mjs` (`site`) — used for canonical and social share URLs
- [ ] `PUBLIC_FORM_ENDPOINT` configured and a test enquiry received
