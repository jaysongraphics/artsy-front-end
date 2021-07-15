import React from "react";
import {useState, useEffect} from "react"


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
  
  
    return (
      <div className="signup-div">
          <h1>Welcome back Buyer!</h1>
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
              <button onClick={() =>{userSignup(usernameSignup, emailSignup)
              usernameSignup("")
              emailSignup("")
               }} 
              className="" className="ui black button">Log In</button>
              <button className="ui grey button">Sign Up</button>
            <div id="login-buttons" className="ui buttons">
            </div>
          </div>
  </div>
  )}


export default SignUp;