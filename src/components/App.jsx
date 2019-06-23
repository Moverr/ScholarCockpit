import React, { Component } from 'react';

import PublicNavigation from './PublicNavigation';
import Router from './Router';
import {log,logTable} from '../utils/Logger';



 
class App extends Component {
    render() {         
         
            log("Initilaizing  Main App Component ");
        return (
            
            <div>                 
                 {/* <PublicNavigation/>  */}
                <Router/>
            </div>
        );
    }
}

export default App;

 
