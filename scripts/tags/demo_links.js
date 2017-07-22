'use strict';

/**
* demo_links tag
*
* Syntax:
*   {% demo_links download_link [demo_link] %}
*/

hexo.extend.tag.register('demo_links', (args, content) => {

  const attributes = 'class="btn btn--primary" target="_blank" rel="noopener"';
  const downloadLink = `<a href="${args[0]}" ${attributes}>Download</a>`;

  // optional
  const demoLink = args[1] ? `<a href="${args[1]}" ${attributes}>Demo</a>` : '';

  return `<div class="button-container">${downloadLink}${demoLink}</div>`;

});
