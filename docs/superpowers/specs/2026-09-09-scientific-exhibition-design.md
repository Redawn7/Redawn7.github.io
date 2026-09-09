# Scientific exhibition visual refinement

The user requested a more visually elaborate version of the existing personal homepage. Preserve the fixed identity rail, English default, bilingual content, compact name, working atlas navigation, and progressive publication list.

## Art direction

A visitor browsing a research exhibition on a daylight laptop should see a warm identity panel beside a deep teal diagram field. Copper nodes and fine contour paths emphasize the research relationships. Existing humanist typography remains compact; headings move above their content to recover horizontal reading space.

## Implementation

- `assets/atelier.css` contains the visual layer, leaving the underlying responsive and interactive structure intact.
- Atlas contours are decorative inline SVG paths. They add no raster imagery or network dependencies.
- Connector lines draw once on entrance. Hover and keyboard focus retain node, line, and research-entry linkage.
- Research, experience, publications, projects, and closing invitation share a full-width heading rhythm.
- Reduced-motion preferences suppress entrance animation and spatial hover effects.
- The previous requested 2019 undergraduate start date and compact exchange entry are retained.

## Verification

Inspect desktop at 1280 by 720 and mobile at 390 by 844. Confirm the desktop rail fits, mobile has no horizontal overflow, and the existing publication toggle, language persistence, atlas navigation, and no-JavaScript fallback remain functional.
