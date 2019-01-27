import React, { Component } from 'react';
import { verifySchool, pushHistory, verifyAuthentication } from '../helpers/Utils';

class Dashboard extends Component {
	componentDidMount() {
		let schoolName = verifySchool();
		let authentication = verifyAuthentication();

		if (schoolName === null) {
			let path = `/verify/`;
			pushHistory(path, this.props);
			return;
		}

		if (authentication === null) {
			let path = `/login/` + schoolName;
			pushHistory(path, this.props);
			return;
		}
	}

	render() {
		return (
			<div>
				<h1> Welcome to the Dashboard </h1>
			</div>
		);
	}
}

export default Dashboard;
