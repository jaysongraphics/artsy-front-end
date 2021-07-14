// import { Route, Switch } from "react-router-dom"
import {useEffect, useState} from "react"
import logo from './logo.svg';
import './App.css';
import HomePage from "../component/HomePage";
import Header from './Header'


function App() {
    return(
      <div>
        <Header />
        <HomePage />  
      </div>
    )
}

export default App;
