import React, { useState } from 'react'
import logo from "../../assets/images/logo.png"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import "./Navbar.css"


function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <div className="navbar section_padding">
                <div className="logo-image">
                    <a href="/">
                        <img src={logo} alt="logo-image" />
                    </a>
                </div>
                <div className="navItems">
                    <ul>
                        <li><a className="navItem" href="/">Home</a></li>
                        <li><a className="navItem" href="#about">About</a></li>
                        <li><a className="navItem" href="#features">Features</a></li>
                        <li><a className="navItem" href="#pricing">Pricing</a></li>
                        <li><a className="navItem" href="#footer">Contact</a></li>
                    </ul>
                </div>
                <div className="login-btn">
                    <a href='/'>Login</a>
                </div>
                <div className="navbar-md">
                    {toggleMenu ? <RiCloseLine color='#000' size={27} onClick={() => { setToggleMenu(false) }} /> : <RiMenu3Line color='#000' size={27} onClick={() => { setToggleMenu(true) }} />}
                    {toggleMenu && (
                        <div className="navbar-menu_container scale-up-center">
                            <div className="navbar-menu">
                                <li><a className="navItem-md" href="/">Home</a></li>
                                <li><a className="navItem-md" href="#about">About</a></li>
                                <li><a className="navItem-md" href="#features">Features</a></li>
                                <li><a className="navItem-md" href="#pricing">Pricing</a></li>
                                <li><a className="navItem-md" href="#footer">Contact</a></li>
                                <li><a className="navItem-md" href="/">Login</a></li>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Navbar