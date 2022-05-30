import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='fixed-menu'>
            <ul className="menu bg-dark">
                <li className="menu"><NavLink to="/">Home</NavLink></li>
                <li className="menu"><NavLink to="/features">Features</NavLink></li>
                <li className="menu"><NavLink to="/react18">React 18</NavLink></li>
                <li className="menu"><NavLink to="/storage">Storage</NavLink></li>
                <li className="menu"><NavLink to="/about">About</NavLink></li>
                <li className="menu"><NavLink to="/contact">Contact</NavLink></li>
                <li className="menu topnav-right"><NavLink to="/login">Login</NavLink></li>
                <li className="menu topnav-right"><NavLink to="/registration">Registration</NavLink></li>
            </ul>
        </div>
    );
}

export default Menu;