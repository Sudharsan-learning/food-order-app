import React, { useState } from "react";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import receipe from "../data/menu.json";

function Product() {
  console.log(receipe, "receipe");

  const [receipeData, setReceipeData] = useState(receipe);

  return (
    <>
      <div className="container">
        <h2 className="text-center m-5">Receipe</h2>
        <div className="ml-5 mr-5 row space-between align-item-center flex-wrap">
          <p>Showing {receipeData.length} Receipes</p>
          <div>
            <Filter order={receipe} setOrderData={setReceipeData} />
          </div>
        </div>
        {receipeData.length === 0 ? (
          <div className="mt-4 text-center">
            <h3>No Products Found</h3>
          </div>
        ) : (
          <div className="mt-4 ml-5 mr-5 row space-evenly align-item-center flex-wrap">
            {receipeData && receipeData.map((data) => <ProductCard data={data} key={data._id} />)}
          </div>
        )}
      </div>
    </>
  );
}

export default Product;
