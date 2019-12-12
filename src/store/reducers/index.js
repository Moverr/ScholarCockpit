import {  combineReducers} from 'redux';
import {AuthenticationReducer,LoginResponseReducer} from './Authentication';




let allReducers = combineReducers(
    {
    authReducer:AuthenticationReducer,
    loginReducer:LoginResponseReducer
    }
);

 

export default allReducers;