import React from "react";
import { Link } from "react-router-dom";

const ImageCompo = ({className, path, ImgSrc, title, category, discription}) => {
  return (
      <Link to={path} className={`imgLink ${className}`}>
        <img src={ImgSrc} alt="" width="100%" />
        <div className="cardInfoContainer">
          <h3>{title}</h3>
          <p className="category">{category}</p>
          <p className="description">{discription}</p>
          <div>
            <button>+ Add to wishlist</button>
          </div>
        </div>
      </Link>
  );
};

export default ImageCompo;
