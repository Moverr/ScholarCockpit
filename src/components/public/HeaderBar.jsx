import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { logTable } from '../../utils/Logger';
import {applicationTitle} from '../../utils/Constants';

class HeaderBar extends Component {
  render() {
    const logdata = (
      {
        "section": "HeaderBar",
        "message": "Layout the public menu and navigation ",
        "props": "N/A",

      }
    );
    logTable(logdata);

    return (
      <div classname={"row-fluid"}>

        <nav id="bs-navbar" className=" col-md-12 navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
          <ul className="nav navbar-nav">
            <li> <NavLink className={"navbar-brand"} to={'#'} activeClassName="active"> {applicationTitle} </NavLink>
            </li>
          </ul>


          <ul className="nav navbar-nav navbar-right visible-sm">
            <li><a href="javascript.html" target="_blank" title="Open New Tab"><span className="glyphicon glyphicon-arrow-up"></span></a></li>
          </ul>

        </nav>
      </div>

    )
  }
}
export default HeaderBar;