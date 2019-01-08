import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Verify from './Verify';
// import Verify from './Verify';

class Router extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/home" component={Home} />
					<Route path="/verify" component={Verify} />

					<Route path="/login/:schoolName" component={Login} />
					<Route path="*" component={Home} />
				</Switch>
			</div>
		);
	}
}

export default Router;
