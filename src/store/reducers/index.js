import { combineReducers } from 'redux';
import { AuthenticationReducer, LoginResponseReducer } from './Authentication';
import { AppReducer, NavigationReducer } from './AppReducer'
 
 
let allReducers = combineReducers(
    {
        app: AppReducer,
        auth: AuthenticationReducer,
        login: LoginResponseReducer
    }
);



export default allReducers;