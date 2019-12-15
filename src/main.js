const indicators = document.querySelectorAll(".indicator button");
const lightbox = document.querySelector("#lightbox");
const block = document.querySelector("#block");
const images = document.querySelectorAll(".images");
const thumbs = document.querySelectorAll(".thumbs");
const description = lightbox.querySelector(".description");
const btnClose = document.querySelector(".btnClose");

// 그림내용설명
const descriptions = {
  1: "부인곰과 애기곰이 가난한 아빠곰을 무시하자 아빠곰은 가출을 시작한다. 배고품을 느끼며 헤메는 곰은...",
  2: "고생을 하면서도 자유에 대한 갈망으로 버텨가면서 길을 걷는다",
  3: "결국은 자유를 찾아서 행복하게 초원을 걷게된 아빠곰은 오래오래 행복하게 살았습니다."
};

//indicators 선택시 그림 및 설명 변경
function change_img(num) {
  images.forEach(image => image.classList.remove("active"));
  images[num - 1].classList.add("active");
  description.innerHTML = descriptions[num];
}

//작은그림 선택시 라이트 박스 선택
function lightbox_open(e) {
  const num = e.target.alt;
  lightbox.classList.add("active");
  block.classList.add("active");
  change_img(num);
  indicators[num - 1].focus();
  description.innerHTML = descriptions[num];
}

//라이트박스 닫을때
function lightbox_close(num) {
  lightbox.classList.remove("active");
  block.classList.remove("active");
}

thumbs.forEach(thumb => thumb.addEventListener("click", lightbox_open));
indicators.forEach(indicator =>
  indicator.addEventListener("click", event =>
    change_img(event.target.innerText)
  )
);
btnClose.addEventListener("click", lightbox_close);
