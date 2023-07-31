import {renderBigPicture} from './big-picture.js';
import {debounce} from './utils.js';

const RANDOM_LIMIT = 10;

/**
 * @type {HTMLTemplateElement}
 */
const smallPictureTemplate = document.querySelector('#picture');
const smallPictureList = document.querySelector('.pictures');
const sortingButtons = document.querySelector('.img-filters');
const defaultButton = sortingButtons.querySelector('#filter-default');
const randomButton = sortingButtons.querySelector('#filter-random');
const discussedButton = sortingButtons.querySelector('#filter-discussed');


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

  smallPicture.addEventListener('click', (event) => {
    renderBigPicture(data);
    event.preventDefault();
  });

  return smallPicture;
};

/**
 * Функция отрисовывает галлерею маленьких фотографий
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

/**
 * Перерисовывает галлерею маленьких фотографий
 * @param {Array<Picture>} newData
 */
const updateSmallPicrures = (newData) => {
  smallPictureList.querySelectorAll('.picture').forEach((element) => element.remove());
  renderSmallPictures(newData);
};

/**
 * Показывает кнопки сортировки изображений
 */
const showSortingButtons = () => {
  sortingButtons.classList.remove('img-filters--inactive');
};

/**
 * Меняет активную кнопку
 * @param {HTMLButtonElement} button
 */
const changeSorting = (button) => {
  sortingButtons.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const createSortingFilter = (type, data) => {
  const throttledGalery = debounce(updateSmallPicrures);

  if (type === 'onDefaultClick') {
    return (event) => {
      throttledGalery(data);
      changeSorting(event.target);
    };
  }
  if (type === 'onRandomClick') {
    return (event) => {
      const randomData = data.toSorted(() => Math.random() - 0.5).slice(0, RANDOM_LIMIT);
      throttledGalery(randomData);
      changeSorting(event.target);
    };
  }
  if (type === 'onDiscussedClick') {
    return (event) => {
      const popularData = data.toSorted((img1, img2) => img2.comments.length - img1.comments.length);
      throttledGalery(popularData);
      changeSorting(event.target);
    };
  }
};

/**
 * Показывает сортированные изображения
 * @param {Array<Picture>} data
 */
const initSortingButtons = (data) => {

  showSortingButtons();

  defaultButton.addEventListener('click', createSortingFilter('onDefaultClick', data));
  randomButton.addEventListener('click', createSortingFilter('onRandomClick', data));
  discussedButton.addEventListener('click', createSortingFilter('onDiscussedClick', data));

};

export {renderSmallPictures, initSortingButtons};
