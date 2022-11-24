// курсор start//
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 10) {
    $(".js-btn-top").addClass("show")
  } else {
    $(".js-btn-top").removeClass("show")
  }
})
$(".js-btn-top").click(function (e) {
  e.preventDefault();
  $("html").animate({
    scrollTop: 0
  }, 1000)
})

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 10) {
    $(".logo1").addClass("show")
  } else {
    $(".logo1").removeClass("show")
  }
})
$(".logo1").click(function (a) {
  a.preventDefault();
  $("html").animate({
    scrollTop: 0
  }, 1000)
})
// курсор end//
// =============== //
// меню start//
function myFunctions(i) {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// меню end//
// =============== //
// slider start//
function currentSlide(l) {
  showSlides(slideIndex = l);
}
function showSlides(l) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (l > slides.length) { slideIndex = 1 }
  if (l < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className = "active";
}
// slider end//
// =============== //
// element start//
function myFunction(S) {
  var S = document.getElementById("myDIVs");
  if (S.style.display === "none") {
    S.style.display = "block";
  } else {
    S.style.display = "none";
  }
}
// element end//
// =============== //
// acardion start//
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// acardion end//
// =============== //
// menu start//
window.addEventListener("scroll", function () {
  var header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
})
// menu end//
// =============== //