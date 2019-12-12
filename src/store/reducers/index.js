import {  combineReducers} from 'redux';
import Auth from './Authentication';




let reducers = combineReducers(
    {
    authentication:Auth
    }
);


export default reducers;