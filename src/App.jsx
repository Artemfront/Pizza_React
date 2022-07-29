import React from "react"
import {Routes, Route} from 'react-router-dom'
import Main from "./pages/Main/Main"
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';



function App() {
  const url = 'https://62ddc95379b9f8c30aaeea21.mockapi.io/pizzaList'

  return (
    <div className = 'app'>
      <Routes>
        <Route path = "/" element = {<Main/>} />
      </Routes>
    </div>
  );
}

export default App;
