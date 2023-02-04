import React, { useContext } from 'react'
import { Shop } from '../../Context/shopProvider'
import logo from '../Assets/KART.png'
import '../CarWidget/CarWidget.css'
import { Link } from "react-router-dom";
 
const CarWidget = () => {

  
   const {countCart} = useContext(Shop)

   console.log(countCart);

  
  return (
    <div className='menu-navbar-logo'>
      <Link to="/cart">    
        <img className='menu-navbar_img' src={logo} alt='Card Widget'/>
       
    </Link> <span> {countCart()} </span>

    </div>
  )
}

export default CarWidget