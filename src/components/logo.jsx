import React from 'react'
import Image from './Images/crypto_logo.png'
// import Image from './Images/Diamond_Hands.jpeg'


function Logo(){
    return  (
       <div className='logo'> 
             <img src={Image} width='150px' height=' 150px' alt='logo'/>
      </div>
    )
}


export default Logo