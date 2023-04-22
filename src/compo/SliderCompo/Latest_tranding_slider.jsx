import React, { Component } from "react";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Latest_Tranding } from "../../database/db.jsx";
import { responsive } from "./Responsive.js";
import { CustomRightArrow, CustomLeftArrow } from "./arrows/Arrow.jsx";

const ImageCompo = React.lazy(() => import("./ImageCompo.jsx"));

const Latest_tranding_slider = ({ title }) => {
  let isSliderVisited = true;

  const handleHoverAnimation = (e) => {
    let ListEle = e.currentTarget.parentElement;
    let UlParentEle = ListEle.parentElement.parentElement;
    let LeftOfListEleOffset = ListEle.offsetLeft;

    let ListEleLeftCordi = ListEle.getBoundingClientRect().left;
    let UlParentEleLeftLength = UlParentEle.getBoundingClientRect().right;


    let ListEleRightLength =
      window.innerWidth - ListEle.getBoundingClientRect().right;
    let UlParentEleRightLength =
      10 +
      (window.innerWidth -
        UlParentEle.getBoundingClientRect().right);

    console.log(UlParentEleRightLength);
    console.log(ListEleRightLength);

    if (LeftOfListEleOffset === 0) {
      e.currentTarget.parentElement.classList.add("hoverRight-slider");
      console.log("class added to Left side slider item");
    }

    if (window.innerWidth <= 1400) {
      if (ListEleRightLength < 50) {
        e.currentTarget.parentElement.classList.add("hoverLeft-slider");
        console.log("class added to right side slider item");
      }
    } else if (LeftOfListEleOffset >= 1134) {
      if (UlParentEleRightLength > ListEleRightLength) {
        e.currentTarget.parentElement.classList.add("hoverLeft-slider");
        console.log("class added to right side slider item");
      }
      else{
        console.log("width",window.innerWidth)
        e.currentTarget.parentElement.classList.add("hover-slider");
        console.log("class added to normal slider item");
        }
    }
    else{
      if (LeftOfListEleOffset === 0) {
        e.currentTarget.parentElement.classList.add("hoverRight-slider");
        console.log("class added to Left side slider item");
      }
      else{
      console.log("width",window.innerWidth)
      e.currentTarget.parentElement.classList.add("hover-slider");
      console.log("class added to normal slider item");
      }
    }
  };

  return (
    <div className="slider">
      <Link to="#" className="ms-5 title-slider">
        {title}
      </Link>
      <Carousel
        responsive={responsive}
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
                onMouseEnter={(e) => {
                  console.log("on enter");
                  isSliderVisited = false;
                  handleHoverAnimation(e);
                }}
                onMouseLeave={(e) => {
                  console.log("on Leave");
                  let a = e.currentTarget.parentElement.classList;
                  // e.currentTarget.parentElement.style.zIndex=10;
                  isSliderVisited = true;
                  // e.currentTarget.firstElementChild.classList.remove("hoverLeft-slider");
                  // e.currentTarget.firstElementChild.classList.remove("hover-slider");
                  setTimeout(()=>{
                    if(isSliderVisited){
                    a.remove("hoverLeft-slider");
                    a.remove("hoverRight-slider");
                    a.remove("hover-slider");
                    }
                  }, 1000)
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
