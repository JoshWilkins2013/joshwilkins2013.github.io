var albums = {
		"House": [
			"<img src=\"img/Analytics/House/Typical.png\"><p>Typical Scenario</p>",
			"<img src=\"img/Analytics/House/Loan_Options.png\"><p>Loan Options</p>",
			"<img src=\"img/Analytics/House/Rental_Income.png\"><p>Rental Income</p>",
			"<img src=\"img/Analytics/House/IRA_Contributions.png\"><p>IRA Investments</p>"
		]
}

var HouseSlideIndex= 1;
HouseSlides(HouseSlideIndex);
function HouseSlides(n) {
  var i;
  if (n > albums["House"].length) {HouseSlideIndex = 1}
  if (n < 1) {HouseSlideIndex = albums["House"].length}
  document.getElementById("HouseSlider").innerHTML = albums["House"][HouseSlideIndex-1];
}