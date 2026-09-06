---
name: Stack website
description: Cream, charcoal and real app proof for a calmer training session.
colors:
  accent: "#0f766e"
  accent-hover: "#0b5d57"
  bg: "#faf7f0"
  surface: "#f0eee5"
  text: "#1c2522"
  muted: "#52605a"
  line: "#c9d1c8"
  panel: "#123e36"
  panel-text: "#f3eee3"
  panel-muted: "#cbded5"
  on-accent: "#ffffff"
  focus: "#825518"
  dark-bg: "#1c211f"
  dark-surface: "#272e2a"
  dark-text: "#f3eee3"
  dark-muted: "#b8c7bd"
  dark-accent: "#83d8c7"
  dark-accent-hover: "#a3eadb"
  dark-line: "#49564f"
  dark-focus: "#f1c985"
rounded:
  radius: "16px"
  radius-phone: "32px"
spacing:
  xs: "4px"
  s: "8px"
  m: "16px"
  l: "24px"
  xl: "40px"
  xxl: "72px"
  section: "112px"
---

# Design System: Stack website

## Overview

The built world is Balanced Luxury: cream and charcoal, Forest accents, the approved plate mark, system type and unchanged native app screenshots. The static marketing site leads with customer benefits and uses app screens as proof. Its restrained visual language carries across the home, Pro, personalisation and document pages.

This record describes the current HTML, CSS and small JavaScript implementation. The finish review returned a ship verdict with no material visual fixes. Release checks remain in `RELEASE-2.0.md`; this record does not verify the app, publication or legal content.

## Colors

The frontmatter records the semantic palette from `assets/styles.css`. Cream supports long reading; deep green supplies a clear accent and a distinct Pro panel. Muted text and thin lines separate supporting content without adding decoration.

The website follows `prefers-color-scheme`. Dark mode replaces the background, surface, text, muted, accent, hover, line and focus roles with their dark counterparts. Its on-accent role uses the panel color. The Pro panel keeps its own text and background pairing in both modes.

## Typography

All roles use the required system stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`. No downloaded fonts.

Headings use tight tracking, balanced wrapping and a 1.08 line height. Desktop display size is `clamp(2.7rem, 5.6vw, 5.2rem)` at weight 720; section headings use `clamp(2rem, 4vw, 3.6rem)`. Body text is 17px with a 1.6 line height, falling to 16px on phones. Buttons use weight 650. Captions and small notes use the muted role.

## Layout

A centered container caps at 1160px with 24px side padding. The homepage leads with a large logger detail. Compact routine proof, a wider chart, the Pro decision sequence and a Live Activity detail vary the reading rhythm. Pro uses the same detail system. Focused document pages use narrower reading widths.

At 920px the header wraps and the section gaps tighten. At 600px the hero, stories, Pro panel, personalisation preview and plan choices become single columns. Mobile copy comes before its proof. Section spacing becomes 64px and the largest regular spacing becomes 48px. Screenshots retain their original proportions at every width.

## Elevation & Depth

The system has no box shadows. Tonal surfaces, whitespace and thin borders define sections. The deep green Pro panel creates contrast through color, with no glass or raised treatment.

## Shapes

Buttons and grouped surfaces share the standard radius. App screenshot corners use the phone radius, reduced to 28px on mobile. The plate icon keeps its established artwork. Screenshot details use CSS clipping and uniform scaling. Each opens the unchanged full image; source artwork is never reconstructed or recolored.

## Components

- **Buttons:** primary links pair accent and on-accent colors with a hover color. Secondary links have a line border. Standard buttons have a 48px minimum height. The Pro panel uses panel-text for its button background and panel for its label.
- **Focus:** keyboard focus has a 3px outline using the focus token, offset by 5px. The skip link appears on focus.
- **Navigation:** compact text links use accent color and underlining on hover or the current page. Mobile links wrap into a full row below the brand and download action.
- **Theme preview:** 56px minimum-height buttons select unchanged Forest, Dracula or Barbie screenshots. Selection updates the image, alternate text, description and `aria-pressed`. These buttons change the app preview, not the website palette.
- **Plans and closing panels:** rounded surfaces use either a line border or the surface role, with token spacing.
- **Questions:** native details and summary controls expand supporting answers. Thin dividers separate entries.
- **Motion:** smooth anchor scrolling becomes immediate when reduced motion is requested.

## Do's and Don'ts

- **Do** use semantic CSS properties for visual colors and repeated dimensions.
- **Do** retain the system font stack, approved plate mark and original app screenshots.
- **Do** pair short benefit copy with readable app proof and a clear download action.
- **Do** keep keyboard focus, image descriptions, responsive layouts and reduced motion support.
- **Don't** invent testimonials, ratings, prices or promised training results.
- **Don't** tint app screenshots or replace them with imagined interfaces.
- **Don't** add a framework, build dependency or downloaded font for this static site.

## App Store and company links

All download actions use the existing official black App Store badge, with its original artwork and proportions. Standard buttons remain for internal page actions. Each footer links to More apps from Lauterstar.

## Screenshot viewing

Detail links open a native dialog with a sticky Close control. Escape dismisses it and focus returns to the opening link. Keyboard focus stays on the sole dialog control. Direct image links work without JavaScript. Mobile headings, navigation and footer links wrap at enlarged text sizes.
