import React, { Component } from "react";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Latest_Tranding } from "../../database/db.jsx";
import {responsive} from './Responsive.js'
import { CustomRightArrow, CustomLeftArrow } from "./arrows/Arrow.jsx"

const ImageCompo = React.lazy(() => import("./ImageCompo.jsx"));

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
                style={{ zIndex: "-10", position: "relative" }} 
                onClick={(e)=>{
                  let ListEle =e.currentTarget.parentElement;
                  let LeftOfListEleOffset = ListEle.offsetLeft;
                  let LeftOfUlEle = ListEle.parentElement.offsetLeft;
                  var rt = window.innerWidth - ListEle.getBoundingClientRect().right;
                  console.log("right cordinate of list", ListEle.getBoundingClientRect().right);
                  // console.log("left cordinate of list", ListEle.getBoundingClientRect().left);
                  console.log("window innerLength", window.innerWidth);
                  console.log("calculation ",rt);
                  if(LeftOfListEleOffset === 0){
                    e.currentTarget.firstElementChild.classList.add("hoverRight-slider");
                    console.log("class added to Left side slider item");
                  }
                  if(rt <= 100){
                    e.currentTarget.firstElementChild.classList.add("hoverLeft-slider");
                    console.log("class added to right side slider item");
                  }
                }}               
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
