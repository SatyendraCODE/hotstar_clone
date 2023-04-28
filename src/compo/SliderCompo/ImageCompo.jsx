import React from "react";
import { useNavigate } from "react-router-dom";

const ImageCompo = ({className, path, imgSrc, title, category, discription}) => {
  const navigate = useNavigate()
  
  return (
      <div onClick={()=>navigate(path)} className={`imgLink ${className}`}>
        <img src={imgSrc} alt="Error" width="100%" />
        <div className="cardInfoContainer pb-2">
          <h3>{title}</h3>
          <p className="category">{`${category[0]}, ${category[1]}`}</p>
          <p className="description">{discription}</p>
          {/* <div>
            <button style={{zIndex: 200}} onClick={(e) => {e.stopPropagation();console.log("btn called")}}>+ Add to wishlist</button>
          </div> */}
        </div>
      </div>
  );
};

export default ImageCompo;
