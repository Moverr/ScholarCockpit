


let defaultNagigation = {
    nextScreen: null,
    currentScreen: null,
    previousScreen: null,
};

let endpoints = {
    users: "user/v1/",
    roles: "roles/v1/"
}
let baseUrlConfig = {
    development:"http://localhost:9776/",
    staging:"",
    live:""
    
}

let appConfig = {
    api: "v1.0.0.1",
    apiVersion: null,
    baseUrl: baseUrlConfig,
    endpoints: endpoints,
    navigation: defaultNagigation
};




export const AppReducer = (state = appConfig, action) => {

    return state;
};



export const NavigationReducer = (state = defaultNagigation, action) => {
    switch (action.type) {
        case 'ADD_CURRENT_SCREEN':

            state = { ...state, currentScreen: action.payload };

            break;
        case 'ADD_PREVIOUS_SCREEN':
            state = { ...state, previousScreen: action.payload };
            break;

        case 'ADD_NEXT_SCREEN':
            state = { ...state, nextScreen: action.payload };
            break;
 
        default:
            break;
    }
    return state;
};





