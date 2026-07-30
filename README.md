# Product Designer Portfolio

Single-page, white-mode portfolio built for a product designer. Next.js 15 + TypeScript,
Tailwind v4, statically exported.

## Run locally

```
npm install
npm run dev      # http://localhost:3000
npm run build    # static build -> ./out
npx serve out    # preview the exported site
```

## What to replace before launch

Every placeholder value is marked `[PLACEHOLDER]` inside **`lib/site.ts`** — that one file
holds all the copy on the page. Nothing else needs to change.

1. `profile` — real name, tagline, location, email, résumé path, socials.
2. `hero` — the one-line positioning statement.
3. `caseStudies` — the two real projects: context, before/after, named problems,
   the core idea, screen captions, and real impact numbers. Swap the `ScreenPlaceholder`
   grid in `components/case/CaseStudy.tsx` for real `<img>` screenshots once you have them
   (drop images in `public/` and reference them from `lib/site.ts`).
4. `about`, `approach`, `testimonials`, `contact` — bio, working style, real quotes.
5. Drop her resume PDF at `public/resume.pdf` (or update `profile.resumeHref`).

## Design language

- White background (`#ffffff`), near-black ink (`#14161a`), one yellow highlighter
  accent (`#ffd400`) used only as a hand-drawn marker stroke behind key phrases and
  numbers — the signature element, echoing how a designer annotates her own work.
- Type: **Space Grotesk** for display/headings, **Inter** for body, **IBM Plex Mono**
  for eyebrows/labels/case-study metadata.
- Single scrolling page: Nav → Hero → Work (2 full case studies, each following
  Context → Problem → Core idea → Screens → Impact → Learning) → About → Approach →
  Testimonials → Contact.
- Motion kept to a restrained scroll-reveal (`components/ui/Reveal.tsx`), no extra
  decoration. Respects `prefers-reduced-motion`.

## Structure

```
app/            layout, page, global styles
components/
  sections/     Nav, Hero, Work, About, Approach, Testimonials, Contact, Footer
  case/         CaseStudy block + ScreenPlaceholder
  ui/           Reveal (scroll-in), Mark/Highlighted (marker highlight)
lib/site.ts     all copy and content, typed
public/         resume, images (add real ones here)
```
