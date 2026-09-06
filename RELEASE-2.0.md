# Stack 2.0 website release review

Prepared on `feat/stack-2-marketing`. Do not merge into the publishing branch until the 2.0 release and the policy changes below are approved. Pushing this feature branch is source backup, not a request to publish it.

## What changed

The homepage sells less logging friction and a more useful next workout. Real app screens supply proof. Pro has its own page, with all three access terms visible together. The old DesignKit URL stays intact and now presents Make it yours, using actual theme screenshots.

Search titles and descriptions lead with customer benefits. Static HTML includes complete content and working download links before JavaScript runs. Canonicals, social metadata, application identity, sitemap and llms.txt agree on paid access and privacy. No invented ratings, review counts, ranking guarantees or AI-search guarantees.

## Policy changes for approval before publication

- Replaced zero-analytics language with the actual default-on, optional Firebase behavior, including installation identifiers and limited 1RM target values.
- Corrected Apple Health from write-only to optional workout writes plus bodyweight reads/writes.
- Corrected purchase access storage: on-device entitlement cache, rather than an unsupported claim that it syncs as a workout record.
- Added cancellation, restore, offer eligibility, refund and consumer-rights language. Lifetime means a one-time Pro purchase, not a promise of perpetual app operation.
- Qualified Family Sharing by the actual product's App Store eligibility. Repository code alone cannot confirm live StoreKit product settings.
- Added support messages, retention, provider processing, data requests and photo sync and separate photo-backup information.
- Removed app age-rating assertions from legal eligibility. Retained the existing under-13 privacy position without treating an App Store rating as consent.

These are material changes to public terms and disclosures. This review records them for Gabe's approval; it does not certify legal compliance. Confirm current provider retention settings and distribution-region requirements before publication rather than inventing a retention period in the copy.

## Evidence

App source reviewed: `Services/PremiumFeature.swift`, `Services/FirebaseAnalyticsService.swift`, `Services/AnalyticsPreference.swift`, `Services/MonetizationAnalytics.swift`, `Services/HealthKitService.swift`, `Services/EntitlementStore.swift`, and `Docs/AppStoreListing.md` in FitnessTracker. Source branch at review: feat/monetization, commit 02366ed.

External references:
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/appearance/structured-data/software-app
- https://developer.apple.com/app-store/subscriptions/
- https://support.apple.com/en-us/118428
- https://support.apple.com/en-us/118223
- https://firebase.google.com/support/privacy
- https://support.google.com/analytics/answer/11593727

## Coordinated publication

1. Release Stack 2.0 and its new ASC metadata together with this site. Keep the historical 1.x updates intact; add the actual 2.0 release date when known.
2. Approve the material policy changes above. Remove the Prepared for Stack 2.0 label from legal pages and set their actual effective date at publication.
3. Check that the live App Store product terms match the Pro page. No numeric prices or Family Sharing promises are baked into this site.
4. Update the Stack entry and related metadata in the separate LauterstarWebsite repo. Suggested copy: Spend less time logging and see your lifting progress. Free workout logging for iPhone and iPad, with optional Stack Pro for more direction between sets. That external site is another source in Gabe's supplied AI result.
5. Publish this branch through the existing host, then check live URLs, metadata and sitemap. Request recrawling through an authenticated Search Console account if available. Search snippets and AI answers can still be rewritten by the provider and may take time to change.

## Verification

- Chrome browser checks: all 10 pages at 375 and 1440 pixels, light and dark (40 combinations). No horizontal overflow, missing images or JavaScript errors. One h1 per page and valid JSON-LD parsing.
- Local links and fragments resolve. Download URLs and full page content remain available without JavaScript. FAQ controls and all three theme selections work.
- Style-word and punctuation scans are clean. No inline styles were introduced. The static HTML tag check passed.
- All newly used screenshot and icon files match their recorded SHA-256 values. Native dimensions are set on images to reserve layout space.
- Independent finish reviewer: ship, no material visual fixes. Sampled text and button contrast pairs meet 4.5:1. The mechanical design detector ran in degraded regex mode, so it did not establish computed contrast coverage.
- Legal copy is prepared for owner review, not certified. No public site, ASC entry or companion website has been changed by this branch.
