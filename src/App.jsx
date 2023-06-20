import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Home, Footer, Shop } from "./components/index";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<h1>not available</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
