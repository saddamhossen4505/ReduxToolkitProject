const counterMiddleware = (store) => (next) => (action) => {
  next(action);
};

// Export.
export default counterMiddleware;
