---
name: Redawn7 Personal Homepage
description: A restrained bilingual profile for research, publications, and independent work.
colors:
  paper: "#F4F2EC"
  surface: "#FAF8F3"
  graphite: "#20252B"
  graphite-muted: "#626970"
  hairline: "#D8D6CF"
  yale-muted: "#315C73"
  yale-deep: "#214457"
typography:
  display:
    fontFamily: "Avenir Next, Avenir, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.65rem, 5vw, 5.6rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Avenir Next, Avenir, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.65rem, 3vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Avenir Next, Avenir, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Avenir Next, Avenir, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Avenir Next, Avenir, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.09em"
rounded:
  sm: "3px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "24px"
  lg: "48px"
  xl: "80px"
components:
  language-option:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "10px 14px"
  language-option-inactive:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.graphite-muted}"
    rounded: "{rounded.pill}"
    padding: "10px 14px"
  tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.yale-deep}"
    rounded: "{rounded.pill}"
    padding: "7px 10px"
---

# Design System: Redawn7 Personal Homepage

## 1. Overview

**Creative North Star: "The Researcher's Index"**

The page feels like a carefully typeset personal index: compact, direct, and made for repeated reading. A stable profile rail establishes the person while numbered content groups create a clear route through research, papers, projects, and life outside work. Asymmetry and disciplined whitespace make the composition memorable without turning it into a magazine spread.

It rejects card-heavy portfolio templates, futuristic AI effects, and ornamental academic branding. The experience remains calm, fast, and truthful.

**Key Characteristics:**

- Fixed identity rail beside a flowing work index
- Warm paper neutrals with one muted blue accent
- Tight headings, comfortable body text, and visible rules
- Editorial rows rather than repeated card grids
- Quiet but readable demo disclosure

## 2. Colors

The restrained palette uses warm paper surfaces, graphite text, and a muted blue reserved for links, focus, and small signals.

### Primary

- **Yale Muted** (`#315C73`): restrained accent for interactive text, section numerals, and focus context.
- **Yale Deep** (`#214457`): hover and high-contrast accent state.

### Neutral

- **Paper** (`#F4F2EC`): page background.
- **Surface** (`#FAF8F3`): portrait field and small controls.
- **Graphite** (`#20252B`): primary text.
- **Graphite Muted** (`#626970`): metadata and supporting text.
- **Hairline** (`#D8D6CF`): dividers and outlines.

**The Rare Accent Rule.** Muted blue occupies less than ten percent of a view. Identity and hierarchy come from type and space first.

## 3. Typography

**Display Font:** Avenir Next with native sans-serif fallbacks
**Body Font:** Avenir Next with native sans-serif fallbacks

**Character:** One committed humanist sans family creates a precise, contemporary voice without an external font request or layout shift. Strong weight, size, and tracking changes provide hierarchy.

### Hierarchy

- **Display** (600, `clamp(2.65rem, 5vw, 5.6rem)`, 0.94): profile name and primary page statement.
- **Headline** (600, `clamp(1.65rem, 3vw, 2.75rem)`, 1.05): page and section leaders.
- **Title** (600, `1.2rem`, 1.3): paper and project titles.
- **Body** (400, `1rem`, 1.65): biography and descriptions, capped near 68 characters.
- **Label** (600, `0.75rem`, `0.09em`): compact metadata and section keys.

**The Two-Speed Rule.** Headlines are tight and compact; prose is open and unhurried. Do not fill the middle with many similar sizes.

## 4. Elevation

The system is flat. Depth comes from a sticky rail, tonal surfaces, spacing, and hairline dividers; no resting shadow is used. Focus rings are state feedback, not elevation.

**The Flat-by-Default Rule.** Do not introduce decorative shadows or floating glass surfaces.

## 5. Components

### Buttons

- **Shape:** pill only for the two-state language control; other actions are text links.
- **Primary:** graphite fill, surface text, `10px 14px` padding.
- **Hover / Focus:** color shift plus a clear two-pixel offset outline; no transform or bounce.
- **Inactive:** surface fill, muted text, hairline boundary.

### Chips

- **Style:** small research labels with surface fill, deep-blue text, and pill geometry.
- **State:** informational only; they are never presented as controls.

### Cards / Containers

- **Corner Style:** cards are not the default grouping device.
- **Background:** the work index remains on the page background.
- **Shadow Strategy:** none.
- **Border:** one-pixel full-width dividers separate records.
- **Internal Padding:** paper and project rhythm varies by hierarchy rather than repeating one box size.

### Navigation

The language control is the only global navigation. Contact links are grouped in the profile rail; work sections follow document order and need no menu on a single page.

### Publication Row

Year, title, authorship, venue, and subject form one aligned row on desktop and a wrapped stack on mobile. Demo actions look secondary and cannot navigate.

## 6. Do's and Don'ts

### Do:

- **Do** establish identity before listing work.
- **Do** use full-width rules, varied spacing, and alignment for grouping.
- **Do** retain a visible fictional-data disclosure in both languages.
- **Do** keep body copy between 45 and 68 characters per line when space allows.
- **Do** preserve meaningful document order when the columns collapse.

### Don't:

- **Don't** resemble a template marketplace portfolio, a card-filled SaaS dashboard, a magazine cover, or a futuristic AI landing page.
- **Don't** use oversized hero slogans, neon or gradient treatments, glassmorphism, generic icon grids, or decorative metrics.
- **Don't** use colored side-stripe borders, gradient text, nested cards, or pure black and white.
- **Don't** hide the fictional-data disclosure through illegible contrast or tiny text.
- **Don't** make demo papers or projects link to unrelated real sources.

