import React from 'react';
import DrawerToggle from './SideDrawer/DrawerToggle';
import './Navigation.css';

import {Link} from 'react-router-dom';


function Navigation(props){

    return(
        <div className="navigation">
        
        <div className="menu">       
        <ul>    
            <DrawerToggle click= {props.drawerClickHandler} />  
        <li><Link to="/" className="menu-item">Home</Link></li>
            <li><Link to="/movies" className="menu-item">Movies</Link></li>
            <li><Link to="/tvshows" className="menu-item">TV Shows</Link></li>
            
            
            


        </ul>
        </div>
        </div>
    )
};

export default Navigation;