import React, {useState} from 'react'
import '../HeaderBtn/HeaderBtn.scss'
import {useDispatch, useSelector} from "react-redux"
// import {ADD_PIZZA} from "../../store/reducers/counterPizza"

function HeaderBtn() {
    const dispatch = useDispatch()
    // const countPizza = useSelector(state => state.counterPizza.counterPizza)
    // const [counterPizza, setCounterPizza] = useState(0)



    return (
        <div className = 'header__inner'>
            <div className="namePizza">
                <h2>React Pizza</h2>
                <h5>самая вкусная пицца во вселенной</h5>
            </div>
            <button className = "btn">1500 ₽</button>
        </div>
    )
}


export default HeaderBtn;