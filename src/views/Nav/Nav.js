import React from 'react';
import "./Nav.scss"

import {NavLink} from "react-router-dom";

class Nav extends React.Component {  
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" className={({ isActive }) => isActive? "active": ''} >
                    Home
                </NavLink>
                <NavLink to="/todo" className={({ isActive }) => isActive? "active": ''} >
                    Todo
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive? "active": ''} >
                    About
                </NavLink>
                <NavLink to="/users" className={({ isActive }) => isActive? "active": ''} >
                    Users
                </NavLink>
            </div>
            
        )
    }
}

export default Nav;