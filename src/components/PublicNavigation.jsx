import React, { Component } from 'react';


import { NavLink} from 'react-router-dom';


class PublicNavigation extends Component {
    render() {
        
        console.table(
            {
                "section":"Public Navigation",
               "message":"Initilaizing  Main App Component ",
               "props":"N/A",
               
            }
            );
        return (

            <nav className={"navbar navbar-default navbar-fixed-top"}>
  <div className={"container-fluid"}>

   <div className="navbar-header">
      <button type={"button"} className={"navbar-toggle collapsed"} data-toggle={"collapse"} data-target={"#bs-example-navbar-collapse-1"} aria-expanded={"false"}>
        <span className={"sr-only"}>Toggle navigation</span>
        <span className={"icon-bar"}></span>
        <span className={"icon-bar"}></span>
        <span className={"icon-bar"}></span>
      </button>
      <NavLink className={"navbar-brand"} to={'#'} activeClassName="active"> SCHOLAR </NavLink>
      
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

  <ul className={'nav navbar-nav'}>
                    <li>
                        <NavLink exact={true} to="/home"  activeClassName="active">Home</NavLink></li>
                    <li>
                        <NavLink  exact={true} to="/login"  activeClassName="active">login</NavLink>
                    </li>
                    <li>
                        <NavLink  exact={true} to="/verify"  activeClassName="active">verify</NavLink>
                    </li>
                    <li>
                        <NavLink  exact={true} to="/login"  activeClassName="active">Register</NavLink>
                    </li>                    
    </ul>
                
</div>
  </div>
</nav>

            

           
        );
    }
}

export default PublicNavigation;