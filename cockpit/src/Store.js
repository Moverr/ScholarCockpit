import {createStore, applyMiddleware, compose} from 'redux';


const reducer = (state,action)=>{

    return "Let me COme to YOu";
};


let store = createStore(reducer,0);

store.subscribe(()=>{
    console.log("LISTEN ME",store.getState());
});


export  default store;