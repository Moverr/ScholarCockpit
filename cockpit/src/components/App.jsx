import React, { Component } from 'react';

import PublicNavigation from './PublicNavigation';
import Router from './Router';

import '../css/bootstrap-4.1.3-dist/css/bootstrap.css';
 
class App extends Component {
    render() {
         
            
        return (
            
            <div>                 
                <PublicNavigation/>
                <Router/>
            </div>
        );
    }
}

export default App;

 
