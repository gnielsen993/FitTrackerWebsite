# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. Key conventions are mirrored in [`AGENTS.md`](AGENTS.md) for other AI tools.

## Project Overview

Public marketing website for **FitnessTracker** — a local-first SwiftUI iOS app for split logging, muscle coverage, and workout visuals. Part of the broader ecosystem (DesignKit + HabitTracker + FitnessTracker + PantryPlanner).

This repository hosts the static landing page and required legal pages (Privacy Policy, Terms of Service). Intentionally lightweight and framework-free — no build step, no dependencies, no JS framework.

**Stack:** Static HTML + CSS + minimal vanilla JS. No React/Vue/Svelte. No bundler.

**Hosting:** Static (likely GitHub Pages or Netlify).

## Project Structure

```
/
├── index.html           # Marketing landing page
├── privacy.html         # Privacy Policy
├── terms.html           # Terms of Service
├── updates.html         # Public release log (mirrors app's docs/releases/)
├── CHANGELOG.md         # Website-specific change log
└── assets/
    ├── styles.css       # Single global stylesheet
    ├── config.js        # Site metadata (App Store URL, support email, etc.)
    ├── app.js           # Minimal interactions (nav toggle, etc.)
    └── images/          # Logo, screenshots, marketing art
```

## General Rules

1. **Write code immediately when asked to implement.** If a plan already exists, implement it — do not produce another plan file. Only plan when explicitly asked.
2. **Check the codebase before suggesting anything.** Use Grep/Read to verify what already exists before recommending features, fixes, or restructures.
3. **No frameworks.** Do not introduce React, Vue, Tailwind, Bootstrap, npm, or any build step. The site is intentionally framework-free. Plain HTML/CSS/JS only.
4. **No monolithic files.** Keep individual HTML pages focused on one purpose. If a page grows beyond ~400 lines, split shared chrome (header/footer) into includes via a small JS partial loader or duplicate carefully.
5. **All styling in `assets/styles.css`.** No inline `<style>` blocks except for above-the-fold critical CSS when explicitly justified. No inline `style=""` attributes.
6. **Commit in atomic units — each change set lands as its own commit; small related fixes may be grouped, but never mix unrelated work.** Commit before moving on, not at session end. Granular history is how regressions are bisected.

## Design System

The website's visual identity must echo the FitnessTracker app's **Balanced Luxury** theme — but the site is HTML/CSS, not Swift, so there is no DesignKit dependency. Translate the app's tokens into CSS custom properties.

### Palette (CSS variables in `:root`)

```css
--bg-light: #FAF7F0;        /* warm cream */
--bg-dark: #1C1B1A;         /* charcoal, not pure black */
--accent-forest: #2F5D3A;
--accent-navy: #1F3A5F;
--accent-maroon: #6B2B2B;
--accent-walnut: #6B4F3A;
--accent-stone: #A8A095;
--text-primary: #1C1B1A;
--text-secondary: #5A5550;
```

### Rules

- **No hardcoded colors in markup or component CSS.** Always reference CSS custom properties.
- **Light/dark mode** uses `prefers-color-scheme` — match the app's behavior.
- **Typography:** system font stack by default (`-apple-system, BlinkMacSystemFont, ...`). The app uses SF Pro; the web fallback to system fonts gives the same feel on Apple devices.
- **No randomly chosen colors, fonts, or radii.** Personality comes from layout and tone, not styling chaos.
- **Spacing scale:** mirror the DesignKit scale (`xs, s, m, l, xl, xxl`) as CSS variables. No magic-number margins.

## Content Conventions

- **App Store URL, support email, and version pulled from `assets/config.js`** — never hardcode in pages. Keeps cross-page updates one-edit.
- **Screenshots** live in `assets/images/screenshots/`. Use 2x or 3x resolution; serve via `<img srcset>` if file size matters.
- **Legal copy (privacy/terms)** are templates — flag any change that could have real legal implications and ask the user before shipping.

## Linking to the App

- Primary CTA: App Store link from `config.js`.
- If the app ships a deep-link scheme later, surface deep-links from `share.html`-style routes (see ParkedUpWebsite's `share.html` pattern).

## Release Log

Significant website changes go into `CHANGELOG.md` at the repo root.

When a website change is tied to a specific FitnessTracker app version (new screenshots for a feature release, updated copy for a renamed feature), cross-reference the app's `Docs/releases/v{version}.md` from the changelog entry.

### What to log
- Visible content changes (new sections, copy rewrites, new screenshots)
- Legal page edits
- Structural changes (new pages, removed pages)
- Cross-version changes coordinated with the iOS app

### What NOT to log
- Typo fixes
- Minor CSS tweaks
- Asset reorganizations with no user-visible effect

## Definition of Done

A task is done when:
- HTML validates (no unclosed tags, no missing alt text on content images)
- CSS variables used — no hardcoded colors slipped in
- Page renders correctly in light + dark mode
- Mobile layout verified at narrow viewport (≤375px)
- Links work (no 404s to other pages or assets)
- `CHANGELOG.md` updated if change is user-visible

## When Unsure

Choose:
- vertical slice > architecture
- clarity > abstraction
- plain HTML > clever JS
- TODO comment > overbuilding a future hook
