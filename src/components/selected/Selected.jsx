import React from "react";
import "./selected.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Featured } from "../sections/index";

const Selected = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const data = {
    id: 51,
    title: "half sleeves T shirts",
    description:
      "Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands",
    price: 23,
    discountPercentage: 12.76,
    rating: 4.26,
    stock: 132,
    brand: "Vintage Apparel",
    category: "mens-shirts",
    thumbnail: "https://i.dummyjson.com/data/products/51/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/51/1.png",
      "https://i.dummyjson.com/data/products/51/2.jpg",
      "https://i.dummyjson.com/data/products/51/3.jpg",
      "https://i.dummyjson.com/data/products/51/thumbnail.jpg",
    ],
  };
  return (
    <div className="selected-product">
      <div className="selected">
        <div className="selected-left">
          <Carousel
            responsive={responsive}
            showDots={true}
            // infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          >
            {data.images.map((src) => {
              return (
                <div className="img-div">
                  <img src={src} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="selected-right">
          <h1>{data.title}</h1>
          <p className="description">{data.description}</p>
          <div>
            <p className="rating">Rating {data.rating}</p>
          </div>
          <h2>${data.price}</h2>
          <div className="other-details">
            <div>someting</div>
            <div>someting</div>
          </div>
          <div className="calc-div">
            <div>- 1 +</div>
            <button>
              add to cart <HiOutlineShoppingCart size={30} />
            </button>
          </div>
        </div>
      </div>
      <Featured />
    </div>
  );
};

export default Selected;
