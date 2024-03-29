import React from "react";
import "./product.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { useContext } from "react";
import Context from "../../context.js";

const Product = ({ data }) => {
  const { addToCart } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div
      className="product"
      onClick={(e) => {
        if (
          e.target.className == "cart-Btn" ||
          e.target.parentElement.className == "cart-Btn" ||
          e.target.parentElement.parentElement.className == "cart-Btn"
        ) {
          addToCart(data, 1);
        } else {
          navigate(`/product/${data.id}`);
        }
      }}
    >
      <div
        className="product-img"
        style={{ backgroundImage: `url(${data.thumbnail})` }}
      ></div>
      <div className="product-details">
        <div>
          <p className="product-name">{data.title}</p>
        </div>
        <div className="btn-div">
          <div className="cart-Btn">
            <HiOutlineShoppingCart size={25} />
          </div>
          <h2 className="price">{data.price}$</h2>
        </div>
      </div>
    </div>
  );
};

export default Product;
