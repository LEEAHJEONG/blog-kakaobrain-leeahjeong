import React from "react";
import "../css/mainbottom.css";

const MainBottom = () => {
  return (
    <div className="main-bottom">
      <div className="main-bottom-list">
        <div className="main-bottom-list-news">
          <h2>NEW. 따끈따끈 새로 나온 글 🔥</h2>
          <div className="list-wrap" id="news"></div>
        </div>

        <div className="main-bottom-list-banner br-20">
          <a href="#" className="list-banner-link"></a>
        </div>

        <div className="main-bottom-list-picks">
          <h2>Editor’s Pick 🏃🏻‍♀️🏃‍♂️🏃🏽</h2>
          <div className="list-wrap" id="crew"></div>
          <div className="bt-wrap">
            <a href="#" className="bt-more">
              더보기
            </a>
          </div>
        </div>
      </div>
      <div className="main-bottom-cards">
        <h2>폴더 📁</h2>
        <div className="main-bottom-cards-slide">
          <div className="swiper cardslide">
            <div className="swiper-wrapper"></div>
          </div>
        </div>
        <div className="bt-wrap">
          <a href="#" className="bt-more">
            전체보기
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainBottom;
