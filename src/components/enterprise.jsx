import React from "react";
import './enterprise.css';
import honda from './images/honda.png'
function Enterprise() {
    return (
        <div id='img'>
            <div id='honda'>
                <img id='img1' src={honda} alt='' height={30} width={230}></img>
                <h2>HONDA CAR'S DEALER MANPOWER UNIFORM</h2>
            </div>
        </div>
    )
}

export default Enterprise;