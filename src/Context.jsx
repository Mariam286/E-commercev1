import React, { useState, createContext } from "react";
import Swal from "sweetalert2";

export let Shanta = createContext();

function Context(props) {
  const [cart, setCart] = useState([]);

  // Add to Cart (if exists → increase quantity)
  function productCart(product) {
    setCart((prevCart) => {
      const existing = prevCart.find((p) => p.id === product.id);

      if (existing) {
        // Already in cart → increase quantity
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        // New product → add with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    Swal.fire({
      title: `${product.title}`,
      text: "Added to cart!",
      icon: "success",
      timer: 1200,
      showConfirmButton: false,
    });
  }

  // Increase quantity
  function increaseQuantity(productId) {
    setCart((prevCart) =>
      prevCart.map((p) =>
        p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  }

  // Decrease quantity (remove if 0)
  function decreaseQuantity(productId) {
    setCart((prevCart) =>
      prevCart
        .map((p) =>
          p.id === productId
            ? { ...p, quantity: Math.max(p.quantity - 1, 0) }
            : p
        )
        .filter((p) => p.quantity > 0)
    );
  }
  // Total items in cart (sum of quantities)
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Remove item completely
  function removeFromCart(productId) {
    setCart((prevCart) => prevCart.filter((p) => p.id !== productId));
  }

  // Clear all items
  function clearCart() {
    setCart([]);
  }

  return (
    <Shanta.Provider
      value={{
        cart,
        productCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        cartCount
      }}
    >
      {props.children}
    </Shanta.Provider>
  );
}

export default Context;
