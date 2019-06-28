import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { logTable } from '../../utils/Logger';
import { applicationTitle } from '../../utils/Constants';
import logo from '../../images/logo.png';

import '../../css/nav.css';
import Banner from './Banner';

const logdata = (
  {
    "section": "HeaderBar",
    "message": "Layout to the header section ",
    "props": "N/A",

  }
);

function HeaderBar() {
  logTable(logdata);

  return (
    <div className={"row-fluid"}>
      <div className="row headerbar">
        <div className="col-md-9">
          <Banner />
        </div>
        <div className="col-md-3">
          <br />
          <h5>Enter School Name</h5>
          <input type="text" className="text" value="" placeholder="Enter School Name " />
          <br />
          
          <button>CONTINUE</button>
        </div>
      </div>

    </div>

  )

}
export default HeaderBar;