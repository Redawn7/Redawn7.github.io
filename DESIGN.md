# Design: Apple-Inspired Academic Portfolio

Updated 2026-10-22 from the user's explicit visual brief.

## Voice and setting

Clear, precise, calm. A research portfolio read on a laptop or phone in daylight. Native Apple system typography supplies a clean and familiar interface; aligned records and restrained link treatment retain academic credibility.

## Palette

Restrained strategy: pure white reading surfaces, a cool-gray identity rail, graphite type, and a single blue accent. Pure white is explicitly requested by the user.

- Page: `oklch(100% 0 0)`
- Secondary surface: `oklch(97.5% 0.003 265)`
- Primary text: `oklch(23% 0.006 265)`
- Supporting text: `oklch(48% 0.01 265)`
- Rules: `oklch(88% 0.005 265)`
- Accent: `oklch(49% 0.17 255)`

## Typography and composition

Use upright system sans-serif text throughout, including metadata. Section headings are 26–32px semibold, research and paper titles 17–18px semibold, supporting copy 12–14px with relaxed line height. Profile name stays on one line.

Desktop keeps a fixed 280–320px identity rail. The reading column uses full-width section headings, a compact interactive research diagram, two-column research notes, aligned publication rows, and work entries with metadata alongside the description. Keep space between sections and compact grouping within records. On small screens the profile precedes the content; navigation scrolls horizontally.

## Controls and motion

All controls use square corners. Language control stays compact at the upper right with 44px hit targets. Publication expansion is an outlined rectangular button. Active navigation uses a flat tonal rectangle. Research diagram nodes and related text share hover and keyboard focus highlighting. Use short opacity/color transitions; no entrance choreography, glow-following cursor effect, or layout animation. Respect reduced motion.

## Exclusions

No dark or cream backgrounds, italic headline words, 01/02/03 section numbering, monospace labels, pill buttons, decorative gradient surfaces, repeated project-card grids, or ornamental metrics. The portrait placeholder uses a light rectangular monogram. The research diagram uses native SVG, so no generated imagery is required.
