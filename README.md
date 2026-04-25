# FitnessTracker Website

Public website for **FitnessTracker** — a local-first SwiftUI iOS app for split logging, muscle coverage tracking, and workout visuals. Part of a broader ecosystem (DesignKit + HabitTracker + FitnessTracker + PantryPlanner) that shares a luxury design language.

This repository hosts the static landing page along with required legal pages (Privacy Policy and Terms of Service). The site is intentionally lightweight and framework-free — no build step, no bundler, no JS framework.

---

## Pages

- **Home** (`index.html`)
  Marketing landing page describing FitnessTracker's core features.

- **Privacy Policy** (`privacy.html`)
  Explains how user data is collected and used. (FitnessTracker is local-first — data stays on device.)

- **Terms of Service** (`terms.html`)
  Rules and conditions for using the app and website.

- **Updates** (`updates.html`)
  Public release log mirroring the iOS app's internal `Docs/releases/`.

---

## Project Structure

```
/
├── index.html
├── privacy.html
├── terms.html
├── updates.html
├── CHANGELOG.md
└── assets/
    ├── styles.css
    ├── config.js
    ├── app.js
    └── images/
```

---

## Configuration

Global site metadata (App Store URL, support email, current app version) is defined in:

```
assets/config.js
```

Edit this single file rather than hardcoding values across pages.

---

## Design

The website's visual identity echoes the FitnessTracker iOS app's **Balanced Luxury** theme: warm cream backgrounds in light mode, charcoal in dark mode, accents constrained to forest / navy / maroon / walnut / stone. Colors are exposed as CSS custom properties on `:root` — see `assets/styles.css`.

Light/dark switching uses `prefers-color-scheme` to match the app's behavior.

---

## Development

No build step. Open any `.html` file directly in a browser, or serve locally with any static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Legal

The Terms of Service and Privacy Policy included in this repository are templates and may require review or modification to comply with applicable laws and regulations.

---

## Changelog

See [`CHANGELOG.md`](CHANGELOG.md) for a running log of meaningful changes. The iOS app's own release log lives in the FitnessTracker repo at `Docs/releases/` — when a website change is tied to a specific app version, cross-reference the two.

---

## AI Agent Conventions

Project rules for AI tooling live in [`CLAUDE.md`](CLAUDE.md) (and mirrored in [`AGENTS.md`](AGENTS.md)). Read those before contributing via Claude Code, Codex, or similar tools.
