import React from "react";
import './school.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import size from './images/sizeguide.png'
function School() {
  return (
    <div>
      <div className='image-fixed'>
        <Fixed1 />
        <Con4 />
        <Con5 />
        <Con6 />
      </div>

    </div>
  )
}

export default School;

export function Fixed1() {
  const [schoolindex, setschoolindex] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/school');
      setschoolindex(response.data)
    }
    catch (error) {
      console.error(error);
    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container-fluid d-flex justify-content-center" id='bg2'>
        {schoolindex.map((school) => (
          <div key={school.id} id='logo' className="logo-item text-center">
            <Link to="/ProductList/">
              <img
                src={school.imgurl}
                alt={school.name}
                className="logo-img"
                height={50}
                width={60}
              />
            </Link>
            <p className="school-name" style={{ fontSize: 12, fontWeight: '700' }}>{school.name}</p>
          </div>
        ))}
      </div>

      <div >
        <h1 className="workwear" style={{ fontSize: 38, fontFamily: "sans-serif" }}>Designer uniforms for the doers.
        </h1>
        <h1 ><i className="fas fa-chevron-down "></i></h1></div>
      <div id='div2'>
        <h1 id='te1'>Aesthetically advanced,</h1>
        <h1 id='te2'>our designer uniforms are a cut above the rest,
          <h1 id='te3'>
            in every sense of the word.
          </h1>
        </h1>
      </div>

    </div>
  );
}

export function Con4() {
  return (
    <section className="main2">
      <div className="designer1 text-black">
        <div className="row bg-transprent justify-content-center">
          <div className="col-12 text-center">
            <h6 className="ms-4 fw-normal fs-1" style={{ marginTop: '500px' }}>
              Perfection. Now<b> delivering to your doorstep.</b>
              <br />
              <i className="fas fa-chevron-down down2"></i>
            </h6>
          </div>
        </div>
      </div>
      <div className="designer1 text-black">
        <div className="row bg-transprent justify-content-center">
          <div className="col-12 text-center">
            <p
              className="ms-4 fw-normal fs-2"
              style={{ marginTop: '270px', paddingBottom: '250px' }}
            >
              Less<b> hassle.</b> More<b> hustle.</b>
              <br /> Our end-to-end e-commerce facility with
              <br />
              <b>superior technology enables us to</b>
              <br />
              deliver your order right to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Con5() {
  return (
    <section className="bg-black" style={{ color: "grey", paddingTop: 110 }}>
      <div className="container">
        <div id="text2">
          <div className="text-end">
            <p className="fs-1 m-0">
              <b>Be at ease.</b>
            </p>
            <p className="fs-1 m-0">
              <b>Everyday.</b>
            </p>
            <p className="fs-4 fw-lighter">
              Our uniforms keep your children looking great
              <br />
              from the first day of school until the end-of-the-year picnic.
            </p>
          </div>
          <img src={"https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/BK,.jpg"} alt='img' className="img-responsive" width="100%" />
        </div>
      </div>
    </section>
  );
}

export function Con6() {
  return (
    <section className="main3" style={{ color: '#978F8F', backgroundColor: 'black' }}>
      <div className="col-md-12 pt-5 content text-center">
        <div className="text-center pt-5 ms-mb-x">
          <p className="ms-m-0">Designer Uniforms</p>
          <div className="text-center horizontal-line signature">
            <span>by</span>
          </div>
          <p className="fs-2 fw-lighter" style={{ fontFamily: 'Courier New, monospace' }}>
            acecraft
          </p>
        </div>

        <div className="fs-4 fw-lighter">
          Establish a <b className="fw-bold">signature look</b> for your school.
        </div>

        <div className="fs-4 fw-lighter mt-5">
          Looking to change your supplier?
          <br />
          <button
            style={{ border: "solid", borderColor: "white", borderWidth: 0.01, borderRadius: 0, color: "white" }}
            type="button"
            id="btn1"
            className="btn btn-transparent"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Get In Touch
          </button>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel" style={{ fontSize: 27, color: "black" }}>
                  Get your Uniforms designed and styled by Us!
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="container-fluid icons">
                  <div className="row align-items-center">
                    <div className="col-1">
                      <i className="fa-solid fa-user fa-2xl icon" style={{ color: '#d2d0d0' }}></i>
                    </div>
                    <div className="col-5">
                      <input
                        type="text"
                        id="firstname"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row align-items-center">
                    <div className="col-1">
                      <i className="fa-solid fa-user fa-2xl icon" style={{ color: '#d2d0d0' }}></i>
                    </div>
                    <div className="col-5">
                      <input
                        type="text"
                        id="lastname"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row align-items-center">
                    <div className="col-1">
                      <i className="fa-solid fa-envelope fa-2xl icon" style={{ color: '#d2d0d0' }}></i>
                    </div>
                    <div className="col-11">
                      <input style={{ marginRight: 220 }}
                        type="email"
                        id="email"
                        placeholder="Professional Email"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row align-items-center">
                    <div className="col-1">
                      <i className="fa-solid fa-building fa-2xl icon" style={{ color: '#d2d0d0' }}></i>
                    </div>
                    <div className="col-11">
                      <input style={{ marginRight: 220 }}
                        type="text"
                        id="org"
                        placeholder="Organisation"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row align-items-center">
                    <div className="col-1">
                      <i className="fa-solid fa-mobile fa-2xl icon" style={{ color: '#d2d0d0' }}></i>
                    </div>
                    <div className="col-11">
                      <input style={{ marginRight: 220 }}
                        type="text"
                        id="phone"
                        placeholder="Phone No."
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row align-items-center">
                    <div className="col-1">
                      <i className="fa-solid fa-cubes fa-2xl icon" style={{ color: '#d2d0d0', marginTop: -11 }}></i>
                    </div>
                    <div className="col-11">
                      <p id="quan" style={{ paddingRight: 250, paddingTop: 30, marginTop: -31 }}>Quantity required</p>
                      <input
                        type="radio"
                        id="quantity1"
                        name="age"
                        value="50"
                      />
                      <label style={{ marginRight: 95 }}>10 - 50 sets</label>
                      <input
                        type="radio"
                        id="quantity2"
                        name="age"
                        value="100"
                      />
                      <label style={{ marginRight: 115 }}>51 - 100 sets</label>
                      <input
                        type="radio"
                        id="quantity3"
                        name="age"
                        value="100+"
                      />
                      <label style={{ marginRight: 75 }}>100+ sets</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
   
  useEffect(() => {
    fetch(`http://localhost:4000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!products) {
    return <div>Loading...</div>;
  }

  const handleGoBack = () => {
    navigate('/ProductList');
  };

  const handleSizeChange = (event) => {
    const selectedSize = event.target.value;
    setSelectedSize(selectedSize);
  };

  const getUpdatedRetailPrice = () => {
    if (!selectedSize) {
      return products.Retailprice;
    }

    const basePrice = products.Retailprice;

    if (selectedSize === "22") {
      return basePrice * 2;
    } else if (selectedSize === "24") {
      return basePrice * 3;
    } else if (selectedSize === "26") {
      return basePrice * 4;
    } else if (selectedSize === "28") {
      return basePrice * 5;
    } else if (selectedSize === "30") {
      return basePrice * 6;
    }

    return basePrice;
  };

  const getTotalPrice = () => {
    const retailPrice = getUpdatedRetailPrice();
    return retailPrice * quantity;
  };

  const handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value);
    setQuantity(quantity);
  };

  const handleAddToCart = () => {
    console.log('Selected size:', selectedSize);
    const size = selectedSize;
 
    const productToAdd = {
      id: products.id,
      image: products.image,
      name: products.pname,
      price: getTotalPrice(),
      size:size,
      quantity: quantity,
    };

    fetch("http://localhost:4000/Cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productToAdd),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error adding product to cart");
        }
      })
      .then((data) => {
        alert("Product added to cart:", data);
        navigate("/AddTocart");
      })
      .catch((error) => {
        navigate("/AddTocart");
      });
    
    }    
  return (
    <div id='divcon' className="clearfix" style={{ marginBottom: 220 }}>
      <img src={products.image} alt={products.pname} id="pimg" onClick={handleGoBack} class="col-md-5 float-md-start mb-3 ms-md-3 ml-5 "></img>
      <h5 id='t1' > {products.pname}</h5>
      <h6 id='t2'><strong>Product Code: </strong>{products.productcode}</h6>
      <h6 id='t2' style={{ marginTop: 360 }}><strong>Brand:</strong>{products.Brand}</h6>
      <h6 id='t2' style={{ marginTop: 390, }}><strong>Sold By:</strong>{products.SoldBy}</h6>
      <h6 id='t2' style={{ marginTop: 410, fontSize: 35, fontFamily: "sans-serif" }}>₹{getUpdatedRetailPrice()}</h6>


      <h6 id='t2' style={{ marginTop: 420, marginLeft: 705, fontFamily: "sans-serif", fontSize: 20, textDecoration: "line-through", fontWeight: 400 }}>₹{products.mrp}</h6>
      <h4 id='t3'>45% OFF</h4>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xxl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel" style={{ fontFamily: "courier new", paddingLeft: 150, fontWeight: "400", fontSize: 45 }}>acecraft</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-6">
                  <img src={size} alt="" height={300} width={300}></img>
                </div>
                <div className="col-6 ">
                  <img style={{ marginLeft: 50 }} src={products.image} alt="" height={170} width={170}></img>
                </div>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn" id='t3' style={{ marginLeft: 200, marginTop: 540 }} data-bs-toggle="modal" data-bs-target="#exampleModal">
        SIZE GUIDE
      </button>
      <div id='t5' className="form-group">
        <label className="option-name">
          <span id='span1' className="ng-binding">Size:</span>
        </label>
        <div className="option-values">
          <select value={selectedSize} onChange={handleSizeChange} className="form-control ng-pristine ng-valid ng-touched">
            <option value="20" disabled>Please Select</option>
            <option value="22">22</option>
            <option value="24">24</option>
            <option value="26">26</option>
            <option value="28">28</option>
            <option value="30">30</option>

          </select>
        </div>
        <div style={{ marginTop: 70 }}>
          <label id='quantity' for="number-input" >Quantity:</label>

          <input  style={{ paddingBottom: 0, textAlign: "center" , color:"black" }} onChange={handleQuantityChange} placeholder="" type="number" id="number-input" min="1" step="1" required></input>

        </div><br></br>
        <h6 style={{ fontSize: 20, padding: 10, textAlign: "center", fontFamily: "sans-serif", backgroundColor: "black", color: "white" }}>₹Total Price:{getTotalPrice()}</h6>

        <div style={{ marginTop: 40 }}>
          <button type="button" onClick={handleAddToCart  }   style={{ marginRight: 5, backgroundColor: 'black', color: 'white', padding: 10 }} >ADD TO CART</button>
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

                      <img class="img-fluid" src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/627bd26c3f76019779ceeb39/webp/henley-polos-blue-480x480.jpg" alt="" height={70} width={150} />
                    </div>

                    <div class="col">
                      <img class="img-fluid" src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.products/5aa0f01491c2e5ab32f33869/images/5aa0f01491c2e5ab32f3386a/5aa0f01e91c2e5ab32f338a4/webp/5aa0f01e91c2e5ab32f338a4-480x480.jpg" alt="" height={70} width={140} />
                    </div>

                    <div class="col">
                      <img class="img-fluid" src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/601d6e74cbfb666ae1145869/webp/elementary-school-480x480.jpg" alt="" height={70} width={150} />
                    </div>
                    <div class="col">
                      <img class="img-fluid" src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.products/5aa0f798f04705ab2ca347bb/images/5aa0f798f04705ab2ca347bc/5aa0f79ff04705ab2ca347d7/webp/5aa0f79ff04705ab2ca347d7-480x480.jpg" alt="" height={70} width={150} />
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
                      <img class="img-fluid" src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.products/5aa0f01491c2e5ab32f3383d/images/5aa0f01491c2e5ab32f3383e/5aa0f01f91c2e5ab32f338a7/webp/5aa0f01f91c2e5ab32f338a7-480x480.jpg" alt="" height={70} width={140} />
                    </div>

                    <div class="col">
                      <img class="img-fluid" src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/601baa3e7779a13e48145d18/webp/t5-3-480x480.jpg" alt="" height={70} width={150} />
                    </div>

                    <div class="col">
                      <img class="img-fluid" src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.products/5aa0f02c91c2e5ab32f338e0/images/5aa0f02c91c2e5ab32f338e1/5aa0f03591c2e5ab32f33940/webp/5aa0f03591c2e5ab32f33940-480x480.jpg" alt="" height={70} width={150} />
                    </div>

                    <div class="col">
                      <img class="img-fluid" src="https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/601d7104bb47db6b5e248fc5/webp/cisb-zipper-480x480.jpg" alt="" height={70} width={150} />
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



export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/products')
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
      <img src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/MJK07401.jpg" alt="" height={820} width={1342} />
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
        <option value="" disabled>
          Sort By
        </option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="nameAscending">Name: Ascending Order</option>
        <option value="nameDescending">Name: Descending Order</option>
      </select>
      <div style={{ paddingLeft: 130, marginTop: 200 }}>
        <h5 id="ti" style={{ marginTop: -200, paddingBottom: 30 }}>
          SCHOOL <span style={{ fontFamily: 'initial', fontWeight: 100, color: 'gray' }}>-44 items</span>
        </h5>
        <h5 id="ti">NEW HORIZON GURUKUL</h5>

        {products.map((product) => (
          <div key={product.id} style={{ marginLeft: 10, marginBottom: 30, display: 'inline-block', flexDirection: 'col' }}>
            <div className="image-container">
              <Link to={`/ProductDetails/${product.id}`} style={{ textDecoration: 'none' }}>
                <img className="img-fluid" src={product.image} height={100} width={350} alt={product.pname} />
              </Link>
              <div className="text-overlay">
                <button type="button" className="btn btn" style={{ marginLeft: 10, marginTop: 50, backgroundColor: "black", color: "white" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Quick View
                </button>
              </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel" style={{ fontFamily: "courier new", paddingLeft: 150, fontWeight: "400", fontSize: 45 }}>acecraft</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-6">
                        <img src={product.image} alt="" height={300} width={300} />
                      </div>
                      <div className="col-6">
                        <h1>{product.pname}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            <h4 id="pname">{product.pname}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};




