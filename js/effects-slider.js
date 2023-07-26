const form = document.querySelector('.img-upload__form');
const sliderContainer = form.querySelector('.img-upload__effect-level');
const effectLevelSlider = form.querySelector('.effect-level__slider');
const effectList = form.querySelector('.effects');
const image = /** @type {HTMLImageElement} */(form.querySelector('.img-upload__preview img'));
const effectLevelValue = /** @type {HTMLInputElement} */(form.querySelector('.effect-level__value'));

/**
 * @param {EffectType} type
 */
const createOptions = (type = 'none') => {
  /**
   * @type {Record<EffectType, Array<number>>}
   */
  const effectRangeMap = {
    none: [0, 100, 1],
    chrome: [0, 1, .1],
    sepia: [0, 1, .1],
    marvin: [0, 100, 1],
    phobos: [0, 3, .1],
    heat: [1, 3, .1]
  };

  /**
   * @type {Record<EffectType, (value: number) => string>}
   */
  const effectFormatMap = {
    none: () => '',
    chrome: (value) => `grayscale(${value})`,
    sepia: (value) => `sepia(${value})`,
    marvin: (value) => `invert(${value}%)`,
    phobos: (value) => `blur(${value}px)`,
    heat: (value) => `brightness(${value})`
  };

  const [min, max, step] = effectRangeMap[type];
  const format = {
    to: effectFormatMap[type],
    from: Number
  };

  return {
    range: {min, max},
    step,
    start: max,
    format,
    behaviour: 'snap',
    connect: 'lower'
  };
};

//@ts-ignore
const slider = noUiSlider.create(effectLevelSlider, createOptions());

/**
 * Добавляет эффект
 * @param {EffectType} type
 */
const setEffect = (type) => {
  slider.updateOptions(createOptions(type));
  sliderContainer.classList.toggle('hidden', type === 'none');
};

/**
 * Меняет интенсивность эфеекта
 */
const changeEffectLevel = () => {
  const level = slider.get(true);
  effectLevelValue.value = level;
  image.style.filter = slider.get();
};

slider.on('update', () => changeEffectLevel());

/**
 * Сбрасывает эффект
 */
const resetEffect = () => {
  sliderContainer.classList.add('hidden');
  image.style.filter = 'none';
};

const onEffectChange = (event) => {
  setEffect(event.target.getAttribute('value'));
};

effectList.addEventListener('change', onEffectChange);

export {resetEffect};
