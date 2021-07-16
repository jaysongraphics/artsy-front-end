import {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import './App.css';
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Gallery from './components/Gallery'
import BuyerCollection from './components/BuyerCollection'
import 'semantic-ui-css/semantic.min.css'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Footer from "./components/Footer";
import Header from "./components/Header.jsx"
import SearchResults from './components/SearchResults'

function App() {
  let history = useHistory()

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
  // console.log(paintings);

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

function userLogin(name, email){
fetch('http://localhost:9393/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    Username: name,
    Email: email
  }),
})
  .then((res) => res.json())
  // .then((data) => {console.log(data)})
  history.push("/buyercollection")
}

function userSignup(name, email){
  
  fetch('http://localhost:9393/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      Username: name,
      Email: email
    }),
  })
    .then((res) => res.json())
    .then((newUser) => {
      addUser(newUser)
      
      // set state with user 
      // use hitory.push("/buyercollection")
    })
  }


  function addUser (newUser) {
    let buyersArray = [...buyers, newUser]
    setBuyer(buyersArray)
  }

  function addReview(newReview) {
    let reviewArray = [...reviews, newReview]
    setReviews(reviewArray)
  }

  const filteredArtist = paintings.filter(painting => {
    return (painting.artist_name.toLowerCase().includes(searchTerm.toLowerCase()))
  })

  const filteredPaintings = paintings.filter(painting => {
    return (painting.painting_name.toLowerCase().includes(searchTerm.toLowerCase()))
  })

  const filteredGalleries = galleries.filter(gallery => {
    return (gallery.gallery_name.toLowerCase().includes(searchTerm.toLowerCase()))
  })




    return(
      <div >
      <Header />
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
              buyers={buyers}
              />} 
              />
              <Route path="/buyercollection" component={BuyerCollection} />
              <Route path="/login"  component={() => <LogIn userLogin={userLogin}/>}/>
              <Route path="/signup"  component={() => <SignUp userSignup={userSignup}/>}/>
              <Route path="/search-results" component={() => <SearchResults filteredArtist={filteredArtist} filteredGalleries={filteredGalleries} filteredPaintings={filteredPaintings} />} />
              </Switch>
          </div>
          <Footer />
      </Router>
      </div>
    )
}

export default App;
