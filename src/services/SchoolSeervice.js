import React, { Component } from 'react';

import store from '../store/Store'
import { getEndPoint } from '../helpers/Utils';
import Api from '../components/api/Api';
import { useSelector, useDispatch ,useState} from 'react-redux';
//actions 
import { setSchoolName } from '../store/actions/schoolAction'


export function VerifySchoolService(schoolname, callback) {
 
    if (schoolname == null) {
        return false;
    }


    return callback({
        status: "SUCCES",
        message: "School Persisted to Store "
    });


}
