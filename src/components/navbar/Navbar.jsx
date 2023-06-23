import React, { useState, useEffect } from "react";
import {
  RiMenu3Line,
  RiCloseLine,
  RiSunFill,
  RiMoonFill,
} from "react-icons/ri";
import { Outlet, Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Cart } from "../index";
import "./navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 800) {
      setToggleMenu((toggleMenu) => !toggleMenu);
    }
  };

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
      <ul className={toggleMenu ? "links show-nav" : "links"}>
        <li className="link">
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="link">
          <a href="#featured" onClick={handleClick}>
            featured
          </a>
        </li>
        <li className="link">
          <Link to="/shop" onClick={handleClick}>
            Shop
          </Link>
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
        <div className="menu-icons" onClick={handleClick}>
          {toggleMenu ? <RiCloseLine /> : <RiMenu3Line />}
        </div>
      </div>
      <Cart cartopen={cartOpen} setCartopen={setCartOpen} />
    </nav>
  );
};

export default Navbar;
