window.addEventListener('scroll',reveals)
function reveals(){
var reveals = document.querySelectorAll('.reveals');
for(var i=0;i<reveals.length;i++){
var windowheight=window.innerHeight;
var revealTop=reveals[i].getBoundingClientRect().top;
var revealPoint=150;
if(revealTop<windowheight-revealPoint){
reveals[i].classList.add('active');
}
else{
reveals[i].classList.remove('active');
}
}
}


const sliderBtn = document.querySelector(".service-button");
const sliderBtn2 = document.querySelector(".service-button2");
if (value >= 85 + "%" || value === "100%") {
    sliderBtn.style.opacity = 0;
    sliderBtn2.style.opacity = 100;
} else if (value <="30%" ) {
    sliderBtn.style.opacity = 100;
    sliderBtn2.style.opacity = 0;
}

// slider
