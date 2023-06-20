import React from "react";
import "./featured.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const featuredData = [
  {
    title: "brown shirt",
    src: "picksmen.jpeg",
    price: "$100",
  },

  {
    title: "women's lehenga",
    src: "pickswomen2.png",
    price: "$100",
  },

  {
    title: "iphone-12pro max",
    src: "picksmobile2.jpeg",
    price: "$100",
  },

  {
    title: "gold jimmiky",
    src: "picksjwellery.jpeg",
    price: "$100",
  },

  {
    title: "mens-shirt",
    src: "picksmen.jpeg",
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
          console.log("hello");
          return (
            <div className="product">
              <div
                className="product-img"
                style={{ backgroundImage: `url(/public/${data.src})` }}
              ></div>
              <div className="product-details">
                <div>
                  <p className="product-name">{data.title}</p>
                  <h2 className="price">{data.price}$</h2>
                </div>
                <div>
                  <div className="cart-Btn">
                    <HiOutlineShoppingCart size={25} />
                  </div>
                  <div className="like-btn">
                    <AiOutlineHeart size={25} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Featured;
