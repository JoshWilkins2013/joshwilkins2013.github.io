var albums = {
            "Safran": [
                "<img src=\"img/Safran/Wavefront.png\"><p>Broadsim Wavefront</p>",
                "<img src=\"img/Safran/Anechoic.png\"><p>Broadsim Anechoic</p>",
                "<img src=\"img/Safran/Broadsim.png\"><p>Broadsim</p>",
                "<img src=\"img/Safran/Broadsim_Duo.png\"><p>Broadsim Duo</p>",
                "<img src=\"img/Safran/SecureSync.png\"><p>Secure Sync</p>",
                "<img src=\"img/Safran/Skydel.png\"><p>Skydel Simulation Software</p>"
			],
			"Pentek": [
                "<img src=\"img/Safran/Pentek/Radio.png\"><p>Pentek Radio</p>",
                "<img src=\"img/Safran/Pentek/Architecture.png\"><p>Pentek Architecture</p>"
			]
}

var SafranSlideIndex = 1;
SafranSlides(SafranSlideIndex);
function SafranSlides(n) {
  if (n > albums["Safran"].length) {SafranSlideIndex = 1}
  if (n < 1) {SafranSlideIndex = albums["Safran"].length}
  document.getElementById("SafranSlider").innerHTML = albums["Safran"][SafranSlideIndex-1];
}

function TestSuite() {
    var description = "	I developed and fully automated a comprehensive suite of test procedures to validate the \
	RF performance of the entire Broadsim product line. The system was designed to support the testing of all \
	existing products as well as any new radios that could potentially be installed or used in future designs. \
	It also generated extremely detailed reports with consistent formatting and it highlighted key performance \
	metrics. These reports were used internally to refine system design and used externally to foster \
	transparency and trust with potential buyers. This tool also played a crucial role in the development \
	of an accurate and competitive specification sheet, making it easier for consumers to compare our \
	product with others. This initiative had a significant financial impact, influencing multi-million \
	dollar sales.<br><br>"
	var title = "Broadsim Automated Test Suite";
	var subtitle = "";
    document.getElementById("details-title").innerHTML = title;
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function MetricDefinition() {
	var description = "During my time at Safran, I observed a general lack of RF knowledge and an overall poor \
	understanding of the products they sold. Many of the products had sparse datasheets, and the specifications \
	were often inconsistent in both terminology and accuracy. I took the initiative to identify the relevant \
	performance metrics, standardize the terminology, and establish consistent testing methods to create reliable \
	and coherent specification sheets for the products.<br><br>\
	In the process, it became clear that this issue extended beyond our company and was common across many similar \
	products in the market. Key performance metrics were often overlooked or poorly defined. To address this, I \
	developed and submitted a paper to IEEE to help clarify these metrics, raise awareness of the issue, and \
	demonstrate how some of these tests could be conducted without relying on expensive equipment.<br><br>\
	<button type=\"submit\" class=\"submit\"><a onclick=\"IEEE_Report()\" href=\"javascript:;\">Intra-Signal Metrics</a></button>"
	var title = "Broadsim Automated Test Suite";
	var subtitle = "Metric Definition";
	document.getElementById("details-title").innerHTML = title;
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function IEEE_Report() {
    var description = "During my time at Safran, I observed a general lack of RF knowledge and an overall poor \
	understanding of the products they sold. Many of the products had sparse datasheets, and the specifications \
	were often inconsistent in both terminology and accuracy. I took the initiative to identify the relevant \
	performance metrics, standardize the terminology, and establish consistent testing methods to create reliable \
	and coherent specification sheets for the products.<br><br>\
	In the process, it became clear that this issue extended beyond our company and was common across many similar \
	products in the market. Key performance metrics were often overlooked or poorly defined. To address this, I \
	developed and submitted a paper to IEEE to help clarify these metrics, raise awareness of the issue, and \
	demonstrate how some of these tests could be conducted without relying on expensive equipment.<br><br>\
    <iframe src=\"Storage\\Safran\\IEEE_Report.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("details-description").innerHTML = description;
}

function ReportGeneration() {
	var description = "After identifying the appropriate test metrics for our products, I developed several test \
	procedures to measure and validate their performance. These procedures were then automated making the \
	tests more efficient, detailed, and consistent. This also enabled us to quickly validate products before \
	shipment and provided a more accurate representation of each unit\'s performance, as opposed to relying \
	on a generic spec sheet. Below is an example of one of these reports, with the PDF organized by metric.<br><br>\
	<button type=\"submit\" class=\"submit\"><a onclick=\"WF_Report()\" href=\"javascript:;\">Example Report</a></button>"
	var title = "Broadsim Automated Test Suite";
	var subtitle = "Report Generation";
	document.getElementById("details-title").innerHTML = title;
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function WF_Report() {
    var description = "After identifying the appropriate test metrics for our products, I developed several test \
	procedures to measure and validate their performance. These procedures were then automated making the \
	tests more efficient, detailed, and consistent. This also enabled us to quickly validate products before \
	shipment and provided a more accurate representation of each unit\'s performance, as opposed to relying \
	on a generic spec sheet. Below is an example of one of these reports, with the PDF organized by metric.<br><br>\
    <iframe src=\"Storage\\Safran\\Wavefront_Report.pdf#view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("details-description").innerHTML = description;
}

function InstrumentAutomation() {
	var description = "Automating test procedures requires controlling both the hardware of the device under test \
	and managing the tools and instruments used for testing it. Fortunately, the API\'s for our products were written \
	well and there is a loose instrument control standard using PyVISA and SCPI commands. I leveraged these \
	foundations to develop generic product and instrument libraries capable of interacting with and control most \
	of our products and test equipment.<br><br>"
	var title = "Broadsim Automated Test Suite";
	var subtitle = "Automating Hardware";
	document.getElementById("details-title").innerHTML = title;
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function Wavefront_Enhancement() {
	var description = "The Broadsim Wavefront is a multi-million dollar system that serves as the front end \
	of Skydel\'s GNSS simulator, bridging the gap between a simulated environment and the real world. It can simulate \
	hundreds of signals, representing satellites, jammers, spoofers, and more, across multiple elements. One key \
	application is its ability to precisely test Controlled Reception Pattern Antennas (CRPAs).<br><br>\
	During my time at Safran, I significantly enhanced various aspects of the Broadsim Wavefront. I redesigned the \
	architecture to implement a shared LO distribution system, improved inter-element signal performance, and \
	introduced a more efficient method for phase alignment calibration across frequency and power. Additionally, \
	I updated the real-time phase calibration process to compensate for inter-element phase drift and temperature \
	variations. After all improvements were made, the Broadsim Wavefront could be fully aligned to within 0.25 degrees \
	over time, temperature, power, and frequency with a phase stability of 0.1 degrees!<br><br>"
	var title = "Broadsim Wavefront Enhancements";
	var subtitle = "";
	document.getElementById("details-title").innerHTML = title;
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function Shared_LO() {
	var description = "When I first joined Safran, I noticed that the Broadsim Wavefront used multiple frequency \
	references, one for each internal radio. This approach was problematic, introducing excess noise and \
	instability into the system. One of my first achievements was redesigning the architecture to implement a \
	shared LO distribution system. This eliminated uncorrelated noise by using a single reference source, \
	resulting in significant improvements in inter-signal phase alignment and stability. See \
    <a href=\"javascript:;\" onclick=\"LO_Leakage()\">this paper</a> for additional information. After the change, \
    phase alignment improved by a factor of three, and phase stability improved by a factor of ten. As a result, \
	the Broadsim Wavefront was able to align the output of eight different radios to within 0.5 degrees, with \
	inter-element phase stability of less than 0.1 degrees.<br><br>"
	var title = "Broadsim Wavefront Enhancements";
	var subtitle = "Shared LO Architecture";
	document.getElementById("details-title").innerHTML = title;
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function LO_Leakage() {
    var description = "When I first joined Safran, I noticed that the Broadsim Wavefront used multiple frequency \
	references, one for each internal radio. This approach was problematic, introducing excess noise and \
	instability into the system. One of my first achievements was redesigning the architecture to implement a \
	shared LO distribution system. This eliminated uncorrelated noise by using a single reference source, \
	resulting in significant improvements in inter-signal phase alignment and stability. See \
    <a href=\"javascript:;\" onclick=\"LO_Leakage()\">this paper</a> for additional information. After the change, \
    phase alignment improved by a factor of three, and phase stability improved by a factor of ten. As a result, \
	the Broadsim Wavefront was able to align the output of eight different radios to within 0.5 degrees, with \
	inter-element phase stability of less than 0.1 degrees.<br><br>\
	<iframe src=\"Storage\\Safran\\Research\\LO_Leakage.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("details-description").innerHTML = description;
}

function Environmental_Compensation() {
	var description = "I revised the existing real-time phase calibration routine to account for inter-channel \
	phase alignment drift caused by temperature variations. This enhancement was implemented after the other \
	changes to the Wavefront, enabling a more refined compensation algorithm. As a result, the system was able \
	to phase-align all radio outputs to within ±0.25 degrees over both temperature and time, even during runs \
	lasting several days.<br><br>"
	var title = "Broadsim Wavefront Enhancements";
	var subtitle = "Environmental Compensation";
	document.getElementById("details-title").innerHTML = title;
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function Calibration_Procedures() {
	var description = "I developed a more efficient and effective method for phase alignment calibration across \
	frequency and power. This involved characterizing the radios within the Wavefront system by creating a \
	high-resolution model of each output\'s phase alignment over frequency and power. New radios were then \
	calibrated to this model by collecting a coarser dataset and extrapolating it to fit the model. Prior to \
	calibration, the Wavefront’s phase alignment was about ±8 degrees across frequency and power. After \
	implementing the calibration process, this was improved to around ±0.25 degrees, representing a more \
	than 32-fold improvement.<br><br>"
	var title = "Broadsim Wavefront Enhancements";
	var subtitle = "Calibration Enhancements";
	document.getElementById("details-title").innerHTML = title;
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

//function Research() {
//	var description = "I conducted a lot of research for Safran to keep up to date on the capabilites of the latest \
//	and greatest Software Defined Radios (SDRs) currently available on the market or soon to be released. Some of \
//	these included the (ADI one), the VProtean board from Vanteon in an M.2 form factor, and the 8-channel version \
//	from Pentek."
//	var title = "Research and Development";
//	var subtitle = "";
//	document.getElementById("details-title").innerHTML = title;
//    document.getElementById("details-subtitle").innerHTML = subtitle;
//    document.getElementById("details-description").innerHTML = description;
//};
//
//function ZIF() {
//	var description = "<button type=\"submit\" class=\"submit\"><a onclick=\"ZIF_Architecture()\" href=\"javascript:;\">ZIF Architecture</a></button>\
//	<button type=\"submit\" class=\"submit\"><a onclick=\"ZIF_Advantages()\" href=\"javascript:;\">ZIF Advantages</a></button>"
//	var title = "Research and Development";
//	var subtitle = "Zero-IF";
//	document.getElementById("details-title").innerHTML = title;
//    document.getElementById("details-subtitle").innerHTML = subtitle;
//    document.getElementById("details-description").innerHTML = description;
//};
//
//function ZIF_Architecture() {
//    var description = "<button type=\"submit\" class=\"submit\"><a onclick=\"ZIF_Architecture()\" href=\"javascript:;\">ZIF Architecture</a></button>\
//	<button type=\"submit\" class=\"submit\"><a onclick=\"ZIF_Advantages()\" href=\"javascript:;\">ZIF Advantages</a></button>\
//	<iframe src=\"Storage\\Safran\\Research\\ZIF_Architecture.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
//    document.getElementById("details-description").innerHTML = description;
//}
//
//function ZIF_Advantages() {
//    var description = "<button type=\"submit\" class=\"submit\"><a onclick=\"ZIF_Architecture()\" href=\"javascript:;\">ZIF Architecture</a></button>\
//	<button type=\"submit\" class=\"submit\"><a onclick=\"ZIF_Advantages()\" href=\"javascript:;\">ZIF Advantages</a></button>\
//	<iframe src=\"Storage\\Safran\\Research\\ZIF_Advantages.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
//    document.getElementById("details-description").innerHTML = description;
//}

function PentekSlides(n) {
  if (n > albums["Pentek"].length) {SafranSlideIndex = 1}
  if (n < 1) {SafranSlideIndex = albums["Pentek"].length}
  document.getElementById("SafranSlider").innerHTML = albums["Pentek"][SafranSlideIndex-1];
}

function Pentek() {
    SafranSlideIndex = 1;
	var description = "The latest SDRs from Pentek were very interesting as they have. Essentially what this \
	means is the large cabinet-scale Wavefront systems can be miniaturized into a much smaller form-factor such as \
	a computer.<br><br> \
	<div class=\"slideshow-container\">\
      <div id=\"SafranSlider\" class=\"myslides\"><img src=\"img/Safran/Pentek/Radio.png\"><p>Pentek Radio</p></div>\
      <a class=\"prev\" onclick=\"PentekSlides(SafranSlideIndex -= 1)\"><p class=\"arrow\">&#10094;</p></a>\
      <a class=\"next\" onclick=\"PentekSlides(SafranSlideIndex += 1)\"><p class=\"arrow\">&#10095;</p></a>\
    </div>"
	var title = "Research and Development";
	var subtitle = "Small Form-Factor SDRs";
	document.getElementById("details-title").innerHTML = title;
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function PhaseCal() {
	var description = ""
	var title = "Phase Calibration";
	var subtitle = "";
	document.getElementById("details-title").innerHTML = title;
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};