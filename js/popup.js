/**
 * Закрывает popup нажатием Escape
 * @param {KeyboardEvent} event
 */
const onDocumentKeydown = (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    document.querySelector('.overlay:not(.hidden) .cancel').dispatchEvent(new Event ('click', {bubbles:true}));
  }
};

/**
 * Закрывает popup нажатием мыши
 * @param {PointerEvent & {target: Element, currentTarget: Element}} event
 */
const onCloseButtonClick = (event) => {
  if (event.target.closest('.cancel')) {
    closePopup(event.currentTarget);
  }
};

/**
 * Открывает всплывающее окно
 * @param {Element} popup
 */
function openPopup (popup) {
  popup.classList.remove('hidden');
  popup.scrollTo(0, 0);
  popup.addEventListener('click', onCloseButtonClick);

  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

/**
 * Закрывает всплывающее окно
 * @param {Element} popup
 */
function closePopup (popup) {
  popup.classList.add('hidden');
  popup.scrollTo(0, 0);
  popup.removeEventListener('click', onCloseButtonClick);

  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

export {closePopup, openPopup};


