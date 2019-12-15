import store from "../store/Store";
 
const BASE_URL = " http://localhost:9776/";
const endpoints = {
    users: "user/v1/",
    roles: "roles/v1/",
}

export function getBaseUrl() {
    return BASE_URL;
}

export function getEndPoint(endpoint) {
    return endpoints[endpoint];
}



export function getfullurl(endpoint) {
    return getBaseUrl() + getEndPoint(endpoint);
}



export function pushHistory(path, props) {
    props.history.push(path);
}


export function verifySchool() {
    let schoolName = store.getState().authReducer.schoolname;
    console.log(schoolName)
    return schoolName;
}

export function verifyAuthentication() {
    let authentication = store.getState().authReducer.authentication;
    return authentication;
}


