import React, { Component } from 'react';

import store from '../store/Store'
import { getEndPoint } from '../helpers/Utils';
import Api from '../components/api/Api'; 
 

export function VerifySchool(schoolname, callback)){

    if (schoolname == null) {
        return false;
    }
   
    

    return callback({
        status: "SUCCES",
        message: "School Persisted to Store "
    });


}
 