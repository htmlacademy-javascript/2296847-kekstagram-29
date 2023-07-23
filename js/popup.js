/**
 * Закрывает popup нажатием Escape кроме текстовых полей
 * {KeyboardEvent & {target: Element}} event
 */
const onDocumentKeydown = (event) => {
  const isEscapeKey = event.key === 'Escape';
  const isTextField = event.target.matches('input[type="text"], textarea');

  if (isEscapeKey && !isTextField) {
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
  popup.removeEventListener('click', onCloseButtonClick);
  popup.dispatchEvent(new Event('hide', {bubbles:true}));

  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

export {closePopup, openPopup};


