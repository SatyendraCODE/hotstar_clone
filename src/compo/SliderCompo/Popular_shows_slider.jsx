import React, { Component } from "react";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Shows } from "../../database/db.jsx"

const ImageCompo = React.lazy(() => import("./ImageCompo"));

const Popular_shows_slider = ({title}) => {
    return (
      <>
        <section className="slider">
          <div className="bg-slider prevBg"></div>
          <button className="slider__control prev">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div className="bg-slider"></div>
          <button className="slider__control next">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <Link to="#" className="ms-5 title-slider">
            {title}
          </Link>

          <div
          className="slider__container ps-5"
          data-multislide="true"
          data-step="5"
        >
          {Shows.map((key, index) => {
            return (
              <Suspense
                key={index}
                fallback={
                  <div className="img-fallback-lazy-slider-home">
                    <i className="fas fa-arrows-rotate"></i>
                  </div>
                }
              >
                <ImageCompo
                  path={`/${key.type}/${key.id}`}
                  ImgSrc={key.imgSrc}
                  title={key.Title}
                  category={key.category}
                  discription={key.discription}
                />
              </Suspense>
            );
          })}
        </div>
        </section>
      </>
    );
  }

export default Popular_shows_slider;