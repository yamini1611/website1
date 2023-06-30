import React, { useState , useEffect } from "react";
import setting from './images/setting.png';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
const Home = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);

    };
    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = () => {
        fetch("http://localhost:4000/Cart")
            .then((response) => response.json())
            .then((data) => {
                setCartItemCount(data.length);
            })
            .catch((error) => console.error("Error retrieving cart items:", error));
    };
    return (
        <div>
            <div className="fixed-top">
                <header>
                    <Link to='/'><h1 id='title'>acecraft</h1></Link>
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link id='nav' style={{ paddingLeft: "10px" }} className="nav-link active" aria-current="page" to="/School" >SCHOOL</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link id='nav' style={{ paddingLeft: "25px" }} className="nav-link" to="/College">COLLEGE</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link id='nav' style={{ paddingLeft: "25px" }} className="nav-link" to="/Enterprise">ENTERPRISE</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link id='nav' style={{ paddingLeft: "25px" }} className="nav-link notes" to="/Notes">NOTES</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link id='nav' style={{ paddingLeft: "25px" }} className="nav-link" to="/Arien-mask" >ARIEN MASK</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`} onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
                                            <img style={{ marginTop: -11, marginLeft: 300 }} id='setting' src={setting} alt="" />
                                            <ul id='dd' className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <li ><Link id="li" to="/Signin" >Sign In</Link></li></div>
                                                    <div className="col">
                                                        <i class="fa-solid fa-right-to-bracket"></i>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6"><li><Link id="li" to="/Signup">Register</Link></li></div>
                                                    <div className="col"><i class="fa-solid fa-user-plus"></i></div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <li><Link id="li" style={{ display: "inline-block" }} to="/Orderstatus">Order Status</Link></li>
                                                    </div>
                                                    <div className="col">
                                                        <i style={{ marginTop: 20 }} class="fa-solid fa-basket-shopping"></i>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <li><Link id="li" to="/Contact">Contact</Link></li>
                                                    </div>
                                                    <div className="col">
                                                        <i class="fa-solid fa-comments"></i>
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/Addtocart">
                                            <i id='fa' style={{ paddingLeft: 25, marginTop: -5 }} className="fa-sharp fa-solid fa-cart-shopping">
                                                {cartItemCount > 0 && (
                                                    <span id='badge' style={{ fontSize: "12px", marginLeft: -45 }} className="position-absolute top-0 start-100 translate-middle badge rounded-pill">{cartItemCount}</span>
                                                )}
                                            </i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

        </div>
    );
}

export default Home;



export function Signin() {
  const [error, setError] = useState('');

  const handleSubmit = (values) => {
    const { email, password } = values;

    fetch('http://localhost:4000/Register')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error retrieving registered details');
        }
      })
      .then((registeredUsers) => {
        const user = registeredUsers.find((user) => user.email === email && user.password === password);

        if (user) {
          console.log('Login successful');
          setError('');
        } else {
          setError('Invalid email or password');
        }
      })
      .catch((error) => {
        console.error('Error retrieving registered details:', error);
        setError('Error retrieving registered details');
      });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <div id='signin'>
      <h1 style={{ textAlign: 'center', color: 'grey', fontFamily: 'sans-serif', fontSize: 28 }}>
        Login with ACECRAFT
      </h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              type="text"
              className="form-control"
              id="email"
              name="email"
              required
            />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
            />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button
            style={{ backgroundColor: 'black', textAlign: 'center', paddingLeft: 120, paddingRight: 120 }}
            type="submit"
            className="btn btn-dark"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export const Signup = () => {
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log(values);
      
        axios
          .post('http://localhost:4000/Register', values)
          .then((response) => {
            if (response.status === 200) {
              alert('User registered:', response.data);
              navigate('/Signin');
            } else {
              throw new Error('Error registering user');
            }
          })
          .catch((error) => {
            console.error('Error registering user:', error);
          });
      };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        schoolOrEnterprise: Yup.string().required('Please select School or Enterprise'),
        dealershipName: Yup.string().required('Dealership Name is required'),
        dealershipCode: Yup.string().required('Dealership Number/Code is required'),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        gstNumber: Yup.string().required('GST Number is required'),
    });

    return (
        <div>
            <h1>Signup with ACECRAFT</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    schoolOrEnterprise: '',
                    dealershipName: '',
                    dealershipCode: '',
                    city: '',
                    state: '',
                    gstNumber: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form id='signup'>
                    <div>
                        <h1 id='h1signup'>Signup with ACECRAFT</h1>
                        <Field style={{ paddingRight: 150 , color:"black" }} type="text" placeholder="First Name" id="firstName" name="firstName" />
                        <ErrorMessage name="firstName" component="div" className="error-message" />
                    </div><br></br>

                    <div>
                        <Field style={{ paddingRight: 150  , color:"black"}} type="text" placeholder="Last Name" id="lastName" name="lastName" />
                        <ErrorMessage name="lastName" component="div" className="error-message" />
                    </div><br></br>

                    <div>
                        <Field style={{ paddingRight: 150  , color:"black"}} type="email" placeholder="Email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" className="error-message" />
                    </div><br></br>

                    <div>
                        <Field style={{ paddingRight: 150  , color:"black"}} type="password" placeholder="Password" id="password" name="password" />
                        <ErrorMessage name="password" component="div" className="error-message" />
                    </div><br></br>

                    <div>
                        <Field style={{ paddingRight: 150  , color:"black"}} placeholder="Confirm Password" type="password" id="confirmPassword" name="confirmPassword" />
                        <ErrorMessage name="confirmPassword" component="div" className="error-message" />
                    </div><br></br>

                    <div >
                        <div >
                            <label>
                                <Field style={{ paddingRight: 150  , color:"black"}} type="radio" name="schoolOrEnterprise" value="School" />
                                School
                            </label>
                            <label>
                                <Field style={{ paddingRight: 150  , color:"black"}} type="radio" name="schoolOrEnterprise" value="Enterprise" />
                                Enterprise
                            </label>
                        </div>
                        <ErrorMessage name="schoolOrEnterprise" component="div" className="error-message" />
                    </div><br></br>
                    <div>
                        <Field style={{ paddingRight: 150  , color:"black"}} placeholder="Dealership Name" type="text" id="dealershipName" name="dealershipName" />
                        <ErrorMessage name="dealershipName" component="div" className="error-message" />
                    </div><br></br>

                    <div>
                        <Field style={{ paddingRight: 150  , color:"black"}} type="text" id="dealershipCode" placeholder="Dealership Number/Code" name="dealershipCode" />
                        <ErrorMessage name="dealershipCode" component="div" className="error-message" />
                    </div><br></br>

                    <div>
                        <Field style={{ paddingRight: 150  , color:"black"}} type="text" id="city" placeholder="City" name="city" />
                        <ErrorMessage name="city" component="div" className="error-message" />
                    </div><br></br>

                    <div>
                        <label htmlFor="state">State</label><br></br>
                        <Field className="form-select" as="select" id="state" name="state">
                            <option value="" disabled>Select State</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Puducherry">Puducherry</option>

                        </Field>
                        <ErrorMessage name="state" component="div" className="error-message" />
                    </div>
                    <br></br>
                    <div>
                        <Field style={{ paddingRight: 150  , color:"black"}} type="text" id="gstNumber" placeholder="GST Number" name="gstNumber" />
                        <ErrorMessage name="gstNumber" component="div" className="error-message" />
                    </div><br></br>

                    <button type="submit" style={{textAlign:"center"}}>Register</button>
                </Form>
            </Formik>
        </div>
    );
};


