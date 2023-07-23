import { renderPopup } from './new-picture-for-upload';

const form = document.querySelector('#upload-select-image');

/**
 * @param {Event & {target: HTMLInputElement}} event
 */
const onFormChange = (event) => {
  if (event.target.matches('#upload-file')) {
    const [data] = event.target.files;

    renderPopup(data);
  }
};

form.addEventListener('change', onFormChange);
