'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Home', function () {
  var props = void 0;
  var shallowHome = void 0;
  var renderedHome = void 0;
  var mountedHome = void 0;

  var shallowTestComponent = function shallowTestComponent() {
    if (!shallowHome) {
      shallowHome = (0, _enzyme.shallow)(_react2.default.createElement(_Home2.default, props));
    }
    return shallowHome;
  };

  var renderTestComponent = function renderTestComponent() {
    if (!renderedHome) {
      renderedHome = (0, _enzyme.render)(_react2.default.createElement(_Home2.default, props));
    }
    return renderedHome;
  };

  var mountTestComponent = function mountTestComponent() {
    if (!mountedHome) {
      mountedHome = (0, _enzyme.mount)(_react2.default.createElement(_Home2.default, props));
    }
    return mountedHome;
  };

  beforeEach(function () {
    props = {};
    shallowHome = undefined;
    renderedHome = undefined;
    mountedHome = undefined;
  });

  // Shallow / unit tests begin here

  // Render / mount / integration tests begin here
});