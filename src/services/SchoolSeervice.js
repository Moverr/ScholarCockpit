import React, { Component } from 'react';

import store from '../store/Store'
import { getEndPoint } from '../helpers/Utils';
import Api from '../components/api/Api';
import BaseService from './BaseService';
 
import {setSchoolName,getSchoolName} from '../store/actions/schoolAction'
import { useSelector,useDispatch } from 'react-redux'


class SchoolService extends BaseService {

    constructor() {
        super()
        this.ENDPOINT = "users";
        this.engine = getEndPoint('users');

        this.counter = useSelector(state =>state.authReducer)

 
    }



    //todo: verify school 
    verify(schoolname, callback) {
        //todo: register school to the state 
        if (schoolname == null) {
            return false;
        }
       
        

        return callback({
            status: "SUCCES",
            message: "School Persisted to Store "
        });


    }

    /*

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

    /*
            }, (error) => {
                console.log(error)
            });
    
    
            return callback();
        }
        */

}


export default SchoolService