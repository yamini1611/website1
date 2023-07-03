import home1 from './Images/home-1.jpg';
import React from "react";
import home3 from './Images/home3.jpg';
import home4 from './Images/home4.jpg';
import  './CSS/homepage.css';
function home() {
    return (
        <div classNameName="container-breakpoint xs">
            <img src={home1} alt="" id='home-img1'></img>
            <div id='text'>
                <h1 id='img-content-1'>Choose Class</h1>
                <h2 id='img-content-2'>over the common.</h2>
                <h1 id='img-content-3'>ACECRAFT FOR COLLEGES  </h1><i id='img-content-4' className="fas fa-chevron-right"></i></div>
            <div ><div id='bg' className="card-group">
                <div id='pad' className="card">
                    <div class="bg-image hover-zoom">
                        <img src={home3} alt='' height={686}  class="w-100" />
                    </div>

                    <div className="card-body">
                        <h1 id='img-content-11'>A grade</h1>
                        <h2 id='img-content-7'>of Greatness.</h2>
                        <h1 id='img-content-8'>ACECRAFT  FOR SCHOOLS  </h1><i id='img-content-10' class="fas fa-chevron-right"></i>
                    </div>
                </div>
                <div id='pad' className="card">
                    <div class="bg-image hover-zoom">
                        <img src={home4} alt='' height={686}  class="w-100" />
                    </div>
                    <div >
                        <h1 id='img-content-11'>workwear</h1>
                        <h2 id='img-content-7'>Redefined.</h2>
                        <h1 id='img-content-8'>ACECRAFT FOR ENTERPRISES  </h1><i id='img-content-12' className="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>

            </div>

        </div>
    )
}

export default home;