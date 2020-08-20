'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Home = require('./Home.less');

var _Home2 = _interopRequireDefault(_Home);

var _Container = require('react-bootstrap/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Row = require('react-bootstrap/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/Col');

var _Col2 = _interopRequireDefault(_Col);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = (0, _reactRouterDom.withRouter)(function (_ref) {
	var history = _ref.history;
	return _react2.default.createElement(
		'div',
		{ className: 'container' },
		_react2.default.createElement(
			_Container2.default,
			null,
			_react2.default.createElement(
				_Row2.default,
				null,
				_react2.default.createElement(
					_Col2.default,
					{ lg: '6' },
					_react2.default.createElement(
						_Col2.default,
						{ lg: '12' },
						_react2.default.createElement(
							'h1',
							null,
							'Lift'
						)
					)
				)
			),
			_react2.default.createElement(
				_Row2.default,
				null,
				_react2.default.createElement(
					_Col2.default,
					{ lg: '6' },
					_react2.default.createElement(
						_Col2.default,
						{ lg: '12' },
						_react2.default.createElement(
							'p',
							{ className: 'choose-program' },
							'Choose program'
						)
					)
				)
			),
			_react2.default.createElement(
				_Row2.default,
				null,
				_react2.default.createElement(
					_Col2.default,
					null,
					_react2.default.createElement(
						_Col2.default,
						{ xs: true, lg: '12', className: 'workout workout-juggernaut', onClick: function onClick() {
								history.push('/workout-juggernaut');
							} },
						_react2.default.createElement(
							'p',
							{ className: 'workout-header' },
							'Juggernaut method'
						),
						_react2.default.createElement(
							'p',
							{ className: 'workout-description' },
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
						)
					)
				),
				_react2.default.createElement(
					_Col2.default,
					{ lg: '6' },
					_react2.default.createElement(
						_Col2.default,
						{ lg: '12', className: 'workout workout-sheiko', onClick: function onClick() {
								history.push('/workout-sheiko');
							} },
						_react2.default.createElement(
							'p',
							{ className: 'workout-header' },
							'Sheiko method'
						),
						_react2.default.createElement(
							'p',
							{ className: 'workout-description' },
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
						)
					)
				),
				_react2.default.createElement(
					_Col2.default,
					{ lg: '6' },
					_react2.default.createElement(
						_Col2.default,
						{ lg: '12', className: 'workout workout-riptoe', onClick: function onClick() {
								history.push('/workout-riptoe');
							} },
						_react2.default.createElement(
							'p',
							{ className: 'workout-header' },
							'Mark Riptoe method'
						),
						_react2.default.createElement(
							'p',
							{ className: 'workout-description' },
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
						)
					)
				)
			)
		)
	);
});

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Home extends React.Component {
//   render() {
//     return <div>This is a component called Home.</div>;
//   }
// }

var HomePropTypes = {
	// always use prop types!
};

Home.propTypes = HomePropTypes;

exports.default = Home;