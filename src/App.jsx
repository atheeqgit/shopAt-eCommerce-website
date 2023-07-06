import { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Home, Footer, Shop, Selected } from "./components/index";
import "./App.css";
import Context from "./context.js";

function App() {
  const [cartData, setCartData] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (data, quantity, setQuantity) => {
    const isProductExists = cartData.find((item) => item.id === data.id);

    if (isProductExists) {
      setCartData(
        cartData.map((item) => {
          if (item.id === data.id) {
            return {
              ...item,
              quantity: +quantity,
              // priceTot: +item.price * (Number(item.quantity) + +quantity),
            };
          } else {
            return {
              ...item,
            };
          }
        })
      );
    } else {
      setCartData([
        ...cartData,
        {
          id: data.id,
          title: data.title,
          quantity: quantity,
          thumbnail: data.thumbnail,
          price: +data.price,
          // priceTot: +data.price * quantity,
        },
      ]);
    }
  };
  const deleteFromCart = (data) => {
    const isProductExists = cartData.find((item) => item.id === data.id);
    if (isProductExists) {
      if (data.quantity > 1) {
        setCartData(
          cartData.map((item) => {
            if (item.id === data.id) {
              return {
                ...item,
                quantity: Number(item.quantity) - 1,
              };
            } else {
              return {
                ...item,
              };
            }
          })
        );
      } else {
        setCartData(
          cartData.filter((item) => {
            if (item.id !== data.id) {
              return { ...item };
            }
          })
        );
      }
    }
  };

  return (
    <div className="app">
      <Context.Provider
        value={{
          addToCart,
          setCartData,
          cartData,
          deleteFromCart,
          cartOpen,
          setCartOpen,
          // setQuantity,
          // quantity,
        }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Selected />} />
            <Route path="*" element={<h1>not available</h1>} />
          </Routes>
          <Footer />
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
