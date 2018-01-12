const crashReporter = store => next => (action) => {
  console.log('Store:', store.getState());
  console.log('Action:', action);

  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);

    throw err;
  }
};

export default crashReporter;

