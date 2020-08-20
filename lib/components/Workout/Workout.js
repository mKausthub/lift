'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Workout = require('./Workout.less');

var _Workout2 = _interopRequireDefault(_Workout);

var _Container = require('react-bootstrap/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Row = require('react-bootstrap/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Spinner = require('react-bootstrap/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Workout = function (_React$Component) {
	_inherits(Workout, _React$Component);

	function Workout() {
		_classCallCheck(this, Workout);

		var _this = _possibleConstructorReturn(this, (Workout.__proto__ || Object.getPrototypeOf(Workout)).call(this));

		_this.state = {
			status: {
				exercise1: 'not_working',
				exercise2: 'not_working',
				exercise3: 'not_working',
				exercise4: 'not_working'
			},
			time_elapsed: 0,
			time_elapsed_interval: 0,
			rest: 20,
			rest_interval: 0,
			started: false,
			paused: false,
			rest_period: false,
			last_rest: 0,
			rest_warning: false,
			workout_state_description: {
				not_working: 'Not started',
				on_progress: 'On progress',
				resting: 'Resting',
				complete: 'Complete'
			},
			current_exercise: 1
		};
		_this.rest = _this.rest.bind(_this);
		_this.timeElapsed = _this.timeElapsed.bind(_this);
		_this.startWorkout = _this.startWorkout.bind(_this);
		_this.stopWorkout = _this.stopWorkout.bind(_this);
		return _this;
	}

	_createClass(Workout, [{
		key: 'rest',
		value: function rest() {
			var _this2 = this;

			if (this.state.rest_period == true) {
				return;
			}
			if (this.state.time_elapsed - this.state.last_rest <= 5) {
				return;
			}
			this.state.status['exercise' + this.state.current_exercise] = 'resting';
			var interval = setInterval(function () {
				if (_this2.state.rest == 0) {
					clearInterval(_this2.state.rest_interval);
					_this2.setState({
						rest: 20,
						rest_period: false

					});
					_this2.state.status['exercise' + _this2.state.current_exercise] = 'complete';
					_this2.state.last_rest = _this2.state.time_elapsed;
					if (_this2.state.current_exercise < 4) {
						_this2.setState({
							current_exercise: _this2.state.current_exercise + 1
						});
						_this2.state.status['exercise' + _this2.state.current_exercise] = 'on_progress';
					} else {
						clearInterval(_this2.state.rest_interval);
						_this2.stopWorkout();
					}
				}
				_this2.setState({
					rest: _this2.state.rest - 1
				});
			}, 1000);
			this.setState({
				rest_interval: interval,
				rest_period: true

			});
		}
	}, {
		key: 'timeElapsed',
		value: function timeElapsed() {
			var _this3 = this;

			var workoutInterval = setInterval(function () {
				if (_this3.state.started == false) {
					clearInterval(workoutInterval);
				}
				_this3.setState({
					time_elapsed: _this3.state.time_elapsed + 1
				});
			}, 1000);
			this.setState({
				time_elapsed_interval: workoutInterval,
				status: {
					exercise1: 'on_progress',
					exercise2: 'not_working',
					exercise3: 'not_working',
					exercise4: 'not_working'
				}
			});
		}
	}, {
		key: 'SecondsTohhmmss',
		value: function SecondsTohhmmss(totalSeconds) {
			var hours = Math.floor(totalSeconds / 3600);
			var minutes = Math.floor((totalSeconds - hours * 3600) / 60);
			var seconds = totalSeconds - hours * 3600 - minutes * 60;

			// round seconds
			seconds = Math.round(seconds * 100) / 100;

			var result = hours < 10 ? "0" + hours : hours;
			result += ":" + (minutes < 10 ? "0" + minutes : minutes);
			result += ":" + (seconds < 10 ? "0" + seconds : seconds);
			return result;
		}
	}, {
		key: 'startWorkout',
		value: function startWorkout() {
			this.setState({
				started: true
			});
			this.timeElapsed();
		}
	}, {
		key: 'stopWorkout',
		value: function stopWorkout() {
			this.setState({
				started: false,
				time_elapsed: 0,
				status: {
					exercise1: 'not_working',
					exercise2: 'not_working',
					exercise3: 'not_working',
					exercise4: 'not_working'
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_Container2.default,
				null,
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				this.state.started == true && _react2.default.createElement(
					_Row2.default,
					{ className: 'time-elapsed alert alert-success' },
					this.state.rest_period == false ? _react2.default.createElement(
						'div',
						null,
						this.SecondsTohhmmss(this.state.time_elapsed)
					) : _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'p',
							{ className: 'rest-time-info' },
							'Rest time'
						),
						' ',
						this.state.rest
					)
				),
				_react2.default.createElement(
					_Row2.default,
					{ className: 'workout-controls' },
					this.state.started == true && _react2.default.createElement(
						_Row2.default,
						{ className: 'rest workout-control alert alert-primary', onClick: this.rest },
						_react2.default.createElement(
							_Col2.default,
							null,
							_react2.default.createElement(
								'svg',
								{ width: '1em', height: '1em', viewBox: '0 0 16 16', 'class': 'bi bi-stopwatch', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
								_react2.default.createElement('path', { 'fill-rule': 'evenodd', d: 'M8 15A6 6 0 1 0 8 3a6 6 0 0 0 0 12zm0 1A7 7 0 1 0 8 2a7 7 0 0 0 0 14z' }),
								_react2.default.createElement('path', { 'fill-rule': 'evenodd', d: 'M8 4.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5a.5.5 0 0 1 .5-.5zM5.5.5A.5.5 0 0 1 6 0h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z' }),
								_react2.default.createElement('path', { d: 'M7 1h2v2H7V1z' })
							),
							'\xA0 Rest'
						)
					),
					this.state.started == false && _react2.default.createElement(
						_Row2.default,
						{ className: 'start workout-control alert alert-success', onClick: this.startWorkout },
						_react2.default.createElement(
							_Col2.default,
							null,
							_react2.default.createElement(
								'svg',
								{ width: '1em', height: '1em', viewBox: '0 0 16 16', 'class': 'bi bi-play-fill', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
								_react2.default.createElement('path', { d: 'M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' })
							),
							'\xA0Start'
						)
					),
					this.state.started == true && _react2.default.createElement(
						_Row2.default,
						{ className: 'stop workout-control alert alert-danger', onClick: this.stopWorkout },
						_react2.default.createElement(
							_Col2.default,
							null,
							_react2.default.createElement(
								'svg',
								{ width: '1em', height: '1em', viewBox: '0 0 16 16', 'class': 'bi bi-x-square-fill', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
								_react2.default.createElement('path', { 'fill-rule': 'evenodd', d: 'M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.854 4.854a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z' })
							),
							'\xA0Stop'
						)
					)
				),
				_react2.default.createElement(
					_Row2.default,
					null,
					_react2.default.createElement(
						_Col2.default,
						{ lg: '12' },
						_react2.default.createElement(
							_Col2.default,
							{ lg: '12' },
							_react2.default.createElement(
								'h1',
								null,
								'Lift - Workout'
							)
						)
					)
				),
				_react2.default.createElement(
					_Row2.default,
					{ className: 'workout-steps' },
					_react2.default.createElement(
						_Col2.default,
						{ lg: '12' },
						_react2.default.createElement(
							_Row2.default,
							null,
							_react2.default.createElement(
								_Col2.default,
								{ lg: '12' },
								_react2.default.createElement(
									_Col2.default,
									{ lg: '12' },
									_react2.default.createElement(
										_Col2.default,
										{ lg: '12' },
										'Bench'
									)
								)
							)
						),
						_react2.default.createElement(
							_Row2.default,
							null,
							_react2.default.createElement(
								_Col2.default,
								{ lg: '4', className: 'workout-desc float-left' },
								_react2.default.createElement(
									_Col2.default,
									{ className: 'float-left ordered-items ' },
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										_react2.default.createElement(
											'h1',
											null,
											'175'
										)
									),
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										'Lbs'
									)
								),
								_react2.default.createElement(
									_Col2.default,
									{ className: 'float-left ordered-items-mid' },
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										_react2.default.createElement(
											'h1',
											null,
											'x'
										)
									),
									_react2.default.createElement(_Col2.default, { className: 'text-center' })
								),
								_react2.default.createElement(
									_Col2.default,
									{ className: 'float-left ordered-items' },
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										_react2.default.createElement(
											'h1',
											null,
											'10'
										)
									),
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										'Reps'
									)
								)
							),
							_react2.default.createElement(
								_Col2.default,
								{ lg: '8', className: 'workout-desc float-right' },
								_react2.default.createElement(
									_Col2.default,
									{ lg: '12', className: 'text-right' },
									this.state.workout_state_description[this.state.status.exercise1]
								),
								_react2.default.createElement(
									_Col2.default,
									{ lg: '12', className: 'workout-status text-right' },
									this.state.status.exercise1 == 'complete' && _react2.default.createElement(
										_Col2.default,
										{ className: 'complete-workout alert alert-success' },
										_react2.default.createElement(
											'svg',
											{ width: '1em', height: '1em', viewBox: '0 0 16 16', 'class': 'bi bi-check2-square', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
											_react2.default.createElement('path', { 'fill-rule': 'evenodd', d: 'M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z' }),
											_react2.default.createElement('path', { 'fill-rule': 'evenodd', d: 'M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z' })
										)
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(
					_Row2.default,
					{ className: 'workout-steps' },
					_react2.default.createElement(
						_Col2.default,
						{ lg: '12' },
						_react2.default.createElement(
							_Row2.default,
							null,
							_react2.default.createElement(
								_Col2.default,
								{ lg: '12' },
								_react2.default.createElement(
									_Col2.default,
									{ lg: '12' },
									_react2.default.createElement(
										_Col2.default,
										{ lg: '12' },
										'Bench'
									)
								)
							)
						),
						_react2.default.createElement(
							_Row2.default,
							null,
							_react2.default.createElement(
								_Col2.default,
								{ lg: '4', className: 'workout-desc float-left' },
								_react2.default.createElement(
									_Col2.default,
									{ className: 'float-left ordered-items ' },
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										_react2.default.createElement(
											'h1',
											null,
											'175'
										)
									),
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										'Lbs'
									)
								),
								_react2.default.createElement(
									_Col2.default,
									{ className: 'float-left ordered-items-mid' },
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										_react2.default.createElement(
											'h1',
											null,
											'x'
										)
									),
									_react2.default.createElement(_Col2.default, { className: 'text-center' })
								),
								_react2.default.createElement(
									_Col2.default,
									{ className: 'float-left ordered-items' },
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										_react2.default.createElement(
											'h1',
											null,
											'10'
										)
									),
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										'Reps'
									)
								)
							),
							_react2.default.createElement(
								_Col2.default,
								{ lg: '8', className: 'workout-desc float-right' },
								_react2.default.createElement(
									_Col2.default,
									{ lg: '12', className: 'text-right' },
									this.state.workout_state_description[this.state.status.exercise2]
								),
								_react2.default.createElement(
									_Col2.default,
									{ lg: '12', className: 'workout-status text-right' },
									this.state.status.exercise2 == 'complete' && _react2.default.createElement(
										_Col2.default,
										{ className: 'complete-workout alert alert-success' },
										_react2.default.createElement(
											'svg',
											{ width: '1em', height: '1em', viewBox: '0 0 16 16', 'class': 'bi bi-check2-square', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
											_react2.default.createElement('path', { 'fill-rule': 'evenodd', d: 'M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z' }),
											_react2.default.createElement('path', { 'fill-rule': 'evenodd', d: 'M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z' })
										)
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(
					_Row2.default,
					{ className: 'workout-steps' },
					_react2.default.createElement(
						_Col2.default,
						{ lg: '12' },
						_react2.default.createElement(
							_Row2.default,
							null,
							_react2.default.createElement(
								_Col2.default,
								{ lg: '12' },
								_react2.default.createElement(
									_Col2.default,
									{ lg: '12' },
									_react2.default.createElement(
										_Col2.default,
										{ lg: '12' },
										'Bench'
									)
								)
							)
						),
						_react2.default.createElement(
							_Row2.default,
							null,
							_react2.default.createElement(
								_Col2.default,
								{ lg: '4', className: 'workout-desc float-left' },
								_react2.default.createElement(
									_Col2.default,
									{ className: 'float-left ordered-items ' },
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										_react2.default.createElement(
											'h1',
											null,
											'175'
										)
									),
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										'Lbs'
									)
								),
								_react2.default.createElement(
									_Col2.default,
									{ className: 'float-left ordered-items-mid' },
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										_react2.default.createElement(
											'h1',
											null,
											'x'
										)
									),
									_react2.default.createElement(_Col2.default, { className: 'text-center' })
								),
								_react2.default.createElement(
									_Col2.default,
									{ className: 'float-left ordered-items' },
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										_react2.default.createElement(
											'h1',
											null,
											'10'
										)
									),
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										'Reps'
									)
								)
							),
							_react2.default.createElement(
								_Col2.default,
								{ lg: '8', className: 'workout-desc float-right' },
								_react2.default.createElement(
									_Col2.default,
									{ lg: '12', className: 'text-right' },
									this.state.workout_state_description[this.state.status.exercise3]
								),
								_react2.default.createElement(
									_Col2.default,
									{ lg: '12', className: 'workout-status text-right' },
									this.state.status.exercise3 == 'complete' && _react2.default.createElement(
										_Col2.default,
										{ className: 'complete-workout alert alert-success' },
										_react2.default.createElement(
											'svg',
											{ width: '1em', height: '1em', viewBox: '0 0 16 16', 'class': 'bi bi-check2-square', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
											_react2.default.createElement('path', { 'fill-rule': 'evenodd', d: 'M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z' }),
											_react2.default.createElement('path', { 'fill-rule': 'evenodd', d: 'M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z' })
										)
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(
					_Row2.default,
					{ className: 'workout-steps' },
					_react2.default.createElement(
						_Col2.default,
						{ lg: '12' },
						_react2.default.createElement(
							_Row2.default,
							null,
							_react2.default.createElement(
								_Col2.default,
								{ lg: '12' },
								_react2.default.createElement(
									_Col2.default,
									{ lg: '12' },
									_react2.default.createElement(
										_Col2.default,
										{ lg: '12' },
										'Bench'
									)
								)
							)
						),
						_react2.default.createElement(
							_Row2.default,
							null,
							_react2.default.createElement(
								_Col2.default,
								{ lg: '4', className: 'workout-desc float-left' },
								_react2.default.createElement(
									_Col2.default,
									{ className: 'float-left ordered-items ' },
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										_react2.default.createElement(
											'h1',
											null,
											'175'
										)
									),
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										'Lbs'
									)
								),
								_react2.default.createElement(
									_Col2.default,
									{ className: 'float-left ordered-items-mid' },
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										_react2.default.createElement(
											'h1',
											null,
											'x'
										)
									),
									_react2.default.createElement(_Col2.default, { className: 'text-center' })
								),
								_react2.default.createElement(
									_Col2.default,
									{ className: 'float-left ordered-items' },
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										_react2.default.createElement(
											'h1',
											null,
											'10'
										)
									),
									_react2.default.createElement(
										_Col2.default,
										{ className: 'text-center' },
										'Reps'
									)
								)
							),
							_react2.default.createElement(
								_Col2.default,
								{ lg: '8', className: 'workout-desc float-right' },
								_react2.default.createElement(
									_Col2.default,
									{ lg: '12', className: 'text-right' },
									this.state.workout_state_description[this.state.status.exercise4]
								),
								_react2.default.createElement(
									_Col2.default,
									{ lg: '12', className: 'workout-status text-right' },
									this.state.status.exercise4 == 'complete' && _react2.default.createElement(
										_Col2.default,
										{ className: 'complete-workout alert alert-success' },
										_react2.default.createElement(
											'svg',
											{ width: '1em', height: '1em', viewBox: '0 0 16 16', 'class': 'bi bi-check2-square', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
											_react2.default.createElement('path', { 'fill-rule': 'evenodd', d: 'M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z' }),
											_react2.default.createElement('path', { 'fill-rule': 'evenodd', d: 'M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z' })
										)
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(_Row2.default, { className: 'bottom-divider' })
			);
		}
	}]);

	return Workout;
}(_react2.default.Component);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Workout extends React.Component {
//   render() {
//     return <div>This is a component called Workout.</div>;
//   }
// }

var WorkoutPropTypes = {
	// always use prop types!
};

Workout.propTypes = WorkoutPropTypes;

exports.default = Workout;