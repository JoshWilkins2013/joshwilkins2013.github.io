var albums = {
		"Me": [
		    "<img src=\"img/ME/Winter.jpg\" style=\"width:25%\">",
		    "<img src=\"img/ME/Main.jpg\" style=\"width:50%\">",
		    "<img src=\"img/ME/Mirror.jpg\" style=\"width:25%\">",
		    "<img src=\"img/ME/BookShelf.jpg\" style=\"width:25%\">",
		    "<img src=\"img/ME/SkiLift.jpg\" style=\"width:25%\">",
		    "<img src=\"img/ME/Colorado.jpg\" style=\"width:50%\">",
		    "<img src=\"img/ME/Rockies.jpg\" style=\"width:50%\">",
		    "<img src=\"img/ME/WhiteMountains.jpg\" style=\"width:25%\">"
		]
}

document.getElementById("header-text").innerHTML = "About Me";

var MeSlideIndex = 1;
MeSlides(MeSlideIndex);
function MeSlides(n) {
  if (n > albums["Me"].length) {MeSlideIndex = 1}
  if (n < 1) {MeSlideIndex = albums["Me"].length}
  document.getElementById("MeSlider").innerHTML = albums["Me"][MeSlideIndex-1];
}

function Resume() {
	var description = "<iframe src=\"Storage\\Home\\Resume.pdf#toolbar=0&view=FitH\" style=\"width: 75%;border: none;\"></iframe>"
	var title = "<h3 class=\"block-header\">Resum&eacute</h3>";
	document.getElementById("details-title").innerHTML = title;
    document.getElementById("details-description").innerHTML = description;
};