import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import order from "../data/order.json";

// function Container({ order }) {
//   return (
//     <div className="mt-4 ml-5 mr-5 row space-evenly align-item-center flex-wrap">
//       {order.map((data) => (
//         <ProductCard data={data} key={data._id} />
//       ))}
//     </div>
//   );
// }

function Order() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const date = moment().subtract(30, "days");
  const date = new Date(new Date().setDate(new Date().getDate() - 30)).toLocaleDateString();

  console.log("date", date);

  const past30daysOrder = order.filter((data) => new Date(data.orderDate) > new Date(date));

  console.log(past30daysOrder, "past30daysOrder");

  const [orderData, setOrderData] = useState(past30daysOrder);

  const submit = (data) => {
    // console.log(data.search);
    const search = data.search;
    let searchData = past30daysOrder.filter((data) => data.name.includes(search));

    setOrderData(searchData);

    // console.log("searchData", searchData);
  };
  // console.log("orderData", orderData);
  return (
    <>
      <div className="container">
        <h2 className="text-center m-5">Order</h2>
        <div className="ml-5 mr-5 row space-between align-item-center flex-wrap">
          <p>Showing {orderData.length} Receipes</p>
          <div className="row">
            <div className="mr-3 ">
              <form onSubmit={handleSubmit(submit)} className="row align-item-center">
                <div>
                  <input type="text" placeholder="Search a Receipe" {...register("search", { required: true })} />
                  <br />
                  {errors.search && <span className="remove-text">Please enter a name</span>}
                </div>

                <button type="submit" className="ml-3 product-cart-button">
                  Search
                </button>
              </form>
            </div>
            <div className="ml-3">
              <Filter order={past30daysOrder} reset={reset} setOrderData={setOrderData} />
            </div>
          </div>
        </div>
        {orderData.length === 0 ? (
          <div className="mt-5 text-center">
            <h3>No Products Found</h3>
          </div>
        ) : (
          <div className="mt-4 ml-5 mr-5 row space-evenly align-item-center flex-wrap">
            {orderData &&
              orderData.map((data) => {
                return <ProductCard data={data} key={data._id} />;
              })}
          </div>
        )}
        {/* <Container order={orderData} /> */}
      </div>
    </>
  );
}

export default Order;
