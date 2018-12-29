import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
// import Verify from './Verify';


 

class Router extends Component {
    render() {
        return (
            <div>
                <Switch>    
                    <Route exact path="/" component={Home} />                  
                    <Route exact path="/home" component={Home} />                              
                    <Route exact path="/login" component={Login} />   
                                      
                 </Switch>
                 
                
            </div>
        );
    }
}

export default Router;