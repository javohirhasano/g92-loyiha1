import "./Header.css"
import { Link, } from 'react-router-dom'
import React from 'react'
import { Slide } from "react-awesome-reveal"

const Header = () => {
    return (
        <div>
            <header className="App-header">
                <div className="container d-flex justify-content-between align-items-center">
                    <div>  <img src="https://osten.vercel.app/images/osten.svg" className="logo"></img></div>
                    <ul className="links">
                        <Slide>
                            <li><Link to="/" className="ms-3 "> Home</Link> </li>
                            <li><Link to="/about" className="ms-3 "> About</Link> </li>
                            <li><Link to="/dashboard" className="ms-3 "> Dashboard</Link> </li>
                        </Slide>
                    </ul>
                </div>
            </header>
        </div>
    )
}
export default Header;
