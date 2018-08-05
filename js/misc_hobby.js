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

var WilmakeSlideIndex = 1;
WilmakeSlides(WilmakeSlideIndex);
function WilmakeSlides(n) {
  var i;
  if (n > albums["Wilmake"].length) {WilmakeSlideIndex = 1} 
  if (n < 1) {WilmakeSlideIndex = albums["Wilmake"].length}
  document.getElementById("WilmakeSlider").innerHTML = albums["Wilmake"][WilmakeSlideIndex-1];
}

var VArmSlideIndex = 1;
VArmSlides(VArmSlideIndex);
function VArmSlides(n) {
  var i;
  if (n > albums["VArm"].length) {VArmSlideIndex = 1} 
  if (n < 1) {VArmSlideIndex = albums["VArm"].length}
  document.getElementById("VArmSlider").innerHTML = albums["VArm"][VArmSlideIndex-1];
}

var AmbilightSlideIndex = 1;
AmbilightSlides(AmbilightSlideIndex);
function AmbilightSlides(n) {
  var i;
  if (n > albums["Ambilight"].length) {AmbilightSlideIndex = 1} 
  if (n < 1) {AmbilightSlideIndex = albums["Ambilight"].length}
  document.getElementById("AmbilightSlider").innerHTML = albums["Ambilight"][AmbilightSlideIndex-1];
}

var MiscSlideIndex = 1;
MiscSlides(MiscSlideIndex);
function MiscSlides(n) {
  var i;
  if (n > albums["Misc"].length) {MiscSlideIndex = 1}
  if (n < 1) {MiscSlideIndex = albums["Misc"].length}
  document.getElementById("MiscSlider").innerHTML = albums["Misc"][MiscSlideIndex-1];
}