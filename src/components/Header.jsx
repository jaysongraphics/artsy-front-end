import React from 'react';
import Image from '../images/eric-park-QbX8A8eHfzw-unsplash.jpg'
import ImageImg from '../images/creative-design.png'

function Header(){
    return  (
        <div > 
       <div className='header-div'> 
        <img id="logo-img" rc={Image} width='150px' height=' 150px' alt='logo'/>
             <h1 className='logoh1'>Artsy</h1>
      </div >
    </div>
    )
}


export default Header