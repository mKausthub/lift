'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Workout = require('./Workout');

var _Workout2 = _interopRequireDefault(_Workout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Workout', function () {
  var props = void 0;
  var shallowWorkout = void 0;
  var renderedWorkout = void 0;
  var mountedWorkout = void 0;

  var shallowTestComponent = function shallowTestComponent() {
    if (!shallowWorkout) {
      shallowWorkout = (0, _enzyme.shallow)(_react2.default.createElement(_Workout2.default, props));
    }
    return shallowWorkout;
  };

  var renderTestComponent = function renderTestComponent() {
    if (!renderedWorkout) {
      renderedWorkout = (0, _enzyme.render)(_react2.default.createElement(_Workout2.default, props));
    }
    return renderedWorkout;
  };

  var mountTestComponent = function mountTestComponent() {
    if (!mountedWorkout) {
      mountedWorkout = (0, _enzyme.mount)(_react2.default.createElement(_Workout2.default, props));
    }
    return mountedWorkout;
  };

  beforeEach(function () {
    props = {};
    shallowWorkout = undefined;
    renderedWorkout = undefined;
    mountedWorkout = undefined;
  });

  // Shallow / unit tests begin here

  // Render / mount / integration tests begin here
});