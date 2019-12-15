import store from "../store/Store";
 
 
const endpoints = {
    users: "user/v1/",
    roles: "roles/v1/",
}

export function getBaseUrl() {
    let BASE_URL = store.getState().app.baseUrl;  
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
    let schoolName = store.getState().auth.schoolname; 
    return schoolName;
}

export function verifyAuthentication() {
    let authentication = store.getState().auth.authentication;
    return authentication;
}


