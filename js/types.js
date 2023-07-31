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
 * @typedef {'none' | 'chrome' | 'sepia' | 'marvin' | 'phobos' | 'heat'} EffectType
 */

/**
 * @typedef {'success' | 'error'} StatusType
 */

/**
 * @typedef StatusOptions
 * @prop {string} [title]
 * @prop {string} [button]
 */

