import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { authenticationReducer } from './store/reducers/Authentication';
import reducers from './store/reducers'

 
let store = createStore(reducers);

store.subscribe(()=>{
    console.log("LISTEN ME",store.getState());
});


export  default store;