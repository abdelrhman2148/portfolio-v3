# Portfolio v3: Abdelrhman Fikri, DevOps Engineer

Personal portfolio, rebuilt from scratch. Replaces abdelrhman-fikri.netlify.app.

Read these before writing code, in this order:

1. `docs/BRIEF.md`: art direction ("Runbook"), tokens, layout, components
2. `docs/COPY.md`: every word on the site. Use it verbatim; don't invent copy.
3. `docs/A11Y.md`: accessibility rules. They are requirements, not nice-to-haves.
4. `docs/BUILD-PLAN.md`: the task order and definition of done
5. `reference/prototype.html`: the approved single-file prototype. Open it in a browser. Match its look, but rebuild it properly in Astro rather than copying the file.

## Stack

- Astro 5 + TypeScript (strict). Static output.
- Tailwind CSS v4. Theme tokens live as CSS variables in `src/styles/tokens.css` (start from `design/tokens.css`), mapped into Tailwind with `@theme`.
- Content collections: `src/content/work/*.mdx`, one file per post-mortem.
- Fonts: Newsreader, Martian Mono, Noto Naskh Arabic. Self-host with `@fontsource` packages, not the Google CDN.
- No UI framework (React, Vue). Use plain Astro components plus at most ~30 lines of vanilla JS: the theme toggle and copy-email.
- Hosting: Netlify (keep the existing site/domain) or Cloudflare Pages. Deploys come only from GitHub Actions.

## Commands (set these up)

- `npm run dev`: local server
- `npm run build`: static build to `dist/`
- `npm run check`: `astro check` + lint
- `npm run test:a11y`: pa11y-ci or axe against the built site
- `npm run lhci`: Lighthouse CI (budget: 95+ in all four categories)

## Hard rules

- **NDA.** Never add a client name, logo, screenshot or identifying detail. Cases name the industry only. Diagrams are drawn by hand as SVG components.
- **No invented facts.** Every number, date and claim comes from `docs/COPY.md` (which comes from the CV). Need something new? Leave a `TODO(owner):` and ask.
- **Each number appears once per page.** Headline numbers live in §1 Results; case-specific numbers live in their case.
- **Don't reintroduce the generic look** listed in `docs/BRIEF.md` → "Never". That includes pill badges, stat tiles, logo marquees, chip clouds, icon-in-square service cards, gradient blobs, a fake terminal, a local clock, and a looping animation.
- **No dead links.** No `href="#"`. Every link goes somewhere real or isn't a link.
- **Both themes.** Every color comes from a token, and every change gets checked in light and dark.
- **Voice.** Follow the voice guide in `docs/COPY.md` for any text you have to write (alt text, aria-labels, 404 page).

## Repo layout (target)

```
src/
  components/   RunningHeader, Section, Sidenote, Plate, PostMortem, Figure, Redaction, ThemeToggle, CopyEmail
  figures/      Fig1SelfHealing.astro … Fig4Pipeline.astro (inline SVG, tokens only)
  content/work/ pm-01-self-healing.mdx … pm-04-release-setup.mdx
  layouts/      Doc.astro
  pages/        index.astro, work/[slug].astro, 404.astro
  styles/       tokens.css, global.css
public/         cv.pdf, images/ (portrait, full-body), favicon.svg
.github/workflows/ci.yml, deploy.yml
```

## Owner

Abdelrhman Fikri · abdelrhmanfikri182017@gmail.com · linkedin.com/in/abdelrhman-fikri
Open TODOs for the owner are listed at the bottom of `docs/BUILD-PLAN.md`.
