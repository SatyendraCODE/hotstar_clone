import React, { Suspense, useEffect, useLayoutEffect, useState } from "react";

import "./slider.css";
// import Lat_tran_slider from "./Latest_tranding_slider";
import Slider_crousol from "./Slider_crousol";

const Lat_tran_slider = React.lazy(() => import("./Latest_tranding_slider"));
const Pop_shows_slider = React.lazy(() => import("./Popular_shows_slider"));
const Pop_movies_slider = React.lazy(() => import("./Popular_movies_slider"));

const LazyLoaderCompo = () => {
  return (
    <div className="fallback-lazy-slider-home">
      <i className="fas fa-arrows-rotate"></i>
    </div>
  );
};

const Index = () => {
  return (
    <>
      <Suspense fallback={<LazyLoaderCompo />}>
        <Lat_tran_slider title="Latest & Tranding" />
      </Suspense>
      <Suspense fallback={<LazyLoaderCompo />}>
        <Pop_shows_slider title="Popular Shows" />
      </Suspense>
      <Suspense fallback={<LazyLoaderCompo />}>
        <Pop_movies_slider title="Popular Movies" />
      </Suspense>
    </>
  );
};

export default Index;
