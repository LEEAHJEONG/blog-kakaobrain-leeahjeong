import React from "react";
import "../css/maintop.css";

const MainTop = () => {
  return (
    <div className="main-top">
      <div className="main-top-slide br-20">
        <div className="swiper topslide">
          <div className="swiper-wrapper"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>

      <div className="main-top-banner br-20">
        <div className="swiper bannerslide">
          <div className="swiper-wrapper"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default MainTop;
