# Changelog

A running log of meaningful changes to the Stack website. The iOS app's own release log lives in the app repo at `Docs/releases/`. When a website change is tied to a specific app version, cross-reference the two.

## Unreleased

### Added
- `terms.html` - a **Purchases and Subscriptions** section. The page had no subscription language of any kind: no mention of subscribe, purchase, refund, auto-renew, or billing. App Store Guideline 3.1.2 requires the terms to cover the subscription, and the app now links this page from the paywall itself, so this was a submission blocker. Covers the three products, that only lifetime is shareable through Family Sharing, that Apple handles all payment and refunds, that cancelling takes effect at the end of the paid period, that deleting the app does not cancel, and that a lapse removes paid features while keeping all of your data readable and exportable.
- `privacy.html` - a **Purchases** section. Entitlement is resolved on device from the App Store receipt and stored on device, travelling only through the user's own iCloud if sync is on; it never reaches us and there is no account on our side holding it.

### Changed
- `privacy.html` - the usage-analytics event list is now accurate. It was materially stale **before** monetization, not just because of it: it claimed "the number of sets is the only event payload" while the guided 1RM events already sent the lift, the outcome, the delta percent and both targets, and `theme_changed` already sent the preset name. The list now also carries the paid-feature and paywall events. Verified against the `AnalyticsService` protocol rather than written from the plan.
- `terms.html`, `privacy.html` - Last updated bumped to September 1, 2026.

### Fixed
- `about.html`, `designkit.html`, `index.html` - the preset catalog is **35**, not 34, in all seven places that stated it. The claim was written on 2026-04-28, four days after the 35th preset landed in DesignKit, so it was false on the day it shipped and survived four months. This is the incident that motivated CLAUDE.md §9.25 and `scripts/check-public-claims.py`; the checker now passes. `updates.html:150` still says 34 and is deliberately left alone - it is a dated release entry, and rewriting one falsifies the trail (§9.16).
- `about.html`, `llms.txt` - stopped naming **PantryPlanner** as a sibling product. It is dormant, roughly 28 Swift files, two commits, and has never shipped. Nothing was substituted in its place.
- `about.html` - the default theme no longer described as "warm cream in light mode, charcoal in dark". That describes the `cream`, `paper` and `sand` presets; the actual first-launch default is Forest, which resolves to `#F8FAFC` light and `#090909` dark. Replaced with the identity that is true across the catalog (low saturation, calm density). Same correction CLAUDE.md §1 carries.
- `about.html` - the six families are now named correctly (Classic, Soft, Sweet, Bright, Moody, Loud). The page listed "Classic, Sweet, Bright, and three more", which skipped Soft.

### Added
- `updates.html` - added v1.3.0 entry: the muscle map (third Progress tab, front and back body heat map over a trailing three-week window, tap-to-zoom sub-muscle split, drill-through to contributing exercises), the three insight card types (cold region, within-group gap, opposing-pair imbalance), Lock Screen and Dynamic Island rest controls (+30s during rest, Repeat Previous Set during a set, hidden on an exercise's first set, configurable in Settings with a live preview), theme-tracking Live Activity, five new sub-muscle regions with a full library retag, refined app icon, and the rewritten privacy screen. Cross-references `Docs/releases/v1.3.0.md` in the Stack app repo.
- `updates.html` - added v1.2.0 entry: progress photos (Photos tab with pose-by-pose front-camera check-ins, curated nine-pose grid, partial check-ins with placeholder silhouettes, beginning-to-latest comparison board with body-weight change, pinch-to-zoom drill-down), private and portable photo storage (on-device only, PIN or Face ID lock, app-switcher redaction, zip export and additive re-import, weekly/bi-weekly/monthly reminders), self-driving Dynamic Island rest-complete with a Time Sensitive rest-end notification, and the onboarding notification-priming step. Cross-references `Docs/releases/v1.2.0.md` in the Stack app repo.

### Changed
- `assets/config.js` - bumped displayed app version from 1.2.0 to 1.3.0.
- `assets/config.js`, `privacy.html`, `terms.html` - company name updated to the legal entity `Lauterstar Technologies, Inc.` in the copyright holder, the Privacy Policy opening, and the Terms liability clause. The Privacy Policy now names the entity once and defines "Lauterstar" as the short form, so later references stay readable. Brand usages in navigation, page titles, and structured data keep the short name.
- `assets/config.js` - bumped displayed app version from 1.1.1 to 1.2.0.

### Added
- `updates.html` - added v1.1.1 entry: History calendar, personal record detection from normal sessions, 1RM test results in the day panel, Home condensed layout with color-coded frequency bars, Train flat pre-workout screen, and custom theme engine fix.

### Changed
- `assets/config.js` - bumped displayed app version from 1.1.0 to 1.1.1.

### Added
- `updates.html` - added the Stack v1.1.0 public update entry covering the guided 1RM Test Flow for Bench, Squat, and Deadlift (5-step warm-up ladder, skip-step on every checkpoint, lift-specific final-set rest, retry path capped at 2, validated `OneRMTestResult` written to history with per-lift swipe-to-delete + undo), reactive heads-up cards on the inter-step rest screen (auto-keep default), three target modes (Improve / Estimate / Chosen, persisted per lift), ergonomic warm-up plate loading on the lighter sets, the locked plate-math diagram ordering, always-visible workout timer in the active session title row, Weight Converter relocated into the set logger, and the "Done" to "Complete" set-logger labels rename.
- `updates.html` - extended the Stack v1.0.2 entry with the onboarding overhaul (real numeric keypad in Plates mode, optional iCloud sign-in step at the end of the flow, fully visual walkthrough that no longer leaves a phantom "Push Day" routine in the library) and a "Schema migration safety" note covering the inferred-lightweight migration rebuild and the CloudKit-backed wipe-and-restore safety net.
- `updates.html` - added the Stack v1.0.2 public update entry covering plate-math re-do (bar choice persists, balancer derives plates on next set), default-routine library cleanup (collapses iCloud-induced duplicates), Forest as first-launch theme, and the optional crash-reports + usage-analytics disclosure that points at Settings &rarr; Privacy &amp; Data.
- `privacy.html` - new "Optional Diagnostics and Product Insights" section disclosing Firebase crash reporting and the 9-event analytics taxonomy. Lists what is collected (product interaction, crash data, performance data; no PII, no workout content, no cross-app tracking) and how to opt out (Settings &rarr; Privacy &amp; Data toggles, both default ON). Updated meta/OG/Twitter description to drop the obsolete "no analytics" claim while keeping the local-first posture explicit. "Last updated" rolled to 2026-05-08.
- `updates.html` - added the Stack v1.0.1 public update entry covering iCloud sync confidence, custom exercise muscle coverage/catalog reuse, Big 3 / 1RM grouping, warm-up timer polish, and catalog cleanup.

### Changed
- `assets/config.js` - bumped displayed app version from 1.0.2 to 1.1.0.
- `assets/config.js` - bumped displayed app version from 1.0.1 to 1.0.2.
- `assets/config.js` - bumped displayed app version from 1.0 to 1.0.1.

### Added
- New `about.html` - full SEO-rich About page covering why Stack exists, what's inside (logging, train flow, muscle coverage, PRs, charts, Live Activity, sync, themes), who it's for, privacy posture, ecosystem context, and a long FAQ block. Includes `AboutPage` and `FAQPage` JSON-LD for richer search results, OG/Twitter card metadata, and dual App Store CTAs.
- "About" entry added to primary nav across every page (`index`, `designkit`, `updates`, `press`, `support`, `privacy`, `terms`, `about`).

### Changed
- `updates.html` - replaced the "Coming soon" placeholder with the full v1.0 release log: logging hub modes, train flow, muscle coverage, plates &amp; equipment, Live Activity, iCloud sync, polish &amp; accessibility. Cross-references `Docs/FitTracker-CHANGELOG.md` in the Stack app repo.
- `index.html` App Store CTA - hardcoded the production URL into the static `href` (with `target="_blank"` and `rel="noopener"`) so the link works even before `config.js` runs and opens the App Store in a new tab on desktop.
- Replaced placeholder Privacy Policy and Terms of Service pages with concise Stack-specific legal copy covering local storage, optional iCloud sync, Apple Health writes, backup export/import, account deletion, App Store 9+ rating, exercise-risk disclaimers, and support contact.
- Renamed public site/app references from FitnessTracker to Stack - Gym Tracker, with Stack as the display name in site chrome. Confirmed site support links use `support@lauterstar.com`.
- Full visual redesign - ported the layout/component system from a sibling marketing site (Strada) and rebranded to FitnessTracker. Hero is now a split (text + phone-frame) with App Store CTA, features render as a 3-column dividing grid, screenshots live in a full-bleed drag-scroll carousel with chevron buttons, and content pages share a centered `.doc` layout. Typography moved to the system font stack (no Google Fonts). Forest accent (`#2F5D3A`) anchors light mode; lifted forest (`#6FA17C`) anchors dark mode via `prefers-color-scheme`.
- `assets/styles.css` - rewritten end-to-end. New token names (`--bg`, `--surface`, `--accent`, `--text*`, `--border*`, `--space-*`, `--radius-*`), light+dark via `prefers-color-scheme`, no inline magic numbers.
- All HTML pages - replaced masthead/rail layout with single-row nav + `.doc` body. Removed Fraunces font import.

### Added
- `assets/app.js` - drag-to-scroll + chevron buttons for the home-page screenshot carousel.
- Phone-frame and screenshot placeholders ready to swap in real app shots once captured.

### Initial scaffold (prior)
- Editorial heritage layout, Fraunces serif display + system sans body, warm cream / charcoal palette mapped from FitnessTracker's "Balanced Luxury" theme.
- Home (`index.html`) - masthead, hero, six numbered feature dispatches, pull quote, DesignKit teaser.
- DesignKit page (`designkit.html`) - explainer of the token contract + component model, live theme switcher with 7 curated presets leading with the dramatic ones (vapor, solar, gruvbox, sakura, dracula, nord, cream, forest) so visitors see real bg/surface/text shifts instead of accent-only swaps, plus catalog-depth section listing all 34 presets across six categories.
- Stub pages - Privacy, Terms, Updates, Support, Press - wired into nav with shared chrome.
- `assets/config.js` - single-source-of-truth metadata (App Store URL, support email, version, copyright).
- `assets/styles.css` - full editorial design system in CSS variables, framework-free.
- `assets/theme-demo.js` - vanilla JS theme switcher scoped to the DesignKit demo card only.
- `assets/images/icon-1024.png` - copied from the FitnessTracker app icon set.
- AI agent conventions (`CLAUDE.md`, `AGENTS.md`) and project README.
