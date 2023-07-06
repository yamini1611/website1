import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://acecraft-deploy-tkgw.onrender.com/Cart")
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data);
      })
      .catch((error) =>
        console.error("Error retrieving cart items:", error)
      );
  }, []);

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
        alert("Quantity updated successfully!");
      })
      .catch((error) => console.error("Error updating cart item:", error));
  };

  const decreaseQuantity = (itemId) => {
    const updatedCartItem = cartItems.find((item) => item.id === itemId);
    const updatedQuantity = updatedCartItem.quantity - 1;

    if (updatedQuantity >= 0) {
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
          alert("Quantity updated successfully!");
        })
        .catch((error) => console.error("Error updating cart item:", error));
    }
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
        alert("Item removed from cart!");
      })
      .catch((error) => console.error("Error removing cart item:", error));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        updateCartItem,
        decreaseQuantity,
        increaseQuantity,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
