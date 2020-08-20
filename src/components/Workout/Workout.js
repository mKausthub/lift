import React from 'react';
import PropTypes from 'prop-types';
import styles from './Workout.less';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

class Workout extends React.Component {
	constructor() {
		super();
		this.state = {
			status: {
				exercise1: 'not_working',
				exercise2: 'not_working',
				exercise3: 'not_working',
				exercise4: 'not_working'
			},
			time_elapsed: 0,
			time_elapsed_interval:0,
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
		this.rest = this.rest.bind(this);
		this.timeElapsed = this.timeElapsed.bind(this);
		this.startWorkout = this.startWorkout.bind(this);
		this.stopWorkout = this.stopWorkout.bind(this);
	}

	rest() {
		console.log('clicked');
		if(this.state.rest_period == true) {
			return;
		}
		if(this.state.time_elapsed - this.state.last_rest <= 5) {
			return;
		}
		this.state.status['exercise'+this.state.current_exercise] = 'resting';
		let interval = setInterval(() => {
			if(this.state.rest == 0) {
				clearInterval(this.state.rest_interval);
				this.setState({
					rest: 20,
					rest_period: false,
					
				});
				this.state.status['exercise'+this.state.current_exercise] = 'complete';
				this.state.last_rest = this.state.time_elapsed;
				if(this.state.current_exercise < 4) {
					this.setState({
						current_exercise: this.state.current_exercise+1
					});
					this.state.status['exercise'+this.state.current_exercise] = 'on_progress';
					document.getElementById('exercise'+this.state.current_exercise).scrollIntoView({ block: 'center', behavior: 'smooth' });
				} else {
					clearInterval(this.state.rest_interval);
					this.stopWorkout();
				}
			}
			this.setState({
				rest: this.state.rest-1
			});
		}, 1000);
		this.setState({
			rest_interval: interval,
			rest_period: true,
			
		});
	}

	timeElapsed() {
		let workoutInterval = setInterval(() => {
			if(this.state.started == false) {
				clearInterval(workoutInterval);
			}
			this.setState({
				time_elapsed: this.state.time_elapsed+1
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

	SecondsTohhmmss(totalSeconds) {
		var hours   = Math.floor(totalSeconds / 3600);
		var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
		var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
		
		// round seconds
		seconds = Math.round(seconds * 100) / 100
		
		var result = (hours < 10 ? "0" + hours : hours);
			result += ":" + (minutes < 10 ? "0" + minutes : minutes);
			result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
		return result;
	}

	startWorkout() {
		this.setState({
			started: true
		});
		this.timeElapsed();
	}

	stopWorkout() {
		this.setState({
			started: false,
			time_elapsed: 0,
			status: {
				exercise1: 'not_working',
				exercise2: 'not_working',
				exercise3: 'not_working',
				exercise4: 'not_working',
			},
			rest_period: false,
			time_elapsed_interval:0,
			rest: 20,
			rest_interval: 0,
			last_rest: 0,
		});
		clearInterval(this.state.rest_interval);
	}
	render() {
		return (
		<Container>
			<br /><br />
		{ this.state.started == true &&
			<Row className="time-elapsed alert alert-success" >
				{ this.state.rest_period == false
					? <div>{this.SecondsTohhmmss(this.state.time_elapsed)}</div>
					: <div><p className="rest-time-info">Rest time</p> {this.state.rest}</div>
				}
			</Row>
		}
		<Row className="workout-controls">
			{ this.state.started == true && 
				<Row className="rest workout-control alert alert-primary" onClick={this.rest}>
					<Col>
					<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-stopwatch" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M8 15A6 6 0 1 0 8 3a6 6 0 0 0 0 12zm0 1A7 7 0 1 0 8 2a7 7 0 0 0 0 14z"/>
						<path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5a.5.5 0 0 1 .5-.5zM5.5.5A.5.5 0 0 1 6 0h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
						<path d="M7 1h2v2H7V1z"/>
					</svg>&nbsp;
						Rest
					</Col>
				</Row>
			}
			{ (this.state.started == false ) && 
				<Row className="start workout-control alert alert-success"  onClick={this.startWorkout}>
					<Col>
					<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
					</svg>&nbsp;Start
					</Col>
				</Row>
			}
			{ this.state.started == true &&
				<Row className="stop workout-control alert alert-danger"  onClick={this.stopWorkout}>
					<Col>
					<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.854 4.854a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
					</svg>&nbsp;Stop
					</Col>
				</Row>
			}
		</Row>
		<Row>
			<Col lg="12">
				<Col lg="12">
					<h1>Lift - Workout</h1>
				</Col>
			</Col>
		</Row>
		<Row className="workout-steps" id="exercise1">
			<Col lg="12">
				<Row>
					<Col lg="12">
						<Col lg="12">

							<Col lg="12" className="workout-method">Bench</Col>
						</Col>
					</Col>
				</Row>
				<Row >
					<Col lg="4" className="workout-desc float-left">
						<Col className="float-left ordered-items ">
							<Col className="text-center">
								<h1>175</h1>
							</Col>
							<Col className="text-center">
								Lbs
							</Col>
						</Col>
						<Col className="float-left ordered-items-mid">
							<Col className="text-center">
								<h1>x</h1>
							</Col>
							<Col className="text-center">
							</Col>
						</Col>
						<Col className="float-left ordered-items">
							<Col className="text-center">
								<h1>10</h1>
							</Col>
							<Col className="text-center">
								Reps
							</Col>
						</Col>
					</Col>
					<Col lg="8" className="workout-desc float-right">
						<Col lg="12" className="text-right workout-status-text">
							{this.state.workout_state_description[this.state.status.exercise1]}
						</Col>
						<Col lg="12" className="workout-status text-right">
							{
								this.state.status.exercise1 == 'complete' &&
								<Col className="complete-workout alert alert-success">
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
									<path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"/>
									</svg>
								</Col>
							}

							{
								this.state.status.exercise1 == 'not_working' &&
								<Col className="complete-workout alert alert-primary">
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-stop" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5z"/>
									</svg>
								</Col>
							}

							{
								this.state.status.exercise1 == 'on_progress' &&
								<Col className="complete-workout alert alert-warning">
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
									</svg>
								</Col>
							}

							{
								this.state.status.exercise1 == 'resting' &&
								<Col className="complete-workout alert alert-primary">
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-stopwatch" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M8 15A6 6 0 1 0 8 3a6 6 0 0 0 0 12zm0 1A7 7 0 1 0 8 2a7 7 0 0 0 0 14z"/>
									<path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5a.5.5 0 0 1 .5-.5zM5.5.5A.5.5 0 0 1 6 0h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
									<path d="M7 1h2v2H7V1z"/>
									</svg>
								</Col>
							}
						</Col>
					</Col>
				</Row>
			</Col>
		</Row>

		<Row className="workout-steps" id="exercise2">
			<Col lg="12">
				<Row>
					<Col lg="12">
						<Col lg="12">

							<Col lg="12" className="workout-method">Bench</Col>
						</Col>
					</Col>
				</Row>
				<Row >
					<Col lg="4" className="workout-desc float-left">
						<Col className="float-left ordered-items ">
							<Col className="text-center">
								<h1>175</h1>
							</Col>
							<Col className="text-center">
								Lbs
							</Col>
						</Col>
						<Col className="float-left ordered-items-mid">
							<Col className="text-center">
								<h1>x</h1>
							</Col>
							<Col className="text-center">
							</Col>
						</Col>
						<Col className="float-left ordered-items">
							<Col className="text-center">
								<h1>10</h1>
							</Col>
							<Col className="text-center">
								Reps
							</Col>
						</Col>
					</Col>
					<Col lg="8" className="workout-desc float-right">
						<Col lg="12" className="text-right workout-status-text">
							{this.state.workout_state_description[this.state.status.exercise2]}
						</Col>
						<Col lg="12" className="workout-status text-right">
							{
								this.state.status.exercise2 == 'complete' &&
								<Col className="complete-workout alert alert-success">
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
									<path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"/>
									</svg>
								</Col>
							}

							{
								this.state.status.exercise2 == 'not_working' &&
								<Col className="complete-workout alert alert-primary">
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-stop" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5z"/>
									</svg>
								</Col>
							}

							{
								this.state.status.exercise2 == 'on_progress' &&
								<Col className="complete-workout alert alert-warning">
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
									</svg>
								</Col>
							}

							{
								this.state.status.exercise2 == 'resting' &&
								<Col className="complete-workout alert alert-primary">
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-stopwatch" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M8 15A6 6 0 1 0 8 3a6 6 0 0 0 0 12zm0 1A7 7 0 1 0 8 2a7 7 0 0 0 0 14z"/>
									<path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5a.5.5 0 0 1 .5-.5zM5.5.5A.5.5 0 0 1 6 0h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
									<path d="M7 1h2v2H7V1z"/>
									</svg>
								</Col>
							}
						</Col>
					</Col>
				</Row>
			</Col>
		</Row>

		<Row className="workout-steps" id="exercise3">
			<Col lg="12">
				<Row>
					<Col lg="12">
						<Col lg="12">

							<Col lg="12" className="workout-method">Bench</Col>
						</Col>
					</Col>
				</Row>
				<Row >
					<Col lg="4" className="workout-desc float-left">
						<Col className="float-left ordered-items ">
							<Col className="text-center">
								<h1>175</h1>
							</Col>
							<Col className="text-center">
								Lbs
							</Col>
						</Col>
						<Col className="float-left ordered-items-mid">
							<Col className="text-center">
								<h1>x</h1>
							</Col>
							<Col className="text-center">
							</Col>
						</Col>
						<Col className="float-left ordered-items">
							<Col className="text-center">
								<h1>10</h1>
							</Col>
							<Col className="text-center">
								Reps
							</Col>
						</Col>
					</Col>
					<Col lg="8" className="workout-desc float-right">
						<Col lg="12" className="text-right workout-status-text">
							{this.state.workout_state_description[this.state.status.exercise3]}
						</Col>
						<Col lg="12" className="workout-status text-right">
							{
								this.state.status.exercise3 == 'complete' &&
								<Col className="complete-workout alert alert-success">
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
									<path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"/>
									</svg>
								</Col>
							}

							{
								this.state.status.exercise3 == 'not_working' &&
								<Col className="complete-workout alert alert-primary">
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-stop" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5z"/>
									</svg>
								</Col>
							}

							{
								this.state.status.exercise3 == 'on_progress' &&
								<Col className="complete-workout alert alert-warning">
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
									</svg>
								</Col>
							}

							{
								this.state.status.exercise3 == 'resting' &&
								<Col className="complete-workout alert alert-primary">
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-stopwatch" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M8 15A6 6 0 1 0 8 3a6 6 0 0 0 0 12zm0 1A7 7 0 1 0 8 2a7 7 0 0 0 0 14z"/>
									<path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5a.5.5 0 0 1 .5-.5zM5.5.5A.5.5 0 0 1 6 0h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
									<path d="M7 1h2v2H7V1z"/>
									</svg>
								</Col>
							}
						</Col>
					</Col>
				</Row>
			</Col>
		</Row>
		<Row className="workout-steps" id="exercise4">
			<Col lg="12">
				<Row>
					<Col lg="12">
						<Col lg="12">

							<Col lg="12" className="workout-method">Bench</Col>
						</Col>
					</Col>
				</Row>
				<Row >
					<Col lg="4" className="workout-desc float-left">
						<Col className="float-left ordered-items ">
							<Col className="text-center">
								<h1>175</h1>
							</Col>
							<Col className="text-center">
								Lbs
							</Col>
						</Col>
						<Col className="float-left ordered-items-mid">
							<Col className="text-center">
								<h1>x</h1>
							</Col>
							<Col className="text-center">
							</Col>
						</Col>
						<Col className="float-left ordered-items">
							<Col className="text-center">
								<h1>10</h1>
							</Col>
							<Col className="text-center">
								Reps
							</Col>
						</Col>
					</Col>
					<Col lg="8" className="workout-desc float-right">
						<Col lg="12" className="text-right workout-status-text">
							{this.state.workout_state_description[this.state.status.exercise4]}
						</Col>
						<Col lg="12" className="workout-status text-right">
							{
								this.state.status.exercise4 == 'complete' &&
								<Col className="complete-workout alert alert-success">
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
									<path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"/>
									</svg>
								</Col>
							}

							{
								this.state.status.exercise4 == 'not_working' &&
								<Col className="complete-workout alert alert-primary">
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-stop" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5z"/>
									</svg>
								</Col>
							}

							{
								this.state.status.exercise4 == 'on_progress' &&
								<Col className="complete-workout alert alert-warning">
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
									</svg>
								</Col>
							}

							{
								this.state.status.exercise4 == 'resting' &&
								<Col className="complete-workout alert alert-primary">
									<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-stopwatch" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M8 15A6 6 0 1 0 8 3a6 6 0 0 0 0 12zm0 1A7 7 0 1 0 8 2a7 7 0 0 0 0 14z"/>
									<path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5a.5.5 0 0 1 .5-.5zM5.5.5A.5.5 0 0 1 6 0h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
									<path d="M7 1h2v2H7V1z"/>
									</svg>
								</Col>
							}
						</Col>
					</Col>
				</Row>
			</Col>
		</Row>
		<Row className="bottom-divider"></Row>
	</Container>)
	}
}

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Workout extends React.Component {
//   render() {
//     return <div>This is a component called Workout.</div>;
//   }
// }

const WorkoutPropTypes = {
	// always use prop types!
};

Workout.propTypes = WorkoutPropTypes;

export default Workout;
