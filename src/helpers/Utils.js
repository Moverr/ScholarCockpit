import store from "../store/Store";



export function getBaseUrl() {
    let baseurl = store.getState().app.baseUrl;
    return baseurl;
}

export function getEndPoint(endpoint) {
    let ednpointUrl = store.getState().app.endpoints[endpoint];
    return ednpointUrl;
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


