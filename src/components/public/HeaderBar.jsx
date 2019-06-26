import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { logTable } from '../../utils/Logger';
import { applicationTitle } from '../../utils/Constants';
import logo from '../../images/logo.png';

import '../../css/nav.css';

const logdata = (
    {
      "section": "HeaderBar",
      "message": "Layout to the header section ",
      "props": "N/A",

    }
  );
  
function  HeaderBar () {
    logTable(logdata);
     
    return (
      <div classname={"row-fluid"}>
       <h1> Header Section </h1>
      </div>

    )
  
}
export default HeaderBar;