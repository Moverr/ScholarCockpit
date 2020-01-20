import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSchoolName, getEndPoint } from '../../helpers/Utils';

import Api from '../api/Api';
import Alert from '../../helpers/Alert';
import InputField from '../../forms/inputs/InputField';



import '../../css/loginschool.css';

function LoginSchool(props) {

	const [message_status, set_messagestatus] = useState('-success displaynone');

	const [message, set_message] = useState("");
	const [username, set_username] = useState("");
	const [password, set_password] = useState("");

	const [loginBtn, set_loginBtn] = useState(null);




	const auth = useSelector(state => state.auth);


	const handleSubmit = (event) => {
		event.preventDefault();
		alert("pass");
		/*	
			set_loginBtn('Processing...');
			set_messagestatus('-success displaynone');
	
			const school_name = getSchoolName();
	
	
			let user_name = username;
			let pass_word = password;
	
			if (user_name !== undefined || pass_word !== undefined) {
	
				set_message('Username and Password are mandatory');
				set_messagestatus('-warning');
				set_loginBtn('LOGIN');
	
	
				return;
			}
	
			let body = {
				username: user_name,
				password: pass_word
			};
	
	
			console.log(body);
	
			let headers = {
				'Content-Type': 'application/json',
				schoolName: school_name
			};
	
			let api = new Api();
			const url = getEndPoint('users') + "login";
			console.log("URL : " + url);
	
			api.post(url, body, headers, handleSuccess, handleError);  */
	};



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



	const handleSuccess = (response) => {
		console.log(response);
		alert("Pass");

		// set_loginBtn('LOGIN');


		// if (response == null) {
		// 	set_message(' Invalid User credentials ');
		// 	set_messagestatus('-warning ');

		// 	return;
		// }

		//todo: improve overall state to improve the system

		/*	store.dispatch({
				type: 'ADD_AUTHENTICATION',
				payload: response.authentication
			}); */

		// this.setState({
		// 	authentication: response.authentication,
		// 	isLoggedIn: response.isLoggedIn,
		// 	message_status: '-success ',
		// 	message: ' Logged In Successfully '
		// });


		// let path = `/dashboard/`;
		// pushHistory(path, this.props);
	};

	const handleError = (response) => {
		console.log(response);
		alert("Error  Pass")
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





	return (

		<div className=" container-fluid   verifyschoolwrapper " >
			<form role="form" onSubmit={handleSubmit}>
				<br />
				<h3 className="center-align header"> 	{auth.schoolname}</h3>
				<br />
				<h3 className="center-align  "> LOGIN FORM </h3>
				<Alert message={message} className={'alert alert' + message_status} role={"alert"} />
				<label className={"label leftalign"}>Username</label>

				<InputField type="text" className="text form-control " callback={e => set_username(e.target.value)} name="username" value={username}
					placeholder=" " />


				<label className={"label leftalign"}>Password</label>

				<InputField type="password" className="text form-control " callback={e => set_password(e.target.value)} name="password" value={password}
					placeholder=" " />



				<br />
				<button type="submit" name="loginbtn" className="btn btn-primary">
					LOGIN
					</button>
			</form>
		</div>
	);

}

export default LoginSchool;
