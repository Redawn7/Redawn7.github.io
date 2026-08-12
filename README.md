# Redawn7.github.io

A dependency-free bilingual personal homepage for research, publications, and software projects.

## Preview locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173/`.

## Test

```bash
npm test
```

The tests use Node's built-in test runner; no package installation is required.

## Replace the mock content

Edit `assets/content.js`. Keep the `en` and `zh` objects structurally aligned. Publication and project records currently use `href: null` and `demo: true`, which makes their action labels intentionally non-navigating.

When real, verified links are available, update both language records together and change the renderer deliberately. Do not attach fictional titles to unrelated real papers.

## Replace the portrait

Replace `assets/avatar.svg` with an optimized portrait asset and update the image path in `index.html`. Keep the image's `width`, `height`, and meaningful bilingual alt text to prevent layout shift and preserve accessibility.

## Fictional-data policy

The initial biography, Yale affiliation, publications, co-author names, venues, and most projects are interface-testing placeholders. The page contains a visible disclosure in both languages. Replace or verify these claims before presenting them as real academic history.

## Publish

The site is designed for a public repository named `Redawn7.github.io`. GitHub Pages serves the `main` branch from the repository root with no build action. The `.nojekyll` file keeps the static assets untouched.
