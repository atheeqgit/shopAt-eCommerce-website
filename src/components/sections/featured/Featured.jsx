import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./featured.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Product } from "../../index";
import { featuredResponsive } from "../../../data/data";

const Featured = () => {
  const [featuredData, setFeaturedData] = useState();
  const [featuredWomen, setFeaturedWomen] = useState();
  const [featuredMen, setFeaturedMen] = useState();

  let skip;

  function setSkip() {
    skip = Math.floor(Math.random() * 90);
  }

  async function fetchfeaturedData() {
    Axios.get(
      `https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price,thumbnail`
    ).then((response) => {
      if (response.status === 200) {
        setFeaturedData(response.data.products);
      } else console.log(response);
    });

    Axios.get(`https://dummyjson.com/products/category/womens-dresses`).then(
      (response) => {
        if (response.status === 200) {
          setFeaturedWomen(response.data.products);
        } else console.log(response);
      }
    );
    Axios.get(`https://dummyjson.com/products/category/mens-shirts`).then(
      (response) => {
        if (response.status === 200) {
          setFeaturedMen(response.data.products);
        } else console.log(response);
      }
    );
  }

  useEffect(() => {
    setSkip();
    fetchfeaturedData();
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <div className="featured-div" id="featured">
        <div className="title">featured products</div>
        {featuredData ? (
          <Carousel responsive={featuredResponsive}>
            {featuredData.map((data, index) => {
              return <Product key={index} data={data} />;
            })}
          </Carousel>
        ) : (
          "loading...."
        )}
      </div>
      <div className="featured-div">
        <div className="title">women's dresses</div>
        {featuredWomen ? (
          <Carousel responsive={featuredResponsive}>
            {featuredWomen.map((data, index) => {
              return <Product key={index} data={data} />;
            })}
          </Carousel>
        ) : (
          "loading...."
        )}
      </div>
      <div className="featured-div">
        <div className="title">men's Shirts</div>
        {featuredMen ? (
          <Carousel responsive={featuredResponsive}>
            {featuredMen.map((data, index) => {
              return <Product key={index} data={data} />;
            })}
          </Carousel>
        ) : (
          "loading...."
        )}
      </div>
    </>
  );
};

export default Featured;
