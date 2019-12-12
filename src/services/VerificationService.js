import React, { Component } from 'react';

import store from '../store/Store'
import { getEndPoint } from '../helpers/Utils';
import Api from '../components/api/Api';
import BaseService from './BaseService';

class SchoolService  extends BaseService{

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

        let url = this.ENDPOINT + '/login';
        let headers = {};

        let api = new Api();

        api.post(url, body, headers, (data) => {

            alert("pass");
          
          /*  store.dispatch({
                type: 'ADD_SCHOOLNAME',
                payload: schoolname
            }); */


        }, (error) => {
            console.log(error)
        });


        return callback();
    }

}


export default SchoolService