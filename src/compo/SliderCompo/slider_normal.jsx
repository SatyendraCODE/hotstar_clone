import React, { useEffect, useState } from 'react';
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { series } from "../../database/db.jsx"

const ImageCompo = React.lazy(() => import("./ImageCompo"));

const Slider_normal = ({title}) => {

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
            className="slider__container"
            data-multislide="true"
            data-step="5"
          >
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                className="ms-5"
                path="/series/gumhekisikepyarme"
                ImgSrc="./img/serials/gumhe.jpg"
                title={series[0].name}
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="./img/serials/asikan.jpg"
                title="Aashiqana S3"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="./img/serials/ispyaarko.jpg"
                title="is pyaar ko kya naam du?"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="./img/serials/yehhemoho.jpg"
                title="Ye he mohobaat"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="./img/serials/rjjo.jpg"
                title="Rjjo"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="./img/serials/yehjaduhe.jpg"
                title="Yeh jadu he jin ka !"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="./img/serials/ispyaar_firse.jpg"
                title="is pyaar ko kiya naam du?...ek baar fir"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="./img/serials/terimeridori.jpg"
                title="Teri meri duriya"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="./img/serials/anupma.jpg"
                title="Anupma"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="./img/serials/yehristakiya.jpg"
                title="Yeh rista kiya khelata he"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="./img/serials/imli.jpg"
                title="Imli"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="./img/serials/aaikuthe.jpg"
                title="aai kuthe kiya krte!"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="./img/serials/chasni.jpg"
                title="Chasni"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="./img/serials/dharedhare.jpg"
                title="Dhire dhire se"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="./img/serials/faltu.jpg"
                title="Faltu"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="./img/serials/mahabharat.jpg"
                title="Mahabharat"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
            <Suspense
              fallback={
                <div className="img-fallback-lazy-slider-home">
                  <i className="fas fa-arrows-rotate"></i>
                </div>
              }
            >
              <ImageCompo
                ImgSrc="./img/serials/mhadev.jpg"
                title="Devo ke dev Mhadev"
                category="drama, serial"
                discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
            </Suspense>
          </div>
        </section>
      </>
    );
};

export default Slider_normal;