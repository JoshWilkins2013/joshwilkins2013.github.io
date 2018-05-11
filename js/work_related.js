var albums = {
		"Synth": [
			"<img src=\"img/Work_Related/Synth/Iso.png\"><p>Isometric View</p>",
			"<img src=\"img/Work_Related/Synth/Front.png\"><p>Front View</p>",
			"<img src=\"img/Work_Related/Synth/Layer.png\"><p>Example Layer</p>",
			"<img src=\"img/Work_Related/Synth/Model.png\"><p>SolidWorks Model</p>",
			"<img src=\"img/Work_Related/Synth/IAASR.png\"><p>My Model</p>",
		],
		"BBB": [
			"<img src=\"img/Work_Related/BBB/BBB.png\"><p>Beaglebone Black</p>",
			"<img src=\"img/Work_Related/BBB/DDS.png\"><p>AD9912 DDS</p>"
		],
		"PCB": [
		    "<img src=\"img/Work_Related/PCB/LowPowSynth_Board.png\"><p>Synthesizer</p>",
		    "<img src=\"img/Work_Related/PCB/Fanout_Board.png\"><p>10 MHz Fanout Board</p>",
		    "<img src=\"img/Work_Related/PCB/PI_Board.png\"><p>PI Filter Board</p>",
		    "<img src=\"img/Work_Related/PCB/PI_Layout.png\"><p>PI Filter Layout</p>",
			"<img src=\"img/Work_Related/PCB/VCO_Board.png\"><p>VCO Eval Board</p>",
			"<img src=\"img/Work_Related/PCB/VCO_Layout.png\"><p>VCO Eval Layout</p>",
			"<img src=\"img/Work_Related/PCB/10MHzOCXO_Board.png\"><p>OCXO Eval Board</p>",
			"<img src=\"img/Work_Related/PCB/100MHzOCXO_Board.png\"><p>Another OCXO Eval Board</p>"
		],
		"Box": [
		    "<img src=\"img/Work_Related/Box/Box1.png\"><p>Divider Box</p>",
		    "<img src=\"img/Work_Related/Box/Box1.png\"><p>Interface Box</p>",
            "<img src=\"img/Work_Related/Box/Box2.png\"><p>Inside Box</p>"
        ],
        "AtomicClock": [
		    "<img src=\"img/Work_Related/AtomicClock/GUI.png\"><p>User Interface</p>",
            "<img src=\"img/Work_Related/AtomicClock/Tempco_Stepped.png\"><p>Stepped Tempco Run</p>",
            "<img src=\"img/Work_Related/AtomicClock/Tempco_Continuous.png\"><p>Continuous Tempco Run</p>",
            "<img src=\"img/Work_Related/AtomicClock/Tempco_PolyFit.png\"><p>Polynomial Fit of Tempco Runs</p>",
            "<img src=\"img/Work_Related/AtomicClock/Aging.png\"><p>Aging Output Across Files</p>",
            "<img src=\"img/Work_Related/AtomicClock/Adev_Single.png\"><p>Adev on one File</p>",
            "<img src=\"img/Work_Related/AtomicClock/Adev_Multi.png\"><p>Adev Averaged Across Files</p>"
        ]
}

var SynthSlideIndex = 1;
SynthSlides(SynthSlideIndex);
function SynthSlides(n) {
  var i;
  if (n > albums["Synth"].length) {SynthSlideIndex = 1}
  if (n < 1) {SynthSlideIndex = albums["Synth"].length}
  document.getElementById("SynthSlider").innerHTML = albums["Synth"][SynthSlideIndex-1];
}

var BBBSlideIndex = 1;
BBBSlides(BBBSlideIndex);
function BBBSlides(n) {
  var i;
  if (n > albums["BBB"].length) {BBBSlideIndex = 1} 
  if (n < 1) {BBBSlideIndex = albums["BBB"].length}
  document.getElementById("BBBSlider").innerHTML = albums["BBB"][BBBSlideIndex-1];
}

var PCBSlideIndex = 1;
PCBSlides(PCBSlideIndex);
function PCBSlides(n) {
  var i;
  if (n > albums["PCB"].length) {PCBSlideIndex = 1}
  if (n < 1) {PCBSlideIndex = albums["PCB"].length}
  document.getElementById("PCBSlider").innerHTML = albums["PCB"][PCBSlideIndex-1];
}

var BoxSlideIndex = 1;
BoxSlides(BoxSlideIndex);
function BoxSlides(n) {
  var i;
  if (n > albums["Box"].length) {BoxSlideIndex = 1}
  if (n < 1) {BoxSlideIndex = albums["Box"].length}
  document.getElementById("BoxSlider").innerHTML = albums["Box"][BoxSlideIndex-1];
}

var AtomicClockSlideIndex = 1;
AtomicClockSlides(AtomicClockSlideIndex);
function AtomicClockSlides(n) {
  var i;
  if (n > albums["AtomicClock"].length) {AtomicClockSlideIndex = 1}
  if (n < 1) {AtomicClockSlideIndex = albums["AtomicClock"].length}
  document.getElementById("AtomicClockSlider").innerHTML = albums["AtomicClock"][AtomicClockSlideIndex-1];
}