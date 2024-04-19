window.addEventListener("load", function () {
  const dataUrl = "./apis/crew.json";
  fetch(dataUrl)
    .then((response) => {
      console.log(response);
      const result = response.json();
      return result;
    })
    .then((result) => {
      let allTag = "";
      const crew = document.querySelector("#crew");
      for (let i = 0; i < result.length; i++) {
        const obj = result[i];
        const tag = `<a href="${obj.link}" class="list-box">
        <div
          class="list-box-img br-20"
          style="
            background: url('./images/${obj.imgpath}') no-repeat center;
            background-size: cover;
          "
        ></div>
        <div class="list-box-cate">
          <img
            src="./images/icon/${obj.icon}"
            alt="${obj.category}"
          />
          <span style="color:${obj.txtcolor};">${obj.category}</span>
        </div>
        <p class="list-box-title">
        ${obj.title}
        </p>
        <span class="list-box-day">${obj.day}</span>
      </a>`;
        allTag += tag;
        // console.log(allTag);
      }
      crew.innerHTML = allTag;
    })
    .catch((error) => {});
});
