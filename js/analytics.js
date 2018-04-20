var albums = {
		"MakeModel": [
			"<img src=\"img/Analytics/Cars/MakeModelComparison.png\"><p>Model Comparison</p>",
			"<img src=\"img/Analytics/Cars/Results.png\"><p>Best New Car Models</p>"
		],
		"PriceBot": [
			"<img src=\"img/Analytics/PriceBot/Cars_Output.svg\"><p>Merged Honda Civic Results</p>",
			"<img src=\"img/Analytics/PriceBot/Apt_Output.svg\"><p>Merged Apt Results</p>"
			"<img src=\"img/Analytics/PriceBot/Houses_Output.svg\"><p>House Results</p>"
		],
		"House": [
			"<img src=\"img/Analytics/House/Typical.png\"><p>Typical Scenario</p>",
			"<img src=\"img/Analytics/House/Loan_Options.png\"><p>Loan Options</p>",
			"<img src=\"img/Analytics/House/Rental_Income.png\"><p>Rental Income</p>",
			"<img src=\"img/Analytics/House/IRA_Contributions.png\"><p>IRA Investments</p>"
		]
}

var PriceBotSlideIndex= 1;
PriceBotSlides(PriceBotSlideIndex);
function PriceBotSlides(n) {
  var i;
  if (n > albums["PriceBot"].length) {PriceBotSlideIndex = 1}
  if (n < 1) {PriceBotSlideIndex = albums["PriceBot"].length}
  document.getElementById("PriceBotSlider").innerHTML = albums["PriceBot"][PriceBotSlideIndex-1];
}

var MakeModelSlideIndex= 1;
MakeModelSlides(MakeModelSlideIndex);
function MakeModelSlides(n) {
  var i;
  if (n > albums["MakeModel"].length) {MakeModelSlideIndex = 1}
  if (n < 1) {MakeModelSlideIndex = albums["MakeModel"].length}
  document.getElementById("MakeModelSlider").innerHTML = albums["MakeModel"][MakeModelSlideIndex-1];
}

var HouseSlideIndex= 1;
HouseSlides(HouseSlideIndex);
function HouseSlides(n) {
  var i;
  if (n > albums["House"].length) {HouseSlideIndex = 1}
  if (n < 1) {HouseSlideIndex = albums["House"].length}
  document.getElementById("HouseSlider").innerHTML = albums["House"][HouseSlideIndex-1];
}