import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { logTable } from '../../utils/Logger';
import { applicationTitle } from '../../utils/Constants';
import logo from '../../images/logo.png';

import '../../css/nav.css';

const logdata = (
  {
    "section": "Banner",
    "message": "Banner Loading ",
    "props": "N/A",

  }
);

function Banner() {
  logTable(logdata);

  return (
    <div  className="banner ">
      <h1> SCHOOL MANAGEMENT SYSTEM <br/> v1.0 beta</h1>
    </div>

  )

}
export default Banner;