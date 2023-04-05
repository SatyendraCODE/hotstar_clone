import React, { useEffect } from "react";
import Slider from "./compo/Slider";
import Carousel from "./compo/Carousel";

const Home = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./slider.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <Carousel />
      <Slider title="Star Bharat show" />
      <Slider title="Star Bharat show 1"/>
      <Slider title="Star Bharat show 2"/>
      <Slider title="Star Bharat show 3"/>
      <Slider title="Star Bharat show 4"/>
      <Slider title="Star Bharat show 5"/>
      <Slider title="Star Bharat show 6"/>
    </>
  );
};

export default Home;
