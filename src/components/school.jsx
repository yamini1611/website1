import React from "react";
import './school.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import size from './images/size.webp'
function School() {
  return (
    <div>
      <div className='image-fixed'>
        <Fixed1 />

      </div>

    </div>
  )
}

export default School;

export function Fixed1() {
  const [schoolindex, setschoolindex] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:4000/school')
      .then((response) => response.json())
      .then((data) => {
        setschoolindex(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center" id='bg2'>
      {schoolindex.map((school) => (
        <div key={school.id} id='logo' className="logo-item text-center">
          <Link to="/ProductList">
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
  );
}

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProduct] = useState(null);

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


  return (
    <div id='divcon' className="clearfix">
      <img src={products.image} alt={products.pname} id="pimg" onClick={handleGoBack} height={550} width={450} class="col-md-5 float-md-start mb-3 ms-md-3 ml-5 "></img>
      <h5 id='t1' > {products.pname}</h5>
      <h6 id='t2'><strong>Product Code: </strong>{products.productcode}</h6>
      <h6 id='t2' style={{ marginTop: 360 }}><strong>Brand:</strong>{products.Brand}</h6>
      <h6 id='t2' style={{ marginTop: 390, }}><strong>Sold By:</strong>{products.SoldBy}</h6>
      <h6 id='t2' style={{ marginTop: 410, fontSize: 35, fontFamily: "sans-serif" }}>₹{products.Retailprice}</h6>
      <h6 id='t2' style={{ marginTop: 420, marginLeft: 695, fontFamily: "sans-serif", fontSize: 20, textDecoration: "line-through", fontWeight: 400 }}>₹{products.mrp}</h6>
      <h4 id='t3'>45% OFF</h4>
      <button type="button" class="btn btn-primary" id='t3' style={{ marginLeft: 50, marginTop: 540 }} data-bs-toggle="modal" >
        SIZE GUIDE
      </button>


      <div id='t5' className="form-group">
        <label className="option-name">
          <span id='span1' className="ng-binding">Size:</span>
        </label>
        <div className="option-values">
          <select ng-model="product.selected_options[value.name]" className="form-control  ng-pristine ng-valid ng-touched" ng-change="findRules(value.name,product.selected_options[value.name])" ng-options="option.value as option.label disable when !option.available for option in  option_values[value.name]" ><option value="" disabled="" class="ng-binding" selected="selected">Please Select</option><option label="22" value="string:22" selected="selected">22</option><option label="24" value="string:24">24</option><option disabled="" label="26" value="string:26">26</option><option disabled="" label="28" value="string:28">28</option><option disabled="" label="30" value="string:30">30</option><option disabled="" label="32" value="string:32">32</option><option disabled="" label="34" value="string:34">34</option><option disabled="" label="36" value="string:36">36</option><option disabled="" label="38" value="string:38">38</option><option label="40" value="string:40">40</option><option label="42" value="string:42">42</option><option label="44" value="string:44">44</option></select>
        </div>
        <div style={{ marginTop: 70 }}>
          <label id='quantity' for="number-input">Quantity:</label>
          <input style={{ paddingBottom: 0, textAlign: "center" }} placeholder="1" type="number" id="number-input" min="1" step="1" required></input>
        </div>
        <div style={{ marginTop: 40 }}>
          <button type="button" style={{ marginRight: 5, backgroundColor: 'black', color: 'white',padding:10 }} >ADD TO CART</button>
          <button type="button" style={{ backgroundColor: 'black', color: 'white',padding:10 }}>BUY NOW</button>
        </div>
      </div>
        
    </div>

  )
};

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(products);

  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ paddingLeft: 130, marginTop: 400 }} >
      <h5 id='ti'>NEW HORIZON GURUKUL</h5>

      {products.map((product) => (
        <Link key={product.id} to={`/ProductDetails/${product.id}`} style={{ textDecoration: 'none' }}>

          <div style={{ marginLeft: 10, display: 'inline-block', flexDirection: 'col' }}>
            <img className="img-fluid" src={product.image} height={250} width={350} alt={product.pname} />
            <h4 id='pname'>{product.pname}</h4>
          </div>

        </Link>

      ))}
    </div>

  );
};






