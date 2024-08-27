

const reducerObject = (state, payload) => ({
    [actionTypes.Error]: {
        ...state,
        error: true,
        loading: false,
    },
    [actionTypes.Check]: {
        ...state,
        loading: true
    },
    [actionTypes.Confirm]:{
        ...state,
        error:false,
        loading: false,
        confirmed: true
    },
    [actionTypes.Write]:{
        ...state,
        value: payload
    },
    [actionTypes.Deleted]:{
        ...state,
        deleted: true
    },
    [actionTypes.Reset]: {
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

const actionTypes = {
    Error: 'Error',
    Check: 'Check',
    Confirm: 'Confirm',
    Write: 'Write',
    Deleted: 'Deleted',
    Reset: 'Reset'
}


export{reducer, actionTypes}