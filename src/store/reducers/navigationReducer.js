
let defaultNagigation = {
    nextScreen: null,
    currentScreen: null,
    previousScreen: null,

};



export const NavigationReducer = (state = defaultNagigation, action) => {
    switch (action.type) {
        case 'ADD_CURRENT_SCREEN':

            state = { ...state, nextScreen: action.payload };

            break;
        case 'ADD_PREVIOUS_SCREEN':
            state = { ...state, previousScreen: action.payload };
            break;

        case 'ADD_NEXT_SCREEN':
            state = { ...state, previousScreen: action.payload };
            break;



        default:
            break;
    }
    return state;
};


