const slider = document.querySelector(".image-comparison .slider");
const beforeImages = document.querySelector(".image-comparison .before-image");
const sliderLine = document.querySelector(".image-comparison .slider-line");
const sliderIcon = document.querySelector(".image-comparison .slider-icon");


slider.addEventListener("input", (e) => {
  let value = e.target.value + "%";
  beforeImages.style.width = value;
  sliderLine.style.left = value;
  sliderIcon.style.left = value;
     
  if (value >= 85 + "%" || value === "100%") {
    sliderBtn.style.opacity = 0;
    sliderBtn2.style.opacity = 100;
} else if (value <="30%" ) {
    sliderBtn.style.opacity = 100;
    sliderBtn2.style.opacity = 0;
}


});
const slider2 = document.querySelector(".image-comparison2 .slider2");
const beforeImages2 = document.querySelector(
  ".image-comparison2 .before-image2"
);
const sliderLine2 = document.querySelector(".image-comparison2 .slider-line2");
const sliderIcon2 = document.querySelector(".image-comparison2 .slider-icon2");

slider2.addEventListener("input", (e) => {
  let value = e.target.value + "%";
  beforeImages2.style.width = value;
  sliderLine2.style.left = value;
  sliderIcon2.style.left = value;
});
const slider3 = document.querySelector(".image-comparison3 .slider3");
const beforeImages3 = document.querySelector(".image-comparison3 .before-image3");
const sliderLine3 = document.querySelector(".image-comparison3 .slider-line3");
const sliderIcon3 = document.querySelector(".image-comparison3 .slider-icon3");

slider3.addEventListener("input", (e) => {
  let value = e.target.value + "%";
  beforeImages3.style.width = value;
  sliderLine3.style.left = value;
  sliderIcon3.style.left = value;

  if (value >= 85 + "%" || value === "100%") {
    sliderBtn.style.opacity = 0;
    
} else {
    sliderBtn.style.opacity = 100;
}

if (value >="85%"){
  sliderBtn.style.opacity=0
}

});
const slider4 = document.querySelector(".image-comparison4 .slider4");
const beforeImages4 = document.querySelector(
  ".image-comparison4 .before-image4"
);
const sliderLine4 = document.querySelector(".image-comparison4 .slider-line4");
const sliderIcon4 = document.querySelector(".image-comparison4 .slider-icon4");

slider4.addEventListener("input", (e) => {
  let value = e.target.value + "%";
  beforeImages4.style.width = value;
  sliderLine4.style.left = value;
  sliderIcon4.style.left = value;
});
const slider5 = document.querySelector(".image-comparison5 .slider5");
const beforeImages5 = document.querySelector(
  ".image-comparison5 .before-image5"
);
const sliderLine5 = document.querySelector(".image-comparison5 .slider-line5");
const sliderIcon5 = document.querySelector(".image-comparison5 .slider-icon5");

slider5.addEventListener("input", (e) => {
  let value = e.target.value + "%";
  beforeImages5.style.width = value;
  sliderLine5.style.left = value;
  sliderIcon5.style.left = value;
});
const slider6 = document.querySelector(".image-comparison6 .slider6");
const beforeImages6 = document.querySelector(
  ".image-comparison6 .before-image6"
);
const sliderLine6 = document.querySelector(".image-comparison6 .slider-line6");
const sliderIcon6 = document.querySelector(".image-comparison6 .slider-icon6");

slider6.addEventListener("input", (e) => {
  let value = e.target.value + "%";
  beforeImages6.style.width = value;
  sliderLine6.style.left = value;
  sliderIcon6.style.left = value;
});



// scrollDelay
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let slide =document.querySelector('.slide')

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
  slide++;
});
prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});