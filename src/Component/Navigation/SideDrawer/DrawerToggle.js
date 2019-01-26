import React from 'react';
import './DrawerToggle.css';

function NavigationToggleButton(props){
    return(
        <button className="toggle-button" onClick={props.click}>
            <div className="toggle-button_line"></div>
            <div className="toggle-button_line"></div>
            <div className="toggle-button_line"></div>
        </button>
    )
}
export default NavigationToggleButton;