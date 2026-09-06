# Stack website

Static marketing website for Stack - Gym Tracker, built with HTML, CSS and small vanilla JavaScript files. No build step or runtime dependencies.

The 2.0 site sells less time logging, visible lifting progress and a clearer next workout. Features and actual app screenshots provide evidence for those benefits.

## Run locally

```sh
python3 -m http.server 8110 --bind 127.0.0.1
```

Open http://127.0.0.1:8110/. Publication remains separate from local preview. See RELEASE-2.0.md for pending release and policy decisions.

## Content

- index.html: main product story and common questions.
- pro.html: paid benefits and monthly, yearly and lifetime access.
- designkit.html: Make it yours, preserving the established URL.
- about.html, support.html and press.html: product information, help and assets.
- privacy.html and terms.html: data and purchase disclosures.
- updates.html: historical releases.

## Shared values

assets/config.js supplies current app metadata and updates data-cfg links at runtime. HTML also includes complete links and readable text for visitors without JavaScript and for crawlers. Keep fallback values synchronized when config changes. All styling lives in assets/styles.css. Colors and repeated dimensions use CSS variables.

Images have provenance in assets/images/PROVENANCE.md and provenance.json. Screenshots are native captures with unchanged pixels and proportions. Product source of truth: FitnessTracker/Docs/AppStoreListing.md and the app's actual behavior.

## Checks

Exercise downloads, theme controls, FAQ disclosure, keyboard focus and internal links. Check all pages at 375px and desktop widths, in light and dark. Keep search descriptions, visible copy, JSON-LD, llms.txt and sitemap consistent. Follow STYLE.md.
