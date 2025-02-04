var albums = {
		"Wilmake": [
			"<img src=\"img/Misc_Hobby/Wilmake/Wilmake.png\"><p>SolidWorks Model</p>"
		],
		"VArm": [
			"<img src=\"img/Misc_Hobby/VArm/VArm1.jpg\"><p>Finished Build</p>",
			"<img src=\"img/Misc_Hobby/VArm/Test.jpg\"><p>Test Subject</p>",
			"<img src=\"img/Misc_Hobby/VArm/VArm2.jpg\"><p>User Mounted</p>",
			"<img src=\"img/Misc_Hobby/VArm/VArm3.jpg\"><p>Another User Mounted</p>",
			"<img src=\"img/Misc_Hobby/VArm/PCB.jpg\"><p>PCB</p>",
			"<img src=\"img/Misc_Hobby/VArm/Valves.jpg\"><p>Valve System</p>",
			"<img src=\"img/Misc_Hobby/VArm/Integration.jpg\"><p>System Integration</p>",
			"<img src=\"img/Misc_Hobby/VArm/Valve_System.jpg\"><p>Valve Flow Diagram</p>"
		],
		"CatTree": [
			"<img src=\"img/Misc_Hobby/Cat_Tree/Finished.jpg\"><p>Finished</p>",
			"<img src=\"img/Misc_Hobby/Cat_Tree/Model.jpg\"><p>Model</p>",
			"<img src=\"img/Misc_Hobby/Cat_Tree/First_Assembled.jpg\"><p>First Assembled</p>"
		],
		"Ambilight": [
			"<img src=\"img/Misc_Hobby/Ambilight/Ambilight.jpg\"><p>System Launch</p>",
			"<img src=\"img/Misc_Hobby/Ambilight/Connections.jpg\"><p>Connections</p>"
		],
		"Misc": [
			"<img src=\"img/Misc_Hobby/Misc/Computer_Inside.jpg\"><p>Inside My Computer</p>",
			"<img src=\"img/Misc_Hobby/Misc/Computer.jpg\"><p>Outside My Computer</p>",
			"<img src=\"img/Misc_Hobby/Misc/Desk.jpg\"><p>Desk</p>",
			"<img src=\"img/Misc_Hobby/Misc/PowerSupply.png\"><p>Dual Supply Adjustable PSU</p>",
			"<img src=\"img/Misc_Hobby/Misc/3D_Printer.jpg\"><p>Old 3D Printer</p>"
		]
}

document.getElementById("header-text").innerHTML = "<a style=\"text-decoration: none\" href=\"misc-hobby\">Other Projects</a>";

var WilmakeSlideIndex = 1;
WilmakeSlides(WilmakeSlideIndex);
function WilmakeSlides(n) {
  if (n > albums["Wilmake"].length) {WilmakeSlideIndex = 1}
  if (n < 1) {WilmakeSlideIndex = albums["Wilmake"].length}
  document.getElementById("WilmakeSlider").innerHTML = albums["Wilmake"][WilmakeSlideIndex-1];
}

var VArmSlideIndex = 1;
VArmSlides(VArmSlideIndex);
function VArmSlides(n) {
  if (n > albums["VArm"].length) {VArmSlideIndex = 1} 
  if (n < 1) {VArmSlideIndex = albums["VArm"].length}
  document.getElementById("VArmSlider").innerHTML = albums["VArm"][VArmSlideIndex-1];
}

function VArm_Description() {
    var description = "<iframe src=\"Storage\\RIT\\VArm_Report.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("varm_description").innerHTML = description;
}

var CatTreeSlideIndex = 1;
CatTreeSlides(CatTreeSlideIndex);
function CatTreeSlides(n) {
  if (n > albums["CatTree"].length) {CatTreeSlideIndex = 1}
  if (n < 1) {CatTreeSlideIndex = albums["CatTree"].length}
  document.getElementById("CatTreeSlider").innerHTML = albums["CatTree"][CatTreeSlideIndex-1];
}

var AmbilightSlideIndex = 1;
AmbilightSlides(AmbilightSlideIndex);
function AmbilightSlides(n) {
  if (n > albums["Ambilight"].length) {AmbilightSlideIndex = 1} 
  if (n < 1) {AmbilightSlideIndex = albums["Ambilight"].length}
  document.getElementById("AmbilightSlider").innerHTML = albums["Ambilight"][AmbilightSlideIndex-1];
}

var MiscSlideIndex = 1;
MiscSlides(MiscSlideIndex);
function MiscSlides(n) {
  if (n > albums["Misc"].length) {MiscSlideIndex = 1}
  if (n < 1) {MiscSlideIndex = albums["Misc"].length}
  document.getElementById("MiscSlider").innerHTML = albums["Misc"][MiscSlideIndex-1];
}