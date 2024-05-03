window.addEventListener("load", function () {
  // 함수로 만들어보자 (코드가 너무 길고 복잡해서)
  // 호이스팅을 방지하고자 위쪽에서 만들자.

  // html에 내용 출력하기
  const makeHtml = (_result) => {
    let allTag = "";
    const crew = document.querySelector("#crew");
    // 최적화를 위해 한번만 찾으러~
    const total = _result.length;

    // for (let i = 0; i < total; i++) {
    //   const obj = _result[i];
    // const tag = `<a href="${obj.link}" className="list-box">
    //   <div
    //     className="list-box-img br-20"
    //     style="
    //       background: url('./images/${obj.imgpath}') no-repeat center;
    //       background-size: cover;
    //     "
    //   ></div>
    //   <div className="list-box-cate">
    //     <img
    //       src="./images/icon/${obj.icon}"
    //       alt="${obj.category}"
    //     />
    //     <span style="color:${obj.txtcolor};">${obj.category}</span>
    //   </div>
    //   <p className="list-box-title">
    //   ${obj.title}
    //   </p>
    //   <span className="list-box-day">${obj.day}</span>
    // </a>`;
    // allTag += tag;
    // }

    // 추천방법(조건은 대상이 배열인 경우)
    // _result.foreach((요소,번호,원본)=>{})
    _result.forEach((item) => {
      const tag = `<a href="${item.link}" class="list-box">
        <div
          class="list-box-img br-20"
          style="
            background: url('./images/${item.imgpath}') no-repeat center;
            background-size: cover;
          "
        ></div>
        <div class="list-box-cate">
          <img
            src="./images/icon/${item.icon}"
            alt="${item.category}"
          />
          <span style="color:${item.txtcolor};">${item.category}</span>
        </div>
        <p class="list-box-title">
        ${item.title}
        </p>
        <span class="list-box-day">${item.day}</span>
      </a>`;
      allTag += tag;
    });

    crew.innerHTML = allTag;
  };

  const dataUrl = "./apis/crew.json";
  fetch(dataUrl)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((result) => {
      makeHtml(result);
    })
    .catch((error) => {});
});
