import React from "react";
import {Link} from 'react-router-dom';
import './CSS/arrienmask.css';
function Arienmask(){
    return(
        <div data-ng-if="!loading" id='div'className="ng-scope" >
            <h1 className="ng-binding">Error (404)</h1>
            <h3 className="ng-binding">Page you are requesting does not exist.</h3>
            <Link data-ng-href="/" id='link'className="ng-binding" to="/" >Go to Home</Link>
        </div>
    )
}

export default Arienmask;