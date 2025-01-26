var albums = {
		"Me": [
		    "<img src=\"img/Me/Winter.jpg\" style=\"width:25%\">",
		    "<img src=\"img/Me/Main.jpg\" style=\"width:50%\">",
		    "<img src=\"img/Me/Mirror.jpg\" style=\"width:25%\">",
		    "<img src=\"img/Me/BookShelf.jpg\" style=\"width:25%\">",
		    "<img src=\"img/Me/SkiLift.jpg\" style=\"width:25%\">",
		    "<img src=\"img/Me/Colorado.jpg\" style=\"width:50%\">",
		    "<img src=\"img/Me/Rockies.jpg\" style=\"width:50%\">",
		    "<img src=\"img/Me/WhiteMountains.jpg\" style=\"width:25%\">"
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