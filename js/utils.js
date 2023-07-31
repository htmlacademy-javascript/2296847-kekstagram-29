/**
 * Функция отправляет запросы на сервер
 * @param {string} url
 * @param {RequestInit} [options]
 * @returns
 */
const request = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Ошибка ${response.status}`);
  }
  return response.json();
};

/**
 * Устраняет дребезжание
 * @template {Function} T
 * @param {T} callback
 * @param {number} delay
 * @returns {T}
 */
const throttle = (callback, delay = 500) => {
  let timeoutId;
  let lastCallTime;

  // @ts-ignore
  return (...args) => {
    const elapsedTime = Date.now() - lastCallTime;
    const newDelay = Math.max(delay - elapsedTime, 0);

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
      lastCallTime = Date.now();
    }, newDelay);
  };
};

export {request, throttle};
