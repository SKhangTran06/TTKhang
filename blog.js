(() => {
  'use strict';
  const feed = document.getElementById('blog-feed');
  const status = document.getElementById('blog-status');
  const retry = document.getElementById('blog-retry');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const observer = !reduced && 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08 }) : null;
  function card(post) {
    const article = document.createElement('article');
    article.className = 'blog-card';
    const heading = document.createElement('h2');
    heading.textContent = post.topic;
    const time = document.createElement('time');
    time.dateTime = post.dateTime;
    time.textContent = new Intl.DateTimeFormat(undefined, {
      dateStyle: 'long', timeStyle: 'short'
    }).format(new Date(post.dateTime));
    const content = document.createElement('p');
    content.className = 'blog-content';
    // Render Markdown links without interpreting post content as HTML.
    const links = /\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)/g;
    let start = 0;
    for (const match of post.content.matchAll(links)) {
      content.append(document.createTextNode(post.content.slice(start, match.index)));
      const link = document.createElement('a');
      link.textContent = match[1];
      link.href = match[2];
      content.append(link);
      start = match.index + match[0].length;
    }
    content.append(document.createTextNode(post.content.slice(start)));
    article.append(heading, time, content);
    if (observer) { article.classList.add('will-reveal'); observer.observe(article); }
    return article;
  }
  async function load() {
    retry.hidden = true;
    status.textContent = 'Loading posts…';
    try {
      const response = await fetch('post/posts.json', { cache: 'no-cache' });
      if (!response.ok) throw new Error('Posts unavailable');
      const posts = await response.json();
      posts.sort((a,b) => Date.parse(b.dateTime) - Date.parse(a.dateTime) || b.number - a.number);
      feed.replaceChildren(...posts.map(card));
      status.textContent = posts.length ? '' : 'No posts yet. New updates will appear here.';
    } catch {
      status.textContent = 'Posts could not be loaded. Please try again.';
      retry.hidden = false;
    }
  }
  retry.addEventListener('click', load);
  load();
})();
