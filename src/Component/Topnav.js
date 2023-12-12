import React from "react";

import { Link, Outlet } from "react-router-dom";

const TopNav = () => {
  return (
    <div>
      <div style={{ height: "100px" }}>
        <nav>
          <div class="logo">
            <img
              src="https://appsamurai.com/wp-content/uploads/2017/12/shutterstock_1206570103.jpg"
              alt="Logo Image"
            />
          </div>
          <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
          <ul class="nav-links">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Order">Order</Link>
            </li>
            <li>
              <Link to="/Product">Product</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
            <li>
              <Link to="/Addcard">Add To Card</Link>
            </li>
            <li>
              <Link to="/Service">Service</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li>
              <button class="login-button" href="#">
                Login
              </button>
            </li>
            <li>
              <button class="join-button" href="#">
                Join
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div style={{ color: "red" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default TopNav;
