var albums = {
		"Indie": [
			"<img src=\"img/Robotics/ASEE_Indie/Robot.png\"><p>SolidWorks Model</p>",
			"<img src=\"img/Robotics/ASEE_Indie/Robot_Exploded.png\"><p>SolidWorks Exploded Model</p>",
			"<img src=\"img/Robotics/ASEE_Indie/Robot_Assembled1.jpg\"><p>Assembled Robot</p>",
			"<img src=\"img/Robotics/ASEE_Indie/Robot_Assembled2.jpg\"><p>Assembled Robot</p>",
			"<img src=\"img/Robotics/ASEE_Indie/Track.png\"><p>Track</p>"
		],
		"Derby": [
			"<img src=\"img/Robotics/ASEE_Derby/Robot.jpg\"><p>Assembled Robot</p>",
			"<img src=\"img/Robotics/ASEE_Derby/New_Design.png\"><p>SolidWorks Design</p>",
			"<img src=\"img/Robotics/ASEE_Derby/Track.png\"><p>Track</p>",
			"<img src=\"img/Robotics/ASEE_Derby/Original_Design.png\"><p>Original SolidWorks Design</p>",
			"<img src=\"img/Robotics/ASEE_Derby/Original_Design_ASM.png\"><p>Original SolidWorks Design</p>"
		],
		"ATtiny": [
			"<img src=\"img/Robotics/ATtiny/Robots.jpg\"><p>Assembled Robots</p>",
			"<img src=\"img/Robotics/ATtiny/Original.jpg\"><p>Prototype</p>",
			"<img src=\"img/Robotics/ATtiny/Rev1_Schematic.jpg\"><p>Rev 1 Schematic</p>",
			"<img src=\"img/Robotics/ATtiny/Rev1_Robot.jpg\"><p>Rev 1 Robot</p>",
			"<img src=\"img/Robotics/ATtiny/Rev2_Schematics.jpg\"><p>Rev 2 Schematic</p>",
			"<img src=\"img/Robotics/ATtiny/Rev2_Robot.jpg\"><p>Rev 2 Robot</p>",
			"<img src=\"img/Robotics/ATtiny/Rev3_Schematic.jpg\"><p>Rev 3 Schematic</p>",
			"<img src=\"img/Robotics/ATtiny/Model.png\"><p>Rev 3 Model</p>"
		],
		"Quadcopter": [
			"<img src=\"img/Robotics/Quadcopter/Build.jpg\"><p>Quadcopter Layout</p>",
			"<img src=\"img/Robotics/Quadcopter/Original_Design.png\"><p>Original SolidWorks Design</p>",
			"<img src=\"img/Robotics/Quadcopter/Original_Design_ASM.png\"><p>Original SolidWorks Design</p>",
			"<img src=\"img/Robotics/Quadcopter/New_Design.png\"><p>Updated SolidWorks Design</p>",
			"<img src=\"img/Robotics/Quadcopter/New_Design_ASM.png\"><p>Updated SolidWorks Design</p>"
		],
		"ENR153": [
			"<img src=\"img/Robotics/ENR153/Front.jpg\"><p>Front View</p>",
			"<img src=\"img/Robotics/ENR153/Back.jpg\"><p>Rear View</p>",
			"<img src=\"img/Robotics/ENR153/Inside.jpg\"><p>Inside View</p>",
			"<img src=\"img/Robotics/ENR153/Gears.jpg\"><p>Gear Assembly</p>",
			"<img src=\"img/Robotics/ENR153/Top.jpg\"><p>3D Printed Shell</p>",
			"<img src=\"img/Robotics/ENR153/McLarenF1_Front.jpg\"><p>Model Front</p>",
			"<img src=\"img/Robotics/ENR153/McLarenF1_Back.jpg\"><p>Model Rear</p>"
		]
}

var derbySlideIndex = 1;
DerbySlides(derbySlideIndex);
function DerbySlides(n) {
  var i;
  if (n > albums["Derby"].length) {derbySlideIndex = 1} 
  if (n < 1) {derbySlideIndex = albums["Derby"].length}
  document.getElementById("DerbySlider").innerHTML = albums["Derby"][derbySlideIndex-1];
}

var indieSlideIndex = 1;
IndieSlides(indieSlideIndex);
function IndieSlides(n) {
  var i;
  if (n > albums["Indie"].length) {indieSlideIndex = 1} 
  if (n < 1) {indieSlideIndex = albums["Indie"].length}
  document.getElementById("IndieSlider").innerHTML = albums["Indie"][indieSlideIndex-1];
}

var ATtinySlideIndex = 1;
ATtinySlides(ATtinySlideIndex);
function ATtinySlides(n) {
  var i;
  if (n > albums["ATtiny"].length) {ATtinySlideIndex = 1} 
  if (n < 1) {ATtinySlideIndex = albums["ATtiny"].length}
  document.getElementById("ATtinySlider").innerHTML = albums["ATtiny"][ATtinySlideIndex-1];
}

var QuadcopterSlideIndex = 1;
QuadcopterSlides(QuadcopterSlideIndex);
function QuadcopterSlides(n) {
  var i;
  if (n > albums["Quadcopter"].length) {QuadcopterSlideIndex = 1}
  if (n < 1) {QuadcopterSlideIndex = albums["Quadcopter"].length}
  document.getElementById("QuadcopterSlider").innerHTML = albums["Quadcopter"][QuadcopterSlideIndex-1];
}

var ENR153SlideIndex = 1;
ENR153Slides(ENR153SlideIndex);
function ENR153Slides(n) {
  var i;
  if (n > albums["ENR153"].length) {ENR153SlideIndex = 1}
  if (n < 1) {ENR153SlideIndex = albums["ENR153"].length}
  document.getElementById("ENR153Slider").innerHTML = albums["ENR153"][ENR153SlideIndex-1];
}