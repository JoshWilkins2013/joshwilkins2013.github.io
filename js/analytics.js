var albums = {
		"MakeModel": [
			"<img src=\"img/Analytics/Cars/Model_Comparison_Age.png\"><p>Car Model Comparison - Age</p>",
			"<img src=\"img/Analytics/Cars/Model_Comparison_Mileage.png\"><p>Car Model Comparison - Mileage</p>",
			"<img src=\"img/Analytics/Cars/Best_Choice_Age.png\"><p>Best Choice - Age</p>",
			"<img src=\"img/Analytics/Cars/Best_Choice_Mileage.png\"><p>Best Choice - Mileage</p>"
		],
		"PriceBot": [
			"<img src=\"img/Analytics/PriceBot/Cars_Output.svg\"><p>Merged Honda Civic Results</p>",
			"<img src=\"img/Analytics/PriceBot/Apt_Output.svg\"><p>Merged Apt Results</p>",
			"<img src=\"img/Analytics/PriceBot/Houses_Output.svg\"><p>House Results</p>"
		],
		"House": [
			"<img src=\"img/Analytics/House/Typical.jpg\"><p>Typical Scenario</p>",
			"<img src=\"img/Analytics/House/Loan_Options.png\"><p>Loan Options</p>",
			"<img src=\"img/Analytics/House/Rental_Income.png\"><p>Rental Income</p>",
			"<img src=\"img/Analytics/House/IRA_Contributions.png\"><p>IRA Investments</p>"
		]
}

document.getElementById("header-text").innerHTML = "<a style=\"text-decoration: none\" href=\"analytics\">Analytical Projects</a>";

var PriceBotSlideIndex= 1;
PriceBotSlides(PriceBotSlideIndex);
function PriceBotSlides(n) {
  if (n > albums["PriceBot"].length) {PriceBotSlideIndex = 1}
  if (n < 1) {PriceBotSlideIndex = albums["PriceBot"].length}
  document.getElementById("PriceBotSlider").innerHTML = albums["PriceBot"][PriceBotSlideIndex-1];
}

var MakeModelSlideIndex= 1;
MakeModelSlides(MakeModelSlideIndex);
function MakeModelSlides(n) {
  if (n > albums["MakeModel"].length) {MakeModelSlideIndex = 1}
  if (n < 1) {MakeModelSlideIndex = albums["MakeModel"].length}
  document.getElementById("MakeModelSlider").innerHTML = albums["MakeModel"][MakeModelSlideIndex-1];
}

function MakeModelAnalysis() {
    var description = "\
    <iframe src=\"Storage/Projects/MakeModelComparison.html\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("details-description").innerHTML = description;
}

var HouseSlideIndex= 1;
HouseSlides(HouseSlideIndex);
function HouseSlides(n) {
  if (n > albums["House"].length) {HouseSlideIndex = 1}
  if (n < 1) {HouseSlideIndex = albums["House"].length}
  document.getElementById("HouseSlider").innerHTML = albums["House"][HouseSlideIndex-1];
}
