import store from "../Store";

const BASE_URL = " http://localhost:9876/";
const endpoints = {
        users: "user/v1/",
        roles: "roles/v1/",
    }

    export function getBaseUrl() {
        return BASE_URL;
    }

export  function getEndPoint  (endpoint) {
    return endpoints[endpoint];
}

 

export function getfullurl (endpoint)  {
    return getBaseUrl() + getEndPoint(endpoint);
}

 

export function pushHistory(path, props) {
    props.history.push(path);
}


export function verifySchool() {
    let schoolName = store.getState().Auth.Authentication.schoolname;
    console.log(schoolName)
    return schoolName;
}

export function verifyAuthentication() {
    let authentication = store.getState().Auth.Authentication.authentication;
    return authentication;
}


 