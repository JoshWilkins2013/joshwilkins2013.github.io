var albums = {
		"Me": [
		    "<img src=\"img/ME.png\" style=\"width:50%\">",
		    "<img src=\"img/ME2.png\" style=\"width:50%\">",
		    "<img src=\"img/ME3.png\" style=\"width:50%\">"
		]
}

var MeSlideIndex = 1;
MeSlides(MeSlideIndex);
function MeSlides(n) {
  var i;
  if (n > albums["Me"].length) {MeSlideIndex = 1}
  if (n < 1) {MeSlideIndex = albums["Me"].length}
  document.getElementById("MeSlider").innerHTML = albums["Me"][MeSlideIndex-1];
}