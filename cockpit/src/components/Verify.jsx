import React, { Component } from 'react';
import '../css/home.css';

class Verify extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			verifyBtn: 'VERIFY SCHOOL'
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.loginForm = null;
	}

	componentDidMount() {
		if (this.props.schoolname) {
			this.setState({
				schoolname: this.props.schoolname
			});
		}
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		let schoolname = this.state.schoolname.trim();
		if(schoolname.length() ===0 ){
			return alert("School Name is mandatory");
		}
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
					<input placeholder="Enter School Name" type="text" className="form-control" value={this.state.schoolname} onChange={this.handleChange} />
					<br/>
					<button type="submit" name="loginbtn" className="btn btn-primary">
						{this.state.verifyBtn}
					</button>

				</form>
			</div>
		);
	}
}

export default Verify;
