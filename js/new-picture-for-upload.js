import {openPopup} from './popup.js';

const popup = document.querySelector('.img-upload__overlay');
// const scaleControl = initScaleControl(popup.querySelector('.scale'));

/**
 * @param {File} data
 */
const renderPopup = (data) => {

  void data;

  openPopup(popup);
};

export {renderPopup};
