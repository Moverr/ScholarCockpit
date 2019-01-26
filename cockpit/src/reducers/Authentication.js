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
        default:
            break;
    }
    return state;
};




let Auth = combineReducers(
    {
        Authentication
    }
);


export default Auth;