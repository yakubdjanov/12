// video index start

var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySliders");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// video index end
// ========================= //


// app start //

// app.use(
//   cors({
//     credentials: true,
//     origin: ["http://localhost:3000", "https://elated-jackson-28b73e.netlify.app"]
//   })
// );
// var sess = {
//   secret: 'keyboard cat',
//   cookie: {}
// }

// if (app.get('env') === 'production') {
//   app.set('trust proxy', 0)
//   sess.cookie.secure = true
//   sess.cookie.sameSite = 'none'
// }

// app.use(session(sess))

// app end //