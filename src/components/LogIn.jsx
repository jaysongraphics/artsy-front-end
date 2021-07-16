import React from "react";
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"


function LogIn({userLogin, loggedInBuyer, history}) {
  const [username, setUserName] =useState("")
  const [email, setEmail] =useState ("")

  function handleUsername(e){
      setUserName(e.target.value)
  }  

  function handleEmail(e){
    setEmail(e.target.value)
}  

// console.log(email);
// console.log(username);

const handleLogin = (e) => {
  e.preventDefault()
  userLogin(username, email)
  setUserName("")
  setEmail("")
}

useEffect(() => {
  if (loggedInBuyer) {
    history.push('/')
  }
})

  return (
      <div className="login-div">
          <h1>Welcome back Buyer!</h1>
          <div 
          className='ui form'>         
            <div>
              <input type="text" name="username" placeholder="Username" 
              onChange={handleUsername} value={username}/> 
              <label htmlFor="username">Username</label>
            </div>
            <div>
              <input type="text" name="password" placeholder="Email"  
              onChange={handleEmail} value={email}/>
              <label htmlFor="password">Email</label>
            </div>      
              <button onClick={handleLogin} 
              className="" className="ui black button">Log In</button>
              <Link to="/signup">
              <button className="ui grey button">Sign Up</button>
              </Link>
            <div id="login-buttons" className="ui buttons">
            </div>
          </div>
  </div>
)}

export default LogIn;
