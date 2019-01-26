import {createStore, applyMiddleware, compose, combineReducers} from 'redux';


const authentication_defaults = {
schoolname:null,
authentication:null
};
const authenticationReducer = (state=authentication_defaults,action)=>{
    switch(action.type){
        case 'ADD_SCHOOLNAME':
            state = {...state,schoolname:action.payload}
        break;
        default:
        break;
    }
    return state;
};

const reducer = (state={},action)=>{

    return "Let me COme to YOu";
};

 
let reducers = combineReducers({
    authentication:authenticationReducer,
    basic:reducer});
let store = createStore(reducers);

store.subscribe(()=>{
    console.log("LISTEN ME",store.getState());
});


export  default store;