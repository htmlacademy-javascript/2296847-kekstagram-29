/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector('.img-upload__form');

// @ts-ignore
const pristine = new Pristine(form, {
  classTo:  'img-upload__field-wrapper',
  errorTextParent:  'img-upload__field-wrapper'
});

/**
 * @type {HTMLInputElement}
 */
const hashTagInput = form.querySelector('.text__hashtags');

/**
 * @type {HTMLTextAreaElement}
 */
const commentInput = form.querySelector('.text__description');

/**
 * @param {string} value
 * @returns {Array<string>}
 */
const segmentWords = (value) => value.split(' ').filter(Boolean);

/**
 * Проверяет поля ввода хэш-тегов на соответствие шаблону
 */
pristine.addValidator(hashTagInput, (value, hashTagPattern = /^#[a-zа-яё0-9]{1,19}$/i) => {
  const words = segmentWords(value);

  return words.every((it) => hashTagPattern.test(it));
}, 'Хэш-тег начинается с символа # должен состоять из букв и чисел, и не может быть длиннее 20 символов', 1, false);

/**
 * Проверяет хэш-тэг на уникальность
 */
pristine.addValidator(hashTagInput, (value) => {
  const words = segmentWords(value.toUpperCase());
  const wordSet = new Set(words);

  return words.length === wordSet.size;
}, 'Один и тот же хэш-тег не может быть использован дважды', 1, false);

/**
 * Проверяет лимит хэш-тэгов
 */
pristine.addValidator(hashTagInput, (value, limit = 5) => {
  const words = segmentWords(value);

  return words.length <= limit;
}, 'Допускается добавить не более 5 уникальных хеш-тегов', 1, false);

/**
 * Проверяет максимальную длину комментария
 */
pristine.addValidator(commentInput, (value, limit = 140) => {
  const words = segmentWords(value);

  return words.every((it) => it.length <= limit);
}, 'В одном комментарии допускается не более 140 символов', 1, false);

form.addEventListener('reset', () => {
  pristine.reset();
});

export {pristine};
