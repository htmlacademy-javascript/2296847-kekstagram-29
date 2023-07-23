import {openPopup} from './popup.js';

const popup = document.querySelector('.img-upload__overlay');

/**
 * @param {File} data
 */
const renderPopup = (data) => {

  void data;

  openPopup(popup);
};

export {renderPopup};
