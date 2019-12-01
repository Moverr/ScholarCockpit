import React, { Component } from 'react';

import store from '../Store'
import { getEndPoint } from '../helpers/Utils';
import Api from '../components/api/Api';

export class VerifcationService {

    constructor() {
        this.ENDPOINT = "users";
        this.engine = getEndPoint('users');
    }



    verifySchoolName(schoolname, callback) {
        if (schoolname == null) {
            return false;
        }
        let body = {

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

}
