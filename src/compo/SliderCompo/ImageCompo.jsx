import React from "react";
import { Link } from "react-router-dom";

const ImageCompo = (props) => {
  return (
    <div className={`slider__item ${props.classN}`}>
      <Link to="/" className="imgLink">
        <img src={props.ImgSrc} alt="" width="100%" />
        <div className="cardInfoContainer">
          <h3>{props.title}</h3>
          <p className="category">{props.category}</p>
          <p className="description">{props.discription}</p>
          <div>
            <button>+ Add to wishlist</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ImageCompo;
