import React, { useState } from "react";
import Carousel from "../compo/Carousel";
import Sliders from "../compo/SliderCompo/index"

const Home = () => {
  
  return (
    <>
    <div className="container">
      <Carousel />
      <Sliders/>
    </div>
      {/* <Normal_slider title={"old slider"}/> */}
    </>
  );
};

export default Home;
