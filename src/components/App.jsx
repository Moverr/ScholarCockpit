import React, { Component } from 'react';
import Router from './Router';
import { log } from '../utils/Logger';


function App() {

    log("Initilaizing  Main App Component ");
    return (
        <div>
            <Router />
        </div>
    );

}

export default App;


