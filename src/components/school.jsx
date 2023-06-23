import React from "react";
import './school.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
            <p className="school-name" style={{fontSize:12,fontWeight:'700'}}>{school.name}</p>
          </div>
        ))}
      </div>
    );
  }
  
export const ProductDetails = () => {
    const { pid } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:4000/products/${pid}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }, [pid]);
  
    if (!product) {
      return <div>Loading...</div>;
    }
  
    const handleGoBack = () => {
      navigate('/ProductList');
    };
  
    
    return (
      <div style={{ paddingLeft: 300, paddingBottom: 60 }}>
        <h2 style={{ color: 'black', fontWeight: '600', paddingLeft: 20, marginTop: 2 }}>NEW HORIZON GURUKUL</h2>
        <div style={{ marginTop: -90 }}>
          <h2 style={{ color: 'black', paddingLeft: 10, fontWeight: '200' }}>Product Details</h2>
          <img src={product.image} alt={product.product_name} height={300} width={300} onClick={handleGoBack} />
          <h5>{product.product_name}</h5>
          <h5>Price: {product.price}</h5>
          <h5>Discount Price: {product.discount_price}</h5>
          <button type="button" className="btn btn-success" >
            BUY NOW
          </button>
         
        </div>
      </div>
    );
  };

 export  const ProductList = () => {
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
      <div style={{paddingLeft:50}} >
        <h2 style={{ color: 'black', fontWeight: '600' }}>MICHAEL KNORS</h2>
  
        {products.map((product) => (
          <Link key={product.pid} to={`/ProductDetails/${product.pid}`} style={{ textDecoration: 'none' }}>
            <div style={{ marginLeft: 10,display:'inline-flex', flexDirection: 'col' }}>
              <img src={product.image} height={400} width={400} alt={product.pname} />
              {/* <span style={{ marginTop: '400px', display: 'block',marginLeft:-130,marginRight:20,padding:6,color:'black',fontWeight:600}}>VIEW DETAILS</span> */}
            </div>
          </Link>
        ))}
      </div>
    );
  };
  

  

  

  