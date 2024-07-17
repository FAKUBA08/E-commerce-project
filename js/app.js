const countDownDate = new Date("JULY 30, 2024 15:37:25").getTime();

const x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    days +"d :  "     +hours + "h : "   +   minutes + "m : "   + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
const y= setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("count").innerHTML =
  days +"d :  "     +hours + "h : "   +   minutes + "m : "   + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


// Swiper initialization
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

// ScrollReveal animations
ScrollReveal().reveal(".top_nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
});
ScrollReveal().reveal(".nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 100,
});
ScrollReveal().reveal(".header", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 200,
});
ScrollReveal().reveal(".section", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});
ScrollReveal().reveal(".footer", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});
ScrollReveal().reveal(".secCategory", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 100,
  delay: 100,
});
ScrollReveal().reveal(".product", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});

// Mobile nav toggle
const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile_nav_hide");
});
let newLetter=document.querySelector('.newLetter')
let cancelNew=document.querySelector('.cancelNew')

const set=setInterval(() => {
  document.querySelector('.newLetter').style.display='block'
}, 50000);
cancelNew.addEventListener('click',function(){
    document.querySelector('.newLetter').style.display='none'
})


let accountUser= document.getElementById('accountUser')
const  nav = document.querySelector(".detailsSeen");
accountUser.addEventListener('click',function(){
  nav.classList.toggle("details_User");
  // detailsSeen.style.display="block"
})

var fullImageView = document.getElementById("fullImageView");

var img = document.getElementById("profileImg");
var fullImage = document.getElementById("fullImage");

img.onclick = function() {
  fullImageView.style.display = "block";
  fullImage.src = this.src;
}

var closeBtn = document.getElementsByClassName("close-btn")[0];

closeBtn.onclick = function() { 
  fullImageView.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == fullImageView) {
    fullImageView.style.display = "none";
  }
}
