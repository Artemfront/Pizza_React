import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SWITCH_TYPE } from '../../store/reducers/typePizza'
import "./Navigation.scss"

function Navigation() {
    const dispatch = useDispatch()
    let typeState = useSelector(state => state.typePizza.type)
    let sort = 'популярности'
    let types = ['Все', 'Мясные', "Вегетарианская", "Гриль", "Острые", "Закрытые"]
    let typePizza = types.map((pizza, index) => <div onClick = {(pizza) => typePizzaToggle(pizza)} key = {index} id = {index}>{pizza}</div>)

    console.log(typeState)

    const windowToggle = () => {
        let blockWindow = document.getElementById('sortingWindow')

        if(blockWindow.style.display === 'flex') {
            blockWindow.style.display = 'none'
        } else {
            blockWindow.style.display = 'flex'
        }   
    }


    const typePizzaToggle = (typePizza) => {
        dispatch({type: SWITCH_TYPE, action: typePizza.target.innerText})
    }


    return (
        <div className = "navigation">
            <div className = "categories">
                <div className="categories__inner">
                    {typePizza}
                </div>
            </div>
            <div className="sorting">
                <div className="sorting__text">
                    <p>Сортировка по: <span onClick = {() => windowToggle()}>{sort}</span></p>
                </div>
                <div className="subSorting-window" id = "sortingWindow">
                    <ul>
                        <li className = "point__active">популярности</li>
                        <li>по цене</li>
                        <li>по алфавиту</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation;