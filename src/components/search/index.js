const controller = require('./search.controller');
const template = require('./search.html');


const component = {
  template,
  controller,
  bindings: {
    location: '<',
    onSearch: '&'
  }
}

module.exports = component;
