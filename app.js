'use strict';

module.exports = app => {
  app.err = app.err || {}
  const errors = app.config.hatchErrors.errors;
  Object.keys(errors).map(k => {
    let err = errors[k];
    let type = typeof err;
    if (type === 'function') {
      app.err[k] = function (message) {
        this.name = k
        this.message = err(message)
      }
      Object.defineProperty(app.err[k], 'name', {value: k, writable: false})
    }
  })
};
