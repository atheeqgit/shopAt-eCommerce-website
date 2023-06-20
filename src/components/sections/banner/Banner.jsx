import React from "react";
import "./banner.css";
import banner1 from "/banner1.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsArrowRightShort } from "react-icons/bs";

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

const brandData = [
  "brand1.png",
  "brand2.jpg",
  "brand3.jpg",
  "brand4.png",
  "brand5.png",
  "brand6.png",
];
const bannerData = [
  {
    title:
      "Unlock Endless Possibilities: Dress to Inspire, Create and Captivate",
    imgPath: "banner9.jpg",
  },
  {
    title:
      "Technology is the only thing that has an ability to connect you to the world",
    imgPath: "banner6.jpg",
  },
  {
    title:
      "Curated Fashion Experiences: Unveiling the Perfect Blend of Elegance and Modernity",
    imgPath: "banner5.jpg",
  },
  {
    title: "Discover Your Signature Style and Make a Lasting Impression.",
    imgPath: "banner3.jpg",
  },
  {
    title:
      "Fashion Forward, Sustainable Choices: Dress Responsibly, Leave a Positive Impact",
    imgPath: "banner4.jpg",
  },
];

const Banner = () => {
  return (
    <>
      <div className="banner-div">
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {bannerData.map((data, index) => {
            return (
              <div
                key={index}
                className="banner"
                style={{
                  backgroundImage: `url(/public/${data.imgPath})`,
                }}
              >
                <div className="overlay">
                  <h1 className="banner-title">{data.title}</h1>
                  <button>
                    shop <BsArrowRightShort size={25} />
                  </button>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="brands-div">
        <div className="title">Brands</div>
        <div className="brands">
          {brandData.map((data) => {
            return (
              <div className="brang-img">
                <img src={`../../../../public/${data}`} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Banner;
