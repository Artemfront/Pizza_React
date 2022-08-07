import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from "../../store/store"
import { SWITCH_TYPE } from '../../store/reducers/typePizza'
import "./Navigation.scss"

function Navigation() {
    let dispatch = useDispatch()
    // let typeState = useSelector(state => state.typePizza.type)
    let sort = 'популярности'
    let types = ['Все', 'Мясные', "Вегетарианская", "Гриль", "Острые", "Закрытые"]
    let itemPizza = types.map((pizza, index) => <div onClick = {(pizza) => typePizzaToggle(pizza)} key = {index} id = {index}>{pizza}</div>)



    const windowToggle = () => {
        let blockWindow = document.getElementById('sortingWindow')

        return blockWindow.style.display == 'flex' ? blockWindow.style.display = 'none' : blockWindow.style.display = 'flex'
    }


    let typePizzaToggle = (typePizza) => {
        let blockType = document.getElementById(typePizza.target.id)

        dispatch({type:SWITCH_TYPE, payload: blockType.innerText})

        types.forEach((_, idx) => {
            if(idx == blockType.id) {
                blockType.classList.add('active')
            } else {
                let otherBlock = document.getElementById(idx)
                otherBlock.classList.remove('active')
            }
        })
    }


    return (
        <div className = "navigation">
            <div className="navigation__inner">
                <div className = "categories">
                    <div className="categories__inner">
                        {itemPizza}
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
            <h1>Все пиццы</h1>
        </div>
    )
}

export default Navigation;