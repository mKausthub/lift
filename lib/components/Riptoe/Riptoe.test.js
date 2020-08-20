'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Riptoe = require('./Riptoe');

var _Riptoe2 = _interopRequireDefault(_Riptoe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Riptoe', function () {
  var props = void 0;
  var shallowRiptoe = void 0;
  var renderedRiptoe = void 0;
  var mountedRiptoe = void 0;

  var shallowTestComponent = function shallowTestComponent() {
    if (!shallowRiptoe) {
      shallowRiptoe = (0, _enzyme.shallow)(_react2.default.createElement(_Riptoe2.default, props));
    }
    return shallowRiptoe;
  };

  var renderTestComponent = function renderTestComponent() {
    if (!renderedRiptoe) {
      renderedRiptoe = (0, _enzyme.render)(_react2.default.createElement(_Riptoe2.default, props));
    }
    return renderedRiptoe;
  };

  var mountTestComponent = function mountTestComponent() {
    if (!mountedRiptoe) {
      mountedRiptoe = (0, _enzyme.mount)(_react2.default.createElement(_Riptoe2.default, props));
    }
    return mountedRiptoe;
  };

  beforeEach(function () {
    props = {};
    shallowRiptoe = undefined;
    renderedRiptoe = undefined;
    mountedRiptoe = undefined;
  });

  // Shallow / unit tests begin here

  // Render / mount / integration tests begin here
});