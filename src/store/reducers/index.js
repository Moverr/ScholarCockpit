import { combineReducers } from 'redux';
import { AuthenticationReducer, LoginResponseReducer } from './Authentication';
import { AppReducer, NavigationReducer } from './AppReducer'
import { NavigationReducer } from './NavigationReducer'
 
let allReducers = combineReducers(
    {
        app: AppReducer,
        auth: AuthenticationReducer,
        login: LoginResponseReducer,
        navigation: NavigationReducer
    }
);



export default allReducers;