const initialState = {
    type: 'Все'
}

export const typePizza = (state = initialState, action) => {
    switch(action.type) {
        case SWITCH_TYPE:
            return {...state, type: action.payload}
        default: 
            return state
    }
}

export const SWITCH_TYPE = 'SWITCH_TYPE'