# Living Research Index Refinement

## Goal

Turn the current personal homepage into a more distinctive and useful research index without losing its restrained visual character.

## Design direction

Keep the warm paper palette, fixed profile rail, numbered sections, and research atlas. Improve the page through stronger narrative, functional navigation, denser publication presentation, and a clear closing invitation.

The page should feel like one connected research practice, not four unrelated specialties.

## 1. Compact identity rail

The desktop rail must fit within a 1280 by 720 viewport without internal scrolling.

- Keep the portrait, name, current affiliation, location, one short biography, working links, and section navigation.
- Remove the four research chips because the Research section repeats them.
- Compress the biography to two concise sentences.
- Reduce or remove the separate Now block when viewport height is limited.
- Remove unavailable Email and CV controls until real destinations exist. Do not invent personal contact details.
- Preserve the current stacked mobile reading order.

## 2. Functional research atlas

The atlas becomes navigation instead of decoration.

- Render every node as an anchor linked to its matching research entry.
- Give every research entry a stable section ID and `scroll-margin-top`.
- Hover and keyboard focus continue to highlight the matching node and entry.
- Activate the matching connector path while the node is active.
- Add one short research question to each entry. The question explains the practical idea behind the direction in plain language.
- Keep all animation subtle and disable it under reduced-motion preferences.

## 3. Connected experience story

Present education as a chronological path from physics and computing to current doctoral work.

- Use a restrained vertical timeline instead of four equal rows.
- Present the UC Berkeley exchange as a nested step within the NYU Shanghai undergraduate period.
- Keep dates, institution, program, and one compact focus phrase.
- Avoid logos, seals, and decorative institutional branding.

## 4. Publication credibility

Make the six fictional publications easier to scan and more informative.

- Show three representative publications initially when JavaScript is available.
- Add an accessible `View all 6 publications` control that expands inline.
- Show all six publications when JavaScript is unavailable.
- Replace repeated `Conference paper` metadata with author role and one concise contribution sentence.
- Preserve year, authors, venue, and research topic.
- Do not add fabricated PDF, code, DOI, citation, award, or external publication links.

## 5. Closing invitation

End the page with a compact collaboration statement that connects the four research areas.

- Use direct language about research conversations and unusual collaborations.
- Show only verified existing destinations, currently GitHub and the Yale Computer Science link.
- Keep the fictional-data disclosure visible immediately below the invitation.
- Do not use a large hero treatment, card, gradient, or decorative metric.

## 6. Accessibility and responsive behavior

- Change primary section headings from `h3` to `h2` while preserving their appearance.
- Keep the language switch visually compact but provide a 44px effective touch target.
- Keep visible focus styles for all links and buttons.
- Add an edge cue and scroll snapping to the horizontal mobile section navigation.
- Preserve keyboard access for atlas navigation and publication expansion.
- Maintain zero horizontal overflow at 390px.

## Acceptance criteria

- The desktop profile rail does not scroll at 1280 by 720.
- Atlas nodes navigate to the correct research entries.
- Focus and hover connect each node, path, and research entry.
- The initial publication view contains three rows and expands to six.
- All six rows remain visible without JavaScript.
- The page has a valid heading hierarchy starting with one `h1`, followed by `h2` section headings.
- The mobile page has no horizontal overflow and exposes all section-navigation items.
- Existing bilingual rendering, reduced-motion behavior, and fictional-data disclosure remain intact.

## Out of scope

- Real portrait production
- Real email address or CV file
- Real publication links or claims
- New pages, backend services, analytics, or third-party libraries
