import React, { Component } from 'react';
// import Utils from '../helpers/Utils';
import '../../css/home.css';
import store from '../../store/Store';
import { pushHistory } from '../../helpers/Utils';


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
		this.setState({ schoolName: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			message_status: '-warning displaynone ',
			message: ' School Name is mandatory '
		});

		let schoolName = this.state.schoolName;
		if (schoolName.length === 0) {
			return this.setState({
				message_status: '-warning ',
				message: ' School Name is mandatory '
			});
		}

		//todo: dispatch the schoolname to the store :: 
		store.dispatch({
			type:'ADD_SCHOOLNAME',
			payload:this.state.schoolName
		});
		let path = '/login/';
		pushHistory(path,this.props); 

	}

	render() {
		 

		return this.shoolForm(this.props);
	}

	shoolForm=(props)=> {
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
