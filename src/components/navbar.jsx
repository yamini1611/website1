import React from "react";
import setting from './images/setting.png';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div>
            <div class="fixed-top">
                <header>
                    <Link to='/'><h1 id='title'>acecraft</h1></Link>
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <div class="container-fluid">

                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <Link ID='nav' style={{ paddingLeft: "10px" }} class="nav-link active" aria-current="page" to="/School" >SCHOOL</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link ID='nav' style={{ paddingLeft: "25px" }} class="nav-link" to="/College">COLLEGE</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link ID='nav' style={{ paddingLeft: "25px" }} class="nav-link" to="/Enterprise">ENTERPRISE</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link ID='nav' style={{ paddingLeft: "25px" }} class="nav-link notes
                                        " to="/Notes">NOTES</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link ID='nav' style={{ paddingLeft: "25px" }} class="nav-link " to="/Arien-mask" >ARIEN MASK</Link>
                                    </li>
                                    <li>

                                        <img style={{ marginTop: -11, marginLeft: 300 }} id='setting' src={setting} alt=""></img>


                                        <i id='fa' style={{ paddingLeft: 45, marginTop: 11 }} class="fa-sharp fa-solid fa-cart-shopping"> <span id='badge' style={{ fontSize: "12px" }} class="position-absolute top-0 start-100 translate-middle badge rounded-pill">0</span>
                                        </i>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header></div>

        </div>
    )
}

export default Home;