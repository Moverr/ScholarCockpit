import {  combineReducers} from 'redux';

const defaultAuthentication = {
    schoolname: null,
    authentication: null
};
 
 const Authentication = (state = defaultAuthentication, action) => {
    switch (action.type) {
        case 'ADD_SCHOOLNAME':
            state = { ...state, schoolname: action.payload };
            break;
        case 'ADD_AUTHENTICATION':
        state = { ...state, authentication: action.payload };
        break;

        
        default:
            break;
    }
    return state;
};


const AuthenticationStatus = {
    status:"",
    message:""
}
const LoginResponse = (state=AuthenticationStatus,action)=>{
    switch (action.type) {
        case "LOGIN_FAILURE":
            state = {...state,message:action.payload}
            break;

    case "LOGIN_STATUS":
            state = {...state,status:action.payload}
            break;
            
        default:
            break;
    }
    return state;
};

let Auth = combineReducers(
    {
        Authentication,
        LoginResponse
    }
);


export default Auth;