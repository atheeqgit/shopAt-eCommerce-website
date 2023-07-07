import React from "react";
import "./banner.css";
import { Outlet, Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { bannerData, BannerResponsive, brandData } from "../../../data/data";

const Banner = () => {
  //import { useNavigate } from "react-router-dom";
  const navigate = useNavigate();

  return (
    <>
      <div className="banner-div">
        <Carousel
          responsive={BannerResponsive}
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
                  backgroundImage: `url(/${data.imgPath})`,
                }}
              >
                <div className="overlay">
                  <h1 className="banner-title">{data.title}</h1>
                  <button onClick={() => navigate("/shop")}>
                    Shop <BsArrowRightShort size={25} />
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
          {brandData.map((data, index) => {
            return (
              <div key={index} className="brang-img">
                <img src={`/${data}`} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Banner;
