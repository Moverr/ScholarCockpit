import React, { Component } from 'react';

import store from '../Store'
import { pushHistory } from '../helpers/Utils';


export function verifySchoolName(schoolname, callback) {
    if(schoolname == null){
        return false;
    }
    return callback();
}