/**
 * @param {StatusType} type
 * @param {StatusOptions} options
 */
function renderStatus(type, options = {}) {
  /**
   * @type {HTMLTemplateElement}
   */
  const statusTemplate = document.querySelector(`#${type}`);
  const status = /** @type {Element} */ (
    statusTemplate.content.querySelector(`.${type}`).cloneNode(true)
  );

  Object.keys(options).forEach((key) => {
    status.querySelector(`.${type}__${key}`).textContent = options[key];
  });

  showStatus(status);
}

/**
 * @param {Element} status
 */
function showStatus(status) {
  status.addEventListener('click', onStatusClick);
  document.body.append(status);
  document.addEventListener('keydown', onDocumentKeydown, true);
}

/**
 * @param {Element} status
 */
function hideStatus(status) {
  status.removeEventListener('click', onStatusClick);
  status.remove();
  document.removeEventListener('keydown', onDocumentKeydown, true);
}

/**
 * @param {MouseEvent & {target: Element, currentTarget: Element}} event
 */
function onStatusClick(event) {
  if (event.target.matches('section, button')) {
    hideStatus(event.currentTarget);
  }
}

/**
 * @param {KeyboardEvent} event
 */
function onDocumentKeydown(event) {
  if (event.key.startsWith('Esc')) {
    hideStatus(document.querySelector('.success, .error'));
    event.stopPropagation();
  }
}

export {renderStatus};
