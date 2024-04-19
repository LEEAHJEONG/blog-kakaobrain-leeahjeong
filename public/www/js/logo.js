/*
 상단 로고 기능
 처음에는 로고가 기본 그림
 사용자가 마우스 오버를 하면 로고가 부드럽게 변경됨
 사용자가 마우스 아웃을 하면 로고가 기본그림으로 보인다.

 위의 기능을 구현하기 위해서 Swiper 라이브러리를 사용할 예정임.
 이유는 React 로 마이그레이션 할 거니까~~
     라이브러리를 사용하려면 레퍼런스를 참조해야 한다.
        (https://swiperjs.com/) 
    
 */
// 자바스크립트에서 **html 태그를 참조**해야 하는 경우라면
// 1. html 태그 제일 뒷쪽에서 참조한다. (비추천)
// 2. window.onload = function() { 코드 } (비추천)
// 3. window.addEventListener("load", function() { 코드 }) (적극추천!!)

// 아래 구문은 html 태그, css 파일, image 파일, js 파일, ..등 이 로드완료 시 실행
window.addEventListener("load", function () {
  // document = html 문서
  const swLogo = document.querySelector(".swlogo");

  const logoSlide = new Swiper(".swlogo", {
    effect: "fade",
    speed: 100,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
  });

  // 무조건 모션이 재생되면 안됨.
  logoSlide.autoplay.stop();

  // .header-logo-link 클래스에 마우스 오버하면 lgooslide 가 모션 재생
  const headerLogoLink = document.querySelector(".header-logo-link");

  headerLogoLink.addEventListener("mouseenter", function () {
    logoSlide.autoplay.start();
  });
  headerLogoLink.addEventListener("mouseleave", function () {
    logoSlide.autoplay.stop();
    logoSlide.slideTo(0);
  });
});
