# Build plan

Work through these in order. Open a PR per phase, so CI runs on each.

## Phase 1: Scaffold
- [ ] `npm create astro@latest` (minimal, TS strict). Add Tailwind v4, `@astrojs/mdx`, `@astrojs/sitemap`, and the `@fontsource-variable/newsreader`, `@fontsource/martian-mono` and `@fontsource/noto-naskh-arabic` packages.
- [ ] Copy `design/tokens.css` to `src/styles/tokens.css` and map it with Tailwind `@theme`.
- [ ] Move the assets into `public/`: `assets/cv.pdf` → `public/cv.pdf`, and `assets/photos/*` → `src/assets/` (use `astro:assets` `<Image>` for responsive WebP/AVIF).
- [ ] Add the inline `<head>` theme script (no flash), the skip link, and `lang`.

## Phase 2: Components and homepage
- [ ] Build the components listed in `docs/BRIEF.md` → Components.
- [ ] Rebuild `reference/prototype.html` section by section from `docs/COPY.md`.
- [ ] Turn figures 1–4 into `.astro` components with inline SVG (tokens only), each with a mobile-friendly variant.
- [ ] Put the 4 post-mortems in `src/content/work/*.mdx` with frontmatter (id, sector, title, summary, did, result, stack, figure, order).

## Phase 3: Case pages and the rest
- [ ] `/work/[slug]` pages using the structure in `docs/COPY.md`.
- [ ] A 404 page, `favicon.svg` (the "AF" monogram in Newsreader, ink on paper), OG image (title page as 1200×630), `robots.txt`, and a sitemap.
- [ ] SEO: title "Abdelrhman Fikri, DevOps Engineer", meta description from the Abstract, and `Person` JSON-LD with sameAs LinkedIn.

## Phase 4: CI/CD (this repo is a portfolio piece too)
- [ ] `.github/workflows/ci.yml` on PR: install, `astro check`, build, pa11y-ci, Lighthouse CI (95+ budgets), and a link check (lychee).
- [ ] `.github/workflows/deploy.yml` on push to `main`: build with `PUBLIC_COMMIT=${{ github.sha }}`, then deploy to Netlify (or Cloudflare Pages) with a token from repo secrets.
- [ ] Renovate config. A README with an architecture diagram of the pipeline and the Lighthouse scores.

## Definition of done
- Lighthouse 95+ in all four categories, on both mobile and desktop.
- Zero axe violations, and every item in `docs/A11Y.md` holds.
- Looks right at 320, 390, 768, 1024 and 1440 px, in both themes.
- No `href="#"`, no TODO left in visible copy, and no client names anywhere in the repo.
- Matches the look of `reference/prototype.html` and breaks none of the "Never" rules in `docs/BRIEF.md`.

## Open TODOs for the owner
- [ ] GitHub profile URL (add it to §6 and the footer once available)
- [ ] Domain: keep netlify.app, or buy a custom domain?
- [ ] Contact email: keep the Gmail address or use a domain address?
- [ ] More photos (they could go on the case pages or in §3)
- [ ] A "What I'd do next" line per case study (optional)
- [ ] "Each number appears once per page" conflicts with COPY.md itself: "20+" appears 4 times on the homepage (Abstract, §1 Scope note, PM-04 sector, the Table 2 role note) and "15+" 3 times (PM-04 title, Fig. 4, What I did). Which repeats should be cut?
- [ ] Case pages: confirm your role per case for the ID line, and the Constraints for PM-01, PM-02 and PM-04 (only PM-03 has them, taken from COPY.md)
- [ ] public/cv.pdf includes your mobile number and is public once deployed. Keep it?
- [ ] Figures use a focusable scroll region on mobile. Vertical variants below 640px (BRIEF.md) are not built yet.
