import {createStore, combineReducers} from "redux"
import { counterPizza } from "./reducers/counterPizza"
import {typePizza} from "./reducers/typePizza"


const rootReducer = combineReducers({
    counterPizza,
    typePizza
})


export const store = createStore(rootReducer)