import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Latest_Tranding } from "../../database/db.jsx";
import ImageCompo from "./ImageCompo_test.jsx";
import { Link } from "react-router-dom";

const Slider_crousol = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 8,
      slidesToSlide: 8 
    },
    desktop: {
      breakpoint: { max: 1200, min: 800 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <>
      <Carousel responsive={responsive} className="padding-carousel-slider">
        {Latest_Tranding.map((key, index) => {
          return (
            <div key={index} className="m-1" style={{"z-index": "-10", position: "relative"}}>
              <ImageCompo
                  path={`/${key.type}/${key.id}`}
                  ImgSrc={key.imgSrc}
                  title={key.Title}
                  category={key.category}
                  discription={key.discription}
                  className={""}
                />
            </div>
          );
        })}
      </Carousel>
      ;
    </>
  );
};

export default Slider_crousol;
