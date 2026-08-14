# Living Research Atlas Homepage Redesign

## Summary

Redesign the existing bilingual personal homepage around a distinctive “Living Research Atlas” concept. The page remains compact and readable, but gains a memorable first impression and purposeful interaction. It presents Xuanchen Lu as a globally minded scholar, builder, and explorer whose work connects model intelligence, inference, markets, and spacetime.

The redesign preserves the existing fixed profile rail, content order, bilingual data source, and fictional-data disclosure. It does not copy the reference site’s visual language, card system, custom cursor, or moving gradient effects.

## Goals

- Establish a recognizable personal-brand identity within the first viewport.
- Connect the four research directions through one original visual motif.
- Make research, papers, and projects feel responsive without reducing scanability.
- Preserve the compact information density requested for the right column.
- Keep motion short, performant, accessible, and optional.
- Retain the current English-default bilingual behavior.

## Brand Direction

### Persona

- Primary: scholar and global explorer.
- Secondary: builder with entrepreneurial sharpness.
- Voice: composed, curious, ambitious, and internationally oriented.
- Avoid: conventional academic template, AI product landing page, card-heavy dashboard, and editorial magazine imitation.

### Visual North Star

The page should feel like a precise research instrument that has been annotated by a person who moves between institutions, disciplines, and cities. Warm paper neutrals preserve credibility; muted Yale blue carries interaction and conceptual connections.

## Information Architecture

### Desktop

The left rail remains fixed and contains:

1. Portrait or existing placeholder.
2. Role line: Scholar · Builder · Explorer.
3. Name, affiliation, location, and concise biography.
4. GitHub, Scholar, Email, and CV links.
5. Compact reading-progress navigation for Research, Experience, Papers, Projects, and Beyond Work.

The right column contains:

1. Compact top line with page identity and language switch.
2. Hero statement: “Ideas across scales.”
3. Interactive research atlas connecting the four research directions.
4. Research direction rows.
5. Existing Experience, Selected Papers, Projects, Beyond Work, disclosure, and footer sections.

### Mobile and Tablet

- The fixed rail becomes a normal top profile section.
- The reading-progress navigation becomes a compact horizontal section navigation.
- The atlas remains visible but reduces decorative geometry and label size.
- All content follows the same semantic document order as desktop.
- Paper and project rows stack without horizontal overflow.

## Research Atlas

The atlas is a lightweight HTML and CSS visualization, not a canvas dependency. Four nodes represent:

1. LLM Scaling Laws.
2. Inference-time Scaling.
3. Market Microstructure.
4. AdS/CFT & Quantum Gravity.

Thin connecting paths express the shared question of how systems behave across scale, information, and computation. Each node is paired with the matching research row through a shared `data-research-key`.

### Interaction

- Hovering or focusing a node activates its matching research row.
- Hovering or focusing a research row activates its node and connected path.
- Active states use muted blue, a subtle background tint, and a small horizontal title shift.
- Pointer movement may create one soft local highlight inside the atlas. It must not replace the cursor or follow the pointer outside the atlas.
- Keyboard focus receives the same visible state as pointer hover.

## Motion System

### 1. First-load choreography

- The profile rail enters first with opacity and a 12-pixel vertical offset.
- The hero statement and atlas follow.
- Atlas nodes and research rows appear in a short stagger.
- Total duration stays within 800 milliseconds.
- Motion uses opacity and transform only. A maximum 2-pixel blur may be used during the initial atlas reveal.

### 2. Research hover response

- Matching atlas node and research row activate together.
- Node halo expands slightly.
- Title shifts no more than 4 pixels.
- Non-active directions may reduce opacity slightly, but remain fully readable.

### 3. Paper and project row response

- Hover or focus adds a subtle full-row tint.
- The title changes to deep Yale blue.
- The trailing label or arrow shifts by 3 pixels.
- No resting shadows or card lift.

### 4. Scroll reveal

- Each content section reveals once when it first enters the viewport.
- Reveal uses opacity plus a 12-pixel upward translation.
- Section children may use a short stagger capped at 240 milliseconds.
- Content is visible immediately if JavaScript is unavailable.

### 5. Reading progress

- An IntersectionObserver tracks the current content section.
- The corresponding left-rail item changes color and marker state.
- Clicking an item scrolls to the section using the existing smooth-scroll behavior.
- Browser history is not modified during automatic progress updates.

## Language Behavior

- English remains the default unless a valid stored preference exists.
- Atlas labels, hero copy, section-navigation labels, and accessible descriptions update with the existing locale system.
- Language switching preserves the current scroll position.
- The document language and relevant accessible labels update with the locale.

## Accessibility and Performance

- Honor `prefers-reduced-motion: reduce`; all content becomes immediately visible and spatial motion is disabled.
- Atlas nodes must be keyboard focusable controls or links with useful accessible labels.
- Hover is never the only way to discover content.
- Maintain visible focus indicators and WCAG 2.2 AA contrast.
- Use CSS transforms and opacity instead of layout animation.
- Use IntersectionObserver instead of continuous scroll handlers.
- Throttle pointer-highlight updates with `requestAnimationFrame`.
- Avoid external animation libraries, web fonts, large images, and canvas rendering.

## Content Changes

- Add the concise hero statement and supporting sentence in both languages.
- Replace the existing role line with the approved scholar-builder-explorer identity.
- Keep the current biography short.
- Preserve the four research directions, experience, eight papers, four projects, interests, and fictional-data disclosure.
- Paper authors remain their real authors in the demo content; the page must not imply Xuanchen Lu authored them.

## Implementation Boundaries

- Update `index.html` for semantic atlas and navigation markup.
- Update `assets/content.js` for new bilingual hero, atlas, and navigation labels.
- Update `assets/app.js` for rendering, locale updates, atlas linkage, first-load state, reveal observers, and reading progress.
- Update `assets/styles.css` for the layout, atlas, interaction, responsive states, and reduced motion.
- Extend existing Node tests and browser acceptance coverage where behavior changes.
- Do not introduce a framework, build step, animation dependency, custom cursor, or additional page.

## Acceptance Criteria

1. Desktop shows the fixed profile rail and research-atlas hero in the first viewport.
2. The four atlas nodes and four research rows activate each other on hover and keyboard focus.
3. Papers and projects show restrained row-level hover and focus feedback.
4. Content sections reveal once on scroll and remain visible without JavaScript or under reduced motion.
5. Left-rail navigation reflects the currently viewed section and scrolls to sections when activated.
6. English is the default; switching to Chinese updates all new and existing copy.
7. Mobile layout has no horizontal overflow and preserves logical reading order.
8. The fictional-data disclosure remains legible in both languages.
9. Existing automated tests pass, with new coverage for the added structure and locale content.

## Validation

- Run the Node test suite with `npm test`.
- Serve the static site locally and verify desktop and mobile layouts.
- Verify English and Chinese switching.
- Verify atlas linkage with mouse and keyboard.
- Verify section progress during scroll.
- Verify reduced-motion behavior.
- Check the browser console for runtime errors.
