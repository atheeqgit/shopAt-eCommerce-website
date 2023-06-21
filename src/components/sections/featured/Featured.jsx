import React from "react";
import "./featured.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Product } from "../../index";

const featuredData = [
  {
    id: 21,
    title: "brown shirt",
    thumbnail: "/public/picksmen.jpeg",
    price: "$100",
  },

  {
    id: 22,
    title: "women's lehenga",
    thumbnail: "/public/pickswomen2.png",
    price: "$100",
  },

  {
    id: 23,
    title: "iphone-12pro max",
    thumbnail: "/public/picksmobile2.jpeg",
    price: "$100",
  },

  {
    id: 24,
    title: "gold jimmiky",
    thumbnail: "/public/picksjwellery.jpeg",
    price: "$100",
  },

  {
    id: 25,
    title: "mens-shirt",
    thumbnail: "/public/picksmen.jpeg",
    price: "$100",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Featured = () => {
  return (
    <div className="featured-div">
      <div className="title">featured products</div>

      <Carousel
        responsive={responsive}
        // showDots={true}
        // infinite={true}
        // autoPlay={true}
        // autoPlaySpeed={3000}
        // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        {featuredData.map((data, index) => {
          return <Product key={index} data={data} />;
        })}
      </Carousel>
    </div>
  );
};

export default Featured;
