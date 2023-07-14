/**
 * Генерирует случайное число в диапазоне
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const getRandomNumber = (min, max) => {
  const value = min + Math.random() * (max - min);

  return Math.round(value);
};

/**
 * Берет случайное значение из массива
 * @template T
 * @param {Array<T>} items
 * @returns {T}
 */
const getItemFromArray = (items) => {
  const index = Math.floor(Math.random() * items.length);

  return items[index];
};

export {getRandomNumber, getItemFromArray};
