import { openPopup } from './popup.js';

const COMMENTS_GROUP_SIZE = 5;

/**
 * @type {ReturnType<renderCommentsGroup>}
 */
let renderNextComments;

const bigPicture = document.querySelector('.big-picture');
const commentsList = bigPicture.querySelector('.social__comments');
const commentsItem = commentsList.querySelector('.social__comment');

/**
 * @param {MouseEvent & {target: Element}} event
 */
const onBigPictureClick = (event) => {
  if (event.target.closest('.comments-loader')) {
    renderNextComments();
  }
};

/**
 * Функция создает комментарий
 * @param {PictureComment} data
 * @returns {HTMLLIElement}
 */
const createComment = (data) => {
  const comment = /** @type {HTMLLIElement} */ (commentsItem.cloneNode(true));

  comment.querySelector('.social__picture').setAttribute('src', data.avatar);
  comment.querySelector('.social__picture').setAttribute('alt', data.name);
  comment.querySelector('.social__text').textContent = data.message;

  return comment;
};

/**
 * Отрисовывает группу комментариев
 * @param {Array<PictureComment>} data
 * @returns {() => void}
 */
const renderCommentsGroup = (data) => {
  const commentsLoadButton = bigPicture.querySelector('.comments-loader');
  const commentsCounter = bigPicture.querySelector('.social__comment-count');
  const totalCount = bigPicture.querySelector('.comments-count');

  totalCount.textContent = String(data.length);
  data = structuredClone(data);
  commentsList.replaceChildren();

  return () => {
    commentsList.append(...data.splice(0, COMMENTS_GROUP_SIZE).map(createComment));
    commentsLoadButton.classList.toggle('hidden', data.length === 0);
    commentsCounter.textContent = `${Number(totalCount.textContent) - data.length} из ${totalCount.textContent} комментариев`;
  };
};

/**
 * Функция создает большую фотографию
 * @param {Picture} data
 */
const renderBigPicture = (data) => {

  bigPicture.querySelector('.big-picture__img img').setAttribute('src', data.url);
  bigPicture.querySelector('.social__caption').textContent = data.description;
  bigPicture.querySelector('.likes-count').textContent = String(data.likes);
  bigPicture.querySelector('.comments-count').textContent = String(data.comments.length);
  bigPicture.querySelector('.social__comments').replaceChildren(...data.comments.map(createComment));

  renderNextComments = renderCommentsGroup(data.comments);
  renderNextComments();
  bigPicture.addEventListener('click', onBigPictureClick);

  openPopup(bigPicture);
};

export {renderBigPicture};
