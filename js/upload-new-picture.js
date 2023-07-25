import {renderPopup} from './new-picture-for-upload.js';
import {form} from './validators.js';
import {resetScaleValue} from './scale.js';

/**
 * @param {Event & {target: HTMLInputElement}} event
 */
const onFormChange = (event) => {
  if (event.target.matches('#upload-file')) {
    const [data] = event.target.files;

    renderPopup(data);
  }
};

const onFormHide = () => {
  form.reset();
  resetScaleValue();
};

form.addEventListener('change', onFormChange);
form.addEventListener('hide', onFormHide);
