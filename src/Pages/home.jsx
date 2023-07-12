import React from "react";
import Carousel from "../compo/Carousel";
import Sliders from "../compo/SliderCompo/index";
import SubscribeMobileView from "../compo/SubscribeMobileView";

const Home = () => {
  return (
    <>
      <div className="container-xxl">
        <SubscribeMobileView />
        <Carousel />
        <Sliders />
      </div>
    </>
  );
};

export default Home;
