import React, { useEffect } from "react";
import { Banner, Picks, Featured } from "../sections";
import "./home.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <Banner />
      <Picks />
      <Featured />
    </div>
  );
};

export default Home;
