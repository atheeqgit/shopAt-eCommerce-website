import React from "react";
import "./picks.css";

const Picks = () => {
  const picksData = [
    "picksmen.jpeg",
    "pickswomen2.jpeg",
    "picksmobile2.jpeg",
    "picksjwellery.jpeg",
  ];
  return (
    <div className="picks-div">
      <div className="title">picks for you</div>
      <div className="picks">
        {picksData.forEach((src) => {
          return (
            <div
              className="pick"
              style={{
                backgroundImage: `url(../../../../public/${src})`,
              }}
            >
              <div className="overlay">picks</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Picks;
