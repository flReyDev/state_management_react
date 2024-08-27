

const reducerObject = (state, payload) => ({
    'Error': {
        ...state,
        error: true,
        loading: false,
    },
    'Check': {
        ...state,
        loading: true
    },
    'Confirm':{
        ...state,
        error:false,
        loading: false,
        confirmed: true
    },
    'Write':{
        ...state,
        value: payload
    },
    'Deleted':{
        ...state,
        deleted: true
    },
    'Reset': {
        ...state,
        confirmed: false,
        deleted: false,
        value: ''
    }
});

const reducer = (state, actions) => {
    if(reducerObject(state)[actions.type]){
        return reducerObject(state, actions.payload)[actions.type];
    }else{
        return state;
    }
}


export{reducer}