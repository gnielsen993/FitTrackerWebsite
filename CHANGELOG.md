# Changelog

A running log of meaningful changes to the FitnessTracker website. The iOS app's own release log lives in the FitnessTracker repo at `Docs/releases/`. When a website change is tied to a specific app version, cross-reference the two.

## Unreleased

### Added
- Initial site scaffold — editorial heritage layout, Fraunces serif display + system sans body, warm cream / charcoal palette mapped from FitnessTracker's "Balanced Luxury" theme.
- Home (`index.html`) — masthead, hero, six numbered feature dispatches, pull quote, DesignKit teaser.
- DesignKit page (`designkit.html`) — explainer of the token contract + component model, live theme switcher with 7 curated presets leading with the dramatic ones (vapor, solar, gruvbox, sakura, dracula, nord, cream, forest) so visitors see real bg/surface/text shifts instead of accent-only swaps, plus catalog-depth section listing all 34 presets across six categories.
- Stub pages — Privacy, Terms, Updates, Support, Press — wired into nav with shared chrome.
- `assets/config.js` — single-source-of-truth metadata (App Store URL, support email, version, copyright).
- `assets/styles.css` — full editorial design system in CSS variables, framework-free.
- `assets/theme-demo.js` — vanilla JS theme switcher scoped to the DesignKit demo card only.
- `assets/images/icon-1024.png` — copied from the FitnessTracker app icon set.
- AI agent conventions (`CLAUDE.md`, `AGENTS.md`) and project README.
