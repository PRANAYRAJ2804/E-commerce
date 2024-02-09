import React, { useState, useEffect, useContext } from 'react'
import './Navbar.css'
// import logo from '../../../public/logo.png'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {
    const [menu, setMenu] = useState("")
    const {getTotalCartItems} = useContext(ShopContext)
    
  return (
    <>
    <div className="navbar">
        <div className="nav-logo"> 
            <img src={logo} alt="logo" />
            <p>WARDROBE SHOP</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("Shop")}} ><Link style={{textDecoration: 'none'}} to='/' >Shop</Link> {menu === "Shop" && <hr/>}</li>
            <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link> {menu === "Men" && <hr/>}</li>
            <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link> {menu === "Women" && <hr/>}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link> {menu === "Kids" && <hr/>}</li>
        </ul>

      
        <div className="nav-login-cart">
            <Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>
            <Link style={{textDecoration: 'none'}} to='/cart'><img src={cart_icon} alt="cart-img" /></Link>
            <div className="nav-cart-count">
                {getTotalCartItems()}
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar