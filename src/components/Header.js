import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section className="container">
        <nav className="nav-container">
          <ul className="row align-item-center space-between">
            <li className="logo-container ml-3">
              <h4 className="primary-color logo-font">
                Your Food <br /> Order
              </h4>
            </li>
            <div className="row mr-3">
              <li className="nav-link">
                <Link to="/">Receipe</Link>
              </li>
              <li className="nav-link">
                <Link to="/cart"> Cart</Link>
              </li>
              <li className="nav-link">
                <Link to="/order"> Order</Link>
              </li>
            </div>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Header;
