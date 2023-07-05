import React from "react";
import './CSS/Designuniform.css'

export default function Designeruniform() {
    return (
        <>


            <div className="card designcard  justify-content-center " >
                <h6 className="designeruniform text-center pt-4" s>Designer Uniforms</h6>
                <div className="text-center horizontal-line">
                    <span id='span'>by</span>
                </div>

                <h6 className="acecraft text-center">acecraft</h6>
                <button 
          style={{border:"solid" , borderColor:"white" , borderWidth:0.01 , borderRadius:0 , color:"white" ,marginLeft:60 , marginRight:50 ,marginBottom:28 }}
            type="button"
            id="btn1"
            className="btn btn-transparent"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Get In Touch
          </button>                 {/* Modal */}
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
                <h5 className="modal-title" id="exampleModalLabel" style={{fontSize:27, color:"black" , textAlign:"center"}}>
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
                      <input style={{marginRight:220 }}
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
                      <input style={{marginRight:220 }}
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
                      <input style={{marginRight:220 }}
                        type="text"
                        id="phone"
                        placeholder="Phone No."
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row align-items-center">
                    <div className="col-1">
                      <i className="fa-solid fa-cubes fa-2xl icon" style={{ color: '#d2d0d0' ,marginTop:-11}}></i>
                    </div>
                    <div className="col-11">
                      <p id="quan" style={{paddingRight:250,paddingTop:30,marginTop:-31}}>Quantity required</p>
                      <input 
                        type="radio"
                        id="quantity1"
                        name="age"
                        value="50"
                      />
                      <label style={{marginRight:95}}>10 - 50 sets</label>
                      <input 
                        type="radio"
                        id="quantity2"
                        name="age"
                        value="100"
                      />
                      <label  style={{marginRight:115}}>51 - 100 sets</label>
                      <input
                        type="radio"
                        id="quantity3"
                        name="age"
                        value="100+"
                      />
                      <label style={{marginRight:75}}>100+ sets</label>
                    </div>
                    <button  style={{backgroundColor:"black" , color:"white"}} type="button" >Submit</button>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
            </div>

        </>
    );
}


