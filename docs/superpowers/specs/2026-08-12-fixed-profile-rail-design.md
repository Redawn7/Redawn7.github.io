# Fixed Profile Rail Design

## Goal

Keep the complete profile visible in one desktop viewport while the work index scrolls independently in normal document flow.

## Desktop behavior

- At widths of 70rem and above, the profile rail is fixed to the left edge with `position: fixed`, `inset-block: 0`, and `height: 100dvh`.
- The work column receives a left margin equal to the fixed rail width so the two columns never overlap.
- The profile content is compact enough for a typical laptop viewport. If the viewport is unusually short, only the rail may scroll internally.
- The portrait is reduced, spacing is tightened, and the biography is limited to two concise sentences.

## Small-screen behavior

Below 70rem, the page keeps its current document-order layout: profile first, work second, with one natural page scrollbar.

## Accessibility and verification

- Keyboard order and semantic document order remain unchanged.
- At desktop size, scrolling the document must not change the profile rail's viewport position.
- Mobile, 200% zoom, bilingual switching, and the no-JavaScript fallback must continue to work.
