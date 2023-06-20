import React from "react";
import "./picks.css";
import { BsArrowRightShort } from "react-icons/bs";

const Picks = () => {
  const picksData = [
    {
      title: "men",
      src: "picksmen.jpeg",
    },
    {
      title: "women",
      src: "pickswomen2.png",
    },
    {
      title: "Mobile",
      src: "picksmobile2.jpeg",
    },
    {
      title: "jwellery",
      src: "picksjwellery.jpeg",
    },
  ];
  return (
    <div className="picks-div">
      <div className="title">picks for you</div>
      <div className="picks">
        {picksData.map((data) => {
          return (
            <div
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
