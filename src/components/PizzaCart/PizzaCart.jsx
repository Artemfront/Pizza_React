import React from 'react'
import "./PizzaCart.scss"
import PropTypes from "prop-types"


function PizzaCart(props) {
  const dough_thin = `dough_thin_${props.pizza.id}`
  const dough_traditional = `dough_traditional_${props.pizza.id}`

  
  const selectedDough = (item) => {
    let selectedBtn = document.getElementById(item.target.id)
    let unSelectedBtn = document.getElementById(`${item.target.id === dough_thin ? dough_traditional : dough_thin}`)

    if(selectedBtn.classList.contains('unSelected')) {
      selectedBtn.classList.remove('unSelected')
    }

    if(unSelectedBtn.classList.contains('selected')) {
      unSelectedBtn.classList.remove('selected')
    }

    unSelectedBtn.classList.add('unSelected')
    selectedBtn.classList.add('selected')
  }


  return (
    <div className = "pizzaCart">
      <img src={props.pizza.image} alt=""/>
      <div className="pizza-name">
        <p>{props.pizza.title}</p>
      </div>
      <div className="pizza-settings">
        <div className="dough">
          <button 
            className = "dough_thin" 
            onClick = {(item) => selectedDough(item)}
            id = {dough_thin}
          >тонкое</button>
          <button 
            className = "dough_traditional"
            id = {dough_traditional}
            onClick = {(item) => selectedDough(item)}
          >традиционное</button>
        </div>
        <div className="pizza-sizes">
          <button>25 см</button>
          <button>30 см</button>
          <button>35 см</button>
        </div>
      </div>
      <div className="pizza-buy">
        <p>{props.pizza.small}</p>
        <button>+ Добавить</button>
      </div>
    </div>
  )
}


PizzaCart.propTypes = {
  pizza: PropTypes.object.isRequired,
}

export default PizzaCart;
