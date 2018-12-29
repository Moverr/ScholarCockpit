import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';



class Router extends Component {
    render() {
        return (
            <div>
                <Switch>                 
                    <Route path="/home" component={Home} />
                    <Route path="/" component={Home} />                
                    <Route path="/login" component={Login} />                    
                 </Switch>
                 
                
            </div>
        );
    }
}

export default Router;