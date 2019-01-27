import store from "../Store";

class Utils {

    BASE_URL = " http://localhost:9876/";
    endpoints = {
        users: "user/v1/",
        roles: "roles/v1/",
    }

    getBaseUrl() {
        return this.BASE_URL;
    }

    getEndPoint = (endpoint) => {
        return this.endpoints[endpoint];
    }

    getFullUrl = (endpoint) => {
        return this.getBaseUrl() + this.getEndPoint(endpoint);
    }

}

export function pushHistory(path, props) {
    props.history.push(path);
}


export function verifySchool() {
    let schoolName = store.getState().Auth.Authentication.schoolname;
    return schoolName;
}

export function verifyAuthentication() {
    let authentication = store.getState().Auth.Authentication.authentication;
    return authentication;
}


export default Utils;