import {renderSmallPictures, initSortingButtons} from './pictures-galery-rendering.js';
import './upload-new-picture.js';
import { request } from './utils.js';
import { renderStatus } from './status.js';

try {
  /**
   * @type {Array<Picture>}
   */
  const data = await request('https://28.javascript.pages.academy/kekstagram/data');

  renderSmallPictures(data);
  initSortingButtons(data);

} catch (error) {
  const title = `${error.message}`;
  const button = 'Закрыть';

  renderStatus('error', {title, button});
}
