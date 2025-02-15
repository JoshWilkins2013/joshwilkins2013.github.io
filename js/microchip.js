var s3bucket_path = "https://joshwilkins2013.s3.us-east-2.amazonaws.com"

var slider_div ="\
<div class=\"slideshow-container\">\
  <div class=\"mySlides\">\
    <img id=\"slider_image\" /><p id=\"slider_caption\"></p>\
  </div>\
  <a class=\"prev\" onclick=\"MicrochipSlides(MicrochipSlideIndex -= 1)\"><p class=\"arrow\">&#10094;</p></a>\
  <a class=\"next\" onclick=\"MicrochipSlides(MicrochipSlideIndex += 1)\"><p class=\"arrow\">&#10095;</p></a>\
</div>"

var albums = {
            "Microchip": [
                "/img/Microchip/CSAC.png",
                "/img/Microchip/MAC.png",
                "/img/Microchip/5071A.png",
                "/img/Microchip/5125A.png",
                "/img/Microchip/Hydrogen_Maser.png"
			],
            "Proto": [
                "/img/Microchip/Prototype/Iso.png",
                "/img/Microchip/Prototype/Front.png",
                "/img/Microchip/Prototype/Layer.png",
                "/img/Microchip/Prototype/Model.png",
                "/img/Microchip/Prototype/IAASR.png",
		    ],
		    "Synth": [
                "/img/Microchip/Synth/MicroHawkSynth.png",
                "/img/Microchip/Synth/Model.png",
                "/img/Microchip/Synth/Full_Model.png",
                "/img/Microchip/Synth/Enclosed_PCB.png",
                "/img/Microchip/Synth/Partially_Enclosed_PCB.png",
                "/img/Microchip/Synth/PLL.png",
                "/img/Microchip/Synth/DebuggingPCBA.png"
		    ],
		    "Power": [
		        "/img/Microchip/Power/Design.png",
                "/img/Microchip/Power/Results.png",
                "/img/Microchip/Power/ADL6010.png",
                "/img/Microchip/Power/ADL6010_Response.png",
                "/img/Microchip/Power/ADL6010_Bode.png",
                "/img/Microchip/Power/LTC5564.png",
                "/img/Microchip/Power/LTC5564_Response.png",
                "/img/Microchip/Power/LTC5564_Bode.png"
		    ],
		    "Filters": [
		        "/img/Microchip/Filters/Boards.png",
		        "/img/Microchip/Filters/Simulation.png",
		        "/img/Microchip/Filters/Order_Comparison.png",
		        "/img/Microchip/Filters/Results.png"
		    ],
		    "AtomicClock": [
                "/img/Microchip/AtomicClock/GUI.png"
            ],
            "Aging": [
                "/img/Microchip/AtomicClock/Aging/Aging_Predictions.png",
                "/img/Microchip/AtomicClock/Aging/Aging.png"
            ],
            "ADev": [
                "/img/Microchip/AtomicClock/ADev/Adev_Single.png",
                "/img/Microchip/AtomicClock/ADev/Adev_Multi.png"
            ],
            "Tempco": [
                "/img/Microchip/AtomicClock/Tempco/Stepped_Regions.png",
                "/img/Microchip/AtomicClock/Tempco/Hysteresis.png",
                "/img/Microchip/AtomicClock/Tempco/Tempco_Continuous.png",
                "/img/Microchip/AtomicClock/Tempco/Tempco_PolyFit.png"
            ],
            "Data": [
                "/img/Microchip/AtomicClock/DataAnalysis/FreqJumps_Temp.png",
                "/img/Microchip/AtomicClock/DataAnalysis/FreqJumps_Time.png",
                "/img/Microchip/AtomicClock/DataAnalysis/TCXO_Freq.png",
                "/img/Microchip/AtomicClock/DataAnalysis/Heartbeat.png"
            ],
            "Quantization": [
                "/img/Microchip/Quantization/Results.png",
                "/img/Microchip/Quantization/Overview.png",
                "/img/Microchip/Quantization/Sample.png",
                "/img/Microchip/Quantization/Offset.png",
                "/img/Microchip/Quantization/Phase.png",
                "/img/Microchip/Quantization/Amplitude.png",
                "/img/Microchip/Quantization/PhaseAmplitude.png",
                "/img/Microchip/Quantization/SimpleCase.png",
                "/img/Microchip/Quantization/NumBits.png",
                "/img/Microchip/Quantization/NumSamples.png"
            ],
            "PCB": [
                "/img/Microchip/PCB/Fanout_Board.png",
                "/img/Microchip/PCB/LowPowSynth_Board.png",
                "/img/Microchip/PCB/PI_Board.png",
                "/img/Microchip/PCB/PI_Layout.png",
                "/img/Microchip/PCB/10MHzOCXO_Board.png",
                "/img/Microchip/PCB/100MHzOCXO_Board.png",
                "/img/Microchip/PCB/VCO_Board.png",
                "/img/Microchip/PCB/VCO_Layout.png"
            ],
            "BBB": [
                "/img/Microchip/BBB/Program.png",
                "/img/Microchip/BBB/BBB.png",
                "/img/Microchip/BBB/DDS.png"
            ],
            "SPI": [
                "/img/Microchip/BBB/SPI/DDS_High_Level.png",
                "/img/Microchip/BBB/SPI/FTW_POW.png",
                "/img/Microchip/BBB/SPI/SPI_DDS.png",
                "/img/Microchip/BBB/SPI/Timing.png",
                "/img/Microchip/BBB/SPI/WriteCycle.png"
            ],
            "Inject": [
                "/img/Microchip/BBB/Inject/PseudoCode.png",
                "/img/Microchip/BBB/Inject/TestPOW.png",
                "/img/Microchip/BBB/Inject/TestPOW_Results.png"
            ],
            "TempDivider": [
                "/img/Microchip/Misc/DividerBox.png"
            ],
            "Other": [
                "/img/Microchip/Misc/TranslationDevice.png",
                "/img/Microchip/Misc/Box1.png",
                "/img/Microchip/Misc/Box2.png",
                "/img/Microchip/PCB/LowPowSynth_Board.png"
            ]
}

var MicrochipSlideIndex = 1;
MicrochipSlides(MicrochipSlideIndex);
function MicrochipSlides(n) {
  if (n > albums["Microchip"].length) {MicrochipSlideIndex = 1}
  if (n < 1) {MicrochipSlideIndex = albums["Microchip"].length}
  document.getElementById("slider_image").src = s3bucket_path + albums["Microchip"][MicrochipSlideIndex-1];
}

/******************************************/
/*************** Synthesizer **************/
/******************************************/
function SynthSlides(n) {
  if (n > albums["Synth"].length) {MicrochipSlideIndex = 1}
  if (n < 1) {MicrochipSlideIndex = albums["Synth"].length}
  document.getElementById("slider_image").src = s3bucket_path + albums["Synth"][MicrochipSlideIndex-1];
}

function Synthesizer() {
    MicrochipSlideIndex = 1;
	var description = "A synthesizer is an electronic device that produces a range of frequencies from a single \
	reference frequency. In simple terms for this application, the synthesizer took a stable low-frequency os cillator \
	and scaled its frequency to that of the natural oscillation frequency of the atoms in an atomic clock. When used \
	this way, it is crucial to minimize sources of noise introduced into the system. To achieve this, I designed \
	this synthesizer with two cascaded Phase-Locked Loops (PLLs), effectively reducing phase noise and \
	ensuring high precision.<br><br>"
    document.getElementById("details-title").innerHTML = "12 GHz Synthesizer";
    document.getElementById("details-subtitle").innerHTML = "";
    document.getElementById("details-description").innerHTML = description + slider_div.replaceAll("MicrochipSlides", "SynthSlides");
    SynthSlides(1);
}

function ProtoSlides(n) {
  if (n > albums["Proto"].length) {MicrochipSlideIndex = 1}
  if (n < 1) {MicrochipSlideIndex = albums["Proto"].length}
  document.getElementById("slider_image").src = s3bucket_path + albums["Proto"][MicrochipSlideIndex-1];
}

function Prototype() {
    MicrochipSlideIndex = 1;
	var description = "To verify the device's functionality, a prototype was assembled using evaluation boards from\
	various vendors. These boards were placed on interchangeable EMI-shielded shelves and linked via RF cables.\
	The required I/O was managed by a Beaglebone Black. After confirming the device\'s performance, the design was\
	updated to include modular EMI-shielded PCBs, allowing for future replacement of specific components to\
	facilitate potential performance enhancements.<br><br>"
    document.getElementById("details-subtitle").innerHTML = "Full Scale Prototype";
    document.getElementById("details-description").innerHTML = description + slider_div.replaceAll("MicrochipSlides", "ProtoSlides");
    ProtoSlides(1);
};

function PowerSlides(n) {
  if (n > albums["Power"].length) {MicrochipSlideIndex = 1}
  if (n < 1) {MicrochipSlideIndex = albums["Power"].length}
  document.getElementById("slider_image").src = s3bucket_path + albums["Power"][MicrochipSlideIndex-1];
}

function OutputPower() {
    MicrochipSlideIndex = 1;
	var description = "This synthesizer required a substantial output power (nearly 1W) to effectively radiate \
	the output frequency across the atoms of an atomic clock. It also needed to be both adjustable and stable. \
	To address these requirements, I developed an analog Automatic Gain Controller (AGC), combining an envelope \
	detector with an adjustable feedback controller. This design ensured precise regulation and stabilization \
	while maximizing the potential output power.<br><br>\
	<button type=\"submit\" class=\"submit\"><a onclick=\"OutputPowerAnalysis()\" href=\"javascript:;\">Analysis</a></button><br><br>"
    document.getElementById("details-subtitle").innerHTML = "Output Power Controller";
    document.getElementById("details-description").innerHTML = description + slider_div.replaceAll("MicrochipSlides", "PowerSlides");
    PowerSlides(1);
};

function OutputPowerAnalysis() {
    var description = "This synthesizer required a substantial output power (nearly 1W) to effectively radiate \
	the output frequency across the atoms of an atomic clock. It also needed to be both adjustable and stable. \
	To address these requirements, I developed an analog Automatic Gain Controller (AGC), combining an envelope \
	detector with an adjustable feedback controller. This design ensured precise regulation and stabilization \
	while maximizing the potential output power.<br><br>\
	<iframe src=\"Storage\\Microchip\\OutputPowerController.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("details-description").innerHTML = description;
}

function PCBSlides(n) {
  if (n > albums["PCB"].length) {MicrochipSlideIndex = 1}
  if (n < 1) {MicrochipSlideIndex = albums["PCB"].length}
  document.getElementById("slider_image").src = s3bucket_path + albums["PCB"][MicrochipSlideIndex-1];
}

function Boards() {
    MicrochipSlideIndex = 1;
	var description = "While working on the synthesizer, I had to develop quite a few prototype boards to test the \
	performance of the sub-circuits and components. This included a generic PI Filter board for the PLLs and AGC \
	and an active power splitter board to distribute the reference oscillator to other parts of the system. \
    I also developed boards to simplify the interchangeability of components such as the reference oscillator.<br><br>"
    document.getElementById("details-subtitle").innerHTML = "Associated Board Spins";
    document.getElementById("details-description").innerHTML = description + slider_div.replaceAll("MicrochipSlides", "PCBSlides");
    PCBSlides(1);
};

function TempDividerSlides(n) {
  if (n > albums["TempDivider"].length) {MicrochipSlideIndex = 1}
  if (n < 1) {MicrochipSlideIndex = albums["TempDivider"].length}
  document.getElementById("slider_image").src = s3bucket_path + albums["TempDivider"][MicrochipSlideIndex-1];
}

function TempDependence() {
    MicrochipSlideIndex = 1;
	var description = "Given the extreme precision required for atomic clocks, environmental factors significantly \
	affect their performance. With this in mind, I first characterized the temperature dependency of the synthesizer \
	by approximating the impact of the suspected primary contributor: a high-Q bandpass filter. Once the synthesizer \
	was completed, this approximation was replaced with more accurate measurements of the entire system using a \
	temperature chamber. The temperature dependency was largely mitigated and corrected through a custom-designed \
	add-on device, which extracted the cleanest signal from the synthesizer and digitally tuned the temperature \
	dependency out.<br><br>\
	<button type=\"submit\" class=\"submit\"><a onclick=\"TempDependenceAnalysis()\" href=\"javascript:;\">Analysis</a></button><br><br>\
	<img src=\"https://joshwilkins2013.s3.us-east-2.amazonaws.com/img/Microchip/Misc/DividerBox.png\" width=100%><p>Divider Box</p>"
    document.getElementById("details-subtitle").innerHTML = "Temperature Dependency Testing";
    document.getElementById("details-description").innerHTML = description;
};

function TempDependenceAnalysis() {
    var description = "Given the extreme precision required for atomic clocks, environmental factors significantly \
	affect their performance. With this in mind, I first characterized the temperature dependency of the synthesizer \
	by approximating the impact of the suspected primary contributor: a high-Q bandpass filter. Once the synthesizer \
	was completed, this approximation was replaced with more accurate measurements of the entire system using a \
	temperature chamber. The temperature dependency was largely mitigated and corrected through a custom-designed \
	add-on device, which extracted the cleanest signal from the synthesizer and digitally tuned the temperature \
	dependency out.<br><br>\
	<iframe src=\"Storage\\Microchip\\TemperatureDependence.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("details-description").innerHTML = description;
}

function FilterSlides(n) {
  if (n > albums["Filters"].length) {MicrochipSlideIndex = 1}
  if (n < 1) {MicrochipSlideIndex = albums["Filters"].length}
  document.getElementById("slider_image").src = s3bucket_path + albums["Filters"][MicrochipSlideIndex-1];
}

function Filters() {
    MicrochipSlideIndex = 1;
	var description = "Many electronic components are sensitive to temperature deviations. In some devices, this\
	sensitivity is negligible and may not alter the capabilities of the device. However, atomic clocks are very\
	precise devices and this sensitivity is a major concern. In an attempt to reduce this sensitivity, a temperature\
	compensation (tempco) algorithm had been implemented. To tune this algorithm, I wrote a script that takes in\
	the temperature ramp (stepped or continuous) and generates the corresponding coefficients to best fit the tempco\
	profile.<br><br>"
    document.getElementById("details-subtitle").innerHTML = "Microstrip Filter Designs";
    document.getElementById("details-description").innerHTML = description + slider_div.replaceAll("MicrochipSlides", "FilterSlides");
    FilterSlides(1);
};

/******************************************/
/************ Atomic Clock GUI ************/
/******************************************/
function AtomicClockSlides(n) {
  if (n > albums["AtomicClock"].length) {MicrochipSlideIndex = 1}
  if (n < 1) {MicrochipSlideIndex = albums["AtomicClock"].length}
  document.getElementById("slider_image").src = s3bucket_path + albums["AtomicClock"][MicrochipSlideIndex-1];
}

function AtomicClock() {
    MicrochipSlideIndex = 1;
    var description = "The atomic clocks developed at Microchip produced vast amounts of data, often at rates of \
    several hundred times per second. This data included parameters such as output frequency, environmental factors, \
    and internal calculations. To effectively manage and utilize this information, I designed a user interface that \
    allowed for real-time viewing and analysis. A key feature of this tool was its integration of statistical methods \
    to calculate important clock attributes, such as Allan deviation, aging rates, and lock times. This provided a \
    more efficient and accurate way of determining clock performance on a larger scale. Additionally, the GUI \
    facilitated the enhancement and testing of temperature compensation algorithms and offered easy access \
    to plot specific datasets, such as board temperature and frequency.<br><br>\
    <img src=\"https://joshwilkins2013.s3.us-east-2.amazonaws.com/img/Microchip/AtomicClock/GUI.png\" width=75%><p>User Interface</p>"
    document.getElementById("details-title").innerHTML = "Atomic Clock GUI";
    document.getElementById("details-subtitle").innerHTML = "";
    document.getElementById("details-description").innerHTML = description;
}

function AgingSlides(n) {
  if (n > albums["Aging"].length) {MicrochipSlideIndex = 1}
  if (n < 1) {MicrochipSlideIndex = albums["Aging"].length}
  document.getElementById("slider_image").src = s3bucket_path + albums["Aging"][MicrochipSlideIndex-1];
}

function Aging() {
    MicrochipSlideIndex = 1;
	var description = "Certain components, such as oscillators or the vapor cell/gas mixtures in an atomic clock, \
	undergo behavioral changes over time, a phenomenon known as aging. In the context of timing and frequency, \
	aging specifically refers to the gradual change in frequency over time. Typically, atomic clocks are placed on \
	racks and allowed to \"age\" until this effect stabilizes. In production environments, it is crucial to \
	understand how long this process will take. This script was developed to estimate the aging rate of our \
	products.<br><br>"
    document.getElementById("details-subtitle").innerHTML = "Predicting Long Term Aging Rates";
    document.getElementById("details-description").innerHTML = description + slider_div.replaceAll("MicrochipSlides", "AgingSlides");
    AgingSlides(1);
};

function ADevSlides(n) {
  if (n > albums["ADev"].length) {MicrochipSlideIndex = 1}
  if (n < 1) {MicrochipSlideIndex = albums["ADev"].length}
  document.getElementById("slider_image").src = s3bucket_path + albums["ADev"][MicrochipSlideIndex-1];
}

function ADev() {
    MicrochipSlideIndex = 1;
	var description = "The atomic clocks at Microchip continuously generated vast amounts of data, leading to a \
	backlog of unused data from units already deployed in the field. Given the time required to obtain an accurate \
	Allan deviation measurement from a device, it became necessary to develop an alternative approach for \
	determining this metric. I addressed this by averaging the Allan deviation from several shorter measurements, \
	which helped reduce variance and improve the accuracy of the results. While this approach was more complex \
	than simply averaging a few numbers or vectors, it proved to be effective and worked as expected.<br><br>"
    document.getElementById("details-subtitle").innerHTML = "Long Term ADev Rates";
    document.getElementById("details-description").innerHTML = description + slider_div.replaceAll("MicrochipSlides", "ADevSlides");
    ADevSlides(1);
};

function TempcoSlides(n) {
  if (n > albums["Tempco"].length) {MicrochipSlideIndex = 1}
  if (n < 1) {MicrochipSlideIndex = albums["Tempco"].length}
  document.getElementById("slider_image").src = s3bucket_path + albums["Tempco"][MicrochipSlideIndex-1];
}

function Tempco() {
    MicrochipSlideIndex = 1;
	var description = "Many electronic components are sensitive to temperature deviations. In some devices, this\
	sensitivity is negligible and may not alter the capabilities of the device. However, atomic clocks are very\
	precise devices and this sensitivity is a major concern. In an attempt to reduce this sensitivity, a temperature\
	compensation (tempco) algorithm had been implemented. To tune this algorithm, I wrote a script that takes in\
	the temperature ramp (stepped or continuous) and generates the corresponding coefficients to best fit the tempco\
	profile.<br><br>\
	<a onclick=\"TempcoAnalysis()\" href=\"javascript:;\"><button type=\"submit\" class=\"submit\">Analysis</button></a><br><br>"
    document.getElementById("details-subtitle").innerHTML = "Temperature Compensation";
    document.getElementById("details-description").innerHTML = description + slider_div.replaceAll("MicrochipSlides", "TempcoSlides");
    TempcoSlides(1);
};

function TempcoAnalysis() {
    var description = "Many electronic components are sensitive to temperature deviations. In some devices, this\
	sensitivity is negligible and may not alter the capabilities of the device. However, atomic clocks are very\
	precise devices and this sensitivity is a major concern. In an attempt to reduce this sensitivity, a temperature\
	compensation (tempco) algorithm had been implemented. To tune this algorithm, I wrote a script that takes in\
	the temperature ramp (stepped or continuous) and generates the corresponding coefficients to best fit the tempco\
	profile.<br><br>\
	<iframe src=\"Storage\\Microchip\\SteppedInputResponse.html\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("details-description").innerHTML = description;
}

function DataSlides(n) {
  if (n > albums["Data"].length) {MicrochipSlideIndex = 1}
  if (n < 1) {MicrochipSlideIndex = albums["Data"].length}
  document.getElementById("slider_image").src = s3bucket_path + albums["Data"][MicrochipSlideIndex-1];
}

function DataAnalysis() {
    MicrochipSlideIndex = 1;
	var description = "During the development of one of the atomic clocks at Microchip, there were several points \
	where production could have been halted. However, my tool identified these issues early on. The key \
	requirement for these atomic clocks is a precisely generated frequency, and my tool continuously monitored \
	the data for any significant jumps or spikes. This allowed me to characterize the issues and identify their \
	root causes. For example, one issue was traced back to a change in the manufacturing process of the on-board \
	TCXO, while another was linked to an internal tracking algorithm within the atomic clock.<br><br>"
    document.getElementById("details-subtitle").innerHTML = "Data Analysis";
    document.getElementById("details-description").innerHTML = description + slider_div.replaceAll("MicrochipSlides", "DataSlides");
    DataSlides(1);
};


/******************************************/
/************** Embedded Prog *************/
/******************************************/
function BBBSlides(n) {
  if (n > albums["BBB"].length) {MicrochipSlideIndex = 1}
  if (n < 1) {MicrochipSlideIndex = albums["BBB"].length}
  document.getElementById("slider_image").src = s3bucket_path + albums["BBB"][MicrochipSlideIndex-1];
}

function Embedded() {
    MicrochipSlideIndex = 1;
	var description = "The BeagleBone Black is a microprocessor equipped with Programmable Real-Time Units (PRUs), \
	which are dedicated controllers with deterministic latency. These PRUs are unaffected by other processes on the \
	board, ensuring uninterrupted execution of commands. They are typically programmed in low-level C or assembly. \
	I leveraged them to gain precise control over a Direct Digital Synthesizer (DDS) for a phase noise injection \
	device and a Digital-to-Analog Converter (DAC) for a phase noise measurement system that was created using a \
	low-bandwidth, programmable digital PI filter.<br><br>\
	<a href=\"https://github.com/JoshWilkins2013/BBB\" target=\"_blank\">Repository</a><br><br>"
    document.getElementById("details-title").innerHTML = "Real Time Embedded System";
    document.getElementById("details-subtitle").innerHTML = "";
    document.getElementById("details-description").innerHTML = description + slider_div.replaceAll("MicrochipSlides", "BBBSlides");
    BBBSlides(1);
};

function SPISlides(n) {
  if (n > albums["SPI"].length) {MicrochipSlideIndex = 1}
  if (n < 1) {MicrochipSlideIndex = albums["SPI"].length}
  document.getElementById("slider_image").src = s3bucket_path + albums["SPI"][MicrochipSlideIndex-1];
}

function SPI() {
    MicrochipSlideIndex = 1;
	var description = "Using the PRUs on the Beaglebone Black, I created a generic SPI communication protocol \
	interface in low-level assembly code to communicate to the AD9912 DDS and the LTC2601 DAC. I abstracted the \
	assembly code into macros to avoid redundancy within the code and to encourage configurability. The SPI \
	communication protocol was a critical part of this real-time embedded system and provided the basis for \
	all of the other tools I created on the Beaglebone Black PRUs.<br><br>"
    document.getElementById("details-subtitle").innerHTML = "Generic SPI Communication Protocol";
    document.getElementById("details-description").innerHTML = description + slider_div.replaceAll("MicrochipSlides", "SPISlides");
    SPISlides(1);
};

function AltPhaseNoise() {
	var description = "I employed an alternative approach for measuring phase noise when the performance of \
	the device I was testing exceeded the capabilities of our instruments. One such instance was when I compared \
	the performance of two different comb generator technologies: a non-linear transmission line and a standard \
	step recovery diode.<br><br>\
	<a href=\"https://github.com/JoshWilkins2013/JupyterNotebooks/tree/master/Work/AltPhaseNoiseMeasSys\" target=\"_blank\">Repository</a><br><br>\
	<iframe src=\"Storage/Microchip/AltPhaseNoiseMeasSys.html\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("details-subtitle").innerHTML = "Phase Noise Measurement System";
    document.getElementById("details-description").innerHTML = description;
};

function InjectSlides(n) {
  if (n > albums["Inject"].length) {MicrochipSlideIndex = 1}
  if (n < 1) {MicrochipSlideIndex = albums["Inject"].length}
  document.getElementById("slider_image").src = s3bucket_path + albums["Inject"][MicrochipSlideIndex-1];
}

function AddPhase() {
    MicrochipSlideIndex = 1;
	var description = "I created a phase noise generator tool that could create any model of noise and inject it \
	into any system. This generator helped simulate, quantify, and understand the effects of phase noise and allowed \
	more robust systems to be created. It also helped define the underlying effect phase noise has on allan deviation.<br><br>\
	<a href=\"https://github.com/JoshWilkins2013/Tools/tree/master/AddPhaseNoise\" target=\"_blank\">Repository</a><br><br>"
    document.getElementById("details-subtitle").innerHTML = "Phase Noise Profile Generator";
    document.getElementById("details-description").innerHTML = description + slider_div.replaceAll("MicrochipSlides", "InjectSlides");
    InjectSlides(1);
};


/******************************************/
/************** Presentations *************/
/******************************************/
function QuantizationSlides(n) {
  if (n > albums["Quantization"].length) {MicrochipSlideIndex = 1}
  if (n < 1) {MicrochipSlideIndex = albums["Quantization"].length}
  document.getElementById("slider_image").src = s3bucket_path + albums["Quantization"][MicrochipSlideIndex-1];
}

function Quantization() {
    MicrochipSlideIndex = 1;
	var description = "Sampling a signal introduces rounding errors, which arise from the difference between the \
	actual signal value and the measurable value. The magnitude of this error is directly proportional to both the \
	resolution, or number of bits, used to measure the signal as well as the number of sampling points.	I created \
	this presentation in an attempt to illustrate that quantization noise can be reduced within a system. In fact, \
	the typical SNR due to quantization error is about 6 dB per bit, but by preconditioning the signal, this error \
	can be reduced to improve the SNR to about 10 dB per bit!<br><br>\
	<a onclick=\"QuantizationAnalysis()\" href=\"javascript:;\"><button type=\"submit\" class=\"submit\">Analysis</button></a><br><br>"
    document.getElementById("details-title").innerHTML = "Informative Presentations";
    document.getElementById("details-subtitle").innerHTML = "Minimizing Quantization Error";
    document.getElementById("details-description").innerHTML = description + slider_div.replaceAll("MicrochipSlides", "QuantizationSlides");
    QuantizationSlides(1);
};

function QuantizationAnalysis() {
	var description = "Sampling a signal introduces rounding errors, which arise from the difference between the \
	actual signal value and the measurable value. The magnitude of this error is directly proportional to both the \
	resolution, or number of bits, used to measure the signal as well as the number of sampling points.	I created \
	this presentation in an attempt to illustrate that quantization noise can be reduced within a system. In fact, \
	the typical SNR due to quantization error is about 6 dB per bit, but by preconditioning the signal, this error \
	can be reduced to improve the SNR to about 10 dB per bit!<br><br>\
	<iframe src=\"Storage/Microchip/QuantizationError.html\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("details-description").innerHTML = description;
};

function Structures() {
	var description = "Python is an extremely useful too in any engineers belt. During this presentation, I tried \
	to breifly cover just about everything a beginner could find useful when starting to learn the Python \
	programming language. I go through each data type including lists, dictionaries, and strings as well as the most \
	useful methods associated with each data type. I also introduce more complex topics such as the concept of \
	control flow, lambda functions, generators,	and exception handling.<br><br>\
	<iframe src=\"Storage/Microchip/Structures.html\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("details-title").innerHTML = "Informative Presentations";
    document.getElementById("details-subtitle").innerHTML = "Python Data Structures";
    document.getElementById("details-description").innerHTML = description;
};

function Jupyter() {
	var description = "Python, combined with a documentation or reporting tool, significantly enhances team \
	collaboration and idea generation. Jupyter Notebooks, in particular, is a valuable tool, and I’ve created \
	a notebook to cover its basics, including installation and usage. Co-written with a colleague, this notebook \
	introduces Python, Jupyter, and Anaconda, offering useful references, installation guidance, and examples of \
	Markdown, Python, and Magic commands..<br><br>\
	<iframe src=\"Storage/Microchip/Jupyter.html\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("details-title").innerHTML = "Informative Presentations";
    document.getElementById("details-subtitle").innerHTML = "Introduction to Jupyter";
    document.getElementById("details-description").innerHTML = description;
};


/******************************************/
/************** Misc / Other **************/
/******************************************/
function AgileSync() {
	var description = "I developed a tool to synchronize our official Agile Product Lifecycle Management (PLM)\
	database with the Mentor Graphics parts library, which served as the backend for all our schematic designs.\
	These libraries contained part numbers and component details, but they were frequently outdated due to a lack\
	of process control, particularly in the absence of a component engineer for some time. To address this, I wrote\
	a script using python and SQL that automatically updated both our schematics and parts database to ensure they\
	remained aligned with the official documentation. While Agile offers a more feature-rich $500K solution, my\
	script efficiently handled the task and kept everything in sync."
    document.getElementById("details-title").innerHTML = "Noteworthy Mentions";
    document.getElementById("details-subtitle").innerHTML = "Agile Database Sync Tool";
    document.getElementById("details-description").innerHTML = description;
};

function Other() {
	var description = "I contributed to multiple areas of product development and testing, including refreshing\
	outdated products and supporting the transition from ROHS2 to ROHS3 using Silicon Expert. I also assisted in\
	the research and development of g-compensated and low-noise atomic clocks. In addition, I developed Python\
	tools to control various instruments and performed testing across multiple facilities, including proton\
	radiation testing at UC Davis and EMI radiation testing at Chomerics. I also designed a low-power synthesizer\
	that prioritized energy efficiency over performance and integrated real instrument data into simulations for\
	accuracy using Python and Jupyter Notebook.<br><br>"
    document.getElementById("details-title").innerHTML = "Noteworthy Mentions";
    document.getElementById("details-subtitle").innerHTML = "Secondary Job Functions";
    document.getElementById("details-description").innerHTML = description;
};