import React from "react";
import { FaHeart } from "react-icons/fa";
function ParticularCard({ data }) {
  // console.log(data, "particular");
  return (
    <div>
      <div>
        <img src={data.image.url} alt=""></img>
      </div>
      <div>
        <button className="text-red-400">
          <FaHeart/>
        </button>
      </div>
      <div>
        <p>{data.title}</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default ParticularCard;
