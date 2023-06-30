// @ts-nocheck
/**
 * функция проверки длины строки
 * @param {string} string
 * @param {number} maxLength
 * @returns {boolean}
 */
const checkLenght = (string, maxLength) => string.length <= maxLength;

checkLenght('rfrfkf', 5);

/**
 * Функция для проверки, является ли строка палиндромом
 * @param {number | string} value
 * @returns {boolean}
 */
const isPalindrome = (value) => {
  const normalizedValue = String(value).replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < normalizedValue.length / 2; i++){
    if (normalizedValue.at(i) !== normalizedValue.at(-i - 1)) {
      return false;
    }
    return true;
  }
};

isPalindrome ('топор');

/**
 * Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN
 * @param {number | string} value
 * @returns {number}
 */
const getDigits = (value) => {
  const digits = String(value).replace(/[^0-9]+/g, '');
  return digits ? Number(digits) : NaN;
};

getDigits (23425);
