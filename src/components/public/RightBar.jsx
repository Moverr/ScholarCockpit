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

const renderSwitch = (level, props) => {

  switch (level) {
    case 'LOGIN':
      return <Login props={props} />;
      

    case 'VERIFYSCHOOL':
      return <VerifySchool props={props} />;
     

    default:
      return <VerifySchool props={props} />;
     

  }
}

function RightBar(props) {

  const screennavigation = useSelector(state => state.navigation);

  logTable(logdata);
  const urlsegment = props.urlSegment;
  console.log("SOEOEOEOEOEOEO");
  console.log(screennavigation.currentScreen);


  return (
    <div className={"row-fluid"}>
      <div className="row headerbar">

        <div className="col-md-9">
          <Banner props={props} />
        </div>
        <div className="col-md-3">
          {renderSwitch(screennavigation.currentScreen, props)}
        </div>



      </div>

    </div>

  )

}
export default RightBar;
