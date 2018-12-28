import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
//Redirect

import { NavLink} from 'react-router-dom';
import Login from './Login';
import Home from './Home';


class PublicNavigation extends Component {
    render() {
        return (
            <div>

                 <ul className={'public_navigation'}>
                    <li>
                    <NavLink to={'home'} activeClassName="active">
                                   Home
                                </NavLink>

                    </li>
                    <li>
                    <NavLink to={'login'} activeClassName="active">
                                   login
                                </NavLink>
                    </li>
                    <li>Register</li>
                    
                </ul>
                

                 <Switch>
                 {/* <Redirect from="/login" to="/login"/> */}
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                
                 </Switch>
            </div>

           
        );
    }
}

export default PublicNavigation;