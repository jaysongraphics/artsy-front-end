import {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import './App.css';
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import {Route, Switch} from 'react-router-dom'
import Gallery from './components/Gallery'
import BuyerCollection from './components/BuyerCollection'
import 'semantic-ui-css/semantic.min.css'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Footer from "./components/Footer";
import Header from "./components/Header.jsx"
import SearchResults from './components/SearchResults'
import Painting from "./components/Painting"
import ArtInfo from "./components/ArtInfo"

function App() {
  let history = useHistory()

  const [paintings, setPaintings] = useState([])
  const [galleries, setGalleries] = useState([])
  const [reviews, setReviews] = useState([])
  const [buyers, setBuyers] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [buyerGallery, setBuyerGallery] =useState([])
  const [loggedInBuyer, setLoggedInBuyer] = useState(false)

  useEffect(() =>{
    fetch('http://localhost:9393/buyer')
    .then(res => res.json())
    .then(buyerArray => setBuyers(buyerArray))
  }, []);

  useEffect(() =>{
    fetch('http://localhost:9393/painting')
    .then(res => res.json())
    .then(paintingArray => setPaintings(paintingArray))
  }, []);

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
    username: name,
    email: email
  }),
})
  .then((res) => res.json())
  .then((data) => {
    setLoggedInBuyer(data)
    history.replace('/')
  })
  
}

function userSignup(name, email){
  fetch('http://localhost:9393/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: name,
      email: email
    }),
  })
    .then((res) => res.json())
    .then((buyer) => {
      setLoggedInBuyer(buyer)
      history.replace('/')
    })
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
 
          <div className="AppNav">
            <NavBar  loggedInBuyer={loggedInBuyer} setLoggedInBuyer={setLoggedInBuyer} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <Switch >  
              <Route path="/" exact component={() => <HomePage paintings={paintings} 
              galleries={galleries}/>} 
              />
              <Route path="/gallery" component={() => <Gallery 
              setLoggedInBuyer={setLoggedInBuyer} 
              loggedInBuyer={loggedInBuyer} 
              paintings={paintings}  
              galleries={galleries}
              reviews={reviews}
              addReview={addReview}
              buyers={buyers}
              />} 
              />
              <Route exact path="/buyercollection" component={() => <BuyerCollection paintings={paintings}/>} />
              <Route exact path="/buyercollection/paintings/:id" component={() => <Painting paintings={paintings}  /> 
              }/>

              <Route exact path="/artinfo/:id" component={() => <ArtInfo paintings={paintings}  /> 
              }/>

              <Route path="/login"component={() => <LogIn userLogin={userLogin} loggedInBuyer={loggedInBuyer} history={history}/>}/>
              <Route path="/signup"component={() => <SignUp userSignup={userSignup}/>}/>
              <Route path="/search-results" component={() => <SearchResults filteredArtist={filteredArtist} filteredGalleries={filteredGalleries} filteredPaintings={filteredPaintings} />} />
              </Switch>
          </div>
          <Footer />
   
      </div>
    )
}


export default App;
