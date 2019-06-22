import React, { Component } from 'react';
import '../css/home.css';
import Utils, { pushHistory, verifySchool } from '../../helpers/Utils';
import Api from '../api/Api';
import store from '../../Store';

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
		// let schoolName = this.props.match.params.schoolName;
		let schoolName = verifySchool();

		if (schoolName === null) {
			let path = `/verify/`;
			pushHistory(path, this.props);
			return;
		}

		{
			let path = `/login/` + schoolName;
			pushHistory(path, this.props);

			this.setState({
				schoolName: schoolName
			});
		}
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	handleSuccess = (response) => {
		console.log(response);

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

		//todo: improve overall state to improve the system
		store.dispatch({
			type: 'ADD_AUTHENTICATION',
			payload: response.authentication
		});

		this.setState({
			authentication: response.authentication,
			isLoggedIn: response.isLoggedIn,
			message_status: '-success ',
			message: ' Logged In Successfully '
		});

		let path = `/dashboard/`;
		pushHistory(path, this.props);
	};

	handleError = (response) => {
		console.log(response);
		store.dispatch({
			type: 'LOGIN_STATUS',
			payload: response
		});

		switch (response) {
			case 401:
				store.dispatch({
					type: 'LOGIN_FAILURE',
					payload: 'Invalid User Credentials'
				});
				break;

			case 404:
				store.dispatch({
					type: 'LOGIN_FAILURE',
					payload: 'Server Un-reachable'
				});

				break;

			default:
				store.dispatch({
					type: 'LOGIN_FAILURE',
					payload: 'Something Went Wrong, contact System Administrator'
				});
				break;
		}
		this.setState({
			message: store.getState().Auth.LoginResponse.message,
			message_status: store.getState().Auth.LoginResponse.status === 401 ? '-warning' : '-danger',
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
			schoolName: this.state.schoolName
		};

		// 'KYADONDO PRIMARY SCHOOL'
		const url = this.endpoint + 'login';
		this.Api.post(url, body, headers, this.handleSuccess, this.handleError);
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
