# Compact Language Switch Placement

## Goal

Move the bilingual switch away from the `01 Research` baseline and reduce its visual weight.

## Approved design

- Keep the switch inside the Research section so it scrolls naturally with the page.
- Position the toolbar independently at the section's upper-right corner, `0.5rem` from the top edge.
- Reduce each language button from `34px` to `26px` high, with `0.38rem` horizontal padding and a `0.58rem` label.
- Preserve the existing pill shape, selected-state contrast, keyboard focus behavior, language logic, and mobile usability.
- Do not change the Research heading, atlas, content grid, or any other page section.

## Responsive behavior

The switch remains in the upper-right corner at all viewport sizes. It stays visually above the section heading and does not consume a grid row.

## Acceptance criteria

- The switch is visibly above, rather than level with, `01 Research`.
- Both language labels remain readable and clickable.
- The switch does not overlap the section heading or research atlas.
- Existing locale switching continues to work.
