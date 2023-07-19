import { renderBigPicture } from './big-picture';

/**
 * @type {HTMLTemplateElement}
 */
const smallPictureTemplate = document.querySelector('#picture');
const smallPictureList = document.querySelector('.pictures');

/**
 * Функция отрисовывает маленькую фотографию
 * @param {Picture} data
 * @returns {HTMLAnchorElement}
 */
const renderSmallPicture = (data) => {
  const smallPicture = /** @type {HTMLAnchorElement} */ (smallPictureTemplate.content.querySelector('.picture').cloneNode(true));
  smallPicture.querySelector('.picture__img').setAttribute('src', data.url);
  smallPicture.querySelector('.picture__img').setAttribute('alt', data.description);
  smallPicture.querySelector('.picture__likes').textContent = String(data.likes);
  smallPicture.querySelector('.picture__comments').textContent = String(data.comments.length);

  smallPicture.addEventListener('click', (evt) => {
    renderBigPicture(data);
    evt.preventDefault();
  });

  return smallPicture;
};

/**
 * Функция отрисовывает маленькие фотографии
 * @param {Array<Picture>} photos
 */
const renderSmallPictures = (photos) => {
  const smallPictureFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const smallPicture = renderSmallPicture(photo);
    smallPictureFragment.append(smallPicture);
  });

  return smallPictureList.append(smallPictureFragment);
};

export {renderSmallPictures};
