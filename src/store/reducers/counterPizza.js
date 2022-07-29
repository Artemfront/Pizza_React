const initialState = {
    counterPizza: 0
}



export const counterPizza = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PIZZA:
            return {...state, counterPizza: state.counterPizza + action.payload}
        default: 
            return state
    }
}


export const ADD_PIZZA = 'ADD_PIZZA'