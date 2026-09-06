# Stack website layout refactor

## Objective
Show a useful product moment before asking visitors to read a feature explanation. Preserve the approved brand, sales message, free/Pro boundary, official App Store badges, current-release 2.0 notes and parent-company links.

## Design

1. Homepage opening: retain the headline and short promise; remove the second introductory paragraph from the hero. Place a large native logger detail beside the message on desktop and directly beneath the badge on mobile. At 375 by 812 pixels, expose the actual set controls in the first screen.
2. Routine and progress proof: pair a compact routine detail with its benefit, then use a wider chart detail to vary the page's rhythm. Stop repeatedly allocating the height of a whole phone to a small feature.
3. Pro guidance: use a visible three-step explanation of the last logged set, the suggested target and the lifter's decision. A native screenshot shows the real values; the explanation does not simulate a new workout or promise an outcome.
4. Lock Screen: promote the actual Live Activity detail into a wide proof section. The real screenshot provides the visual; no imitation control or rewritten screenshot content.
5. Full context: each detail opens the full original screenshot in an accessible dialog. Native links remain a fallback without JavaScript. Escape and the close button dismiss the viewer, focus returns to its trigger, and opening does not change the app data.
6. Pro page: use the same detail system for logging, plate math, routine adjustments and Lock Screen controls. Keep the three purchase terms together. Other pages inherit only safe shared styling.

## Implementation boundaries

- HTML content remains complete without JavaScript. No extra frameworks, fonts or third-party requests.
- CSS clips and uniformly scales the original screenshot. No new raster assets, altered screenshot pixels, warped device frames or synthetic UI.
- Existing CSS tokens govern spacing, color and type. Scope new layouts to homepage and Pro proof sections.
- Captions identify screenshot details, example data and paid features where needed.

## Verification

Check all pages at 375 and 1440 pixels, both themes. Also check the changed homepage at 320 pixels and 200% text size. Measure the first-screen screenshot position, validate image aspect ratios, exercise full-screen viewing with pointer and keyboard, confirm focus restoration and no-JavaScript fallback, test FAQs and theme selection, and check local links and metadata. Compare the homepage length with the prior build. Independent finish review closes the visual pass before commit.

## Results

Implemented and reviewed. At 375 by 812 pixels, the logger detail ends at 663 pixels. The homepage is 5708 pixels tall versus 7547 previously, a 24% reduction. All 40 page/viewport/appearance checks passed, along with eight screenshot link flows, Escape, Close, focus restoration, 320-pixel layout and doubled text. All ten original asset hashes match. Independent visual review returned ship with no material fixes. These are usability checks, not measured conversion results.
