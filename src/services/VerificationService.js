import React, { Component } from 'react';

import store from '../Store'
import { getEndPoint } from '../helpers/Utils';
import Api from '../components/api/Api';


let ENDPOINT = "users";
let engine = getEndPoint('users');
export function verifySchoolName(schoolname, callback) {
    if (schoolname == null) {
        return false;
    }

    let body = {
        username: "se'se",
        password: "spoe"
    };

    let url = ENDPOINT + '/login';
    let headers = {};

    let api = new Api();

    api.post(url, body, headers, (data) => {
        store.dispatch({
            type: 'ADD_SCHOOLNAME',
            payload: schoolname
        });


    }, (error) => {
        console.log(error)
    });




    return callback();
}