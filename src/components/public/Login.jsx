import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../../css/home.css';
import { pushHistory, verifySchool, getEndPoint } from '../../helpers/Utils';

import Api from '../api/Api';
// import store from '../../Store';

// import Inputs from '../helpers/Inputs';

function Login(props) {

	const [message_status, set_messagestatus] = useState('-success displaynone');
	const [message, set_message] = useState(null);	
	const [username, set_username] = useState(null);
	const [password, set_password] = useState(null);
	 
	 

	// constructor(props) {
	// 	super(props);


	// 	this.endpoint = getEndPoint('users');

	// 	this.Api = new Api();

	// 	this.state = {
	// 		username: '',
	// 		password: '',
	// 		schoolName: '',
	// 		endpoint: this.endpoint,
	// 		loginBtn: 'LOGIN',
	// 		message_status: '-success displaynone',
	// 		message: ' Wait a minute '
	// 	};

	// 	this.handleChange = this.handleChange.bind(this);
	// 	this.handleSubmit = this.handleSubmit.bind(this);
	// }

	// componentDidMount() {
	// 	// let schoolName = this.props.match.params.schoolName;
	// 	let schoolName = verifySchool();

	// 	if (schoolName === null) {
	// 		let path = `/`;
	// 		pushHistory(path, this.props);
	// 		return;
	// 	}

	// 	/*
	// 	{  
	// 		let path = `/login/` + schoolName;
	// 		pushHistory(path, this.props);

	// 		this.setState({
	// 			schoolName: schoolName
	// 		});
	// 	} */
	// }

	const handleChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	const handleSuccess = (response) => {
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

		/*	store.dispatch({
				type: 'ADD_AUTHENTICATION',
				payload: response.authentication
			}); */

		this.setState({
			authentication: response.authentication,
			isLoggedIn: response.isLoggedIn,
			message_status: '-success ',
			message: ' Logged In Successfully '
		});

		let path = `/dashboard/`;
		pushHistory(path, this.props);
	};

	const handleError = (response) => {
		console.log(response);
		/* 	store.dispatch({
				type: 'LOGIN_STATUS',
				payload: response
			}); */

		/* switch (response) {
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
		}  */

		/*	this.setState({
				message: store.getState().Auth.LoginResponse.message,
				message_status: store.getState().Auth.LoginResponse.status === 401 ? '-warning' : '-danger',
				loginBtn: 'LOGIN'
			}); */
		console.log(response);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			loginBtn: 'Processing...',
			message_status: '-success displaynone'
		});

		let username = username;
		let password = password;

		if (username.trim().length === 0 || password.trim().length === 0) {
			this.setState({
				message: 'Username and Password are mandatory',
				message_status: '-warning',
				loginBtn: 'LOGIN'
			});

			return;
		}

		let body = {
			username: username,
			password:  password
		};
		let headers = {
			'Content-Type': 'application/json',
			schoolName: this.state.schoolName
		};

		// 'KYADONDO PRIMARY SCHOOL'
		const url = this.endpoint + 'login';
		this.Api.post(url, body, headers, this.handleSuccess, this.handleError);
	};




	return (
	 
			<div className = "  login-form" >
				<form onSubmit={handleSubmit}>
					<h1> LOGIN FORM</h1>
					<div className={'alert alert' + message_status} role="alert">
						{message}
					</div>
					<label>Username</label>
					<input
						name="username"
						type="text"
						className="form-control"
						value={username}
						onChange={(e)=>{set_username(e.target.value)}}
					/>

					<label>Password</label>
					<input
						name="password"
						type="password"
						className="form-control"
						value={password}
						onChange={(e)=>{set_password(e.target.value)}}
					/>

					<br />
					<button type="submit" name="loginbtn" className="btn btn-primary">
						 LOGIN
					</button>
				</form>
			</div>
		);

}

export default Login;
