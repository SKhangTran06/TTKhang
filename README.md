# T. T. Khang — Academic website

Responsive, dependency-free HTML/CSS/JavaScript website for GitHub Pages.

## Preview and customize

Open `index.html` in a browser; no build or installation is required.
Edit the biography and provisional name in `index.html`. Replace the clearly labeled sample publications and post in `content.js`. Theme and motion live in `styles.css`.

## GitHub Pages

After pushing to GitHub, open Settings → Pages, select Deploy from a branch, then choose the branch containing these files and / (root). Relative asset paths support repository subpaths. The .nojekyll file disables unnecessary Jekyll processing.

## Future publishing backend

Posts currently use the fields author, label, title, body, and category. A future API can supply these fields to renderPosts. Rendering uses text nodes instead of injecting HTML. Direct uploading and authentication are deferred as requested. GitHub Pages is static hosting; the future backend must authenticate the owner and enforce write access on the server. Keep secrets out of public files.

## Accessibility

Native keyboard-accessible publication disclosures, visible focus indicators, responsive layouts, hash navigation with browser history, and reduced-motion support. Smooth disclosure height is a progressive enhancement; other browsers still expand normally.
