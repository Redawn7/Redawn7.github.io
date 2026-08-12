# Redawn7 Personal Homepage Design

## Objective

Build a polished bilingual personal homepage for `https://redawn7.github.io/`. It introduces Luxuan Chen to a broad audience, then makes research, publications, and software projects easy to scan. The first release uses clearly disclosed fictional academic content for interface testing.

## Audience and success criteria

The primary audience is anyone encountering Luxuan for the first time, not only researchers. Within one screen, visitors should understand the person's name, current identity, location or affiliation, research focus, and how to contact them. Within two minutes, they should be able to browse representative papers and projects without learning a complex navigation system.

Success means:

- The page works as a static GitHub Pages site with no backend.
- Desktop uses a stable left profile column and a scrollable right content column.
- Mobile collapses into a single readable column with identity first.
- Chinese and English can be switched without reloading the page.
- All links have safe placeholder behavior until real URLs are supplied.
- The fictional-data disclosure is visible but visually quiet.
- Core content remains understandable with JavaScript disabled; only language switching depends on JavaScript.

## Visual direction

Use restrained editorial minimalism rather than a card-heavy portfolio template. The physical scene is a prospective collaborator or curious visitor reading the page during the day on a laptop, so the default is a warm, lightly tinted background with dark graphite text and one muted academic-blue accent.

Typography should feel precise and contemporary. Use a system-first sans-serif stack for performance, with strong contrast between the display name, section headings, paper titles, and supporting metadata. Avoid gradients, glass effects, oversized hero statements, decorative dashboards, and repeated identical cards.

The desktop composition is asymmetrical:

- Left: portrait placeholder, name, role, affiliation, short biography, location, research tags, contact links, and a short “Now” note. The column stays visible while the right side scrolls.
- Right: a quiet page heading followed by four numbered sections: Research, Selected Papers, Projects, and Beyond Work.
- Dividers and spacing create hierarchy. Papers are dense editorial rows. Projects use a two-column arrangement only when the viewport has enough room.

## Content model

All visible copy lives in a single structured data module with `zh` and `en` variants. Each paper has year, title, authors, venue, topic, and link label. Each project has category, title, description, and link label. This keeps future replacement of mock data mechanical and prevents Chinese and English versions from drifting.

Initial mock identity:

- Name: Luxuan Chen
- Role: AI Scholar and PhD Candidate
- Affiliation: Yale University, Department of Computer Science
- Focus: trustworthy language-model reasoning, evidence use, human-AI collaboration, and AI for Science
- Location: New Haven, Connecticut

The three publication titles, authorship, venues, and most project entries are fictional. `Creator Evidence Wiki` may describe the locally developed product but must not imply a Yale affiliation. Placeholder outbound links remain inactive and are labelled as demo links rather than pointing to unrelated real papers.

## Interaction design

The language control is a compact two-state `中文 / EN` switch in the top-right of the content area. The selected language is saved in `localStorage`; first visits follow browser language when it begins with `zh`, otherwise English. The document `lang`, accessible labels, visible content, and metadata update together.

Contact items and future publication links use ordinary anchors with clear focus styles. Placeholder links use non-navigation buttons or disabled text so they never lead visitors to false sources. Motion is limited to subtle color and opacity transitions and respects `prefers-reduced-motion`.

## Responsive and accessibility behavior

At wide widths, the layout uses two columns with the profile column capped near 360 pixels. At tablet widths, the profile column becomes narrower and projects fall to one column. At mobile widths, the profile precedes the content, the portrait shrinks, the sticky behavior is removed, and section metadata wraps without horizontal scrolling.

The page must provide semantic landmarks, logical heading order, keyboard-visible focus, sufficient color contrast, alt text for the portrait placeholder or real portrait, and at least 44-pixel touch targets for interactive controls. Content must remain usable at 200% zoom.

## Technical architecture

Use a dependency-light static implementation:

- `index.html`: semantic document shell and no-JavaScript fallback.
- `assets/styles.css`: tokens, layout, typography, responsive rules, and interaction states.
- `assets/content.js`: bilingual content object only.
- `assets/app.js`: rendering, language state, and safe link behavior.
- `assets/avatar.svg`: neutral monogram placeholder that can be replaced by a real portrait without layout changes.
- `tests/site.test.mjs`: Node-based structural and content tests with no application framework.

No build step is required. GitHub Pages serves the repository root directly from `main`. A `.nojekyll` file prevents unwanted Jekyll processing. This architecture is intentionally small so the owner can update publications and projects without understanding a framework.

## Metadata and discoverability

Include a concise bilingual-aware title and description, canonical URL, Open Graph basics, responsive viewport, theme color, and lightweight Person/ProfilePage JSON-LD. Structured data must mark the displayed affiliation and biography as demo content until replaced, or omit claims that could be indexed as factual. The page must not use real publication DOI metadata for fictional papers.

## Testing and acceptance

Automated tests should verify:

- Required semantic sections and the fictional-data disclosure exist.
- Both language dictionaries contain all required fields and matching collection lengths.
- Publication and project placeholder links cannot navigate to false sources.
- The language module selects, applies, and persists the requested locale.
- No external runtime dependencies are required.

Manual checks should cover desktop and mobile layout, keyboard navigation, 200% zoom, reduced motion, JavaScript-disabled fallback, both languages, and direct loading from a static HTTP server. Before publication, validate that no unrelated files from the existing video-knowledge project are included.

## Publication workflow

Create a separate public GitHub repository named `Redawn7.github.io`, commit only this site, push `main`, and verify `https://redawn7.github.io/` returns the published page. Repository creation, commit, and push are authorized by the user’s explicit instruction to complete and publish the site. If the connected GitHub integration cannot create a repository, stop after producing a clean local repository and request only the missing one-time creation step.

## Out of scope for the first release

- Blog or CMS
- Analytics and visitor tracking
- Contact form or backend
- Automatic Google Scholar synchronization
- Dark mode
- Real Yale, publication, or co-author claims before the user supplies verified data

