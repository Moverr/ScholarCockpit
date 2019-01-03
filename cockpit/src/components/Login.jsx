import React, { Component } from 'react';
import '../css/home.css';
import Utils from '../helpers/Utils';
import Api from './apis/Api';

class Login extends Component {
	constructor(props) {
		super(props);

		this.util = new Utils();
		this.endpoint = this.util.getEndPoint('users');

		this.Api = new Api();

		this.state = {
			username: '',
			password: '',
			schoolName: '',
			endpoint: this.endpoint,
			loginBtn: 'LOGIN'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.setState({
			value: !this.props.schoolname ? null : this.props.schoolname
		});
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	handleSuccess = (response) => {
		this.setState({
			loginBtn: 'LOGIN'
		});

		if (response == null) {
			return alert('Invalid User credentials');
		}

		this.setState({
			authentication: response.authentication,
			isLoggedIn: response.isLoggedIn
		});

		alert('Record Saved Successfully');
	};

	handleError = (response) => {
		console.log(response);
	};

	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			loginBtn: 'Processing...'
		});
		let body = {
			username: this.state.username,
			password: this.state.password
		};
		let headers = {
			'Content-Type': 'application/json',
			schoolname: 'KYADONDO PRIMARY SCHOOL'
		};
		//todo: create a post example wwhere u can handle
		const url = this.endpoint + 'login';
		this.Api.post(url, body, headers, this.handleSuccess);
	}

	render() {
		return this.loginForm();
	}

	loginForm() {
		return (
			<div className="  login-form">
				<form onSubmit={this.handleSubmit}>
					<h1> LOGIN FORM</h1>
					<label>Username</label>
					<input
						name="username"
						type="text"
						className="form-control"
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<label>Password</label>
					<input
						name="password"
						type="password"
						className="form-control"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<br />
					<button type="submit" name="loginbtn" className="btn btn-primary">
						{this.state.loginBtn}
					</button>
				</form>
			</div>
		);
	}
}

export default Login;
