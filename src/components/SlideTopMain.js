import { useEffect, useRef } from "react";

const SlideTopMain = () => {
  // hook 자리
  const whereTag = useRef(null);
  const slideArea = useRef(null);

  // js 코드 자리
  useEffect(() => {
    // BE 와 협업을 위해 데모 데이터를 불러들임.
    // 샘플데이터 :  더미 데이터, 페이크 데이터, 목업 데이터

    const dataUrl = "./apis/topslide.json";
    fetch(dataUrl)
      .then(response => {
        const data = response.json();
        // 제대로 자료 가져오는지 확인 필요.
        // console 활용 / Network 탭도 활용(fetch/XHR)
        return data;
      })
      .then(result => {
        console.log(result);
        // json 즉 javaScript Object Notaion 자료를 활용
        let slideTags = "";

        // 혹시 배열.foreach 가능할까요? 개선
        // for (let i = 0; i < result.length; i++) {
        //   // 객체 리터럴 {}
        //   const data = result[i];
        //   // 객체 의 속성을 이용해서 html 글자만들기
        //   const test = `<div class="swiper-slide">
        //     <a href="${data.url}" style="background:url('./images/${data.pic}') no-repeat center; background-size: cover;">
        //         <p class="slide-title">
        //         ${data.title}
        //         </p>
        //     </a>
        //  </div>`;
        //   // 문자열을 모아둠
        //   slideTags = slideTags + test;
        // }
        // 배열이면 추천!
        // 배열이라면 항상 모양이 똑같다
        // 배열.foreach((item, index, arr)=>{})
        // item: 해당하는 배열 번호(인덱스의 내용물)
        // index: 순서번호
        // arr: 원본배열인데 생략하는게 일반적
        result.forEach((item, index, arr) => {
          // 할일
          const test = `<div class="swiper-slide">
                <a href="${item.url}" style="background:url('./images/${item.pic}') no-repeat center; background-size: cover;">
                    <p class="slide-title">
                    ${item.title}
                    </p>
                </a>
             </div>`;
          // 문자열을 모아둠
          slideTags = slideTags + test;
        });

        // console.log(slideTags);

        // const whereTag = document.querySelector(".topslide .swiper-wrapper");
        whereTag.current.innerHTML = slideTags;
        const topSlide = new Swiper(".topslide", {
          loop: true,
          speed: 800,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });

        // const slideArea = document.querySelector(".topslide");
        slideArea.current.addEventListener("mouseenter", function () {
          topSlide.autoplay.stop();
        });
        slideArea.current.addEventListener("mouseleave", function () {
          topSlide.autoplay.start();
        });
      })
      .catch(error => {
        console.log(error);
      });

    // cleanUp 함수
    return () => {};
  }, []);

  return (
    <div className="main-top-slide br-20">
      <div className="swiper topslide" ref={slideArea}>
        <div className="swiper-wrapper" ref={whereTag}></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SlideTopMain;
