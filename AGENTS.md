# AGENTS.md

- The app at repo root is a static site: `index.html`, `styles.css`, and `main.js`. There is no build step, package manager, or test runner.
- Open the site by loading `index.html` directly in a browser.
- `main.js` owns the only behavior: catalog filters, selected-book list, copy-to-clipboard order text, and active nav highlighting.
- The root site is the product. The nested folders `impeccable-main/` and `ui-ux-pro-max-skill-main/` are design reference repos, not runtime dependencies for the root page.
- Avoid editing the nested reference repos unless the task is explicitly about those repos; changes for the bookstore site should stay in root files.
- If you add real commerce features later, preserve the current no-backend assumption unless the repo gains an actual API, cart flow, or config proving otherwise.
