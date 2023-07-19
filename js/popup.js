/**
 * Закрывает popup нажатием Escape
 * @param {KeyboardEvent} evt
 */
const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup(document.querySelector('.overlay:not(.hidden)'));
  }
};

/**
 * Закрывает popup нажатием мыши
 * @param {MouseEvent & {target: Element, currentTarget: Element}} evt
 */
const onCloseButtonClick = (evt) => {
  if (evt.target.closest('.cancel')) {
    closePopup(evt.currentTarget);
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


