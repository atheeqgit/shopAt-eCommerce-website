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
  const { addToCart, deleteFromCart, cartData, setCartData } =
    useContext(Context);
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
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    singleItemData();
    setQuantity(1);
    cartExits();
  }, [itemId]);

  useEffect(() => {
    cartExits();
  }, [cartData]);

  // useEffect(() => {
  //   cartExits();

  // }, [itemId]);

  function cartExits() {
    const cartProduct = cartData?.find((item) => item.id == +itemId);
    if (cartProduct) {
      setProductExists(cartProduct);
    } else {
      setQuantity(1);
      setProductExists();
    }
  }

  function handleAdd() {
    cartExits();
    if (cartExits) {
      addToCart(selectedData, quantity);
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity + 1);
      addToCart(selectedData, quantity);
    }
  }

  function handleDel() {
    cartExits();
    setQuantity(quantity - 1);
    deleteFromCart(productExists);
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
              {productExists ? (
                <div className="qunatity-div">
                  <div
                    className="symbol"
                    onClick={() => {
                      handleDel();
                    }}
                  >
                    -
                  </div>
                  <div className="h3">
                    {quantity - 1 == 0 ? 1 : quantity - 1}
                  </div>
                  <div
                    className="symbol"
                    onClick={() => {
                      handleAdd();
                    }}
                  >
                    +
                  </div>
                </div>
              ) : (
                ""
              )}
              <button
                onClick={() => {
                  if (productExists) {
                    setQuantity(1);
                    deleteFromCart(selectedData);
                  } else {
                    addToCart(selectedData, quantity);
                    cartExits();
                  }
                }}
              >
                {productExists ? "delete from cart " : "add to cart"}
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
