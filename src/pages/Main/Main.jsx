import React from 'react'
import './Main.scss'
import Header from '../../components/Header/Header'
import Navigation from "../../components/Navigation/Navigation"

function Main() {
  return (
    <div className = 'main'>
      <div className="container">
        <Header/>
        <Navigation/>
      </div>
    </div>
  )
}


export default Main;