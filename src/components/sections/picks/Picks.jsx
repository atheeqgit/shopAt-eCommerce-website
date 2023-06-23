import React from "react";
import "./picks.css";
import { BsArrowRightShort } from "react-icons/bs";
import { picksData } from "../../../data/data";

const Picks = () => {
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
                backgroundImage: `url(/public/${data.src})`,
              }}
            >
              <div className="overlay">
                <button>
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
