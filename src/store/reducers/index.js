import { combineReducers } from 'redux';
import { AuthenticationReducer, LoginResponseReducer } from './Authentication';
import { AppReducer } from './AppReducer'




let allReducers = combineReducers(
    {
        app:AppReducer,
        authReducer: AuthenticationReducer,
        loginReducer: LoginResponseReducer
    }
);



export default allReducers;