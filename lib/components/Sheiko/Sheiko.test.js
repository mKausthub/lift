'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Sheiko = require('./Sheiko');

var _Sheiko2 = _interopRequireDefault(_Sheiko);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Sheiko', function () {
  var props = void 0;
  var shallowSheiko = void 0;
  var renderedSheiko = void 0;
  var mountedSheiko = void 0;

  var shallowTestComponent = function shallowTestComponent() {
    if (!shallowSheiko) {
      shallowSheiko = (0, _enzyme.shallow)(_react2.default.createElement(_Sheiko2.default, props));
    }
    return shallowSheiko;
  };

  var renderTestComponent = function renderTestComponent() {
    if (!renderedSheiko) {
      renderedSheiko = (0, _enzyme.render)(_react2.default.createElement(_Sheiko2.default, props));
    }
    return renderedSheiko;
  };

  var mountTestComponent = function mountTestComponent() {
    if (!mountedSheiko) {
      mountedSheiko = (0, _enzyme.mount)(_react2.default.createElement(_Sheiko2.default, props));
    }
    return mountedSheiko;
  };

  beforeEach(function () {
    props = {};
    shallowSheiko = undefined;
    renderedSheiko = undefined;
    mountedSheiko = undefined;
  });

  // Shallow / unit tests begin here

  // Render / mount / integration tests begin here
});