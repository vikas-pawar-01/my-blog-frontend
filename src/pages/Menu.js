import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <ul className="menu">
            <li className="menu"><NavLink to="/">Home</NavLink></li>
            <li className="menu"><NavLink to="/features">Features</NavLink></li>
            {/* <li className="menu"><NavLink to="/contact">Contact</NavLink></li>
            <li className="menu"><NavLink to="/about">About</NavLink></li> */}
            <li className="menu topnav-right"><NavLink to="/login">Login</NavLink></li>
        </ul>
    );
}

export default Menu;