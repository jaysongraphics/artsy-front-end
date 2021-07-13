import {useEffect, useState} from "react"
import logo from './logo.svg';
import './App.css';
import MainPage from "./components/MainPage";
import Nav from "./components/Nav"
import Gallery from "./components/Gallery"
import SlideShow from "./components/SlideShow"

function App() {
    return(
      <div>
          <MainPage />  
          <Nav />
          <SlideShow />
      </div>
    )
}

export default App;
