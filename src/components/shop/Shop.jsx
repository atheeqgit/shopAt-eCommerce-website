import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./shop.css";
import { Product } from "../index";
import { RxCaretRight } from "react-icons/rx";

const Shop = () => {
  const [shopData, setShopData] = useState();
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState();
  const [cat, setCat] = useState("All");

  async function FetchcategoryData(value) {
    setCat(value);
    if (value == "All") {
      fetchShopData();
    } else {
      Axios.get(`https://dummyjson.com/products/category/${value}`).then(
        (response) => {
          console.log(response);

          if (response.status === 200) {
            console.log(category);
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
        <ul className="shop-left">
          <p className="shop-details">catogories</p>
          <li
            onClick={(e) => {
              e.preventDefault();
              FetchcategoryData(e.target.innerText);
            }}
          >
            <a href="">All</a>
            <RxCaretRight size={20} />
          </li>
          {categories
            ? categories.map((data, index) => {
                return (
                  <li
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      FetchcategoryData(e.target.innerText);
                    }}
                  >
                    <a href="">{data}</a>
                    <RxCaretRight size={20} />
                  </li>
                );
              })
            : "loading....."}
        </ul>
        <div className="shop-right">
          <p className="shop-details">
            {cat ? cat : "All Products"}, {shopData ? shopData.length : ""}{" "}
            results
          </p>
          <div className="shop-grid">
            {shopData
              ? shopData.map((data) => {
                  return <Product data={data} />;
                })
              : "loading....."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
