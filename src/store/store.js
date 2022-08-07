import {createStore, combineReducers, applyMiddleware} from "redux"
import {typePizza} from "./reducers/typePizza"
import {pizzas} from "./reducers/pizzas"
import thunk from "redux-thunk"
import {pizzaAllCount} from "./reducers/pizzaAllCount"



const rootReducer = combineReducers({
    typePizza,
    pizzas,
    pizzaAllCount
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

