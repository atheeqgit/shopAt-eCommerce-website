import React from "react";
import { Banner, Picks } from "../sections";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Picks />
    </div>
  );
};

export default Home;
