import React from "react";
import {useState, useEffect} from "react"
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

  console.log(usernameSignup);
  console.log(emailSignup);

  const handleSignup = () => {
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
              <input type="text" name="username" placeholder="Username" 
              onChange={handleSignUpUser} value={usernameSignup}/> 
               <label htmlFor="username">Username</label>
            </div>
            <div>
              <input type="text" name="password" placeholder="Email"  
              onChange={handleSignUpEmail} value={emailSignup}/>
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