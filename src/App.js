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
import Footer from "./components/Footer";

function App() {
  const [paintings, setPaintings] = useState([])
  const [galleries, setGalleries] = useState([])
  const [reviews, setReviews] = useState([])
  const [buyers, setBuyer] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() =>{
    fetch('http://localhost:9393/buyer')
    .then(res => res.json())
    .then(buyerArray => setBuyer(buyerArray))
  }, []);

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

  function addReview(newReview) {
    let reviewArray = [...reviews, newReview]
    setReviews(reviewArray)
  }

  const filteredArtist = paintings.filter(painting => {
    return (painting.artist_name.toLowerCase().includes(searchTerm.toLowerCase()))
  })

  console.log(filteredArtist)

  // const filterPaintings

  // const filterGallery 


// console.log(userLogin)
// console.log(reviews)

    return(
    <Router> 
          <div className="AppNav">
            <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <Switch >  
              <Route path="/" exact component={() => <HomePage paintings={paintings} 
              galleries={galleries} buyers={buyers}/>} 
              />
              <Route path="/gallery" component={() => <Gallery paintings={paintings} 
              galleries={galleries}
              reviews={reviews}
              addReview={addReview}
              />} 
              />
              <Route path="/buyercollection" component={BuyerCollection} />
              <Route path="/login"  component={() => <LogIn userLogin={userLogin}/>}/>
              <Route path="/signup"  component={() => <SignUp userLogin={userSignup}/>}/>
              </Switch>
          </div>
          <Footer />
      </Router>
    )
}

export default App;
