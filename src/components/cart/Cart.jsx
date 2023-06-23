import React from "react";
import "./cart.css";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartopen, setCartopen }) => {
  const navigate = useNavigate();

  const data = [
    {
      id: 51,
      title: "half sleeves T shirts",
      thumbnail: "https://i.dummyjson.com/data/products/51/thumbnail.jpg",
      price: 23,
      quantity: 1,
    },
    {
      id: 21,
      thumbnail: "https://i.dummyjson.com/data/products/53/thumbnail.jpg",
      title: "printed high quality T shirts",
      price: 23,
      quantity: 1,
    },
    {
      id: 61,
      thumbnail: "https://i.dummyjson.com/data/products/52/thumbnail.jpg",
      title: "FREE FIRE T Shirt",
      price: 23,
      quantity: 1,
    },
    {
      id: 51,
      title: "half sleeves T shirts",
      thumbnail: "https://i.dummyjson.com/data/products/51/thumbnail.jpg",
      price: 23,
      quantity: 1,
    },
    {
      id: 21,
      thumbnail: "https://i.dummyjson.com/data/products/53/thumbnail.jpg",
      title: "printed high quality T shirts",
      price: 23,
      quantity: 1,
    },
    {
      id: 61,
      thumbnail: "https://i.dummyjson.com/data/products/52/thumbnail.jpg",
      title: "FREE FIRE T Shirt",
      price: 23,
      quantity: 1,
    },
  ];
  return (
    <div className={cartopen ? "cart active" : "cart"}>
      <h1>your cart</h1>
      <div className="cart-items">
        {data.map((data, index) => {
          return (
            <div
              key={index}
              className="cart-full"
              onClick={() => {
                navigate(`/product/${data.id}`);
                setCartopen(!cartopen);
              }}
            >
              <div className="cart-item">
                <div className="img-cont">
                  <img src={data.thumbnail} />
                </div>
                <div className="item-details">
                  <h2 className="item-name">{data.title}</h2>
                  <p>quantity : {data.quantity}</p>
                  <h3>{data.price}$</h3>
                </div>
              </div>
              <div className="delete">
                <MdOutlineDeleteForever size={40} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-total">
        <h2>total : 300$</h2>
        <button>check out</button>
      </div>
    </div>
  );
};

export default Cart;
