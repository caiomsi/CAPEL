# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## What this is

**CAPEL** — a **real client**: a production studio making video and photography
for brands and small businesses. Copy is **pt-BR**. Static HTML/CSS/JS, no build
step. See the root `../CLAUDE.md` for shared conventions.

⚠️ **The client's real data is not in yet.** The site is complete but seeded with
`REPLACE WITH ...` markers. `README.md` is the launch gate — read it before
touching content, and keep it in sync: every `REPLACE WITH` in `index.html` must
have a matching row there, and vice versa.

## Structure

`index.html` at root, `css/style.css`, `js/main.js`, stills in `images/`, hero
loop in `video/`. No custom domain (`caiomsi.github.io/CAPEL`).

## Design language — "temperatura de cor"

Film lighting is measured in Kelvin: tungsten (~3200K, warm) against daylight
(~5600K, cool). That tension is the craft CAPEL sells, so it is the palette.
Built on `../Templates/dark-cinematic`, with one deliberate departure from that
kit — see below.

**Type:** Bodoni Moda (display, Didone — reads like a film title card) ·
Manrope (body) · JetBrains Mono (timecodes, labels).

**Section eyebrows are timecodes** (`00:03:40`), not folio numbers — the kit's
"printed proof sheet" texture translated to a moving-image studio.

### The two-accent rule — do not erode it

`dark-cinematic/DESIGN.md` mandates a *single* accent. CAPEL deliberately uses
two, because the concept requires the pair. What keeps that disciplined instead
of generic is a strict role split:

- `--daylight` (`#6fa8d6`) — **interactive only**: links, CTAs, hovers, focus rings
- `--tungsten` (`#e0a04a`) — **editorial only**: timecodes, `<em>`, hairline rules

**Nothing clickable is ever tungsten. Nothing tungsten is ever clickable.** If
you add a component, place its accent by that rule. Verify with:

```bash
grep -n "tungsten" css/style.css   # no hit may sit on a:/button:/:hover/:focus rule
```

Other kit conventions still hold: no `box-shadow` anywhere (depth comes from the
`--void` → `--void-raised` → `--void-surface` steps), `--ease` on every
transition, fluid `clamp()` type rather than breakpoint font sizes, and
asymmetric grids on purpose (`.about-grid` is `1.7fr .9fr`; `.work-grid` is a
12-column bed with explicit per-card spans).

## Media — AI-generated, temporary

All stills and the hero loop were generated with **Higgsfield**
(`cinematic_studio_2_5` for images, `kling3_0` for the video — `seedance_2_5`
failed on this prompt). They are **reference direction, not delivered work**,
and the Trabalho section is labelled "Direção de referência" to say so honestly.
Replace with the client's real material — see `README.md` §4.

The hero video is muted/looping with a `poster`, and `js/main.js` pauses it
under `prefers-reduced-motion`. It carries no audio track — keep it that way
(`ffmpeg -an`) since it can never be unmuted.

## Contact form — wired, no backend work needed

POSTs to the shared `MSI-Forms` backend (`https://forms.caiomsi.com/api/submit`)
with `site: 'capel'`. The `https://caiomsi.github.io` origin is already
allowlisted in `MSI-Forms/api/submit.js` and self-tags via the `site` field, so
adding this project needed no change or redeploy there.

The service `<select>` is folded into the message body as a `[prefix]` rather
than sent as a new field — the backend takes a fixed shape and this avoids
touching it.

## CI

`.github/workflows/validate.yml` (lychee link/asset check) and
`compress-images.yml`, both copied from `Verso-Coffee`. `validate.yml` excludes
`images/`, `video/`, `wa.me` and the placeholder Instagram URL — restore those
exclusions if you regenerate the workflow.
