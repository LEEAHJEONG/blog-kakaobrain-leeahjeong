import React, { useEffect, useRef } from "react";
import "../css/header.css";

const Header = () => {
  // js 코딩자리~~
  const header = useRef(null);

  // JSX element 렌더링 완료시
  useEffect(() => {
    // js 소스 자리~~
    // const header = document.querySelector(".header");
    const headerActiveClass = "line-active";

    const headerActiveValue = 0;

    function showLine(_html, _tgY, _active, _scY) {
      if (_scY > _tgY) {
        _html.classList.add(_active);
      } else {
        _html.classList.remove(_active);
      }
    }

    showLine(
      header.current,
      headerActiveValue,
      headerActiveClass,
      window.scrollY
    );

    window.addEventListener("scroll", function () {
      showLine(
        header.current,
        headerActiveValue,
        headerActiveClass,
        window.scrollY
      );
    });

    return () => {
      window.removeEventListener("scroll", function () {
        showLine(
          header.current,
          headerActiveValue,
          headerActiveClass,
          window.scrollY
        );
      });
    };
  }, []);

  // JSON 연동시
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <header className="header" ref={header}>
      <div className="inner">
        <div className="header-logo">
          <a href="index.html" className="header-logo-link">
            <img
              src="../images/etc/logo-kakao.png"
              alt="카카오브레인 블로그"
              className="header-logo-img"
            />

            <div className="header-logo-slide" id="logo-slide">
              <div className="swiper swlogo">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog01.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog02.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog03.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog04.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog05.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog06.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog07.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog08.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog09.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <nav className="header-navi">
          <ul className="navi-list">
            <li>
              <a href="#">소식</a>
            </li>
            <li>
              <a href="#">팀&크루</a>
            </li>
            <li>
              <a href="#">영입</a>
            </li>
            <li className="navi-search">
              <a href="#"></a>
            </li>
            <li className="mobile-menu">
              <a href="#"></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
