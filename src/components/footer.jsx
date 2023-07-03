import React from "react";
import fb from './Images/FB.png';
import insta from './Images/Insta.jpg';
import linkdin from './Images/Lnkdin.jpg';
import './CSS/footer.css'
function footer() {
    return (
        <div id='bc' class='container-breakpoint xs ys'>
            <div  className="container footer-container text-center">
                <div className="row text-center">
                    <a className="col" href="https://www.facebook.com/Acecraft-2420817978140298/">
                        <img src={fb} id='fb'alt="" height="50px"></img>
                    </a>
                    <a className="col" href="https://www.instagram.com/acecraft.in/">
                        <img src={insta} id='insta' alt="" height="50px"></img>
                    </a>
                    <a className="col" href="https://www.linkedin.com/in/acecraft-clothing-4b451445/">
                        <img src={linkdin} id='ld' alt="" height="50px"></img>
                    </a>
                </div>
                <div id='footer' class="container">
                    <div class="row">
                        <div id='border'class="col">
                        ABOUT
                        </div>
                        <div id='border' class="col ">
                        CARE
                        </div>
                        <div id='border'class="col">
                        RETURNS
                        </div>
                        <div id='border'class="col">
                        PRODUCTION
                        </div>
                        <div id='border'class="col ">
                        TERMS
                        </div>
                        <div  class="col">
                        GET HELP
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer;