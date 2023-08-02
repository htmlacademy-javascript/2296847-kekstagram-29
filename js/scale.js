const MAX_VALUE_OF_CONTROL = 100;
const MIN_VALUE_OF_CONTROL = 25;
const VALUE_STEP = 25;
const DEFAULT_VALUE_UNPUT = 100;

const form = document.querySelector('.img-upload__form');
const image = /** @type {HTMLImageElement} */(form.querySelector('.img-upload__preview img'));
const scaleValueInput = /** @type {HTMLInputElement} */(form.querySelector('.scale__control--value'));
const buttonSmaller = form.querySelector('.scale__control--smaller');
const buttonBigger = form.querySelector('.scale__control--bigger');

let currentValue = Number(parseInt(scaleValueInput.value, 10));

/**
 * Увеличивает картинку
 */
const onScaleUpClick = () => {
  if (currentValue < MAX_VALUE_OF_CONTROL) {
    currentValue += VALUE_STEP;
    scaleValueInput.value = `${currentValue}%`;
    image.style.transform = `scale(${currentValue / 100})`;
  }
};

/**
 * Уменьшает картинку
 */
const onScaleDownClick = () => {
  if (currentValue > MIN_VALUE_OF_CONTROL) {
    currentValue -= VALUE_STEP;
    scaleValueInput.value = `${currentValue}%`;
    image.style.transform = `scale(${currentValue / 100})`;
  }
};

/**
 * Сбрасывает размеры картинки на изначальные
 */
const resetScaleValue = () => {
  currentValue = DEFAULT_VALUE_UNPUT;
  scaleValueInput.value = `${currentValue}%`;
  image.style.transform = `scale(${currentValue / 100})`;
};

buttonBigger.addEventListener('click', onScaleUpClick);
buttonSmaller.addEventListener('click', onScaleDownClick);

export {resetScaleValue};
