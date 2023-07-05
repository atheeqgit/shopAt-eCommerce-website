import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import "./selected.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Featured } from "../sections/index";
import { useContext } from "react";
import Context from "../../context.js";

const Selected = () => {
  const {
    addToCart,
    deleteFromCart,

    cartData,
    setCartData,
  } = useContext(Context);
  const [productExists, setProductExists] = useState();
  const [quantity, setQuantity] = useState(1);

  const [selectedData, setSelectedData] = useState();
  const params = useParams();
  const itemId = params.id;

  const SelectedResponsive = {
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

  async function singleItemData() {
    Axios.get(`https://dummyjson.com/products/${itemId}`).then((response) => {
      if (response.status === 200) {
        setSelectedData(response.data);
      } else console.log(response);
    });
  }
  useEffect(() => {
    window.scrollTo(0, 0);

    singleItemData();
  }, [itemId]);

  useEffect(() => {
    handleE();
  }, [quantity]);

  function handleE() {
    const cartProduct = cartData.find((item) => item.id === selectedData.id);
    if (cartProduct) {
      setProductExists(cartProduct);
    }
  }

  function handleAdd() {
    if (productExists) {
      setQuantity(() => {
        return Number(+productExists.quantity + 1);
      });
      addToCart(selectedData, setQuantity, quantity);
    } else {
      setQuantity(() => {
        return Number(quantity + 1);
      });
    }
  }

  console.log(quantity);
  function handleDel() {
    if (productExists) {
      if (quantity > 1) {
        setQuantity(() => {
          return Number(+productExists.quantity - 1);
        });
        addToCart(selectedData, setQuantity, quantity);
      } else {
        setProductExists(false);
        deleteFromCart(selectedData);
      }
    } else {
      setQuantity(() => {
        return Number(quantity - 1);
      });
    }
  }

  return (
    <div className="selected-product">
      {selectedData ? (
        <div className="selected">
          <div className="selected-left">
            <Carousel
              responsive={SelectedResponsive}
              showDots={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            >
              {selectedData.images.map((src, index) => {
                return (
                  <div className="img-div" key={index}>
                    <img src={src} />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="selected-right">
            <h1>{selectedData.title}</h1>
            <p className="description">{selectedData.description}</p>
            <div>
              <p className="rating">Rating {selectedData.rating}</p>
            </div>
            <h2>${selectedData.price}</h2>

            <div className="calc-div">
              <div className="qunatity-div">
                <div
                  className="symbol"
                  onClick={() => {
                    handleAdd();
                  }}
                >
                  +
                </div>
                <div className="h3">{quantity}</div>
                <div
                  className="symbol"
                  onClick={() => {
                    handleDel();
                  }}
                >
                  -
                </div>
              </div>
              <button
                onClick={() => {
                  if (productExists) {
                    handleDel();
                  } else {
                    addToCart(selectedData, quantity);
                  }
                }}
              >
                {productExists ? "delete from cart " : "add to cart"}{" "}
                <HiOutlineShoppingCart size={30} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        "loading...."
      )}

      <Featured />
    </div>
  );
};

export default Selected;
