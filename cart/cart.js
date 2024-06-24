
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
