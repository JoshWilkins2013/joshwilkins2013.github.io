var album = ["<img src=\"img/Microsemi/CSAC.png\"><p>CSAC</p>",
			"<img src=\"img/Microsemi/MAC.png\"><p>MAC</p>",
			"<img src=\"img/Microsemi/5071A.jpg\"><p>5071A Cs Atomic Clock</p>",
			"<img src=\"img/Microsemi/5125A.jpg\"><p>Phase Noise Test Set</p>",
			]

var MicrosemiSlideIndex = 1;
MicrosemiSlides(MicrosemiSlideIndex);
function MicrosemiSlides(n) {
  var i;
  if (n > album.length) {MicrosemiSlideIndex = 1}
  if (n < 1) {MicrosemiSlideIndex = album.length}
  document.getElementById("MicrosemiSlider").innerHTML = album[MicrosemiSlideIndex-1];
}

function task1() {
	var description = "Designed and assembled a high frequency synthesizer by implementing a cascaded PLL with an output power level controller.\
    It was optimized to minimize phase noise and the results were over 10 times better than commercially available components.\
    The enclosure was created using interchangeable RF shielded rack mount units to minimize EMI effects.\
    Was also responsible for the design of the internal layout, front panel components, and the final build and assembly.<br><br>\
    <img src=\"img\\Work_Related\\Synth\\Iso.jpg\" width=50%>"
	document.getElementById("details-title").innerHTML = "<h5 style=\"color:#cc5200\">High Frequency Synthesizer</h5>";
    document.getElementById("details-description").innerHTML = description;
};

function task2() {
	var description = "Wrote a script that, given a stepped input (such as a step and hold temperature ramp), the outputs (transient responses) at the 'hold' regions\
	were captured. Additionally, the transient responses are averaged and captured for the instances where you might need it, like a temperature compensation algorithm.\
	Made generic for any type of input; temperature, voltage, current, etc.<br>\
	<a href=\"https://github.com/JoshWilkins2013/JupyterNotebooks/tree/master/Work/SteppedInputResponse\" target=\"_blank\">Repository</a>\
	 / <a href=\"https://hub.mybinder.org/user/joshwilkins2013-jupyternotebooks-ril0ch9o/notebooks/Work/SteppedInputResponse/SteppedInputResponse.ipynb\" target=\"_blank\">Binder</a><br><br>\
	<a href=\"Storage\\Analysis\\SteppedInputResponse.html\" target=\"_blank\"><button type=\"submit\">The Analysis</button></a>"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<h5 style=\"color:#cc5200\">Step Response Analysis</h5>";
};

function task3() {
	var description = "An attempt at reducing the quantization error due to signal sampling.\
	The typical SNR due to quantization error is about 6 dB per bit.\
	By preconditioning the signal, this error can be reduced to improve the SNR to about 10 dB per bit!\
	Presented the results to the engineering team in a \"lunch and learn\" meeting.<br>\
	<a href=\"https://github.com/JoshWilkins2013/JupyterNotebooks/tree/master/Work/QuantizationError\" target=\"_blank\">Repository</a>\
	/ <a href=\"https://hub.mybinder.org/user/joshwilkins2013-jupyternotebooks-jlcwovy7/notebooks/Work/QuantizationError/QuantizationError.ipynb\" target=\"_blank\">Binder</a><br><br>\
    <a href=\"Storage\\Analysis\\QuantizationError.html\" target=\"_blank\"><button type=\"submit\">The Analysis</button></a>"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<h5 style=\"color:#cc5200\">Quantization Error</h5>";
};

function task4() {
	var description = "Utilized the programmable real-time units on the Beaglebone Black to interface with the AD9912 DDS and a DAC via SPI communication.\
	The DAC was implemented in a programmable, low bandwidth, digital PI filter for the phase noise measurement system.\
	The DDS was implemented in the 12 GH synthesizer as a phase noise injection device for testing purposes.<br>\
	<a href=\"https://github.com/JoshWilkins2013/BBB\" target=\"_blank\">Repository</a>"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<h5 style=\"color:#cc5200\">Beaglebone Black</h5>";
};

function task5() {
	var description = "Created a tool that was able to sync our official Agile database with our Microsoft Access parts library.\
	Our parts library was the backend of all of our schematic designs, containing all of the part numbers and corresponding item information of all our parts.\
	The problem was that this often got outdated due to a lack of process control (we didnt have a component engineer for awhile).\
	So I wrote this tool to update all of our schematics and parts database to keep in sync with our official documentation of it."
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<h5 style=\"color:#cc5200\">Agile Database Sync Tool</h5>";
};

function task6() {
	var description = "Created an adjustable output power stabalizer cirucit by utilizing an envelope detector.\
	Additionally maximized the output power level through the selection of components<br>\
	<a href=\"https://github.com/JoshWilkins2013/JupyterNotebooks/tree/master/Work/OutputPowerController\" target=\"_blank\">Repository</a>\
	/ <a href=\"https://hub.mybinder.org/user/joshwilkins2013-jupyternotebooks-jlcwovy7/notebooks/Work/OutputPowerController/OutputPowerController.ipynb\" target=\"_blank\">Binder</a><br><br>\
	<a href=\"Storage\\Analysis\\OutputPowerController.html\" target=\"_blank\"><button type=\"submit\">The Analysis</button></a>"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<h5 style=\"color:#cc5200\">Output Power Level Controller</h5>";
};

function task7() {
	var description = "An alternative phase noise measurement system for use when the phase noise of the device under test\
	is better than the noise floor of the instruments. For example, the comparison of comb generator technologies;\
	Non-linear transmission line vs the standard step recovery diode.<br>\
	<a href=\"https://github.com/JoshWilkins2013/JupyterNotebooks/tree/master/Work/AltPhaseNoiseMeasSys\" target=\"_blank\">Repository</a>\
	 / <a href=\"https://hub.mybinder.org/user/joshwilkins2013-jupyternotebooks-jlcwovy7/notebooks/Work/AltPhaseNoiseMeasSys/AltPhaseNoiseMeasSys.ipynb\" target=\"_blank\">Binder</a><br><br>\
	<a href=\"Storage\\Analysis\\AltPhaseNoiseMeasSys.html\" target=\"_blank\"><button type=\"submit\">The Analysis</button></a>"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<h5 style=\"color:#cc5200\">Alternative Phase Noise Measurement System</h5>";
};

function task8() {
	var description = "Characterizing the temperature dependency of the synthesizer. Approximated by characterizing\
	its largest contributor, a bandpass filter.<br>\
	<a href=\"https://github.com/JoshWilkins2013/JupyterNotebooks/tree/master/Work/TemperatureDependence\" target=\"_blank\">Repository</a>\
	 / <a href=\"https://hub.mybinder.org/user/joshwilkins2013-jupyternotebooks-jlcwovy7/notebooks/Work/TemperatureDependence/TemperatureDependence.ipynb\" target=\"_blank\">Binder</a><br><br>\
	<a href=\"Storage\\Analysis\\TemperatureDependence.pdf\" target=\"_blank\"><button type=\"submit\">PDF</button></a>"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<h5 style=\"color:#cc5200\">Temperature Dependency Testing</h5>";
};

function task9() {
	var description = "Converted the Matlab script found\
	<a href=\"https://www.mathworks.com/matlabcentral/fileexchange/8844-phase-noise?focused=5065243&tab=function&requestedDomain=www.mathworks.com\" target=\"_blank\">here</a> \
	into python to inject phase noise into any model. Useful for phase noise degradation testing and helps define its effect on allan deviation.<br>\
	<a href=\"https://github.com/JoshWilkins2013/AddPhaseNoise\" target=\"_blank\">Repository</a>"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<h5 style=\"color:#cc5200\">Phase Noise Injection</h5>";
};

