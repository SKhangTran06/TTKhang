# T. T. Khang — Academic website

Responsive, dependency-free HTML/CSS/JavaScript website for GitHub Pages.

## Preview and customize

For local preview, run `node scripts/build-posts.mjs` and serve the repository with a local HTTP server. No dependencies need installing.
Edit the biography and provisional name in `index.html`. Edit accepted publications in `content.js`. Blog publishing instructions are in `post/README.md`. Publication abstract summaries are paraphrased from the linked source papers; venue and author details follow the supplied bibliography. Theme and motion live in `styles.css`.

## GitHub Pages

In repository Settings > Pages, select **GitHub Actions** as the source. The included workflow builds the post feed and deploys the website on pushes to main or master. Relative paths support repository subpaths.

## Blog publishing

Copy post/Example.json to post/Post_1.json, fill in the topic and content, then commit/push. Continue with Post_2.json and so on. Leave dateTime blank for the first commit timestamp, or supply your own. All posts are collected automatically; the example is excluded. See [post/README.md](post/README.md).

## Accessibility

Native keyboard-accessible publication disclosures, visible focus indicators, responsive layouts, hash navigation with browser history, and reduced-motion support. Smooth disclosure height is a progressive enhancement; other browsers still expand normally.
