import axios from "axios"
import { getPizzasAction } from "../store/reducers/pizzas"

export const axiosPizzas = () => {
    return async dispatch => {
        let result = await axios.get("https://62ddc95379b9f8c30aaeea21.mockapi.io/pizzas")
        const json = result.data

        dispatch(getPizzasAction(json))
    }
}