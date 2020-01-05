import React from 'react'
import { logTable } from '../../utils/Logger';


import '../../css/nav.css';
import Banner from './Banner';
import VerifySchool from './VerifySchool';
import Login  from './Login'

const logdata = (
  {
    "section": "HeaderBar",
    "message": "Layout to the header section ",
    "props": "N/A",

  }
);

function RightBar(props) {

  logTable(logdata);

  return (
    <div className={"row-fluid"}>
      <div className="row headerbar">
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
