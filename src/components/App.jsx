import React, { Component } from 'react';

import PublicNavigation from './PublicNavigation';
import Router from './Router';


 
class App extends Component {
    render() {
         
            console.log("Initilaizing  Main App Component ");
        return (
            
            <div>                 
                 <PublicNavigation/> 
                <Router/>
            </div>
        );
    }
}

export default App;

 
