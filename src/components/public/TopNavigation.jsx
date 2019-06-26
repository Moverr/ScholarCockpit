import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { logTable } from '../../utils/Logger';
import { applicationTitle } from '../../utils/Constants';
import logo from '../../images/logo.png';

import '../../css/nav.css';

const logdata = (
    {
      "section": "HeaderBar",
      "message": "Layout the public menu and navigation ",
      "props": "N/A",

    }
  );
  
function  TopNavigation () {
    logTable(logdata);
     

    return (
      <div classname={"row-fluid"}>

        <nav id="bs-navbar" className=" col-md-12 navbar navbar-fixed-top  navbar-expand-lg navbar-light ">
          <ul className="nav navbar-nav">
            <li><img src={logo} alt="Logo" /> <NavLink className={"navbar-brand"} to={'#'} activeClassName="active"> {applicationTitle} </NavLink>
            </li>
          </ul>


          <ul className="nav  navigation_right ">
            <li> <NavLink to={'#'} activeClassName="active"> Product &nbsp; | &nbsp;</NavLink> 
            </li> 
            <li> <NavLink to={'#'} activeClassName="active"> Pricing &nbsp; | &nbsp;</NavLink> 
            </li> 
            <li> <NavLink to={'#'} activeClassName="active"> Support &nbsp;</NavLink> 
            </li> 
            
          </ul>

        </nav>
      </div>

    )
  
}
export default TopNavigation;