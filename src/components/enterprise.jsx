import React from "react";
import './CSS/enterprise.css';
import axios from 'axios';

import Hondaimg from './Images/honda.png';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Form  from './form';

export default function Enterprice() {
    return (
        <div className="imagefixed">

            <Honda />
            <Steps />
            <Fourimgblock />
        </div>
    );
}



function Honda() {

    const [mensindex, setmensindex] = useState([]);
    const fetchData = () => {
        fetch('http://localhost:4000/mens')
            .then((response) => response.json())
            .then((data) => {
                setmensindex(data);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div id='space1' className="" >
            <div id='data'>
                <img src={Hondaimg} alt="Honda" className="Hondaimg mt-3" />
                <Link to={'/HondaProducts'}>
                    <h6 className="Hondatext text-center mt-3">HONDA CAR'S DEALER MANPOWER UNIFORM</h6></Link>
            </div>

            <h1 className="workwear">Workwear that Works</h1>

            <h1><i className="fas fa-chevron-down "></i></h1>

            <div className="menapi">

                <h1 className="workrelaxed text-center pt-5">Work Relaxed.</h1>
                <h6 className="whenwe text-center pt-3">When we designed our uniforms, we wore them to work every day.</h6>
                <h6 className="westill text-center pt-2">We still do. They’re comfy, relaxed and designed to suit your workplace.</h6>

                <div className="row">

                    {mensindex.map((mens) => (

                        <div className="mensid col-md-4" key={mens.id}>

                            <div className="menscards">


                                <div className="menscardbody">

                                    <img src={mens.img} alt="enterprisesimg" width='590px' />
                                    <h4 className="cont1 ps-5 ms-5 text-center">{mens.cont1}</h4>
                                    <h1 className="cont2   ps-5 pt-3 text-center">{mens.cont2}</h1>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}

function Steps() {
    const [stepsindex, setstepsindex] = useState([]);
    const fetchData = () => {
        fetch('http://localhost:4000/steps')
            .then((response) => response.json())
            .then((data) => {
                setstepsindex(data);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div id='this' className="container-fluid stepsbackground">


            <div className="row" >

                <h1 className="text-center  thisishow"> This is how we do it.</h1>


                <div class="timeline">
                    <div class="point">1</div>
                    <div class="point">2</div>
                    <div class="point">3</div>
                    <div class="point">4</div>
                    <div class="point">5</div>
                    <div class="point1">6</div>
                </div>



                {stepsindex.map((steps) => (
                    <div className="col-md-2" key={steps.stepsid}>
                        <div className="">
                            <img src={steps.stepsimg} alt="" width='120px' className="stepsimg" />
                            <h1 className="stepscontent1 ms-5">{steps.stepscontent1}</h1>
                            <h1 className="stepscontent2 ms-5">{steps.stepscontent2}</h1>
                        </div>

                    </div>

                ))}

            </div>


        </div>



    );
}



function Fourimgblock() {
    const [fourimgindex, setfourimgindex] = useState([]);
    const fetchData = () => {
        fetch('http://localhost:4000/four')
            .then((response) => response.json())
            .then((data) => {
                setfourimgindex(data);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container-fluid fourimgback">

            <div className="row">

                {fourimgindex.map((four) => (
                    <div className="col-md-12" key={four.fourid}>
                        <div className="">
                            <img src={four.fourimg} alt="fourimg" className="fourimg" />
                        </div>
                    </div>

                ))}



            </div>

            <div className="design row">

                <div className="offset-lg-5 mt-n5">

                    <Form />

                </div>

            </div>


        </div>

    );
}

export const HondaProducts = () => {
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:4000/Honda')
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        sortProducts();
    }, [sortOption]);

    const sortProducts = () => {
        let sortedProducts = [...products];

        switch (sortOption) {
            case 'lowToHigh':
                sortedProducts.sort((a, b) => a.Retailprice - b.Retailprice);
                break;
            case 'highToLow':
                sortedProducts.sort((a, b) => b.Retailprice - a.Retailprice);
                break;
            case 'nameAscending':
                sortedProducts.sort((a, b) => a.pname.localeCompare(b.pname));
                break;
            case 'nameDescending':
                sortedProducts.sort((a, b) => b.pname.localeCompare(a.pname));
                break;
            default:
                break;
        }

        setProducts(sortedProducts);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    if (!products || products.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <img
                src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/MJK07401.jpg"
                alt=""
                height={820}
                width={1342}
            ></img>
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'grey',
                }}
            >
                <h2 id="imgt">Decode</h2>
                <h2 id="imgt1">Your kind of designer uniforms.</h2>
            </div>
            <select id="sort" value={sortOption} onChange={handleSortChange}>
                <option value="" disabled="true">Sort By</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
                <option value="nameAscending">Name: Ascending Order</option>
                <option value="nameDescending">Name: Descending Order</option>
            </select>
            <div style={{ paddingLeft: 130, marginTop: 70 }}>

                <h5 id="ti" style={{ marginTop: -80, paddingBottom: 30 }}>HONDA CARS DEALER MANPOWER UNIFORMS <span style={{ fontFamily: "initial", fontWeight: 100, fontSize: 17, color: "gray", marginLeft: 50 }}>-11 items</span></h5>
                <h5 id="ti">NEW HORIZON GURUKUL</h5>

                {products.map((product) => (
                    <Link key={product.id} to={`/HondaDisplay/${product.id}`} style={{ textDecoration: 'none' }}>
                        <div style={{ marginLeft: 10, display: "inline-block", flexDirection: "col" }}>
                            <img id='enlist' className="img-fluid" src={product.image} alt={product.pname} />
                            <h4 id="pname">{product.pname}</h4>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export const HondaDisplay = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [products, setProduct] = useState(null);
  

    useEffect(() => {
        fetch(`http://localhost:4000/Honda/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [id]);

    if (!products) {
        return <div>Loading...</div>;
    }

    const handleGoBack = () => {
        navigate('/HondaProducts');
    };

        return (
            <div id='divcon' className="clearfix" style={{ marginBottom: 100 }}>
                <img src={products.image} alt={products.pname} id="pimg1" onClick={handleGoBack} height={500} width={450} class="col-md-5 float-md-start mb-3 ms-md-3 ml-5 "></img>
                <h5 id='t1' > {products.pname}</h5>
                <h6 id='t2'><strong>Product Code: </strong>{products.productcode}</h6>
                <h6 id='t2' style={{ marginTop: 360 }}><strong>Brand:</strong>{products.Brand}</h6>
                <h6 id='t2' style={{ marginTop: 390, }}><strong>Sold By:</strong>{products.SoldBy}</h6>
                <h6 id='t2' style={{ marginTop: 430, fontSize: 35, fontFamily: "sans-serif" }}>₹{products.Retailprice}</h6>
                <h6 id='t2' style={{ marginTop: 440, marginLeft: 715, fontFamily: "sans-serif", fontSize: 20, textDecoration: "line-through", fontWeight: 400 }}>₹{products.mrp}</h6>
                <h4 id='t31'>45% OFF</h4>



                <div id='t5' className="form-group">
                    <label className="option-name">
                        <span id='span2' className="ng-binding">GENDER:</span>
                    </label>
                    <div className="option-values">
                        <select style={{ paddingLeft: 85, color: "black" }} ng-model="product.selected_options[value.name]" className="form-control  ng-pristine ng-valid ng-touched" ng-change="findRules(value.name,product.selected_options[value.name])" ng-options="option.value as option.label disable when !option.available for option in  option_values[value.name]" ><option value="" disabled="true" class="ng-binding" selected="selected">Please Select</option><option label="Men" value="Men" selected="selected">Men</option><option disabled="" label="Women" value="Women">Women</option></select>
                    </div>
                    <div style={{ marginTop: 70 }}>
                        <label id='quantity' for="number-input">Quantity:</label>
                        <input style={{ paddingBottom: 0, textAlign: "center" }}   placeholder="1" type="number" id="number-input" min="1" step="1" required></input>
                    </div><br></br>

                    <div style={{ marginTop: 40 }}>
                        <button type="button" style={{ marginRight: 5, backgroundColor: 'black', color: 'white', padding: 10 }} >ADD TO CART</button>
                        <button type="button" style={{ backgroundColor: 'black', color: 'white', padding: 10 }}>BUY NOW</button>
                        <div id='carosuel'>
                            <h6 id='co4'>Description of product</h6>
                            <h1 id='ca5'>NO RETURNS & NO EXCHANGE.</h1>
                            <h6 id='ca5' style={{ fontWeight: 200, fontSize: 13 }}>Made from Poly-cotton. Henley neckline. Short sleeves.</h6>
                            <h6 id='co4' style={{ fontWeight: 400, fontSize: 16 }}>Related products</h6>
                            <div id="gallery" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner" >

                                    <div class="carousel-item active" >
                                        <a class="carousel-control-prev-icon" href="#gallery" role="button" data-slide="prev">
                                            <span class="carousel-control-prev"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>

                                        <a class="carousel-control-next-icon" href="#gallery" role="button" data-slide="next">
                                            <span class="carousel-control-next" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                        <div id='row1' class="row"   >

                                            <div class="col">

                                                <img class="img-fluid1" src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/647da9185c62e5426f794785/webp/hndc-blazer-640x640.png" alt="" height={170} width={150} />
                                            </div>

                                            <div class="col">
                                                <img class="img-fluid1" src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/647db88e32202b73567736da/webp/hndc-tie-640x640.png" alt="" height={170} width={140} />
                                            </div>

                                            <div class="col">
                                                <img class="img-fluid1" src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/648c80c9576be1481b336ae9/webp/hndc-support-staff-shirt-640x640.png" alt="" height={170} width={150} />
                                            </div>
                                            <div class="col">
                                                <img class="img-fluid1" src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/647dba4a32202b735677c53b/webp/hndc-lapel-pin-640x640.png" alt="" height={170} width={150} />
                                            </div>

                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <a class="carousel-control-prev-icon" href="#gallery" role="button" data-slide="prev">
                                            <span class="carousel-control-prev"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>

                                        <a class="carousel-control-next-icon" href="#gallery" role="button" data-slide="next">
                                            <span class="carousel-control-next" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                        <div class="row">

                                            <div class="col">
                                                <img class="img-fluid1" src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/647dfa5e4f7c537b4b5f0b05/webp/hndc-shirt-640x640.png" alt="" height={170} width={140} />
                                            </div>

                                            <div class="col">
                                                <img class="img-fluid1" src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/647dca54c555fc3016e54b9d/webp/waist-coat-640x640.png" alt="" height={170} width={150} />
                                            </div>

                                            <div class="col">
                                                <img class="img-fluid1" src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/647e00f63d7d5614b12c88c3/webp/hndc-cravat-640x640.png" alt="" height={170} width={150} />
                                            </div>

                                            <div class="col">
                                                <img class="img-fluid1" src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/647eea25c87d60b3cd18a95d/webp/hndc-sales-manpower-640x640.png" alt="" height={170} width={150} />
                                            </div>


                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    };



