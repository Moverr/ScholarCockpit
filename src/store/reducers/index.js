import {  combineReducers} from 'redux';
import {Authentication,LoginResponse} from './Authentication';




let allReducers = combineReducers(
    {
    authReducer:Authentication,
    loginReducer:LoginResponse
    }
);

 

export default allReducers;