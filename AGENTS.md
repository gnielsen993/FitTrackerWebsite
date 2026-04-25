# AGENTS.md

All project instructions, design conventions, and content rules are maintained in [`CLAUDE.md`](CLAUDE.md). Read that file first.

## General Rules

1. **Write code immediately when asked to implement.** If a plan already exists, implement it — do not produce another plan file. Only plan when explicitly asked.
2. **Check the codebase before suggesting anything.** Use available search tools to verify what already exists before recommending features, fixes, or restructures.
3. **No frameworks.** Do not introduce React, Vue, Tailwind, Bootstrap, npm, or any build step. Plain HTML/CSS/JS only.
4. **No monolithic files.** Keep individual HTML pages focused on one purpose. Split shared chrome rather than duplicating it across many large pages.
5. **All styling in `assets/styles.css`.** No inline `<style>` or `style=""` except for explicitly justified critical CSS.
6. **Commit in atomic units — each change set lands as its own commit; small related fixes may be grouped, but never mix unrelated work.** Commit before moving on, not at session end.

## Design System

Visual identity must echo the FitnessTracker iOS app's **Balanced Luxury** theme: warm cream (light) / charcoal (dark) backgrounds, accents constrained to forest, navy, maroon/oxblood, walnut, stone.

- All colors as CSS custom properties on `:root`.
- Light/dark via `prefers-color-scheme`.
- System font stack (no web fonts unless approved).
- Spacing scale: `xs, s, m, l, xl, xxl` as CSS variables.
- No hardcoded colors in markup or component CSS.

## Content & Config

- App Store URL, support email, version live in `assets/config.js`. Never hardcode across pages.
- Screenshots in `assets/images/screenshots/`.
- Legal pages are templates — flag legally-meaningful edits to the user before shipping.

## Release Log

Significant changes go into `CHANGELOG.md`. Cross-reference the FitnessTracker app's `Docs/releases/v{version}.md` when a website change ships alongside an app release.

Log: visible content changes, legal edits, structural changes, app-coordinated changes.
Skip: typos, minor CSS tweaks, asset reorganizations with no visible effect.

## Definition of Done

- Valid HTML, CSS variables used, light + dark verified, mobile (≤375px) verified, no broken links, `CHANGELOG.md` updated for user-visible changes.
