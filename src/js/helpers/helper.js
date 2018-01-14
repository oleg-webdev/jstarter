/**
 * Hashstring
 * @returns String
 * @param {* length of hash} len
 */
export const makeId = (len) => {
  // new Date().getTime()
  let text = '';
  const hashLength = len || 5;
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < hashLength; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

/**
 * A random number between the given range
 * @returns Number
 * @param {*minimum number} min
 * @param {* maximum number} max
 */
export const getRandom = (min, max) => {
  const rnd = (Math.random() * (max - min)) + min;
  return Math.round(rnd);
};

/**
 * Element's offset to top of the page
 * @returns Number
 * @param {*native js element} element
 */
export const getElemtnOffset = (element) => {
  if (!element) return false;

  const bodyRect = document.body.getBoundingClientRect();
  const elemRect = element.getBoundingClientRect();

  return elemRect.top - bodyRect.top;
};

/**
 * Check if current navigator agent is any of mobile device
 * @returns Boolean
 */
export const anyMobileDevice = () => {
  return (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
};

/**
 * Checks type of given object
 * @returns String
 * @param {*any js object} obj
 */
export const objectof = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1);
};
