var albums = {
		"CuttingBoard": [
			"<img src=\"img/Wood_Working/Cutting_Board/Front.png\"><p>Top</p>",
			"<img src=\"img/Wood_Working/Cutting_Board/Back.png\"><p>Bottom</p>",
			"<img src=\"img/Wood_Working/Cutting_Board/Model.png\"><p>SolidWorks Model</p>"
		],
		"CoffeeMug": [
			"<img src=\"img/Wood_Working/Coffee_Mug/Iso.png\"><p>Finished</p>",
			"<img src=\"img/Wood_Working/Coffee_Mug/Side.png\"><p>Missing Finish</p>"
		],
		"TTT": [
			"<img src=\"img/Wood_Working/3D_TTT/Blocks.jpg\"><p>Complete Set</p>",
			"<img src=\"img/Wood_Working/3D_TTT/No_Blocks.jpg\"><p>Without Blocks</p>"
		],
		"Chest": [
			"<img src=\"img/Wood_Working/Chest/Iso.jpg\"><p>Front</p>",
			"<img src=\"img/Wood_Working/Chest/Inside.jpg\"><p>Inside</p>",
		]
}

var CuttingBoardSlideIndex = 1;
CuttingBoardSlides(CuttingBoardSlideIndex);
function CuttingBoardSlides(n) {
  var i;
  if (n > albums["CuttingBoard"].length) {CuttingBoardSlideIndex = 1} 
  if (n < 1) {CuttingBoardSlideIndex = albums["CuttingBoard"].length}
  document.getElementById("CuttingBoardSlider").innerHTML = albums["CuttingBoard"][CuttingBoardSlideIndex-1];
}

var CoffeeMugSlideIndex = 1;
CoffeeMugSlides(CoffeeMugSlideIndex);
function CoffeeMugSlides(n) {
  var i;
  if (n > albums["CoffeeMug"].length) {CoffeeMugSlideIndex = 1} 
  if (n < 1) {CoffeeMugSlideIndex = albums["CoffeeMug"].length}
  document.getElementById("CoffeeMugSlider").innerHTML = albums["CoffeeMug"][CoffeeMugSlideIndex-1];
}

var TTTSlideIndex = 1;
TTTSlides(TTTSlideIndex);
function TTTSlides(n) {
  var i;
  if (n > albums["TTT"].length) {TTTSlideIndex = 1}
  if (n < 1) {TTTSlideIndex = albums["TTT"].length}
  document.getElementById("TTTSlider").innerHTML = albums["TTT"][TTTSlideIndex-1];
}

var ChestSlideIndex = 1;
ChestSlides(ChestSlideIndex);
function ChestSlides(n) {
  var i;
  if (n > albums["Chest"].length) {ChestSlideIndex = 1}
  if (n < 1) {ChestSlideIndex = albums["Chest"].length}
  document.getElementById("ChestSlider").innerHTML = albums["Chest"][ChestSlideIndex-1];
}