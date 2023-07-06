import { Link } from 'react-router-dom';
import React from 'react';
import './CSS/Orderstatus.css'

 export default  function Orderstatus(){
    return(
    
     <div>
 <section class="page1">
     <div class="container">
         <div class="row">
             <div class="col-6 text-end" id="cont1">
                 <span id="p1">Find</span><br></br>
                 <span id="p11">Your</span><br></br>
                 <span id="p2">Order</span>
                 <div class="line"> </div>
             </div>
             <div class="col-6" id="cont2">
                 <p id="p3">Look it up with your shipping number.</p>
                 <input id="textbox" name="shipcode" type="text"></input><br /><br />
                 <button type="button" id="btn1">Continue</button><br /><br />
                 <p id="p4">Wish to track your order with your Order ID?<Link to="/Signin">Login</Link> </p>
                 <p id="p4">Need more inforamtion?<a data-bs-toggle="modal" data-bs-target="#exampleModal"> Get in
                         touch</a></p>
             </div>
 
         </div>
     </div>
 </section>
 <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog">
         <div class="modal-content">
             <div class="modal-header">
                 <h4 class="modal-title" id="exampleModalLabel">Get your Uniforms designed and<br></br>styled by Us!</h4>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div class="modal-body">
                 <div class="container-fluid icons">
                     <div class="row">
                         <div class="col-6 ">
                             <i class="fa-solid fa-user fa-2xl icon" ></i>
                             <input type="text" id="firstname" placeholder="First Name"></input>
                         </div>
                         <div class="col-6">
                             <input type="text" id="lastname" placeholder="Last Name"></input>
                         </div>
                     </div><br></br>
                     <div class="row">
                         <i class="fa-solid fa-envelope fa-2xl icon"></i>
                         <input type="email" id="email" placeholder="Professional Email"></input>
                     </div><br></br>
                     <div class="row">
                         <i class="fa-solid fa-building fa-2xl icon" ></i>
                         <input type="text" id="org" placeholder="Organisation"></input>
                     </div><br></br>
                     <div class="row">
                         <i class="fa-solid fa-mobile fa-2xl icon" ></i>
                         <input type="text" id="phone" placeholder="Phone No."></input>
                     </div>
                     <p id="quan">Quantity required</p>
                     <div id="choice">
                         <input type="radio" id="quantity1" name="age" value="50"></input>
                         <label for="age1">10 - 50 sets</label><br></br>
                         <input type="radio" id="quantity2" name="age" value="100"></input>
                         <label for="age2">51 - 100 sets</label><br></br>
                         <input type="radio" id="quantity3" name="age" value="100+"></input>
                         <label for="age3">100+ sets</label><br></br>
                     </div>
                 </div>
                 <button type="button" id="btn2" class="btn btn-secondary" data-bs-dismiss="modal">Submit</button>
             </div>
         </div>
     </div>
 </div>
     </div>
      
    )
 }