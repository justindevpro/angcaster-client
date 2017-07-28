const controller = require('./hourly.controller');
const template = require('./hourly.html');

const component = {
  controller,
  template,
  bindings: {
    weatherData: '<'
  }
};

module.exports = component;
