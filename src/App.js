// import { Route, Switch } from "react-router-dom"
import {useEffect, useState} from "react"
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'



function App() {
    return(
      <div>
        <NavBar />
        <HomePage />
          
      </div>
    )
}

export default App;
