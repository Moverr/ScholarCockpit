import {  combineReducers} from 'redux';
import {Authentication,LoginResponse} from './Authentication';




let app = combineReducers(
    {
    authReducer:Authentication,
    loginReducer:LoginResponse
    }
);

 

export default app;