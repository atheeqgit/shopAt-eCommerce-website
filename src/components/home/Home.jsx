import React from "react";
import { Banner, Picks, Featured } from "../sections";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Picks />
      <Featured />
    </div>
  );
};

export default Home;
