import React from 'react';
import "./SideDrawer.css";
import {Link} from 'react-router-dom';

function SideDrawer(){
    return(
        <nav className="side-drawer">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/tv-shows">Tv Shows</Link></li>
            </ul>
        </nav>
    )
}
export default SideDrawer;