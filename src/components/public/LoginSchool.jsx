import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSchoolName, getEndPoint } from '../../helpers/Utils';
import Api from '../api/Api';
import Alert from '../../helpers/Alert';
import InputField from '../../forms/inputs/InputField';
import '../../css/loginschool.css';

import { currentscreen, nextscreen, prevscreen, addAuthentication, addRoles, loginstatus } from '../../store/actions/authenticationAction';
import { ComponentSwicher } from '../../helpers/ComponentSwicher';

import { withRouter } from 'react-router-dom';

// todo: checkout 
// https://fb.me/react-attribute-behavior

function LoginSchool(props) {

	const [message_status, set_messagestatus] = useState('-success displaynone');
	const [message, set_message] = useState("");
	const [username, set_username] = useState("");
	const [password, set_password] = useState("");
	const [loginBtn, set_loginBtn] = useState("LOGIN");

	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();




	const handleSubmit = (event) => {
		event.preventDefault();

		set_loginBtn('Processing...');
		set_messagestatus('-success displaynone');
		const school_name = getSchoolName();
		let user_name = username;
		let pass_word = password;

		if (user_name === "" || pass_word === "") {

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

		set_message('Processing ... ');
		set_messagestatus('-info ');

		api.post(url, body, headers, handleSuccess, handleError);
	};

	const handleSuccess = (response) => {
		set_loginBtn('LOGIN');
		if (response == null) {
			set_message(' Invalid User credentials ');
			set_messagestatus('-warning ');

			return;
		}

		console.log(response);

		set_message(' Successsfuly logged in  ');
		set_messagestatus('-success ');

		dispatch(nextscreen("DASHBOARD"));
		dispatch(prevscreen("LOGIN"));
		dispatch(currentscreen("DASHBOARD"));

		dispatch(addAuthentication(response.authentication));
		dispatch(addRoles(response.roleResponses));
		dispatch(loginstatus(true));
		ComponentSwicher(props);

	};

	const handleError = (response) => {
		let	erro_log ;
		if(response === 404){
			 	erro_log = {
				"message":"Server not reachable, try again or contact administrator",
				"status_code":404
			};

			console.table(erro_log);
			set_loginBtn('LOGIN');
			set_message(' Some technical issues, contact administrator   ');
			set_messagestatus('-danger ');
			 
		}else{

			console.log(response);
			set_loginBtn('LOGIN');
			set_message(' Invalid User credentials   ');
			set_messagestatus('-warning ');
			console.log(response);
		}
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
					{loginBtn}
				</button>
			</form>
		</div>
	);

}

export default withRouter(LoginSchool);