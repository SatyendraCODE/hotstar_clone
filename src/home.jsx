import React, { Suspense, useEffect, useState } from "react";
import Carousel from "./compo/Carousel";

const Slider = React.lazy(() => import('./compo/SliderCompo/Slider'));

const Home = () => {
  const [sliderScriptLoaded, setSliderScriptLoaded] = useState(true);
  useEffect(() => {
    if(sliderScriptLoaded){
      setSliderScriptLoaded(false);
      const script = document.createElement("script");
      script.src = "./slider.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [sliderScriptLoaded]);
  return (
    <>
      <Carousel />
      <Slider title="Star Bharat show" />
      <Suspense fallback={<div className="fallback-lazy-slider-home"><i class="fas fa-arrows-rotate"></i></div>}>
        <Slider title="Star Bharat show 0" />
      </Suspense>
      <Suspense fallback={<div className="fallback-lazy-slider-home"><i class="fas fa-arrows-rotate"></i></div>}>
        <Slider title="Star Bharat show 1" />
      </Suspense>
      <Suspense fallback={<div className="fallback-lazy-slider-home"><i class="fas fa-arrows-rotate"></i></div>}>
        <Slider title="Star Bharat show 2" />
      </Suspense>
      <Suspense fallback={<div className="fallback-lazy-slider-home"><i class="fas fa-arrows-rotate"></i></div>}>
        <Slider title="Star Bharat show 3" />
      </Suspense>
      <Suspense fallback={<div className="fallback-lazy-slider-home"><i class="fas fa-arrows-rotate"></i></div>}>
        <Slider title="Star Bharat show 4" />
      </Suspense>
      <Suspense fallback={<div className="fallback-lazy-slider-home"><i class="fas fa-arrows-rotate"></i></div>}>
        <Slider title="Star Bharat show 5" />
      </Suspense>
      <Suspense fallback={<div className="fallback-lazy-slider-home"><i class="fas fa-arrows-rotate"></i></div>}>
        <Slider title="Star Bharat show 6" />
      </Suspense>
    </>
  );
};

export default Home;
