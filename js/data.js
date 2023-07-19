import {getRandomNumber, getItemFromArray} from './utils.js';

const descriptions = [
  'Тачки',
  'Карты',
  'Деньги',
  '2 ствола?',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Lili',
  'Piter',
  'Alex',
  'Ulian',
  'Fedot',
];

/**
 * Создает комментарий к одной фотографии
 * @param {number} id
 * @returns {PictureComment}
 */
const getPictureComment = (id) => {
  const avatar = `img/avatar-${getRandomNumber(1, 6)}.svg`;
  const message = getItemFromArray(messages);
  const name = getItemFromArray(names);

  return {id, avatar, message, name};
};

/**
 * Создает массив комментариев к фотографии
 * @param {number} length
 * @returns{Array<PictureComment>}
 */
const makeCommentsArray = (length) => {
  const items = new Array(length).fill(1);

  return items.map((start, index) => getPictureComment(start + index));
};

/**
 * Создает описание одной фотографии, опубликованной пользователем
 * @param {number} id
 * @returns {Picture}
 */
const getPictureDescription = (id) => {
  const url = `photos/${id}.jpg`;
  const description = getItemFromArray(descriptions);
  const likes = getRandomNumber(15, 200);
  const comments = makeCommentsArray(getRandomNumber(0, 30));

  return {id, url, description, likes, comments};
};

/**
 * Создает массив из фотографий
 * @param {number} length
 * @returns {Array<Picture>}
 */
const makePictureArray = (length = 25) => {
  const items = new Array(length).fill(1);

  return items.map((start, index) => getPictureDescription(start + index));
};

(makePictureArray(25));

export {makePictureArray};
