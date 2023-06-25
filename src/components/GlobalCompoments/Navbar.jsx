import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Global.styles.css"
import {FaTimes, FaBars} from "react-icons/fa"
import {GrCart} from "react-icons/gr"
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
    const NavRef = useRef()
    const dispatch = useDispatch()
    const {cartTotalQuantity} = useSelector(state => state.cart)
    const auth = useSelector(state => state.auth)

    const showNavbar = () => {
        NavRef.current.classList.toggle("responsive_navbar")
    }
  return (
    <div className='navbar-container'>
        <h2>
            <Link to="/">
                Logo
            </Link>
        </h2>
        <nav ref={NavRef}>
            <Link to="/about" className='text-decoration-none text-white'>About Us</Link>
            <Link to="/shop" className='text-decoration-none text-white'>Shop</Link>
            <Link to="/faq" className='text-decoration-none text-white'>FAQ</Link>
            <Link to="/contact" className='text-decoration-none text-white'>Contact Us</Link>
            <Link to="/cart">
                <GrCart color='white' size={30} />
                <span className='text-white'>{cartTotalQuantity}</span>
            </Link>
            <div className='auth-btn-mob'>
                <button className='btn btn-primary'>Login</button>
                <button className='btn btn-warning'>Register</button>
            </div>
            <div className='navicon'>
            <FaTimes   size={25} onClick={showNavbar}/>
            </div>
        </nav>
        {/* {auth._id ?  */}
            {/* <div>
                <button className='btn btn-danger'>Log Out</button>
            </div> */}
        {/* :   */}
        <div className='auth-btn-desk'>
            <Link to="/login">
                <button className='btn btn-primary'>Login</button>
            </Link>
            <Link to="/register">
                <button className='btn btn-warning ml-4'>Register</button>
            </Link>
        </div>
        {/* } */}
        <div className='navicon'>
        <FaBars color="black" size={25} onClick={showNavbar}/>
        </div>
    </div>
  )
}

export default Navbar