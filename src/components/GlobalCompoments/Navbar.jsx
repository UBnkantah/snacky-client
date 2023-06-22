import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Global.styles.css"
import {FaTimes, FaBars} from "react-icons/fa"

const Navbar = () => {
    const NavRef = useRef()

    const showNavbar = () => {
        NavRef.current.classList.toggle("responsive_Navbar")
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
            <Link to="/blog" className='text-decoration-none text-white'>Blog</Link>
            <Link to="/shop" className='text-decoration-none text-white'>Shop</Link>
            <Link to="/faq" className='text-decoration-none text-white'>FAQ</Link>
            <Link to="/contact" className='text-decoration-none text-white'>Contact Us</Link>
            {/* <div>
                <button className='btn btn-primary'>Login</button>
                <button className='btn btn-warning'>Register</button>
            </div> */}
            <FaTimes />
        </nav>
        <div>
            <button className='btn btn-primary'>Login</button>
            <button className='btn btn-warning ml-4'>Register</button>
        </div>
        <FaBars />
    </div>
  )
}

export default Navbar