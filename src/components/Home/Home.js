import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.less';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { withRouter } from 'react-router-dom';

const Home = withRouter(({ history }) => (
	<div className="container">
		<Container>
		<Row>
			<Col lg="6">
				<Col lg="12">
					<h1>Lift</h1>
					
				</Col>
			</Col>
		</Row>
		<Row>
			<Col lg="6">
				<Col lg="12">	
					<p className="choose-program">Choose program</p>
				</Col>
			</Col>
		</Row>
		<Row>
			<Col>
				<Col xs lg="12" className="workout workout-juggernaut" onClick={() => { history.push('/workout-juggernaut') }}>
					<p className="workout-header">Juggernaut method</p>
					<p className="workout-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</Col>
			</Col>
			<Col lg="6">
				<Col lg="12" className="workout workout-sheiko" onClick={() => { history.push('/workout-sheiko') }}>
					<p className="workout-header">Sheiko method</p>
					<p className="workout-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</Col>
			</Col>
			<Col lg="6">
				<Col lg="12" className="workout workout-riptoe" onClick={() => { history.push('/workout-riptoe') }}>
					<p className="workout-header">Mark Riptoe method</p>
					<p className="workout-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</Col>
			</Col>
		</Row>
		</Container>
	</div>
));

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Home extends React.Component {
//   render() {
//     return <div>This is a component called Home.</div>;
//   }
// }

const HomePropTypes = {
	// always use prop types!
};

Home.propTypes = HomePropTypes;

export default Home;
