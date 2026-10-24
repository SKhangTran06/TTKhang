(() => {
  'use strict';
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  function renderPublications(publications) {
    document.getElementById('publication-list').replaceChildren(...publications.map(paper => {
      const card = el('article', 'publication-card');
      const meta = el('div', 'meta', paper.number);
      meta.append(el('span', 'tag', 'SAMPLE PUBLICATION'));
      const details = el('details');
      const summary = el('summary');
      const arrow = el('span', 'arrow', '↓');
      arrow.setAttribute('aria-hidden', 'true');
      summary.append(el('span', '', 'Read abstract'), arrow);
      details.append(summary, el('p', 'abstract', paper.abstract));
      card.append(meta, el('h2', '', paper.title), el('p', 'authors', paper.authors), el('p', 'venue', paper.venue), details);
      return card;
    }));
  }
  function renderPosts(posts) {
    document.getElementById('post-list').replaceChildren(...posts.map(post => {
      const article = el('article', 'post');
      article.append(el('div', 'meta', `${post.author} / ${post.label}`), el('h2', '', post.title), el('p', 'post-body', post.body), el('span', 'category', post.category));
      return article;
    }));
  }
  function navigate(focus = false) {
    const requested = location.hash.slice(1) || 'home';
    const page = ['home', 'publications', 'blog'].includes(requested) ? requested : 'home';
    document.querySelectorAll('.page').forEach(section => { section.hidden = section.id !== page; });
    document.querySelectorAll('[data-page]').forEach(link => {
      if (link.dataset.page === page) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.title = `${{home:'Home',publications:'Publication',blog:'Blog'}[page]} · T. T. Khang`;
    if (focus) {
      document.querySelector(`#${page} h1`).focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }
  renderPublications(window.siteContent.publications);
  renderPosts(window.siteContent.posts);
  window.addEventListener('hashchange', () => navigate(true));
  navigate();
})();
