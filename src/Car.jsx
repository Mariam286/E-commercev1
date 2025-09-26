import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Shanta } from "./Context";
import './index.css'
function Car() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(Shanta);

  const subtotal = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <div >
      {cart.length === 0 ? (
        // Empty Cart
        <div className="container py-5 ">
          <div className="row">
            <div className="col-12">
              <div className="card border-0 shadow-lg p-5 text-center rounded-4 w-100">
                <div className="mb-4">
                  <i className="fa-solid fa-cart-shopping fa-6x text-secondary opacity-50"></i>
                </div>
                <h2 className="fw-bold mb-3">Your Cart is Empty</h2>
                <p className="text-muted fs-5 mb-4">
                  You haven’t added anything yet. Browse our products and
                  discover amazing deals!
                </p>
                <div className="d-flex justify-content-center">
                  <Link
                    to="/home"
                    className="btn btn-warning btn-lg px-5 rounded-pill shadow-sm d-flex align-items-center gap-2"
                  >
                    <i className="fa-solid fa-store"></i>
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Cart With Items
        <div className="container py-5 "  style={{width:'100%'}}>
          <div className="row g-4">
            {/* Cart Items */}
            <div className="col-lg-8">
              <ul className="list-group shadow-sm rounded-3">
                {cart.map((product) => (
                  <li
                    key={product.id}
                    className="list-group-item d-flex align-items-center justify-content-between p-3"
                  >
                    {/* Left: Product Image & Info */}
                    <div className="d-flex align-items-center ">
                      <Link to={`/details/${product.id}`}>
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="rounded cartp"
                        style={{
                         
                          objectFit: "cover",
                    
                        }}
                      />
                      </Link>
                      
                      <div className="ms-3">
                        <Link to={`/details/${product.id}`} className="text-black">
                        <h5 className="mb-1">{product.title}</h5>
                        <p className="text-secondary d-block fs-4">
                          {product.category}
                        </p>
                        <p className="d-flex">
                        <span className="text-danger fw-bold mb-0 fs-3 me-5">
                          ${Math.round(product.price)}  
                          
                        </span>
                           <span className="text-warning fs-3 d-flex flex-wrap gap-1 fw-bold ">
                            <span className="text-success fw-bold  me-3 ">Sum </span> ${Math.round(product.price * product.quantity)}
                          </span>
                          </p>
                          </Link>
                        {/* Quantity Controls */}
                        <div className="d-flex align-items-center gap-3">
                            <div className="d-flex align-items-center mt-2 mb-2">
                          <button
                            className="btn btn-outline-danger btn-sm me-3 fs-4 py-0 px-3 d-flex align-items-center justify-content-center"
                            onClick={() => decreaseQuantity(product.id)}
                          >
                            -
                          </button>
                          <span className="text-secondary d-block fs-3">{product.quantity}</span>
                          <button
                            className="btn btn-outline-danger btn-sm ms-3 fs-4 py-0 px-3 d-flex align-items-center justify-content-center"
                            onClick={() => increaseQuantity(product.id)}
                          >
                            +
                          </button>
                           </div>
                                   {/* Right: Remove Button */}
                    <div>
                       
                      <button
                        className="btn btn-outline-danger btn-sm rounded-pill remove d-flex align-items-center justify-content-center"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <i className="fa-solid fa-trash me-1"></i> Remove
                      </button>
                    </div>
                        </div>
                        
                      </div>
                
                    </div>

                 
                  </li>
                ))}
              </ul>
            </div>

            {/* Order Summary */}
            <div className="col-lg-4 col-md-12 col-sm-12" >
              <div className="card shadow-sm rounded-3 p-4 " style={{width:'100%'}}>
                <h5 className="fw-bold mb-3">Order Summary</h5>

                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span className="fw-bold">${Math.round(subtotal)}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span className="fw-bold text-success">Free</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-3">
                  <span className="fw-bold">Total</span>
                  <span className="fw-bold text-danger">
                    ${Math.round(subtotal)}
                  </span>
                </div>

                <button className="btn btn-warning w-100 rounded-pill shadow-sm mb-2">
                  Checkout <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>

                {/* Clear Cart */}
                <button
                  className="btn btn-outline-dark w-100 rounded-pill shadow-sm"
                  onClick={clearCart}
                >
                  Clear Cart <i className="fa-solid fa-trash ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Car;
