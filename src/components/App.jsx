import React, { Component } from 'react';
import Router from './Router';
import { log } from '../utils/Logger';


 function fet(){
    var axios = require('axios');
    var data = JSON.stringify({ "id": 27, "status": "rejected" });

    var config = {
        method: 'post',
        url: 'https://api.newvisionapp.com/v1/CitizenJournalism/approve',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer H09pxXEwpkD2mY9kP4M38QkD'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

}

function App() {

    fet()
    log("Initilaizing  Main App Component ");
    return (
        <div>ssss
            <Router />
        </div>
    );

}

export default App;


