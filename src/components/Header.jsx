import React from 'react';
// import ImageImg from '../images/PikPng.com_graphic-designing-png_821269.png'
import Image from '../images/creative-design.png'
import {Link} from 'react-router-dom'

function Header(){
    return  (
        <div > 
       <div className='header-div'> 
        <Link to='/' >
        <img id="logo-img" src={Image} width='150px' height=' 150px' alt='logo' />  
        </Link>
        <h1 className='logoh1'>Artsy</h1>
      </div >
    </div>
    )
}


export default Header