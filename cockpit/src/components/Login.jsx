import React, { Component } from 'react';
import '../css/home.css';
import Utils from '../helpers/Utils';
import Api from './apis/Api';
// import Inputs from '../helpers/Inputs';

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
			loginBtn: 'LOGIN',
			message_status: '-success displaynone',
			message: ' Wait a minute '
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		let schoolName = this.props.match.params.schoolName;
		if (schoolName !== undefined) {
			this.setState({
				schoolName: schoolName
			});
		}
		let path = `/verify/` + this.state.schoolName;
		Utils.redirectPath(path);
	}

	

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	handleSuccess = (response) => {
		this.setState({
			loginBtn: 'LOGIN'
		});

		if (response == null) {
			this.setState({
				message_status: '-warning ',
				message: ' Invalid User credentials '
			});

			return;
		}

		this.setState({
			authentication: response.authentication,
			isLoggedIn: response.isLoggedIn,
			message_status: '-success ',
			message: ' Logged In Successfully '
		});
	};

	handleError = (response) => {
		this.setState({
			message: 'Something Went Wrong Contact Administrator',
			message_status: '-warning',
			loginBtn: 'LOGIN'
		});
		console.log(response);
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			loginBtn: 'Processing...',
			message_status: '-success displaynone'
		});

		let username = this.state.username;
		let password = this.state.password;

		if (username.trim().length === 0 || password.trim().length === 0) {
			this.setState({
				message: 'Username and Password are mandatory',
				message_status: '-warning',
				loginBtn: 'LOGIN'
			});

			return;
		}

		let body = {
			username: this.state.username,
			password: this.state.password
		};
		let headers = {
			'Content-Type': 'application/json',
			schoolName: 'KYADONDO PRIMARY SCHOOL'
		};

		const url = this.endpoint + 'login';
		this.Api.post(url, body, headers, this.handleSuccess);
	};

	render() {
		return this.loginForm();
	}

	loginForm() {
		return (
			<div className="  login-form">
				<form onSubmit={this.handleSubmit}>
					<h1> LOGIN FORM</h1>
					<div className={'alert alert' + this.state.message_status} role="alert">
						{this.state.message}
					</div>
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
