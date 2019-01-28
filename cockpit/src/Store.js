import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { authenticationReducer } from './reducers/Authentication';
import reducers from './reducers/'

 
let store = createStore(reducers);

store.subscribe(()=>{
    console.log("LISTEN ME",store.getState());
});


export  default store;