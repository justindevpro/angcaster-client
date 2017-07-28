const controller = require('./minutely.controller');
const template = require('./minutely.html');

const component = {
  controller,
  template,
  bindings: {
    weatherData: '<'
  }
}
module.exports = component;
