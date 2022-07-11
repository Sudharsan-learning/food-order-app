import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "react-use-cart";

function ProductCard({ data }) {
  const { addItem, inCart } = useCart();

  const location = useLocation();

  // console.log(location.pathname);

  return (
    <>
      <div className="product-container position-relative" key={data._id}>
        <div className="product-image-container text-center">
          <img src={data.image && data.image} alt="products" className="product-image" />
        </div>
        <figure className="circle row align-item-center justify-center">
          <span className="circle-text ">{data.image && data.type}</span>
        </figure>

        <figure className=" cuisine row align-item-center justify-center">
          <span className="circle-text ">{data.cuisine && data.cuisine}</span>
        </figure>

        <div className="product-light-text justify-center row align-item-center">
          {data.orderDate && (
            <>
              <span>Ordered at - </span>{" "}
              <span>
                {data.orderDate &&
                  new Date(data.orderDate).toLocaleString("en-ES", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })}
              </span>
            </>
          )}
          {data.availability && (
            <>
              <span>Availability</span>
              <span className="ml-3"> {data.availability && data.availability.map((data) => `${data} ${" "}`)}</span>
            </>
          )}
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
          <h3 className="text-center ">{data.name && data.name}</h3>
        </div>
        <div className="product-price-cart-container mt-3 row space-around align-item-center">
          <h4 className="product-price"> &#8377;{data.price && Number(data.price).toFixed(2)}</h4>
          {location.pathname === "/order" ? (
            <button type="button" className="product-cart-button">
              <Link to="/" className="button-text">
                Order again
              </Link>
            </button>
          ) : (
            ""
          )}
          {location.pathname === "/" ? (
            inCart(data._id) ? (
              <button type="button" className="product-cart-button">
                <Link to="/cart" className="button-text">
                  View Cart
                </Link>
              </button>
            ) : (
              <button type="button" className="product-cart-button" onClick={() => addItem({ ...data, id: data._id })}>
                Add Cart
              </button>
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
