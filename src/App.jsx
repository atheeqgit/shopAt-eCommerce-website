import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Home, Footer, Shop, Selected } from "./components/index";
import "./App.css";
import Context from "./context.js";

function App() {
  const [cartData, setCartData] = useState([]);

  const addToCart = (data, quantity) => {
    setCartData([
      ...cartData,
      {
        id: data.id,
        title: data.title,
        quantity: quantity,
        thumbnail: data.thumbnail,
        price: data.price,
      },
    ]);
  };
  const deleteFromCart = (data) => {
    setCartData(
      cartData.filter((item) => {
        if (item.id !== data.id) {
          return { ...item };
        }
      })
    );
  };

  return (
    <div className="app">
      <Context.Provider
        value={{
          addToCart,
          setCartData,
          cartData,
          deleteFromCart,
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
