# Add a blog post

One-time setup: in GitHub repository Settings > Pages > Build and deployment, select **GitHub Actions**. The included workflow publishes pushes to `main` or `master`. If your publishing branch has another name, update `.github/workflows/pages.yml`.

1. Copy `Example.json` to **Post_1.json** for your first post.
2. Fill in `topic` and `content`. Each item in `content` becomes a paragraph. Keep JSON double quotes and commas; escape quotes inside text as `\"`.
3. Leave `dateTime` blank to use the file's first Git commit timestamp automatically, or enter a date/time with timezone, such as `2026-10-24T20:30:00+07:00`.
4. Commit/push the file on GitHub. The workflow collects all posts and publishes the website.

Next time, add **Post_2.json**, then **Post_3.json**, and so on. Numbering starts at 1. `Post_0.json` and `Example.json` are ignored. Gaps are allowed. All matching `Post_<positive integer>.json` files are included. Posts appear newest date/time first, with larger numbers first for matching timestamps. Editing a post preserves its automatic creation time. Only people with repository write access can publish.

`posts.json` is generated during deployment; do not edit it. Invalid JSON or missing fields fail deployment and keep the last successfully deployed website online.

Add hyperlinks in content using `[link text](https://example.com)`. Linked words are automatically underlined in every post. Other text is displayed as plain text. The optional `_instructions` field in the example is never displayed.

For local preview, run `node scripts/build-posts.mjs`, then serve this repository with a local HTTP server. Fill in `dateTime` for uncommitted files to preview them before committing. Opening `index.html` through `file://` cannot load the feed.
