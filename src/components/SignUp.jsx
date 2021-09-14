import React from "react";
import {useState} from "react"
import {Link} from "react-router-dom"

function SignUp({userSignup}) {
    const [usernameSignup, setUsernameSignup] =useState("")
    const [emailSignup, setEmailSignup] =useState ("")

    function handleSignUpUser(e){
      setUsernameSignup(e.target.value)
    }  
  
    function handleSignUpEmail(e){
      setEmailSignup(e.target.value)
  }  

  const handleSignup = (e) => {
    e.preventDefault();
    userSignup(usernameSignup, emailSignup)
    setUsernameSignup("")
    setEmailSignup("")
  }
  
  return (
      <div className="signup-div">
          <h1>Join Artsy today!</h1>
          <div 
          className='ui form'>        
                <div>
                <input onChange={handleSignUpUser} type="text" name="username" placeholder="Username" 
                value={usernameSignup}/> 
                <label htmlFor="username">Username</label>
              </div>
              <div>
                <input onChange={handleSignUpEmail}type="text" name="password" placeholder="Email"  
                value={emailSignup}/>
                <label htmlFor="password">Email</label>
              </div>      
              <button onClick={handleSignup} className="ui grey button">Sign Up</button>
              <Link to="/login">
                <button className="" className="ui black button">Log In</button>
                </Link>
              <div id="login-buttons" className="ui buttons">
              </div>
          </div>
  </div>
  )}


export default SignUp;