import React from "react";
import { Outlet, Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">ShopAt.com</div>
      <ul className="links">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <div className="nav-fields">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <BiSearch />
          <input type="text" />
        </form>
        <div className="cart-Btn">
          <HiOutlineShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
