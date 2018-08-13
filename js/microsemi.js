var albums = {
            "Microsemi": [
                "<img src=\"img/Microsemi/CSAC.png\"><p>CSAC</p>",
                "<img src=\"img/Microsemi/MAC.png\"><p>MAC</p>",
                "<img src=\"img/Microsemi/5071A.png\"><p>5071A Cs Atomic Clock</p>",
                "<img src=\"img/Microsemi/5125A.png\"><p>Phase Noise Test Set</p>"
			],
            "Synth": [
                "<img src=\"img/Microsemi/Synth/Iso.jpg\"><p>Isometric View</p>",
                "<img src=\"img/Microsemi/Synth/Front.jpg\"><p>Front View</p>",
                "<img src=\"img/Microsemi/Synth/Layer.jpg\"><p>Example Layer</p>",
                "<img src=\"img/Microsemi/Synth/Model.png\"><p>SolidWorks Model</p>",
                "<img src=\"img/Microsemi/Synth/IAASR.png\"><p>My Model</p>",
		    ],
		    "AtomicClock": [
                "<img src=\"img/Microsemi/AtomicClock/GUI.jpg\"><p>User Interface</p>",
                "<img src=\"img/Microsemi/AtomicClock/Tempco_Stepped.jpg\"><p>Stepped Tempco Run</p>",
                "<img src=\"img/Microsemi/AtomicClock/Tempco_Continuous.jpg\"><p>Continuous Tempco Run</p>",
                "<img src=\"img/Microsemi/AtomicClock/Tempco_PolyFit.jpg\"><p>Polynomial Fit of Tempco Runs</p>",
                "<img src=\"img/Microsemi/AtomicClock/Aging.jpg\"><p>Aging Output Across Files</p>",
                "<img src=\"img/Microsemi/AtomicClock/Adev_Single.jpg\"><p>Adev on one File</p>",
                "<img src=\"img/Microsemi/AtomicClock/Adev_Multi.jpg\"><p>Adev Averaged Across Files</p>"
            ],
            "PCB": [
                "<img src=\"img/Microsemi/PCB/LowPowSynth_Board.jpg\"><p>Low Power Synthesizer</p>",
                "<img src=\"img/Microsemi/PCB/Fanout_Board.jpg\"><p>10 MHz Fanout Board</p>",
                "<img src=\"img/Microsemi/PCB/PI_Board.jpg\"><p>PI Filter Board</p>",
                "<img src=\"img/Microsemi/PCB/PI_Layout.png\"><p>PI Filter Layout</p>",
                "<img src=\"img/Microsemi/PCB/VCO_Board.jpg\"><p>VCO Eval Board</p>",
                "<img src=\"img/Microsemi/PCB/VCO_Layout.png\"><p>VCO Eval Layout</p>",
                "<img src=\"img/Microsemi/PCB/10MHzOCXO_Board.jpg\"><p>OCXO Eval Board</p>",
                "<img src=\"img/Microsemi/PCB/100MHzOCXO_Board.jpg\"><p>Another OCXO Eval Board</p>"
            ],
            "BBB": [
                "<img src=\"img/Microsemi/BBB/BBB.png\"><p>Beaglebone Black</p>",
                "<img src=\"img/Microsemi/BBB/DDS.jpg\"><p>AD9912 DDS</p>"
            ],
            "Misc": [
                "<img src=\"img/Microsemi/Misc/DividerBox.jpg\"><p>Divider Box</p>",
                "<img src=\"img/Microsemi/Misc/TranslationDevice.png\"><p>Frequency Translation Device</p>",
                "<img src=\"img/Microsemi/Misc/Box1.jpg\"><p>Interface Box</p>",
                "<img src=\"img/Microsemi/Misc/Box2.jpg\"><p>Inside Box</p>"

            ]
}

var MicrosemiSlideIndex = 1;
MicrosemiSlides(MicrosemiSlideIndex);
function MicrosemiSlides(n) {
  var i;
  if (n > albums["Microsemi"].length) {MicrosemiSlideIndex = 1}
  if (n < 1) {MicrosemiSlideIndex = albums["Microsemi"].length}
  document.getElementById("MicrosemiSlider").innerHTML = albums["Microsemi"][MicrosemiSlideIndex-1];
}

var MiscSlideIndex = 1;
MiscSlides(MiscSlideIndex);
function MiscSlides(n) {
  var i;
  if (n > albums["Misc"].length) {MiscSlideIndex = 1}
  if (n < 1) {MiscSlideIndex = albums["Misc"].length}
  document.getElementById("MiscSlider").innerHTML = albums["Misc"][MiscSlideIndex-1];
}


/******************************************/
/*************** Synthesizer **************/
/******************************************/
var SynthSlideIndex = 1;
SynthSlides(SynthSlideIndex);
function SynthSlides(n) {
  var i;
  if (n > albums["Synth"].length) {SynthSlideIndex = 1}
  if (n < 1) {SynthSlideIndex = albums["Synth"].length}
  document.getElementById("SynthSlider").innerHTML = albums["Synth"][SynthSlideIndex-1];
}

 function Synthesizer() {
    SynthSlideIndex = 1;
	var description = "Designed and assembled a frequency synthesizer (GHz range) by implementing a cascaded PLL with an output power level controller.\
    It was optimized to minimize phase noise and the results were over 10 times better than commercially available synthesizers.\
    The enclosure was created using interchangeable RF shielded rack mount units to minimize EMI effects.\
    Was also responsible for the design of the internal layout, front panel components, and the final build and assembly.<br><br>\
    <div class=\"slideshow-container\">\
      <div id=\"SynthSlider\" class=\"myslides\">\
        <img src=\"img/Microsemi/Synth/Iso.jpg\"><p>Isometric View</p>\
      </div>\
      <a class=\"prev\" onclick=\"SynthSlides(SynthSlideIndex -= 1)\"><p class=\"arrow\">&#10094;</p></a>\
      <a class=\"next\" onclick=\"SynthSlides(SynthSlideIndex += 1)\"><p class=\"arrow\">&#10095;</p></a>\
    </div>"
    var title = "<h4 style=\"color:#cc5200\">Frequency Synthesizer (GHz)</h4>";
    if (document.getElementById("details-title").innerHTML != title) {
        document.getElementById("details-title").innerHTML = title;
        document.getElementById("details-subtitle").innerHTML = "";
        document.getElementById("details-description").innerHTML = description;
    }
}

function PLL() {
	var description = ""
	var subtitle = "<h6 style=\"color:#000000\">PLL Design & Sim</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function Prototype() {
	var description = ""
	var subtitle = "<h6 style=\"color:#000000\">Prototype</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function OutputPower() {
	var description = "Created an adjustable output power stabalizer cirucit by utilizing an envelope detector.\
	Additionally maximized the output power level through the selection of components<br>\
	<a href=\"https://github.com/JoshWilkins2013/JupyterNotebooks/tree/master/Work/OutputPowerController\" target=\"_blank\">Repository</a>\
	/ <a href=\"https://hub.mybinder.org/user/joshwilkins2013-jupyternotebooks-3n08z26a/notebooks/Work/OutputPowerController/OutputPowerController.ipynb\" target=\"_blank\">Binder</a><br><br>\
	<a href=\"Storage\\Analysis\\OutputPowerController.html\" target=\"_blank\"><button type=\"submit\">The Analysis</button></a>"
	var subtitle = "<h6 style=\"color:#000000\">Output Power Controller</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function Boards() {
	var description = ""
	var subtitle = "<h6 style=\"color:#000000\">Board Spins</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function TempDependence() {
	var description = "Characterizing the temperature dependency of the synthesizer. Approximated by characterizing\
	its largest contributor, a bandpass filter.<br>\
	<a href=\"https://github.com/JoshWilkins2013/JupyterNotebooks/tree/master/Work/TemperatureDependence\" target=\"_blank\">Repository</a>\
	 / <a href=\"https://hub.mybinder.org/user/joshwilkins2013-jupyternotebooks-3n08z26a/notebooks/Work/TemperatureDependence/TemperatureDependence.ipynb\" target=\"_blank\">Binder</a><br><br>\
	<a href=\"Storage\\Analysis\\TemperatureDependence.pdf\" target=\"_blank\"><button type=\"submit\">PDF</button></a>"
    var subtitle = "<h6 style=\"color:#000000\">Temperature Dependency Testing</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};


/******************************************/
/************ Atomic Clock GUI ************/
/******************************************/
var AtomicClockSlideIndex = 1;
AtomicClockSlides(AtomicClockSlideIndex);
function AtomicClockSlides(n) {
  var i;
  if (n > albums["AtomicClock"].length) {AtomicClockSlideIndex = 1}
  if (n < 1) {AtomicClockSlideIndex = albums["AtomicClock"].length}
  document.getElementById("AtomicClockSlider").innerHTML = albums["AtomicClock"][AtomicClockSlideIndex-1];
}

function AtomicClock() {
    AtomicClockSlideIndex = 1;
    var description = "Designed a user interface to analyze data obtained from our atomic clocks. Utilizing statistical methods,\
    attributes of these clocks, such as allan deviation, aging rates, and lock time capabilities, were more accurately described across\
    units, with each unit containing several files of data. Additionally this GUI enabled further enhancement and testing of our\
    temperature compensation algorithm and allowed easy access to plotting specific data such as board temp or frequency.<br><br>\
    <div class=\"slideshow-container\">\
      <div id=\"AtomicClockSlider\" class=\"myslides\">\
        <img src=\"img/Microsemi/AtomicClock/GUI.jpg\"><p>User Interface</p>\
      </div>\
      <a class=\"prev\" onclick=\"AtomicClockSlides(AtomicClockSlideIndex -= 1)\"><p class=\"arrow\">&#10094;</p></a>\
      <a class=\"next\" onclick=\"AtomicClockSlides(AtomicClockSlideIndex += 1)\"><p class=\"arrow\">&#10095;</p></a>\
    </div>"
    var title = "<h4 style=\"color:#cc5200\">Atomic Clock GUI</h4>";
    if (document.getElementById("details-title").innerHTML != title) {
        document.getElementById("details-title").innerHTML = title;
        document.getElementById("details-subtitle").innerHTML = "";
        document.getElementById("details-description").innerHTML = description;
    }
}

function Aging() {
	var description = ""
	var subtitle = "<h6 style=\"color:#000000\">Long Term Aging Rates</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function Tempco() {
	var description = ""
	var subtitle = "<h6 style=\"color:#000000\">Temperature Compensation</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function LockTime() {
	var description = ""
	var subtitle = "<h6 style=\"color:#000000\">Power Cycling Analysis</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function DataAnalysis() {
	var description = ""
	var subtitle = "<h6 style=\"color:#000000\">Data Analysis</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function StepResponse() { // Step Response Analysis Script
	var description = "Wrote a script that, given a stepped input (such as a step and hold temperature ramp), the outputs (transient responses) at the 'hold' regions\
	were captured. Additionally, the transient responses are averaged and captured for the instances where you might need it, like a temperature compensation algorithm.\
	Made generic for any type of input; temperature, voltage, current, etc.<br>\
	<a href=\"https://github.com/JoshWilkins2013/JupyterNotebooks/tree/master/Work/SteppedInputResponse\" target=\"_blank\">Repository</a>\
	 / <a href=\"https://hub.mybinder.org/user/joshwilkins2013-jupyternotebooks-3n08z26a/notebooks/Work/SteppedInputResponse/SteppedInputResponse.ipynb\" target=\"_blank\">Binder</a><br><br>\
	<a href=\"Storage\\Analysis\\SteppedInputResponse.html\" target=\"_blank\"><button type=\"submit\">The Analysis</button></a>"
    var subtitle = "<h6 style=\"color:#000000\">Step Response Analysis</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};


/******************************************/
/************** Embedded Prog *************/
/******************************************/
var BBBSlideIndex = 1;
BBBSlides(BBBSlideIndex);
function BBBSlides(n) {
  var i;
  if (n > albums["BBB"].length) {BBBSlideIndex = 1}
  if (n < 1) {BBBSlideIndex = albums["BBB"].length}
  document.getElementById("BBBSlider").innerHTML = albums["BBB"][BBBSlideIndex-1];
}

function Embedded() {
    BBBSlideIndex = 1;
	var description = "Utilized the programmable real-time units on the Beaglebone Black to interface with the AD9912 DDS and a DAC via SPI communication.\
	The DAC was implemented in a programmable, low bandwidth, digital PI filter for the phase noise measurement system.\
	The DDS was implemented in the 12 GH synthesizer as a phase noise injection device for testing purposes.<br>\
	<a href=\"https://github.com/JoshWilkins2013/BBB\" target=\"_blank\">Repository</a><br><br>\
	<div class=\"slideshow-container\">\
      <div id=\"BBBSlider\" class=\"myslides\">\
        <img src=\"img/Microsemi/BBB/BBB.png\"><p>Beaglebone Black</p>\
      </div>\
      <a class=\"prev\" onclick=\"BBBSlides(BBBSlideIndex -= 1)\"><p class=\"arrow\">&#10094;</p></a>\
      <a class=\"next\" onclick=\"BBBSlides(BBBSlideIndex += 1)\"><p class=\"arrow\">&#10095;</p></a>\
    </div>"
    var title = "<h4 style=\"color:#cc5200\">Real Time Embedded System</h4>";
    if (document.getElementById("details-title").innerHTML != title) {
        document.getElementById("details-title").innerHTML = title;
        document.getElementById("details-subtitle").innerHTML = "";
        document.getElementById("details-description").innerHTML = description;
    }
};

function AddPhase() {
	var description = "Converted the Matlab script found\
	<a href=\"https://www.mathworks.com/matlabcentral/fileexchange/8844-phase-noise?focused=5065243&tab=function&requestedDomain=www.mathworks.com\" target=\"_blank\">here</a> \
	into python to inject phase noise into any model. Useful for phase noise degradation testing and helps define its effect on allan deviation.<br>\
	<a href=\"https://github.com/JoshWilkins2013/Tools/tree/master/AddPhaseNoise\" target=\"_blank\">Repository</a>"
    var subtitle = "<h6 style=\"color:#000000\">Phase Noise Injection</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};


/******************************************/
/************** Presentations *************/
/******************************************/
function Presentations() {
	var description = "An attempt at reducing the quantization error due to signal sampling.\
	The typical SNR due to quantization error is about 6 dB per bit.\
	By preconditioning the signal, this error can be reduced to improve the SNR to about 10 dB per bit!\
	Presented the results to the engineering team in a \"lunch and learn\" meeting.<br>\
	<a href=\"https://github.com/JoshWilkins2013/JupyterNotebooks/tree/master/Work/QuantizationError\" target=\"_blank\">Repository</a>\
	/ <a href=\"https://hub.mybinder.org/user/joshwilkins2013-jupyternotebooks-3n08z26a/notebooks/Work/QuantizationError/QuantizationError.ipynb\" target=\"_blank\">Binder</a><br><br>\
    <a href=\"Storage\\Analysis\\QuantizationError.html\" target=\"_blank\"><button type=\"submit\">The Analysis</button></a>"
    var title = "<h4 style=\"color:#cc5200\">Informative Presentations</h4>";
    if (document.getElementById("details-title").innerHTML != title) {
        document.getElementById("details-title").innerHTML = title;
        document.getElementById("details-subtitle").innerHTML = "";
        document.getElementById("details-description").innerHTML = description;
    }
};

function Quantization() {
	var description = ""
	var subtitle = "<h6 style=\"color:#000000\">Minimizing Quantization Error</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function Structures() {
	var description = ""
	var subtitle = "<h6 style=\"color:#000000\">Python Data Structures</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function Pandas() {
	var description = ""
	var subtitle = "<h6 style=\"color:#000000\">Pandas</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function AllanDeviation() {
	var description = ""
	var subtitle = "<h6 style=\"color:#000000\">Allan Deviation</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};


/******************************************/
/************** Misc / Other **************/
/******************************************/
function AgileSync() {
	var description = "Created a tool that was able to sync our official Agile database with our Microsoft Access parts library.\
	Our parts library was the backend of all of our schematic designs, containing all of the part numbers and corresponding item information of all our parts.\
	The problem was that this often got outdated due to a lack of process control (we didnt have a component engineer for awhile).\
	So I wrote this tool to update all of our schematics and parts database to keep in sync with our official documentation of it."
    var subtitle = "<h6 style=\"color:#000000\">Agile Database Sync Tool</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function AltPhaseNoise() {
	var description = "An alternative phase noise measurement system for use when the phase noise of the device under test\
	is better than the noise floor of the instruments. For example, the comparison of comb generator technologies;\
	Non-linear transmission line vs the standard step recovery diode.<br>\
	<a href=\"https://github.com/JoshWilkins2013/JupyterNotebooks/tree/master/Work/AltPhaseNoiseMeasSys\" target=\"_blank\">Repository</a>\
	 / <a href=\"https://hub.mybinder.org/user/joshwilkins2013-jupyternotebooks-3n08z26a/notebooks/Work/AltPhaseNoiseMeasSys/AltPhaseNoiseMeasSys.ipynb\" target=\"_blank\">Binder</a><br><br>\
	<a href=\"Storage\\Analysis\\AltPhaseNoiseMeasSys.html\" target=\"_blank\"><button type=\"submit\">The Analysis</button></a>"
    var subtitle = "<h6 style=\"color:#000000\">Alternative Phase Noise Measurement System</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

var PCBSlideIndex = 1;
PCBSlides(PCBSlideIndex);
function PCBSlides(n) {
  var i;
  if (n > albums["PCB"].length) {PCBSlideIndex = 1}
  if (n < 1) {PCBSlideIndex = albums["PCB"].length}
  document.getElementById("PCBSlider").innerHTML = albums["PCB"][PCBSlideIndex-1];
}

function MiscPCB() {
    PCBSlideIndex = 1;
	var description = "Designed some miscellaneous PCBs including a low power synthesizer, a generic PI Filter, and some misc eval boards\
    <div class=\"slideshow-container\">\
      <div id=\"PCBSlider\" class=\"myslides\">\
        <img src=\"img/Microsemi/PCB/LowPowSynth_Board.jpg\"><p>Low Power Synthesizer</p>\
      </div>\
      <a class=\"prev\" onclick=\"PCBSlides(PCBSlideIndex -= 1)\"><p class=\"arrow\">&#10094;</p></a>\
      <a class=\"next\" onclick=\"PCBSlides(PCBSlideIndex += 1)\"><p class=\"arrow\">&#10095;</p></a>\
    </div>"
    var subtitle = "<h6 style=\"color:#000000\">Misc PCBs</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function Translate() {
	var description = "<ul><li>10 MHz translation device; a tool utilized to minutely and precisely shift the output\
	frequency of a device without greatly affecting its phase noise performance</li><li>Something else</li><ul>"
    var subtitle = "<h6 style=\"color:#000000\">10 MHz Translation Device</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function MiscStuff() {
    MiscSlideIndex = 1;
	var description = "Designed some miscellaneous PCBs including a low power synthesizer, a generic PI Filter, and some misc eval boards\
    <div class=\"slideshow-container\">\
      <div id=\"MiscSlider\" class=\"myslides\">\
        <img src=\"img/Microsemi/Misc/DividerBox.jpg\"><p>Divider Box</p>\
      </div>\
      <a class=\"prev\" onclick=\"MiscSlides(MiscSlideIndex -= 1)\"><p class=\"arrow\">&#10094;</p></a>\
      <a class=\"next\" onclick=\"MiscSlides(MiscSlideIndex += 1)\"><p class=\"arrow\">&#10095;</p></a>\
    </div>"
    var subtitle = "<h6 style=\"color:#000000\">Misc Things</h6>";
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};