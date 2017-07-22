if (process.env.NODE_ENV === 'production') {
  exports.configStore = require('./configStore').default;
} else {
  exports.configStore = require('./configStore.dev').default;
}
