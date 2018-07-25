const localSettings = store => next => (action) => {
  // sessionStorage
  window.localStorage.setItem(
    'appLocalSettings',
    JSON.stringify(store.getState()),
  );
  return next(action);
};

export default localSettings;
