import React, { Component } from 'react';
import '../css/home.css';
import Login from './Login';

class Verify extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			verifyBtn: 'VERIFY SCHOOL',
			schoolName: '',
			message_status: '-success displaynone',
			message: ' Wait a minute '
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.loginForm = null;
	}

	componentDidMount() {
		if (this.props.schoolname) {
			this.setState({
				schoolName: this.props.schoolName
			});
		}
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		let schoolName = this.state.schoolName.trim;
		if (schoolName.length === 0) {
			return this.setState({
				message_status: '-warning ',
				message: ' School Name is mandatory '
			});
		}
		return <Login />;
	}

	render() {
		// const  schoolname = this.state.value;

		return this.shoolForm();
	}

	shoolForm() {
		return (
			<div className="  login-form">
				<form onSubmit={this.handleSubmit}>
					<h1> SCHOOL NAME</h1>
					<div className={'alert alert' + this.state.message_status} role="alert">
						{this.state.message}
					</div>
					<input
						placeholder="Enter School Name"
						type="text"
						className="form-control"
						value={this.state.schoolName}
						onChange={this.handleChange}
					/>
					<br />
					<button type="submit" name="loginbtn" className="btn btn-primary">
						{this.state.verifyBtn}
					</button>
				</form>
			</div>
		);
	}
}

export default Verify;
