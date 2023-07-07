import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./shop.css";
import { Product } from "../index";
import { RxCaretRight, RxCaretDown, RxCaretUp } from "react-icons/rx";

const Shop = () => {
  const [shopData, setShopData] = useState();
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState();
  const [showCats, setShowCats] = useState(false);
  const [cat, setCat] = useState("All Products");

  const handleCats = () => {
    if (window.innerWidth < 900) {
      setShowCats(!showCats);
    }
  };

  async function FetchcategoryData(value) {
    setCat(value);
    if (value == "All") {
      fetchShopData();
    } else {
      Axios.get(`https://dummyjson.com/products/category/${value}`).then(
        (response) => {
          if (response.status === 200) {
            setShopData(response.data.products);
          } else console.log(response);
        }
      );
    }
  }
  async function fetchcategories() {
    Axios.get(`https://dummyjson.com/products/categories`).then((response) => {
      if (response.status === 200) {
        setCategories(response.data);
      } else console.log(response);
    });
  }

  async function fetchShopData() {
    Axios.get(`https://dummyjson.com/products`).then((response) => {
      if (response.status === 200) {
        setShopData(response.data.products);
      } else console.log(response);
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchcategories();
    fetchShopData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchShopData();
  }, [category]);

  return (
    <div className="shop">
      <div className="shop-main">
        <ul className={showCats ? `shop-left down` : "shop-left"}>
          <p
            className="shop-details"
            onClick={() => {
              handleCats();
            }}
          >
            catogories{" "}
            {showCats ? <RxCaretUp size={25} /> : <RxCaretDown size={25} />}
          </p>
          <li
            onClick={(e) => {
              e.preventDefault();
              FetchcategoryData(e.target.innerText);
              handleCats();
            }}
          >
            <a href="">All</a>
            <RxCaretRight size={20} />
          </li>
          {categories
            ? categories.map((data, index) => {
                if (showCats) {
                  return (
                    <li
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        FetchcategoryData(e.target.innerText);
                        handleCats();
                      }}
                    >
                      <a href="">{data}</a>
                      <RxCaretRight size={20} />
                    </li>
                  );
                }
              })
            : "loading....."}
        </ul>
        <div className="shop-right">
          <p className="shop-detailsR ">
            {cat ? cat : "All Products"}, {shopData ? shopData.length : ""}{" "}
            results
          </p>
          <div className="shop-grid">
            {shopData
              ? shopData.map((data, index) => {
                  return <Product data={data} key={index} />;
                })
              : "loading....."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
