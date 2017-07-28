const controller = require('./current.controller');
const template = require('./current.html');

const component = {
  controller,
  template,
  bindings: {
    weatherData: '<'
  }
};

module.exports = component;
