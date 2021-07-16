import React from "react";


function Footer() {
 

  return (
    <div className="footer">
      <form> 
    <h4>Subscribe</h4>
    <div class="ui input">
        <input type="text" placeholder="Subscribe to our mailing list..." />
      </div>
    </form>

    <div >
    <h4>Follow us!</h4>
      <button class="ui circular facebook icon button">
      <i class="facebook icon"></i>
      </button>
      <button class="ui circular twitter icon button">
        <i class="twitter icon"></i>
      </button>
      <button class="ui circular linkedin icon button">
        <i class="linkedin icon"></i>
      </button>
      <button class="ui circular google plus icon button">
        <i class="google plus icon"></i>
      </button>
    </div>
  </div>
  );
}

export default Footer;
