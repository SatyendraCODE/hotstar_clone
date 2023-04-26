import React, { useState } from "react";
import Carousel from "../compo/Carousel";
import Sliders from "../compo/SliderCompo/index"
import SubscribeMobileView from "../compo/SubscribeMobileView";

const Home = () => {
  
  return (
    <>
    <div className="container-xxl">
      <SubscribeMobileView />
      <Carousel />
      <Sliders/>
    </div>
      {/* <Normal_slider title={"old slider"}/> */}
    </>
  );
};

export default Home;
