import React from 'react';
import './MiniNavigation.css';
import {Link} from 'react-router-dom';

function MiniNavigation(props){
    return(
        <div class="dropdown">
        <div className="dropbtn fa fa-angle-down"></div>
        <div class="dropdown-content">
          <Link to="/movies/top-rated">{props.First}</Link>
          <Link to="/movies/upcoming">{props.Second}</Link>
          <Link to="/movies/now-playing">{props.Third}</Link>
        </div>
      </div>
    )
}
MiniNavigation.defaultProps = {
    First:"Top Rated",
    Second:"Upcoming",
    Third:"Now Playing"
  }

export default MiniNavigation;