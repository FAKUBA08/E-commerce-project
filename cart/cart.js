// Get the full image view
var fullImageView = document.getElementById("fullImageView");

// Get the image and insert it inside the full image view
var img = document.getElementById("profileImg");
var fullImage = document.getElementById("fullImage");

img.onclick = function() {
  fullImageView.style.display = "block";
  fullImage.src = this.src;
}

// Get the <span> element that closes the full image view
var closeBtn = document.getElementsByClassName("close-btn")[0];

// When the user clicks on <span> (x), close the full image view
closeBtn.onclick = function() { 
  fullImageView.style.display = "none";
}

// Optional: Close the full image view when the user clicks anywhere outside the content
window.onclick = function(event) {
  if (event.target == fullImageView) {
    fullImageView.style.display = "none";
  }
}
