import {openPopup} from './popup.js';
import {pristine} from './validators.js';
import {resetScaleValue} from './scale.js';
import {resetEffect} from'./effects-slider.js';
import {request} from './utils.js';
import {renderStatus} from './status.js';

/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector('.img-upload__form');
const popup = document.querySelector('.img-upload__overlay');
const image = popup.querySelector('img');
const effectList = form.querySelector('.effects');

const sendFormData = async () => {
  const url = form.getAttribute('action');
  const method = form.getAttribute('method');
  const body = new FormData(form);

  await request(url, {method, body});
};

/**
 * @param {string} url
 */
const setPreviewUrl = (url) => {
  image.setAttribute('src', url);

  effectList.querySelectorAll('span').forEach((it) => {
    it.style.setProperty('background-image', `url(${url})`);
  });
};

/**
 * @param {Event & {target: HTMLInputElement}} event
 */
const onFormChange = (event) => {
  if (event.target.matches('#upload-file')) {
    const [data] = event.target.files;
    const types = event.target.getAttribute('accept').split(', ');

    if (types.some((it) => data.name.endsWith(it))) {
      openPopup(popup);
      setPreviewUrl(URL.createObjectURL(data));

    } else {
      const title = 'Неподдерживаемый формат';
      const button = 'Попробовать другой';

      renderStatus('error', {title, button});
      form.reset();
    }
  }
};

const onFormHide = () => {
  pristine.reset();
  resetScaleValue();
  resetEffect();
};

/**
 * @param {boolean} flag
 */
const setSubmitBlocking = (flag) => {
  form['upload-submit'].toggleAttribute('disabled', flag);
};

const resetFormAndHidePopup = () => {
  form['upload-cancel'].click();
};

/**
 * @param {SubmitEvent} event
 */
const onFormSubmit = async (event) => {
  event.preventDefault();

  if (!pristine.validate()) {
    return;
  }

  try {
    setSubmitBlocking(true);
    await sendFormData();
    resetFormAndHidePopup();
    renderStatus('success');
  } catch {
    renderStatus('error');
  } finally {
    setSubmitBlocking(false);
  }
};

form.addEventListener('change', onFormChange);
form.addEventListener('hide', onFormHide);
form.addEventListener('submit', onFormSubmit);


