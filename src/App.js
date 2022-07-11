import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/cart";
import Order from "./pages/order";
import Success from "./pages/order-success";
import Product from "./pages/product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} exact />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order-success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
