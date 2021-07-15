// import { Route, Switch } from "react-router-dom"
import {useEffect, useState} from "react"
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Gallery from './components/Gallery'
import BuyerCollection from './components/BuyerCollection'
import 'semantic-ui-css/semantic.min.css'
import searchBar from './components/SearchBar'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'


function App() {
  const [paintings, setPaintings] = useState([])
  const [galleries, setGalleries] = useState([])
  const [reviews, setReviews] = useState([])

  useEffect(() =>{
    fetch('http://localhost:9393/painting')
    .then(res => res.json())
    .then(paintingArray => setPaintings(paintingArray))
  }, []);
  console.log(paintings);

  useEffect(() =>{
    fetch('http://localhost:9393/gallery')
    .then(res => res.json())
    .then(galleryArray => setGalleries(galleryArray))
  }, []);

  useEffect(() =>{
    fetch('http://localhost:9393/review')
    .then(res => res.json())
    .then(reviewArray => setReviews(reviewArray))
  }, []);

function userLogin(username, email){
fetch('http://localhost:9393/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    Username: username,
    Email: email
  }),
})
  .then((res) => res.json())
  .then((data) => {console.log(data)})
}

function userSignup(username, email){
  fetch('http://localhost:9393/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      Username: username,
      Email: email
    }),
  })
    .then((res) => res.json())
    .then((data) => {console.log(data)})
  }


// console.log(userLogin)
// console.log(reviews)

    return(
    <Router> 
          <div className="AppNav">
            <NavBar />
          <Switch >  
              <Route path="/" exact component={() => <HomePage paintings={paintings} 
              galleries={galleries}/>} 
              />
              <Route path="/gallery" component={() => <Gallery paintings={paintings} 
              galleries={galleries}
              reviews={reviews}
              />} 
              />
              <Route path="/buyercollection" component={BuyerCollection} />
              <Route path="/login"  component={() => <LogIn userLogin={userLogin}/>}/>
              <Route path="/signup"  component={() => <SignUp userLogin={userSignup}/>}/>
              </Switch>
          </div>
      </Router>
    )
}

export default App;
