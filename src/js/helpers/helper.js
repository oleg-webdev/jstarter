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

export const dummyFunc = () => {

};
