import React, { Component } from 'react';
import '../css/home.css';
import PublicNavigation from './PublicNavigation';

class Home extends Component {
    render() {
        return (
            <div className={'home'}>
                <h1>SCHOLA </h1>
                <PublicNavigation/>
            </div>
        );
    }
}

export default Home;