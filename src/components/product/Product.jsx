import React from "react";
import "./product.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const Product = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="product" onClick={() => navigate(`/product/${data.id}`)}>
      <div
        className="product-img"
        style={{ backgroundImage: `url(${data.thumbnail})` }}
      ></div>
      <div className="product-details">
        <div>
          <p className="product-name">{data.title}</p>
          <h2 className="price">{data.price}$</h2>
        </div>
        <div className="btn-div">
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
};

export default Product;
