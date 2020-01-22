import store from "../store/Store";



export function getBaseUrl() {
    let env = "development"
    let baseurl = store.getState().app.baseUrl[env];
    return baseurl;
}

export function getEndPoint(endpoint) {
    let ednpointUrl = store.getState().app.endpoints[endpoint];
    return ednpointUrl;
}


export function getfullurl(endpoint) {
    return getBaseUrl() + getEndPoint(endpoint);
}


export function getLastURLSegment(){
    var pageURL = window.location.href;
    var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);   
    return lastURLSegment;
}



export function pushHistory(path, props) {
    props.history.push(path);
}


export function getSchoolName() {
    let schoolName = store.getState().auth.schoolname;
    return schoolName;
}

export function verifyAuthentication() {
    let authentication = store.getState().auth.authentication;
    return authentication;
}



export function getCurrentScreen() {
    let navigation = store.getState().navigation.currentScreen;
    return navigation;
}


 

