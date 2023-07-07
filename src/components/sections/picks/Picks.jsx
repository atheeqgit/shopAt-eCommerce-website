import React from "react";
import "./picks.css";
import { BsArrowRightShort } from "react-icons/bs";
import { picksData } from "../../../data/data";
import { useNavigate } from "react-router-dom";

const Picks = () => {
  const navigate = useNavigate();
  return (
    <div className="picks-div">
      <div className="title">picks for you</div>
      <div className="picks">
        {picksData.map((data, index) => {
          return (
            <div
              key={index}
              className="pick"
              style={{
                backgroundImage: `url(/${data.src})`,
              }}
            >
              <div className="overlay">
                <button onClick={() => navigate("/shop")}>
                  shop {data.title} <BsArrowRightShort size={30} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Picks;
