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

/**
 * Функция приводит значение времени к минутам
 * @param {string} time
 * @returns {number}
 */
const parseTime = (time) => {
  const [hours, minutes] = time.split(':').map(Number);

  return hours * 60 + minutes;
};

/**
 * Функция проверяет укладывается ли встреча в рабочее время
 * @param {string} workStart
 * @param {string} workEnd
 * @param {string} meetingStart
 * @param {number} meetingDuration
 * @returns {boolean}
 */
const isWithinWorkingTime = (workStart, workEnd, meetingStart, meetingDuration) => {
  const workStartTime = parseTime(workStart);
  const workEndTime = parseTime(workEnd);
  const meetingStartTime = parseTime(meetingStart);

  return (meetingStartTime >= workStartTime &&
    meetingDuration <= workEndTime - meetingStartTime);
};

isWithinWorkingTime('08:00', '14:30', '14:00', 90);
