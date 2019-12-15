 
 
let endpoints = {
    users: "user/v1/",
    roles: "roles/v1/"
}


let appConfig = {
    api: "v1.0.0.1",
    apiVersion: null,
    baseUrl: "http://localhost:9776/",
    endpoints:endpoints
    
};
 



export const AppReducer = (state = appConfig, action) => {
    
    return state;
};


 
