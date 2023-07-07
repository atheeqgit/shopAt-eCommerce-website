import React, { useState, useEffect } from "react";

import Axios from "axios";
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
import { useContext } from "react";
import Context from "../../context.js";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cartData, cartOpen, setCartOpen } = useContext(Context);
  const [scrolled, setScrolled] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState();

  const handleClick = () => {
    if (window.innerWidth < 800) {
      setToggleMenu((toggleMenu) => !toggleMenu);
      if (cartOpen) {
        setCartOpen(!cartOpen);
      }
    }
  };

  useEffect(() => {}, [cartData]);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  async function fetchSearchdata() {
    Axios.get(`  https://dummyjson.com/products/search?q=${input}`).then(
      (response) => {
        if (response.status === 200) {
          setSearchData(response.data.products);
        } else console.log(response);
      }
    );
  }
  useEffect(() => {
    if (input != "") {
      fetchSearchdata();
    } else {
      setSearchData([]);
    }
  }, [input]);
  const navigate = useNavigate();

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
          <input
            value={input}
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </form>
        <div
          className="cart-Btn"
          onClick={() => {
            setCartOpen(!cartOpen);
            if (toggleMenu) {
              setToggleMenu(!toggleMenu);
            }
          }}
        >
          {cartData.length > 0 ? (
            <div className="cart-num">{cartData.length}</div>
          ) : (
            ""
          )}

          <HiOutlineShoppingCart />
        </div>
        <div className="menu-icons" onClick={handleClick}>
          {toggleMenu ? <RiCloseLine /> : <RiMenu3Line />}
        </div>
      </div>
      {input.length > 0 ? (
        <div className="search-div">
          {searchData.length > 0 ? (
            searchData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="search-item"
                  onClick={() => {
                    navigate(`/product/${data.id}`);
                    setInput("");
                    setSearchData([]);
                  }}
                >
                  <div className="search-cont">
                    <img src={data.thumbnail} />
                  </div>
                  <div className="search-details">
                    <h2 className="search-name">{data.title}</h2>

                    <h3>{data.price}$</h3>
                  </div>
                </div>
              );
            })
          ) : (
            <h3>The product is not available</h3>
          )}
        </div>
      ) : (
        ""
      )}
      <Cart cartopen={cartOpen} setCartopen={setCartOpen} />
    </nav>
  );
};

export default Navbar;
