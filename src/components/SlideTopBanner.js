import React, { useEffect, useRef } from "react";

const SlideTopBanner = () => {
  const whereTag = useRef(null);

  useEffect(() => {
    const dataUrl = "./apis/banner.json";
    fetch(dataUrl)
      .then(respose => {
        const result = respose.json();
        return result;
      })
      .then(result => {
        let tagS = "";
        for (let i = 0; i < result.length; i++) {
          const obj = result[i];
          const temp = `<div class="swiper-slide">
              <a href="${obj.url}" style="background: url('./images/${obj.pic}') no-repeat center; background-size:cover;">
              <p class="slide-title">${obj.title}</p>
              </a>
          </div>`;
          tagS = tagS + temp;
        }
        // const whereTag = document.querySelector(".bannerslide .swiper-wrapper");
        whereTag.current.innerHTML = tagS;
        const bannerSlide = new Swiper(".bannerslide", {
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      })
      .catch(error => {
        console.log(error);
      });
    return () => {};
  }, []);

  return (
    <div className="main-top-banner br-20">
      <div className="swiper bannerslide">
        <div className="swiper-wrapper" ref={whereTag}></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SlideTopBanner;
