import React, { useLayoutEffect } from "react";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./Responsive.js";
import { CustomRightArrow, CustomLeftArrow } from "./arrows/Arrow.jsx";
import { handleHoverAnimation } from "./HandleHoverAnimation.js";
import { useState } from "react";
import httpCommon from "../../database/http-common.jsx";
import { Movies } from "../../database/Type.js";
const ImageCompo = React.lazy(() => import("./ImageCompo.jsx"));

const Popular_movies_slider = ({ title }) => {
  const [data, setData] = useState([]);
  let isSliderVisited = true;

  useLayoutEffect(() => {
    fetchDataFromApi();
  }, []);
  const fetchDataFromApi = () => {
    httpCommon
      .get(Movies)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="slider">
      <Link to="#" className="ms-2 title-slider">
        {title}
      </Link>
      <Carousel
        responsive={responsive}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        className="padding-carousel-slider"
      >
        {data.map((key, index) => {
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
                  isSliderVisited = false;
                  handleHoverAnimation(e);
                }}
                onMouseLeave={(e) => {
                  let a = e.currentTarget.parentElement.classList;
                  // e.currentTarget.parentElement.style.zIndex=10;
                  isSliderVisited = true;
                  // e.currentTarget.firstElementChild.classList.remove("hoverLeft-slider");
                  // e.currentTarget.firstElementChild.classList.remove("hover-slider");
                  setTimeout(() => {
                    if (isSliderVisited) {
                      a.remove("hoverLeft-slider");
                      a.remove("hoverRight-slider");
                      a.remove("hover-slider");
                    }
                  }, 600);
                }}
              >
                <ImageCompo
                  path={`/${key.type}/${key.id}`}
                  imgSrc={key.imgSrc}
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

export default Popular_movies_slider;
