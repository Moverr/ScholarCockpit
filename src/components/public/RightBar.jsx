import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { logTable } from '../../utils/Logger';


import '../../css/nav.css';
import Banner from './Banner';
import VerifySchool from './VerifySchool';
import Login from './Login';




const logdata = (
  {
    "section": "HeaderBar",
    "message": "Layout to the header section ",
    "props": "N/A",

  }
);

const renderSwitch = (level) => {

  switch (level) {
    case 'LOGIN':
      break;
    case 'VERIFYSCHOOL':
      break;

    case 'FORGOT_PASSWORD':
      break;

  }
}

function RightBar(props) {

  const screennavigation = useSelector(state => state.navigation);

  logTable(logdata);
  const urlsegment = props.urlSegment;
  console.log("SOEOEOEOEOEOEO");
  console.log(props);


  return (
    <div className={"row-fluid"}>
      <div className="row headerbar">
        {
          switch(screennavigation){
            case: "LOGIN":
          dbreak;

      }
    }
        <div className="col-md-9">
          <Banner props={props} />
        </div>
        <div className="col-md-3">
          <VerifySchool props={props} />
        </div>

        <div className="col-md-3">
          <Login props={props} />
        </div>


      </div>

    </div>

  )

}
export default RightBar;
