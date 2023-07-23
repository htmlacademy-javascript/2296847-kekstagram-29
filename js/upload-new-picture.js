import {renderPopup} from './new-picture-for-upload.js';

/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector('#upload-select-image');
const pristine = new Pristine(form, {
  classTo:  'img-upload__field-wrapper',
  errorTextParent:  'img-upload__field-wrapper'
});

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
};

form.addEventListener('change', onFormChange);
form.addEventListener('hide', onFormHide);

renderPopup();
