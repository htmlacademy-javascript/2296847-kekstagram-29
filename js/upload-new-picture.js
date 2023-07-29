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

/**
 * @param {File} data
 */
const renderPopup = (data) => {

  void data;

  openPopup(popup);
};

const sendFormData = async () => {
  const url = form.getAttribute('action');
  const method = form.getAttribute('method');
  const body = new FormData(form);

  await request(url, {method, body});
};

/**
 * @param {Event & {target: HTMLInputElement}} event
 */
const onFormChange = (event) => {
  if (event.target.matches('#upload-file')) {
    const [data] = event.target.files;
    const types = event.target.getAttribute('accept').split(', ');

    if (types.some((it) => data.name.endsWith(it))) {
      renderPopup(data);

    } else {
      const title = 'Неподдерживаемый формат';
      const button = 'Попробовать другой';

      renderStatus('error', {title, button});
      form.reset();
    }
  }
};

const onFormHide = () => {
  form.reset();
  resetScaleValue();
  resetEffect();
};


/**
 * @param {SubmitEvent} event
 */
async function onFormSubmit(event) {
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
}

/**
 * @param {boolean} flag
 */
function setSubmitBlocking(flag) {
  form['upload-submit'].toggleAttribute('disabled', flag);
}

function resetFormAndHidePopup() {
  form['upload-cancel'].click();
}

form.addEventListener('change', onFormChange);
form.addEventListener('hide', onFormHide);
form.addEventListener('submit', onFormSubmit);


