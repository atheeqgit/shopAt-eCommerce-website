import React from "react";
import { BiSearch } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">ShopAt.com</div>
      <ul className="links">
        <li className="link">home</li>
        <li className="link">shop</li>
        <li className="link">New arrivals</li>
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
