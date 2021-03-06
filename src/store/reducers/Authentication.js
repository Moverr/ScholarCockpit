
let defaultAuthentication = {
    schoolname: null,
    authentication: null,
    roles: {}
};

let AuthenticationStatus = {
    status: "",
    message: "",

}



export const AuthenticationReducer = (state = defaultAuthentication, action) => {
    switch (action.type) {
        case 'ADD_SCHOOLNAME':

            state = { ...state, schoolname: action.payload };

            break;
        case 'ADD_AUTHENTICATION':
            state = { ...state, authentication: action.payload };
            break;

        case 'ADD_ROLES':
            state = { ...state, roles: action.payload };
            break;



        default:
            break;
    }
    return state;
};



export const LoginResponseReducer = (state = AuthenticationStatus, action) => {
    switch (action.type) {
        case "LOGIN_FAILURE":
            state = { ...state, message: action.payload }
            break;

        case "LOGIN_STATUS":
            state = { ...state, status: action.payload }
            break;

        default:
            break;
    }
    return state;
};



