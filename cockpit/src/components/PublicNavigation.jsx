import React, { Component } from 'react';


import { NavLink} from 'react-router-dom';


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
                

            </div>

           
        );
    }
}

export default PublicNavigation;