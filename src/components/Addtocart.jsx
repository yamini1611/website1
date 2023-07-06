import React, { useState, useEffect, useContext } from "react";
import './CSS/Addctocart.css';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import Swal from 'sweetalert2';

const AddToCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    fetch("https://acecraft-deploy-tkgw.onrender.com/Cart")
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data);
        setCartItemCount(data.length);
      })
      .catch((error) =>
        console.error("Error retrieving cart items:", error)
      );
  }, [setCartItems]);

  const updateCartItem = (itemId, updatedQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: updatedQuantity,
          price: item.price * updatedQuantity,
        };
      }
      return item;
    });

    fetch(`https://acecraft-deploy-tkgw.onrender.com/Cart/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        updatedCartItems.find((item) => item.id === itemId)
      ),
    })
      .then((response) => response.json())
      .then(() => {
        setCartItems(updatedCartItems);
        toast.success("Quantity Updated Successfully", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: 'success-toast',
          bodyClassName: 'success-toast-body',
        });
      })
      .catch((error) => console.error("Error updating cart item:", error));
  };

  const decreaseQuantity = (itemId) => {
    const updatedCartItem = cartItems.find((item) => item.id === itemId);
    const updatedQuantity = updatedCartItem.quantity - 1;

    if (updatedQuantity >= 1) {
      const updatedPrice =
        (updatedCartItem.price / updatedCartItem.quantity) * updatedQuantity;
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity: updatedQuantity,
            price: updatedPrice,
          };
        }
        return item;
      });

      fetch(`https://acecraft-deploy-tkgw.onrender.com/Cart/${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          updatedCartItems.find((item) => item.id === itemId)
        ),
      })
        .then((response) => response.json())
        .then(() => {
          setCartItems(updatedCartItems);
          toast.success("Quantity Updated Successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: 'success-toast',
            bodyClassName: 'success-toast-body',
          });
        })
        .catch((error) => console.error("Error updating cart item:", error));
    }
  };

  const calculateSubTotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.price;
    });
    return subtotal.toFixed(2);
  };

 const calculateTotal = () => {
    const subtotal = calculateSubTotal();
    const shippingCharges = 50;
    const igst = 12.85;
    const total = parseFloat(subtotal) + shippingCharges + igst;
    return total.toFixed(2);
  };

  const increaseQuantity = (itemId) => {
    const updatedQuantity = cartItems.find((item) => item.id === itemId)
      .quantity + 1;
    updateCartItem(itemId, updatedQuantity);
  };


const removeCartItem = (itemId) => {
  const updatedCartItems = cartItems.filter((item) => item.id !== itemId);

  fetch(`https://acecraft-deploy-tkgw.onrender.com/Cart/${itemId}`, {
    method: "DELETE",
  })
    .then(() => {
      setCartItems(updatedCartItems);
      toast.success("Product deleted Successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'success-toast',
        bodyClassName: 'success-toast-body',
      });

      setTimeout(() => {
        fetch(`https://acecraft-deploy-tkgw.onrender.com/Cart/${itemId}`, {
          method: "DELETE",
        })
          .then(() => {
            console.log("Product deleted after 5 seconds");
          })
          .catch((error) => console.error("Error removing cart item:", error));
      }, 8000);
    })
    .catch((error) => console.error("Error removing cart item:", error));
};


  return (
    <div>
      {cartItems.length === 0 ? (
        <div>
          <p id="pcart">Your shopping cart is empty!</p>
          <Link to="/">
            <button id="bucart" type="button">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <ul id="ul">
          <div id="cartdiv">
            <h1 id="h7">
              Your bag total is <span>₹{calculateTotal()}</span>
            </h1>
            <hr></hr>
          </div>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div className="row">
                <div className="col-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    id="imgcart"
                    className="image-fluid"
                  ></img>
                </div>
                <div className="col-4">
                  <h3 id="names">{item.name} </h3>
                  <p id="p1" style={{ fontSize: 18 }}>
                    Size: {item.size}
                  </p>
                </div>
                <div className="col-2 d-flex">
                  <div className="d-flex">
                    <span
                      onClick={() => decreaseQuantity(item.id)}
                      style={{ marginRight: "5px", border: "grey" }}
                    >
                      <i style={{ fontSize: 13 }} className="fa-solid fa-minus"></i>
                    </span>
                    <p style={{ fontSize: 18, marginRight: 10 }}>{item.quantity}</p>
                    <span
                      style={{ border: "grey" }}
                      onClick={() => increaseQuantity(item.id)}
                    >
                      <i style={{ fontSize: 13 }} className="fa-solid fa-plus"></i>
                    </span>
                  </div>
                </div>
                <div className="col-2">
                  <p id="p1">₹{item.price}</p>
                  <span
                    id="spaning"
                    onClick={() => removeCartItem(item.id)}
                    className="text-danger"
                  >
                    Remove
                  </span>
                </div>
              </div>
              <hr></hr>
            </li>
          ))}
          <div className="row">
            <div className="col-5">
              <label style={{ fontWeight: 400, fontSize: 20 }}>
                Enter Coupon Code here:
              </label>
              <br></br>
              <input style={{ paddingLeft: 150 }} type="text"></input>
              <button type="button">Apply!</button>
            </div>
            <div className="col-4">
              <h3 id="fi" style={{ color: "gray" }}>
                Sub Total
              </h3>
              <h3 id="fi" style={{ color: "gray" }}>
                Shipping charges
              </h3>
              <h3 id="fi" style={{ color: "gray" }}>
                IGST:{" "}
              </h3>
              <h4 id="fi" style={{ fontSize: 25 }}>
                Total
              </h4>
            </div>
            <div className="col-3 ">
              <h4 id="hu" style={{ color: "gray" }}>
                ₹{calculateSubTotal()}
              </h4>
              <h4 id="hu" style={{ color: "gray" }}>
                ₹50{" "}
              </h4>
              <h4 id="hu" style={{ color: "gray" }}>
                ₹12.85
              </h4>
              <h2 id="hu" style={{ color: "black" }}>
                ₹{calculateTotal()}
              </h2>
              <div className="d-flex">
                <Link to="/">
                  <button
                    style={{
                      marginLeft: -60,
                      marginRight: 20,
                      paddingRight: 50,
                      paddingLeft: 50,
                    }}
                    type="button"
                  >
                    Continue Shopping
                  </button>
                </Link>{" "}
                <button
                  style={{
                    marginRight: 20,
                    paddingRight: 50,
                    paddingLeft: 50,
                  }}
                  onClick={makePayment}
                  type="button"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </ul>
      )}
      <ToastContainer />
    </div>
  );
};

export default AddToCart;

let paymentHandler="";



function makePayment() {
  invokeStripe();
  const paymentHandler = window.StripeCheckout.configure({
    key: "pk_test_51NQVprSByyeZSmwMbrFTQlEElAiMUOxAi3y7JdgkyzgZStZ5YGa9UnUg08svp4BqlMKuqQ93iEMhYzWizKvsT3iE00A5qAExXi",
    locale: "auto",
    token: function (stripeToken) {
      console.log(stripeToken);
      Swal.fire({
        icon: 'success',
        title: 'Order Placed Successfully',
      });
    },
  });

  paymentHandler.open({
    name: "PAYMENT",
    description: "Order Details",
    amount:""
  });
}

function invokeStripe() {
  if (!window.document.getElementById("stripe-script")) {
    const script = window.document.createElement("script");
    script.id = "stripe-script";
    script.type = "text/javascript";
    script.src = "https://checkout.stripe.com/checkout.js";
    script.onClick = () => {
   paymentHandler = window.StripeCheckout.configure({
        key: "pk_test_51Kb7TuSGj6LZeNumr4WWZQlyT0VAdXUwQ0zPIJAmGbnt9MAwXkJ5aIfQOZsCPraDu1L2BxAyRb8jLSF5tB6fL8mO00Yw0HiRYf",
        locale: "auto",
        token: function (stripeToken) {
          console.log(stripeToken);
          const Toast = toast({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });

          Toast.fire({
            icon: "error",
            title: "Error in generating Stripe Payment Gateway",
          });
        },
      });
    };
    window.document.body.appendChild(script);
  }
}