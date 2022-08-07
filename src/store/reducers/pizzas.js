const initialState = {
    pizzas: []
}


export const GET_PIZZAS = 'GET_PIZZAS'


export const pizzas = (state = initialState, action) => {
    switch(action.type) {
        case GET_PIZZAS: 
            return {...state, pizzas: action.payload}
        default:
            return state
    }
}

export const getPizzasAction = payload => ({type: GET_PIZZAS, payload})