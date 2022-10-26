var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("my-slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex";  
}

//   $("#footer-arrow").click(function()
// {
//     $("#footer-box").toggleClass("footer-box-change")
    
// });

function classToggle() {
  var element = document.getElementById("footer-box");
  element.classList.toggle("footer-box-change");
  var arrow = document.getElementById("footer-arrow");
  arrow.classList.toggle("footer-arrow-change")
}
function classToggle2() {
  var element = document.getElementById("footer-box-2");
  element.classList.toggle("footer-box-change");
  var arrow = document.getElementById("footer-arrow-2");
  arrow.classList.toggle("footer-arrow-change")
}
function classToggle3() {
  var element = document.getElementById("footer-box-3");
  element.classList.toggle("footer-box-change");
  var arrow = document.getElementById("footer-arrow-3");
  arrow.classList.toggle("footer-arrow-change")
}
function classToggle4() {
  var element = document.getElementById("footer-box-4");
  element.classList.toggle("footer-box-change-buy");
  var arrow = document.getElementById("footer-arrow-4");
  arrow.classList.toggle("footer-arrow-change")
}
function classToggle5() {
  var element = document.getElementById("footer-box-5");
  element.classList.toggle("footer-box-change");
  var arrow = document.getElementById("footer-arrow-5");
  arrow.classList.toggle("footer-arrow-change")
}

