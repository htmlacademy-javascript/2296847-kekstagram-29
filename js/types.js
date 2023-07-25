/**
 * @typedef Picture
 * @prop {number} id
 * @prop {string} url
 * @prop {string} description
 * @prop {number} likes
 * @prop {Array<PictureComment>} comments
 */

/**
 * @typedef PictureComment
 * @prop {number} id
 * @prop {string} avatar
 * @prop {string} message
 * @prop {string} name
 */

/**
 * @typedef EffectSlider
 * @prop {(type: EffectType) => void} setEffect
 * @prop {() => string} getCssValue
 * @prop {(type: string, listener: () => void) => void} on
 */

/**
 * @typedef {'none' | 'chrome' | 'sepia' | 'marvin' | 'phobos' | 'heat'} EffectType
 */
