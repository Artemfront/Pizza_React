let initialState = 0


export const ADD_PIZZA = "ADD_PIZZA"
export const REMOVE_PIZZA = "REMOVE_PIZZA"

export const pizzaAllCount = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA:
            return state += action.payload
        case REMOVE_PIZZA: 
            return state -= action.payload
        default: 
            return state
    }
}