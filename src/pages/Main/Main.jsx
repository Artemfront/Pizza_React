import React from 'react'
import './Main.scss'
import Header from '../../components/Header/Header'
import Navigation from "../../components/Navigation/Navigation"
import Pizzas from "../../components/Pizzas/Pizzas"

function Main() {
  return (
    <div className = 'main'>
      <div className="container">
        <Header/>
        <Navigation/>
        <Pizzas/>
      </div>
    </div>
  )
}


export default Main;