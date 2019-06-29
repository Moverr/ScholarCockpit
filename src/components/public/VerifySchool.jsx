import React, { Component } from 'react'
import InputField from '../../forms/inputs/InputField';
function VerifySchool() {
   return  <div className="verifySchoolview col-md-12">
         <br />
          <h5>Enter School Name</h5>
          <InputField type="text" className="text" value="" placeholder="Enter School Name " />
           
          <br />
          
          <button>CONTINUE</button>
    </div>
}

export default VerifySchool;
