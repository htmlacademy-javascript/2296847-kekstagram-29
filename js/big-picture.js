import { openPopup } from './popup.js';

const bigPicture = document.querySelector('.big-picture');
const commentsList = bigPicture.querySelector('.social__comments');
const commentsItem = commentsList.querySelector('.social__comment');

/**
 * Функция создает комментарий
 * @param {PictureComment} data
 * @returns {HTMLLIElement}
 */
const createComment = (data) => {
  const comment = /** @type {HTMLLIElement} */ (commentsItem.cloneNode(true));

  comment.querySelector('social__picture').setAttribute('src', data.avatar);
  comment.querySelector('social__picture').setAttribute('alt', data.name);
  comment.querySelector('social__text').textContent = data.message;

  return comment;
};

/**
 * Функция создает большую фотографию
 * @param {Picture} data
 */
const renderBigPicture = (data) => {

  bigPicture.querySelector('.big-picture__img').setAttribute('src', data.url);
  bigPicture.querySelector('.social__caption').textContent = data.description;
  bigPicture.querySelector('.likes-count').textContent = String(data.likes);
  bigPicture.querySelector('.comments-count').textContent = String(data.comments.length);
  bigPicture.querySelector('.social__comments').replaceChildren(...data.comments.map(createComment));

  openPopup(bigPicture);
};

export {renderBigPicture};
