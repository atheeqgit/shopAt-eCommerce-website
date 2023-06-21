import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Cart } from "../index";
import "./navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <nav className={scrolled ? "active" : ""}>
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
        <div
          className="cart-Btn"
          onClick={() => {
            setCartOpen(!cartOpen);
          }}
        >
          <HiOutlineShoppingCart />
        </div>
      </div>
      <Cart cartopen={cartOpen} setCartopen={setCartOpen} />
    </nav>
  );
};

export default Navbar;
