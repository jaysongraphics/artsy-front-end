import React from "react";
import {useEffect, useState} from "react"
import Painting from "./Painting";


function App() {

const [painting, setPainting] = useState([])
    
paintingUrl = 'http://localhost:9393/painting'
useEffect(() =>{
    fetch(paintingUrl)
    .then(res => res.json())
    .then(paintingArray => setPainting(paintingArray))
}, []);

console.log(paintingArray);

  return (
    <div className="App">   
        <Painting 
        painting={painting} 
        />
       {/* <Nav /> */}
    </div>
  );
}




export default App;