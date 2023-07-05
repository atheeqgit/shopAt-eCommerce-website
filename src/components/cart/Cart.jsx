import React, { useEffect, useState } from "react";
import "./cart.css";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
//--
import { useContext } from "react";
import Context from "../../context.js";

const Cart = ({ cartopen, setCartopen }) => {
  //--
  const { cartData, deleteFromCart } = useContext(Context);

  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setTotal(
      cartData.reduce((prevValue, item) => {
        return prevValue + item.price * item.quantity;
      }, 0)
    );
  }, [cartData]);

  return (
    <div className={cartopen ? "cart active" : "cart"}>
      <h1>your cart</h1>
      <div className="cart-items">
        {cartData
          ? cartData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="cart-full"
                  onClick={(e) => {
                    if (
                      e.target.className == "delete" ||
                      e.target.parentElement.className == "delete" ||
                      e.target.parentElement.parentElement.className == "delete"
                    ) {
                      deleteFromCart(data);
                    } else {
                      navigate(`/product/${data.id}`);
                      setCartopen(!cartopen);
                    }
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
                    <MdOutlineDeleteForever size={35} />
                  </div>
                </div>
              );
            })
          : "Your Cart is empty"}
      </div>
      <div className="cart-total">
        <h2>total : {total}$</h2>
        <button>check out</button>
      </div>
    </div>
  );
};

export default Cart;
