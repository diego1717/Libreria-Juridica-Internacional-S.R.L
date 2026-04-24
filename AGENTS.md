# AGENTS.md

- The root app is now a Vite-powered static storefront. Root files are `index.html`, `styles.css`, `main.js`, `package.json`, and `vite.config.js`.
- Use `npm install`, `npm run dev`, and `npm run build`. Hostinger import should target the repo root and build to `dist/`.
- `main.js` owns the behavior: catalog render, search, category filters, sorting, selected-book list, copy-to-clipboard order text, and active nav highlighting.
- The root site is the product. The nested folders `impeccable-main/` and `ui-ux-pro-max-skill-main/` are design reference repos, not runtime dependencies for the root page.
- Avoid editing the nested reference repos unless the task is explicitly about those repos; changes for the bookstore site should stay in root files.
- If you add real commerce features later, preserve the current no-backend assumption unless the repo gains an actual API, cart flow, or config proving otherwise.
