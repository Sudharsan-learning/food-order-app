import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function ProductCard({ data }) {
  const { addItem, inCart, isEmpty } = useCart();

  return (
    <>
      <div className="product-container position-relative" key={data._id}>
        <div className="product-image-container text-center">
          <img src={data.image} alt="products" className="product-image" />
        </div>
        <figure className="circle row align-item-center justify-center">
          <span className="circle-text ">{data.type}</span>
        </figure>

        <figure className=" cuisine row align-item-center justify-center">
          <span className="circle-text ">{data.cuisine}</span>
        </figure>

        <div className="product-light-text row space-evenly align-item-center">
          <span>Availability</span>
          <span className="ml-3"> {data.availability.map((data) => `${data} ${" "}`)}</span>
        </div>
        {/* <div className="product-light-text row space-between align-item-center mt-2 ">
       
          <span className="text-center">
            Cuisine <br /> South Indian
          </span>
          <span className="text-center">
            Availability 
            <br />
            BREAKFAST, LUNCH, DINNER
          </span>
        </div> */}

        <div className="product-name mt-3">
          <h2 className="text-center ">{data.name}</h2>
        </div>
        <div className="product-price-cart-container mt-3 row space-around align-item-center">
          <h4 className="product-price"> &#8377;{Number(data.price).toFixed(2)}</h4>
          {inCart(data._id) ? (
            <button type="button" className="product-cart-button">
              <Link to="/cart" className="button-text">
                View Cart
              </Link>
            </button>
          ) : (
            <button type="button" className="product-cart-button" onClick={() => addItem({ ...data, id: data._id })}>
              Add Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
