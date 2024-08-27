const initialValue ={
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
}


const reducerIf = (state, actions) => {
    if(actions.typec === 'Error'){
        return {
            ...state,
            error: true,
            loading: false,
        }
    }else if(actions.typec === 'Check'){
        return {
            ...state,
            loading: true,
        }
    }else{
        return {
            ...initialValue
        }
    }
}


const reducerSwitch = (state, actions) => {
    
    switch(actions.type){
        case 'Error':
            return {
                ...state,
                error: true,
                loading: false,
            }
        case 'Check':
            return {
                ...state,
                loading: true
            }
        default:
            return{
                ...state
            }

    }
}

const reducerObject = (state) => ({
    'Error': {
        ...state,
        error: true,
        loading: false,
    },
    'Check': {
        ...state,
        loading: true
    }
});

const reducer = (state, actions) => {
    if(reducerObject(state)[actions.type]){
        return reducerObject(state)[actions.type];
    }else{
        return state;
    }
}