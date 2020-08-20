'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Juggernaut = require('./Juggernaut');

var _Juggernaut2 = _interopRequireDefault(_Juggernaut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Juggernaut', function () {
  var props = void 0;
  var shallowJuggernaut = void 0;
  var renderedJuggernaut = void 0;
  var mountedJuggernaut = void 0;

  var shallowTestComponent = function shallowTestComponent() {
    if (!shallowJuggernaut) {
      shallowJuggernaut = (0, _enzyme.shallow)(_react2.default.createElement(_Juggernaut2.default, props));
    }
    return shallowJuggernaut;
  };

  var renderTestComponent = function renderTestComponent() {
    if (!renderedJuggernaut) {
      renderedJuggernaut = (0, _enzyme.render)(_react2.default.createElement(_Juggernaut2.default, props));
    }
    return renderedJuggernaut;
  };

  var mountTestComponent = function mountTestComponent() {
    if (!mountedJuggernaut) {
      mountedJuggernaut = (0, _enzyme.mount)(_react2.default.createElement(_Juggernaut2.default, props));
    }
    return mountedJuggernaut;
  };

  beforeEach(function () {
    props = {};
    shallowJuggernaut = undefined;
    renderedJuggernaut = undefined;
    mountedJuggernaut = undefined;
  });

  // Shallow / unit tests begin here

  // Render / mount / integration tests begin here
});