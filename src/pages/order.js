import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
  const [select, setSelect] = useState(false);
  const [orderData, setOrderData] = useState(order);

  const handleSelect = (e) => {
    reset();
    setSelect(true);
    switch (e.target.value) {
      case "Veg":
        let veg = order.filter((data) => data.type === "Veg");
        setOrderData(veg);
        break;
      case "Non-Veg":
        let nonVeg = order.filter((data) => data.type === "Non-Veg");
        setOrderData(nonVeg);
        break;
      case "South Indian":
        let southIndian = order.filter((data) => data.cuisine === "South Indian");
        console.log("southIndian", southIndian);
        setOrderData(southIndian);
        break;
      case "North Indian":
        let northIndian = order.filter((data) => data.cuisine === "North Indian");
        setOrderData(northIndian);
        break;
      case "Chinese":
        let chinese = order.filter((data) => data.cuisine === "Chinese");
        setOrderData(chinese);
        break;
      case "Arabian":
        let arabian = order.filter((data) => data.cuisine === "Arabian");
        setOrderData(arabian);
        break;
      case "a-z":
        let nameFirst = order.sort((a, b) => a.name.localeCompare(b.name)).map((data) => data);
        setOrderData(nameFirst);
        break;
      case "z-a":
        let nameLast = order
          .sort((a, b) => a.name.localeCompare(b.name))
          .reverse()
          .map((data) => data);
        console.log("nameLast", nameLast);
        setOrderData(nameLast);
        break;

      case "high":
        let high = order
          .sort((a, b) => a.price - b.price)
          .reverse()
          .map((data) => data);
        setOrderData(high);
        break;

      case "low":
        let low = order.sort((a, b) => a.price - b.price).map((data) => data);
        setOrderData(low);
        break;

      case "bought":
        // const foundDuplicateName = values.find((nnn, index) => {
        //   return values.find((x, ind) => x.name === nnn.name && index !== ind);
        // });
        let boughtReceipe = order.find((data, i) => {
          return order.find((a, idx) => a.name === data.name && i !== idx);
        });

        console.log("boughtReceipe", [boughtReceipe]);
        setOrderData([boughtReceipe]);
        break;
      case "default":
        let defaultOrder = order.sort((a, b) => a._id - b._id).map((data) => data);
        setOrderData(defaultOrder);
        break;
      default:
        setOrderData(order);
        break;
    }
  };

  const submit = (data) => {
    console.log();
    const search = data.search;
    let searchData = order.filter((data) => data.name.includes(search));

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
              <label htmlFor="filter">Filter : </label>
              <select onChange={handleSelect} id="filter">
                <option value="default">default</option>
                <option value="Veg">Type : Veg</option>
                <option value="Non-Veg">Type : Non-Veg</option>
                <option value="South Indian">Cuisine : South Indian</option>
                <option value="North Indian">Cuisine : North Indian</option>
                <option value="Chinese">Cuisine : Chinese</option>
                <option value="Arabian">Cuisine : Arabian</option>
                <option value="a-z">Name : A to Z</option>
                <option value="z-a">Name : Z to A</option>
                <option value="high">Price : High to Low</option>
                <option value="low">Price : Low to High</option>
                <option value="bought">Frquently bought Food</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-4 ml-5 mr-5 row space-evenly align-item-center flex-wrap">
          {orderData &&
            orderData.map((data) => {
              return <ProductCard data={data} key={data._id} />;
            })}
        </div>
        {/* <Container order={orderData} /> */}
      </div>
    </>
  );
}

export default Order;
