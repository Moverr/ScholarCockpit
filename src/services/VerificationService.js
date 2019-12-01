import React, { Component } from 'react';

import store from '../Store'
import { pushHistory } from '../helpers/Utils';

let ENDPOINT = "";
let  = this.util.getEndPoint('users');
export function verifySchoolName(schoolname, callback) {
    if (schoolname == null) {
        return false;
    }

    let body = {
        username:"se'se",
        password: "spoe"
    };

    let url = this.endpoint + 'login';
    this.Api.post(url, body, headers, (data)=>{
        console.log(data);
    },(error)=>{
        console.log(error)
    });
    return callback();
}