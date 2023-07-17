/**
 * @type {HTMLTemplateElement}
 */
const smallPhotoTemplate = document.querySelector('#picture');
const smallPhotoList = document.querySelector('.pictures');

/**
 * Функция отрисовывает маленькую фотографию
 * @param {Photo} data
 * @returns {HTMLAnchorElement}
 */
const renderSmallPhoto = (data) => {
  const smallPhoto = /** @type {HTMLAnchorElement} */ (smallPhotoTemplate.content.querySelector('.picture').cloneNode(true));
  smallPhoto.querySelector('.picture__img').setAttribute('src', data.url);
  smallPhoto.querySelector('.picture__img').setAttribute('alt', data.description);
  smallPhoto.querySelector('.picture__likes').textContent = String(data.likes);
  smallPhoto.querySelector('.picture__comments').textContent = String(data.comments.length);

  return smallPhoto;
};

/**
 * Функция отрисовывает маленькие фотографии
 * @param {Array<Photo>} photos
 */
const renderSmallPhotos = (photos) => {
  const smallPhotoFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const smallPhoto = renderSmallPhoto(photo);
    smallPhotoFragment.append(smallPhoto);
  });

  return smallPhotoList.append(smallPhotoFragment);
};

export {renderSmallPhotos};
