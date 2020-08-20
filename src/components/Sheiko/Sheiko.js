import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sheiko.less';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import { withRouter } from 'react-router-dom';

const Sheiko = withRouter(( {history} ) => (
	<Container>
			<Row>
				<Col lg="12">
					<Col lg="12">
						<h1>Lift - Sheiko workout</h1>
						
					</Col>
				</Col>
			</Row>
			<br /><br />
			<Row>
				<Col lg="7" className="today-wrapper">
					<Col lg="12" className="text-center workout-plan">
						<p>Today's workout</p>
					</Col>
					<Col lg="12">
						<Table responsive className="workout-table">
							<thead>
								<tr>
									<th></th>
									<th>Weight</th>
									<th>Reps</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Bench</td>
									<td>175</td>
									<td>10</td>
								</tr>
								<tr>
									<td>Bench</td>
									<td>175</td>
									<td>10</td>
								</tr>
								<tr>
									<td>Bench</td>
									<td>175</td>
									<td>10</td>
								</tr>
								<tr>
									<td>Bench</td>
									<td>175</td>
									<td>10</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Col>
				<Col lg="3">
					<Col lg="12" className="sheiko-workout-method-week text-center">
						<Col lg="12">
							<p>Sheiko method Week 1</p>
						</Col>
						<Col lg="12">
							<h1>Day 2</h1>
						</Col>
						<Col lg="12" className="text-center sheiko-start-workout" onClick={() => { history.push('/workout') }}>
							<p>Start</p>
						</Col>
					</Col>
				</Col>
			</Row>

			<br />
			<hr />
			<br />

			<Row>
				<Col lg="7" className="next-wrapper">
					<Col lg="12" className="text-center workout-plan">
						<p>Next workout</p>
					</Col>
					<Col lg="12">
						<Table responsive className="workout-table">
							<thead>
								<tr>
									<th></th>
									<th>Weight</th>
									<th>Reps</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Bench</td>
									<td>175</td>
									<td>10</td>
								</tr>
								<tr>
									<td>Bench</td>
									<td>175</td>
									<td>10</td>
								</tr>
								<tr>
									<td>Bench</td>
									<td>175</td>
									<td>10</td>
								</tr>
								<tr>
									<td>Bench</td>
									<td>175</td>
									<td>10</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Col>
				<Col lg="3">
					<Col lg="12" className="sheiko-workout-method-week text-center">
						<Col lg="12">
							<p>Sheiko method Week 1</p>
						</Col>
						<Col lg="12">
							<h1>Day 3</h1>
						</Col>
					</Col>
				</Col>
			</Row>

			<br />
			<hr />
			<br />

			<Row>
				<Col lg="7" className="previous-wrapper">
					<Col lg="12" className="text-center workout-plan">
						<p>Previous workout</p>
					</Col>
					<Col lg="12">
						<Table responsive className="workout-table">
							<thead>
								<tr>
									<th></th>
									<th>Weight</th>
									<th>Reps</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Bench</td>
									<td>175</td>
									<td>10</td>
								</tr>
								<tr>
									<td>Bench</td>
									<td>175</td>
									<td>10</td>
								</tr>
								<tr>
									<td>Bench</td>
									<td>175</td>
									<td>10</td>
								</tr>
								<tr>
									<td>Bench</td>
									<td>175</td>
									<td>10</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Col>
				<Col lg="3">
					<Col lg="12" className="sheiko-workout-method-week text-center">
						<Col lg="12">
							<p>Sheiko method Week 1</p>
						</Col>
						<Col lg="12">
							<h1>Day 1</h1>
						</Col>

						<Col className="previous-workout-info">
							<Col >Time spent:</Col>
							<Col >1:04:33</Col>
							<br />
							<Col >Total weight:</Col>
							<Col >7000</Col>
						</Col>
					</Col>
				</Col>
			</Row>

		</Container>
));

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Sheiko extends React.Component {
//   render() {
//     return <div>This is a component called Sheiko.</div>;
//   }
// }

const SheikoPropTypes = {
	// always use prop types!
};

Sheiko.propTypes = SheikoPropTypes;

export default Sheiko;
