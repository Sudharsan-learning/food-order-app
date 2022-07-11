import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function Cart() {
  const { isEmpty, totalUniqueItems, cartTotal, items, updateItemQuantity, removeItem, emptyCart } = useCart();
  return (
    <>
      <div className="container">
        <h2 className="text-center m-5">Cart</h2>
        {isEmpty ? (
          <>
            <div>
              <h3 className="text-center">Your Cart is empty</h3>
            </div>
          </>
        ) : (
          <div className="row space-evenly">
            <div className="cart-container-parent">
              {items &&
                items.map((data) => (
                  <div className="cart-container row align-item-center space-between ml-5 mr-5 mt-3">
                    <div className="cart-product-image ml-3">
                      <img src={data.image} alt="" className="img" />
                    </div>
                    <div>
                      <div className="cart-product-name">
                        <h4>{data.name}</h4>
                      </div>
                      <div className="row mt-3">
                        <div className="cart-product-price">
                          <p>&#8377;{Number(data.price).toFixed(2)}</p>
                        </div>
                        <div className="cart-product-remove ml-5">
                          <a className="remove-text pointer" onClick={() => removeItem(data.id)}>
                            Remove
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="cart-product-quantity">
                      <div className="product-cart-button quantity-button">
                        <span className="mr-3 quantity-symbol pointer" onClick={() => updateItemQuantity(data._id, data.quantity + 1)}>
                          +
                        </span>
                        <span className="mr-3">{data.quantity}</span>
                        <span className="quantity-symbol pointer" onClick={() => updateItemQuantity(data._id, data.quantity - 1)}>
                          -
                        </span>
                      </div>
                    </div>
                    <div className="cart-total-price  mr-3">
                      <h3>&#8377;{Number(data.quantity * data.price).toFixed(2)}</h3>
                    </div>
                  </div>
                ))}
            </div>
            <div className="checkout-container ml-3 mr-3 ">
              <h2 className="text-center">Order Summary</h2>
              <div className="checkout-total row mt-4 row space-between">
                <p>Item Total</p>
                <p>&#8377;{Number(cartTotal).toFixed(2)}</p>
              </div>
              <div className="checkout-total row mt-3 row space-between">
                <p>Taxes & Charges(18%)</p>
                <p>&#8377;{Number(cartTotal * 0.18).toFixed(2)}</p>
              </div>
              <div className="checkout-total row mt-4 row space-between">
                <h3>Grand Total</h3>
                <h3>&#8377;{Number(cartTotal + cartTotal * 0.05).toFixed(2)}</h3>
              </div>
              <div className="mt-4 text-center">
                <button type="button" className="product-cart-button">
                  <Link to="/order-success" className="button-text" onClick={() => emptyCart()}>
                    Place Order
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;