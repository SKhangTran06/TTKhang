import { readdir, readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const folder = new URL('../post/', import.meta.url);
const files = (await readdir(folder)).filter(name => /^Post_[1-9]\d*\.json$/.test(name));
const posts = await Promise.all(files.map(async name => {
  const post = JSON.parse((await readFile(new URL(name, folder), 'utf8')).replace(/^\uFEFF/, ''));
  const number = Number(name.match(/\d+/)[0]);
  if (typeof post.topic !== 'string' || !post.topic.trim()) throw new Error(`${name}: topic is required`);
  const paragraphs = Array.isArray(post.content) ? post.content : [post.content];
  if (!paragraphs.length || paragraphs.some(value => typeof value !== 'string') || !paragraphs.join('').trim()) throw new Error(`${name}: content must be text or an array of paragraphs`);
  let dateTime = post.dateTime;
  if (!dateTime) {
    dateTime = execFileSync('git', ['log', '--diff-filter=A', '--format=%aI', '--', `post/${name}`], { cwd: root, encoding: 'utf8' }).trim().split(/\r?\n/).at(-1);
    if (!dateTime) throw new Error(`${name}: commit the file first or fill in dateTime`);
  }
  if (typeof dateTime !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:\d{2})$/.test(dateTime) || !Number.isFinite(Date.parse(dateTime))) throw new Error(`${name}: use an ISO dateTime with timezone, e.g. 2026-10-24T20:30:00+07:00`);
  return { number, topic: post.topic.trim(), dateTime, content: paragraphs.join('\n\n') };
}));
posts.sort((a,b) => Date.parse(b.dateTime) - Date.parse(a.dateTime) || b.number - a.number);
await writeFile(new URL('posts.json', folder), JSON.stringify(posts, null, 2) + '\n');
console.log(`Collected ${posts.length} blog post(s). Example.json is never published.`);
