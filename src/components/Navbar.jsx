import React from "react"
import "./Navbar.css"

const Navbar = ({user, setUser}) => {

    const handleLogout = (e) => {
        e.preventDefault();
        setUser({});
    }
    
    return (
        <div className="navbar">
            <h2>{user.name}</h2>
            <button onClick={e => handleLogout(e)}>Log out</button>
        </div>
    )
}

export default Navbar;