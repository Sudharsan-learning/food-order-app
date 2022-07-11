import React from "react";
import ProductCard from "../components/ProductCard";
import receipe from "../data/menu.json";

function Product() {
  console.log(receipe, "receipe");
  return (
    <>
      <div className="container">
        <h2 className="text-center m-5">Receipe</h2>
        <div className="ml-5 mr-5 row space-between align-item-center flex-wrap">
          <p>Showing {receipe.length} Receipes</p>
          <select>
            <option>type : Veg</option>
            <option>type : Non-Veg</option>
          </select>
        </div>
        <div className="mt-4 ml-5 mr-5 row space-evenly align-item-center flex-wrap">
          {receipe.map((data) => (
            <ProductCard data={data} key={data._id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
