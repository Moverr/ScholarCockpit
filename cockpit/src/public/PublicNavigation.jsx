import React, { Component } from 'react';

class PublicNavigation extends Component {
    render() {
        return (
             <ul className={'public_navigation'}>
                <li>Home</li>
                <li>Login</li>
                <li>Register</li>
             </ul>
        );
    }
}

export default PublicNavigation;