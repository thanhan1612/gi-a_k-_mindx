import React from "react";
import './Navbar.css' 
const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="website_name">
                Anonime
            </h1>
            <p className="home">
                Home
            </p>
            <p className="list">
                List anime
            </p>
            <input placeholder="Search anime or movie" className="input"/>
        </div>
    )
}
export default Navbar;