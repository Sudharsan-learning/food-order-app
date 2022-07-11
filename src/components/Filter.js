import React from "react";
import { useLocation } from "react-router-dom";

function Filter({ order, setOrderData, reset }) {
  const location = useLocation();
  const handleSelect = (e) => {
    if (location.pathname === "/order") {
      reset();
    }

    switch (e.target.value) {
      case "Veg":
        let veg = order.filter((data) => data.type === "Veg");
        console.log(veg);
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
  return (
    <>
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
        {location.pathname === "/order" ? <option value="bought">Frquently bought Food</option> : ""}
      </select>
    </>
  );
}

export default Filter;
