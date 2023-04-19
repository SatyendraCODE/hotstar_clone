import React, { Component } from "react";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Latest_Tranding } from "../../database/db.jsx";
import {responsive} from './Responsive.js'
import { CustomRightArrow, CustomLeftArrow } from "./arrows/Arrow.jsx"

const ImageCompo = React.lazy(() => import("./ImageCompo_test.jsx"));

const Latest_tranding_slider = ({ title }) => {

  return (
    <div className="slider">
      <Link to="#" className="ms-5 title-slider">
        {title}
      </Link>
      <Carousel responsive={responsive}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      className="padding-carousel-slider"
      >
        {Latest_Tranding.map((key, index) => {
          return (
            <Suspense
              key={index}
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <div
                className="m-1"
                style={{ "z-index": "-10", position: "relative" }}
              >
                <ImageCompo
                  path={`/${key.type}/${key.id}`}
                  ImgSrc={key.imgSrc}
                  title={key.Title}
                  category={key.category}
                  discription={key.discription}
                  className={""}
                />
              </div>
            </Suspense>
          );
        })}
        
      </Carousel>
    </div>
  );
};

export default Latest_tranding_slider;
