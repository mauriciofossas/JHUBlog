//Full carousel slide taken
//from: https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_rr

var myIndex = 0;
carousel();

var dontShowOnHover = document.getElementsByClassName("dissapearOnHover");

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 6000);
}

//Styling and JS for on click slideshow taken from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("gallerySlide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//Functions and listeners for Photo:
function showPhoto() {
  var items = document.getElementsByClassName("showOnClick");
  items[0].style.display = "block";
  items[1].style.display = "table";
  items[2].style.display = "block";
  dontShowOnHover[0].style.display = "none";
  document.getElementById("PhotoInfo").classList.remove("col-4");
  document.getElementById("PhotoInfo").classList.add("col-10");
  document.getElementById("PhotoInfo").classList.add("styledBox");
  document.getElementById("PhotoInfo").classList.add("styledBox");
  document.getElementById("GDInfo").style.display = "none";
  document.getElementById("PhotoInfo").style.textAlign = "center";
}
function dontShowPhoto() {
  var items = document.getElementsByClassName("showOnClick");
  items[0].style.display = "none";
  items[1].style.display = "none";
  items[2].style.display = "none";
  dontShowOnHover[0].style.display = "block";
  document.getElementById("PhotoInfo").classList.remove("col-10");
  document.getElementById("PhotoInfo").classList.add("col-4");
  document.getElementById("GDInfo").style.display = "block";
  document.getElementById("PhotoInfo").classList.remove("styledBox");
  document.getElementById("PhotoInfo").style.textAlign = "unset";
}
document.getElementById("PhotoInfo").addEventListener("mouseover", showPhoto);
document
  .getElementById("PhotoInfo")
  .addEventListener("mouseout", dontShowPhoto);

//Functions and listeners for Graphic Design:
function showGD() {
  var items = document.getElementsByClassName("showOnClick");
  items[3].style.display = "block";
  items[4].style.display = "table";
  items[5].style.display = "block";
  dontShowOnHover[1].style.display = "none";
  document.getElementById("GDInfo").classList.remove("col-4");
  document.getElementById("GDInfo").classList.add("col-10");
  document.getElementById("PhotoInfo").style.display = "none";
  document.getElementById("GDInfo").classList.add("styledBox");
  document.getElementById("GDInfo").classList.add("styledBox");
  document.getElementById("GDInfo").style.textAlign = "center";
}
function dontShowGD() {
  var items = document.getElementsByClassName("showOnClick");
  items[3].style.display = "none";
  items[4].style.display = "none";
  items[5].style.display = "none";
  dontShowOnHover[1].style.display = "block";
  document.getElementById("GDInfo").classList.remove("col-10");
  document.getElementById("GDInfo").classList.add("col-4");
  document.getElementById("PhotoInfo").style.display = "block";
  document.getElementById("GDInfo").classList.remove("styledBox");
  document.getElementById("GDInfo").style.textAlign = "unset";
}
document.getElementById("GDInfo").addEventListener("mouseover", showGD);
document.getElementById("GDInfo").addEventListener("mouseout", dontShowGD);

//Functions and listeners for sculpture:
function showSculpture() {
  var items = document.getElementsByClassName("showOnClick");
  items[6].style.display = "block";
  items[7].style.display = "table";
  items[8].style.display = "block";
  dontShowOnHover[2].style.display = "none";
  document.getElementById("SculptureInfo").classList.remove("col-4");
  document.getElementById("PaintingInfo").style.display = "none";
  document.getElementById("SculptureInfo").classList.add("col-10");
  document.getElementById("SculptureInfo").classList.add("styledBox");
  document.getElementById("SculptureInfo").classList.add("styledBox");
  document.getElementById("SculptureInfo").style.textAlign = "center";
}
function dontShowSculpture() {
  var items = document.getElementsByClassName("showOnClick");
  items[6].style.display = "none";
  items[7].style.display = "none";
  items[8].style.display = "none";
  dontShowOnHover[2].style.display = "block";
  document.getElementById("SculptureInfo").classList.remove("col-10");
  document.getElementById("SculptureInfo").classList.add("col-4");
  document.getElementById("PaintingInfo").style.display = "block";
  document.getElementById("SculptureInfo").classList.remove("styledBox");
  document.getElementById("SculptureInfo").style.textAlign = "unset";
}
document
  .getElementById("SculptureInfo")
  .addEventListener("mouseover", showSculpture);
document
  .getElementById("SculptureInfo")
  .addEventListener("mouseout", dontShowSculpture);

//Functions and listeners for printmaking
function showPrint() {
  var items = document.getElementsByClassName("showOnClick");
  items[9].style.display = "block";
  items[10].style.display = "table";
  items[11].style.display = "block";
  dontShowOnHover[3].style.display = "none";
  document.getElementById("PaintingInfo").classList.remove("col-4");
  document.getElementById("PaintingInfo").classList.add("col-10");
  document.getElementById("SculptureInfo").style.display = "none";
  document.getElementById("PaintingInfo").classList.add("styledBox");
  document.getElementById("PaintingInfo").classList.add("styledBox");
  document.getElementById("PaintingInfo").style.textAlign = "center";
}
function dontshowPrint() {
  var items = document.getElementsByClassName("showOnClick");
  items[9].style.display = "none";
  items[10].style.display = "none";
  items[11].style.display = "none";
  dontShowOnHover[3].style.display = "block";
  document.getElementById("PaintingInfo").classList.remove("col-10");
  document.getElementById("PaintingInfo").classList.add("col-4");
  document.getElementById("SculptureInfo").style.display = "block";
  document.getElementById("PaintingInfo").classList.remove("styledBox");
  document.getElementById("PaintingInfo").style.textAlign = "unset";
}
document
  .getElementById("PaintingInfo")
  .addEventListener("mouseover", showPrint);
document
  .getElementById("PaintingInfo")
  .addEventListener("mouseout", dontshowPrint);

//For phone and tablet response:
var photoPhone = document.getElementById("photoPhone");
var gdPhone = document.getElementById("gdPhone");
var sculpturePhone = document.getElementById("sculpturePhone");
var paintingPhone = document.getElementById("paintingPhone");
//For photo
photoPhone.addEventListener("mouseover", expandPhoto);
photoPhone.addEventListener("mouseout", compressPhoto);
//For graphic design
photoPhone.addEventListener("mouseover", expandPhoto);
photoPhone.addEventListener("mouseout", compressPhoto);
//For
photoPhone.addEventListener("mouseover", expandPhoto);
photoPhone.addEventListener("mouseout", compressPhoto);
photoPhone.addEventListener("mouseover", expandPhoto);
photoPhone.addEventListener("mouseout", compressPhoto);
