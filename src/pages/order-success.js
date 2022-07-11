import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <>
      <div className="text-center">
        <img src="/images/order-success.gif" alt="order-success" className="product-image" />
        <h3>Order Accepted</h3>
        <p className="mt-5">Congratulations! Your order has been placed.</p>

        <button type="button" className="product-cart-button mt-5">
          <Link to="/" className="button-text">
            Order again
          </Link>
        </button>
      </div>
    </>
  );
}

export default Success;
