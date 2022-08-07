import React, {useEffect} from 'react'
import PizzaCart from "../PizzaCart/PizzaCart"
import { useDispatch, useSelector } from 'react-redux'
import './Pizzas.scss'
import { axiosPizzas } from '../../asyncActions/asyncPizzas'



function Pizzas() {
    const url = "https://62ddc95379b9f8c30aaeea21.mockapi.io/pizzas"
    let pizzas = useSelector(state => state.pizzas.pizzas)
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(axiosPizzas())
    }, [])

    return (
        <div className = "pizzas">
            {pizzas.map((pizza, idx) => {
                return <PizzaCart
                    pizza = {pizza}
                    key = {idx}
                />
            })}
        </div>
    )
}


export default Pizzas;