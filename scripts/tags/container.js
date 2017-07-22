'use strict';

/**
* container tag
*
* Syntax:
*   {% container [css classes] %}content{% endcontainer %}
*/

hexo.extend.tag.register('container', (args, content) => {

  const classAttr = args.length ? `class="${args.join(' ')}"` : '';
  return `<div ${classAttr}>${content}</div>`;

}, { ends: true });
