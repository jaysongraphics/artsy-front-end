import React from "react";
import Painting from "./Painting"



function LogIn() {

  return (
    <div className="login-div">
        <h1>Welcome back Buyer!</h1>
        <form 
        className='ui form'>         
          <div>
            <input type="text" name="username" placeholder="Username" 
            //onChange={(e) => setdetails(e.target.value)} value={details}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>      
          <div id="login-buttons" className="ui buttons">
            <button className="ui black button">Log In</button>
            <div className="or"></div>
            <button className="ui grey button">Sign Up</button>
          </div>
          {/* <input className='ui primary button' type="submit" value="Login"/> */}
        </form>
 
</div>
)}

export default LogIn;
        // <button id="login-buttons" class="ui secondary button">
        // Log in
        // </button>

        // <button id="login-buttons" class="ui inverted black button">
        // Okay
        // </button>