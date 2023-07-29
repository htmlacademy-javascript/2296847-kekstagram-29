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

export {request};
