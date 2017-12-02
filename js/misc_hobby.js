var albums = {
		"Wilmake": [
			"<img src=\"img/Misc_Hobby/Wilmake/Wilmake.png\"><p>SolidWorks Model</p>"
		],
		"VArm": [
			"<img src=\"img/Misc_Hobby/VArm/VArm1.png\"><p>Finished Build</p>",
			"<img src=\"img/Misc_Hobby/VArm/Test.png\"><p>Test Subject</p>",
			"<img src=\"img/Misc_Hobby/VArm/VArm2.png\"><br><br><p>User Mounted</p>",
			"<img src=\"img/Misc_Hobby/VArm/VArm3.png\"><br><br><p>User Mounted</p>",
			"<img src=\"img/Misc_Hobby/VArm/PCB.png\"><p>PCB</p>",
			"<img src=\"img/Misc_Hobby/VArm/Valves.png\"><p>Valve System</p>",
			"<img src=\"img/Misc_Hobby/VArm/Integration.png\"><p>System Integration</p>",
			"<img src=\"img/Misc_Hobby/VArm/Valve_System.png\"><p>Valve Flow Diagram</p>"
		],
		"Ambilight": [
			"<img src=\"img/Misc_Hobby/Ambilight/Ambilight.png\"><p>System Launch</p>",
			"<img src=\"img/Misc_Hobby/Ambilight/Connections.png\"><p>System Launch</p>"
		],
		"Misc": [
			"<img src=\"img/Misc_Hobby/Misc/Computer_Inside.png\"><p>Inside My Computer</p>",
			"<img src=\"img/Misc_Hobby/Misc/Computer.png\"><p>Outside My Computer</p>",
			"<img src=\"img/Misc_Hobby/Misc/Desk.png\"><p>Desk</p>",
			"<img src=\"img/Misc_Hobby/Misc/PowerSupply.png\"><p>Dual Supply Adjustable PSU</p>",
			"<img src=\"img/Misc_Hobby/Misc/3D_Printer.png\"><p>Old 3D Printer</p>"
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