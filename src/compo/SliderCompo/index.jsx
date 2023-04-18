import React, { Suspense, useEffect, useLayoutEffect, useState } from "react";

import "./slider.css";
// import Lat_tran_slider from "./Latest_tranding_slider";

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
  const [sliderScriptLoaded, setSliderScriptLoaded] = useState(true);
  useEffect(() => {
    if (sliderScriptLoaded) {
      setSliderScriptLoaded(false);
      const script = document.createElement("script");
      script.src = "./slider.js";
      script.id = "slider";
      script.async = true;
      if(!document.getElementById('slider')){
        console.log("slider script loaded");
        document.body.appendChild(script);
      }
      else{
        console.log("slider script not loaded");
      }
    }
  }, [sliderScriptLoaded]);

  return (
    <>
      <Lat_tran_slider title="Latest & Tranding" />
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
