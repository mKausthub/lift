'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Riptoe = require('./Riptoe.less');

var _Riptoe2 = _interopRequireDefault(_Riptoe);

var _Container = require('react-bootstrap/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Row = require('react-bootstrap/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Table = require('react-bootstrap/Table');

var _Table2 = _interopRequireDefault(_Table);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Riptoe = (0, _reactRouterDom.withRouter)(function (_ref) {
	var history = _ref.history;
	return _react2.default.createElement(
		_Container2.default,
		null,
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
						'Lift - Riptoe workout'
					)
				)
			)
		),
		_react2.default.createElement('br', null),
		_react2.default.createElement('br', null),
		_react2.default.createElement(
			_Row2.default,
			null,
			_react2.default.createElement(
				_Col2.default,
				{ lg: '7' },
				_react2.default.createElement(
					_Col2.default,
					{ lg: '12', className: 'text-center' },
					_react2.default.createElement(
						'p',
						null,
						'Today\'s workout'
					)
				),
				_react2.default.createElement(
					_Col2.default,
					{ lg: '12' },
					_react2.default.createElement(
						_Table2.default,
						{ responsive: true, className: 'workout-table' },
						_react2.default.createElement(
							'thead',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement('th', null),
								_react2.default.createElement(
									'th',
									null,
									'Weight'
								),
								_react2.default.createElement(
									'th',
									null,
									'Reps'
								)
							)
						),
						_react2.default.createElement(
							'tbody',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									'Bench'
								),
								_react2.default.createElement(
									'td',
									null,
									'175'
								),
								_react2.default.createElement(
									'td',
									null,
									'10'
								)
							),
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									'Bench'
								),
								_react2.default.createElement(
									'td',
									null,
									'175'
								),
								_react2.default.createElement(
									'td',
									null,
									'10'
								)
							),
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									'Bench'
								),
								_react2.default.createElement(
									'td',
									null,
									'175'
								),
								_react2.default.createElement(
									'td',
									null,
									'10'
								)
							),
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									'Bench'
								),
								_react2.default.createElement(
									'td',
									null,
									'175'
								),
								_react2.default.createElement(
									'td',
									null,
									'10'
								)
							)
						)
					)
				)
			),
			_react2.default.createElement(
				_Col2.default,
				{ lg: '3' },
				_react2.default.createElement(
					_Col2.default,
					{ lg: '12', className: 'riptoe-workout-method-week text-center' },
					_react2.default.createElement(
						_Col2.default,
						{ lg: '12' },
						_react2.default.createElement(
							'p',
							null,
							'Riptoe method Week 1'
						)
					),
					_react2.default.createElement(
						_Col2.default,
						{ lg: '12' },
						_react2.default.createElement(
							'h1',
							null,
							'Day 2'
						)
					),
					_react2.default.createElement(
						_Col2.default,
						{ lg: '12', className: 'text-center riptoe-start-workout', onClick: function onClick() {
								history.push('/workout');
							} },
						_react2.default.createElement(
							'p',
							null,
							'Start'
						)
					)
				)
			)
		),
		_react2.default.createElement('br', null),
		_react2.default.createElement('hr', null),
		_react2.default.createElement('br', null),
		_react2.default.createElement(
			_Row2.default,
			null,
			_react2.default.createElement(
				_Col2.default,
				{ lg: '7' },
				_react2.default.createElement(
					_Col2.default,
					{ lg: '12', className: 'text-center' },
					_react2.default.createElement(
						'p',
						null,
						'Next workout'
					)
				),
				_react2.default.createElement(
					_Col2.default,
					{ lg: '12' },
					_react2.default.createElement(
						_Table2.default,
						{ responsive: true, className: 'workout-table' },
						_react2.default.createElement(
							'thead',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement('th', null),
								_react2.default.createElement(
									'th',
									null,
									'Weight'
								),
								_react2.default.createElement(
									'th',
									null,
									'Reps'
								)
							)
						),
						_react2.default.createElement(
							'tbody',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									'Bench'
								),
								_react2.default.createElement(
									'td',
									null,
									'175'
								),
								_react2.default.createElement(
									'td',
									null,
									'10'
								)
							),
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									'Bench'
								),
								_react2.default.createElement(
									'td',
									null,
									'175'
								),
								_react2.default.createElement(
									'td',
									null,
									'10'
								)
							),
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									'Bench'
								),
								_react2.default.createElement(
									'td',
									null,
									'175'
								),
								_react2.default.createElement(
									'td',
									null,
									'10'
								)
							),
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									'Bench'
								),
								_react2.default.createElement(
									'td',
									null,
									'175'
								),
								_react2.default.createElement(
									'td',
									null,
									'10'
								)
							)
						)
					)
				)
			),
			_react2.default.createElement(
				_Col2.default,
				{ lg: '3' },
				_react2.default.createElement(
					_Col2.default,
					{ lg: '12', className: 'riptoe-workout-method-week text-center' },
					_react2.default.createElement(
						_Col2.default,
						{ lg: '12' },
						_react2.default.createElement(
							'p',
							null,
							'Riptoe method Week 1'
						)
					),
					_react2.default.createElement(
						_Col2.default,
						{ lg: '12' },
						_react2.default.createElement(
							'h1',
							null,
							'Day 3'
						)
					)
				)
			)
		),
		_react2.default.createElement('br', null),
		_react2.default.createElement('hr', null),
		_react2.default.createElement('br', null),
		_react2.default.createElement(
			_Row2.default,
			null,
			_react2.default.createElement(
				_Col2.default,
				{ lg: '7' },
				_react2.default.createElement(
					_Col2.default,
					{ lg: '12', className: 'text-center' },
					_react2.default.createElement(
						'p',
						null,
						'Previous workout'
					)
				),
				_react2.default.createElement(
					_Col2.default,
					{ lg: '12' },
					_react2.default.createElement(
						_Table2.default,
						{ responsive: true, className: 'workout-table' },
						_react2.default.createElement(
							'thead',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement('th', null),
								_react2.default.createElement(
									'th',
									null,
									'Weight'
								),
								_react2.default.createElement(
									'th',
									null,
									'Reps'
								)
							)
						),
						_react2.default.createElement(
							'tbody',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									'Bench'
								),
								_react2.default.createElement(
									'td',
									null,
									'175'
								),
								_react2.default.createElement(
									'td',
									null,
									'10'
								)
							),
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									'Bench'
								),
								_react2.default.createElement(
									'td',
									null,
									'175'
								),
								_react2.default.createElement(
									'td',
									null,
									'10'
								)
							),
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									'Bench'
								),
								_react2.default.createElement(
									'td',
									null,
									'175'
								),
								_react2.default.createElement(
									'td',
									null,
									'10'
								)
							),
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'td',
									null,
									'Bench'
								),
								_react2.default.createElement(
									'td',
									null,
									'175'
								),
								_react2.default.createElement(
									'td',
									null,
									'10'
								)
							)
						)
					)
				)
			),
			_react2.default.createElement(
				_Col2.default,
				{ lg: '3' },
				_react2.default.createElement(
					_Col2.default,
					{ lg: '12', className: 'riptoe-workout-method-week text-center' },
					_react2.default.createElement(
						_Col2.default,
						{ lg: '12' },
						_react2.default.createElement(
							'p',
							null,
							'Riptoe method Week 1'
						)
					),
					_react2.default.createElement(
						_Col2.default,
						{ lg: '12' },
						_react2.default.createElement(
							'h1',
							null,
							'Day 1'
						)
					),
					_react2.default.createElement(
						_Col2.default,
						{ className: 'previous-workout-info' },
						_react2.default.createElement(
							_Col2.default,
							null,
							'Time spent:'
						),
						_react2.default.createElement(
							_Col2.default,
							null,
							'1:04:33'
						),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							_Col2.default,
							null,
							'Total weight:'
						),
						_react2.default.createElement(
							_Col2.default,
							null,
							'7000'
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
// class Riptoe extends React.Component {
//   render() {
//     return <div>This is a component called Riptoe.</div>;
//   }
// }

var RiptoePropTypes = {
	// always use prop types!
};

Riptoe.propTypes = RiptoePropTypes;

exports.default = Riptoe;