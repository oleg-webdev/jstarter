/* eslint-disable import/prefer-default-export */
export function observe(receive) {
  setInterval(() => receive([
    Math.floor(Math.random() * 8),
    Math.floor(Math.random() * 8),
  ]), 1000);
}
