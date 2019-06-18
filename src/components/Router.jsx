import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Verify from './Verify';
import Dashboard from './Dashboard';
// import Verify from './Verify';

class Router extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact  path="/verify" component={Verify} />
					<Route exact path="/login/" component={Login}/>
                    <Route path="/login/:schoolName" component={Login} />
					<Route path="/dashboard/" component={Dashboard} />
					<Route path="*" component={Home} />
				</Switch>
			</div>
		);
	}
}

export default Router;