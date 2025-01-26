var albums = {
		"Carestream": [
		    "<img src=\"img/Carestream/X-Ray_Reconstruction.png\"><p>CBCT: 3d X-Rays</p>",
			"<img src=\"img/Carestream/CBCT.png\"><p>CBCT: 3d X-Rays</p>",
			"<img src=\"img/Carestream/Revo.png\"><p>Revo: Mobile X-Ray Machine</p>",
			"<img src=\"img/Carestream/Desk.png\"><p>My Desk</p>"
		],
		"Bucky": [
            "<img src=\"img/Carestream/Bucky.png\"><p>Digital X-Ray Cassette</p>",
            "<img src=\"img/Carestream/Bucky2.png\"><p>Cassette Usage</p>"
        ]
}

document.getElementById("header-text").innerHTML = "<a href=\"rit\"><img src=\"img/Banners/Carestream_Banner.png\"></a>";

var CarestreamSlideIndex = 1;
CarestreamSlides(CarestreamSlideIndex);
function CarestreamSlides(n) {
  if (n > albums["Carestream"].length) {CarestreamSlideIndex = 1}
  if (n < 1) {CarestreamSlideIndex = albums["Carestream"].length}
  document.getElementById("CarestreamSlider").innerHTML = albums["Carestream"][CarestreamSlideIndex-1];
}

var BuckySlideIndex = 1;
BuckySlides(BuckySlideIndex);
function BuckySlides(n) {
  if (n > albums["Bucky"].length) {BuckySlideIndex = 1}
  if (n < 1) {BuckySlideIndex = albums["Bucky"].length}
  document.getElementById("BuckySlider").innerHTML = albums["Bucky"][BuckySlideIndex-1];
}

function Battery() {
	var description = "I was responsible for researching and developing battery life enhancement designs to \
	improve the longevity of Carestream\'s mobile x-ray machine. The DRX-Revolution, as it\'s called, \
	revolutionized patient care by allowing x-rays to be taken at the patient's location. However, this mobility \
    required significant power; not only for moving the machine itself, but to also handle a substantial power \
    surge when taking x-rays. To meet this demand, around twelve lead-acid batteries were connected in series. \
    Because they were linked together, the performance of all the batteries was limited by the weakest one. These \
    two papers on \
    <a href=\"javascript:;\" onclick=\"Balancing1_Paper()\">Switched Capacitors</a> and \
	<a href=\"javascript:;\" onclick=\"Balancing2_Paper()\">Cell Balancing</a> \
	were part of my proposal to accomplish this.<br><br> \
	<div id=\"battery_description\">\
	  <img src=\"img\\Carestream\\SwitchedCaps.png\" width=50%>\
	</div>"
    var title = "<h4 style=\"color:#cc5200\">Battery Life Enhancement</h4>";
    document.getElementById("details-title").innerHTML = title;
    document.getElementById("details-subtitle").innerHTML = "";
    document.getElementById("details-description").innerHTML = description;
}

function Balancing1_Paper() {
    var description = "<iframe src=\"Storage\\Carestream\\Balancing1.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("battery_description").innerHTML = description;
}

function Balancing2_Paper() {
    var description = "<iframe src=\"Storage\\Carestream\\Balancing2.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("battery_description").innerHTML = description;
}

function task11() {
	var description = "As part of my research, I built a fixture to efficiently test the capacity of lead-acid \
	batteries. This was accomplished by discharging the batteries through heavy duty, 2 ohm resistors mounted onto \
	a large sheet of aluminum that acted as a heat-sink for the dissipated energy. The voltage of the batteries was \
	monitored and recorded during discharge for evaluation and analysis. I then wrote excel macros in VBA to determine \
	the rate of discharge in each one of the batteries, plotted the results, and evaluated their performance. It was \
	vital to understand existing behavior before any improvements to the system could be made.<br><br>\
	<img src=\"img\\Carestream\\AGM.png\" width=50%>"
    var title = "<h4 style=\"color:#cc5200\">Battery Life Enhancement</h4>";
    var subtitle = "<h6 style=\"color:#FFFFFF\">AGM Lead-Acid Battery Test Fixture</h6>";
    document.getElementById("details-title").innerHTML = title;
    document.getElementById("details-subtitle").innerHTML = subtitle;
    document.getElementById("details-description").innerHTML = description;
};

function task13() {
    BuckySlideIndex = 1;
	var description = "A digital x-ray cassette is a flat panel used in digital radiography (DR) systems to \
	capture X-ray images. Unlike traditional film-based cassettes that use photographic film to capture the image, \
	digital cassettes use electronic sensors that convert X-ray energy into electrical signals. The signals are \
	processed and converted into images and promptly displayed on a computer. These cassettes can often offer \
	better image quality than traditional cassettes at a reduced exposure to radiation. Part of my job at Carestream \
	was to diagnose failures on the PCB\'s within these cassettes and propose possible improvements.<br><br>\
	<div class=\"slideshow-container\">\
      <div id=\"BuckySlider\" class=\"myslides\"><img src=\"img\\Carestream\\Bucky.png\"><p>Digital X-Ray Cassettes</p></div>\
      <a class=\"prev\" onclick=\"BuckySlides(BuckySlideIndex -= 1)\"><p class=\"arrow\">&#10094;</p></a>\
      <a class=\"next\" onclick=\"BuckySlides(BuckySlideIndex += 1)\"><p class=\"arrow\">&#10095;</p></a>\
    </div>"
    document.getElementById("details-subtitle").innerHTML = "";
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<h4 style=\"color:#cc5200\">Digital X-Ray Cassettes</h4>";
};

function task21() {
	var description = "I led the complete refactoring of the automation framework, transitioning it to a page-based \
	infrastructure to improve scalability, maintainability, and efficiency. This restructuring streamlined the \
	automation process and made it easier to manage and extend for future projects. In addition, \
	I took responsibility for managing and continuously updating the automated test suites, ensuring they \
	accurately and comprehensively verified the functionality of the software. I also designed and implemented custom \
	scripts to fully automate the machine calibration processes, reducing manual intervention and increasing \
	precision in all calibration tasks. This allowed for faster, more reliable testing cycles and helped maintain \
	consistent performance across all systems resulting in a higher-quality product.<br><br>\
	<img src=\"img\\Carestream\\Framework.png\" width=50%>"
	document.getElementById("details-subtitle").innerHTML = "";
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<h4 style=\"color:#cc5200\">Automation Framework</h4>";
};

function task22() {
	var description = "I significantly improved communication between teams by fostering strong collaboration \
	between automation test engineers, software developers, and the quality assurance (QA) team. Automation \
	engineers act as a bridge, receiving updates from developers on new features and areas under development. \
	They report any identified bugs to developers for resolution before they reach the QA team. Meanwhile, QA stays \
	informed about both development and testing progress to ensure the software is thoroughly tested and meets \
	quality standards. This seamless communication ensured a more efficient and effective testing process.<br><br>\
	<img src=\"img\\Carestream\\Automation.png\" width=50%>"
	document.getElementById("details-subtitle").innerHTML = "";
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<h4 style=\"color:#cc5200\">Communication</h4>";
};

function task23() {
	var description = "I consistently applied Agile practices, actively participating in daily Scrum meetings to \
	ensure team alignment and to quickly address any outstanding issues. I also implemented Test-Driven \
	Development (TDD) practices to maintain high-quality software which allowed for early bug detection, better \
	code structure, and improved overall stability. This resulted in a more efficient workflow and a smoother \
	release process.<br><br>\
	<img src=\"img\\Carestream\\TDD.png\" width=50%>"
	document.getElementById("details-subtitle").innerHTML = "";
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<h4 style=\"color:#cc5200\">Agile</h4>";
};

function task24() {
	var description = "Although my official title was \"Test Technician,\" I effectively served in the role of \
	Automation Test Lead. I was responsible for overseeing the lab operations, training new automation hires \
	(primarily interns), and ensuring clear communication between the QA team and software developers regarding \
	changes to the software. Additionally, I took on the responsibility of training the new, official Automation \
	Test Lead shortly before my departure from Carestream."
	document.getElementById("details-subtitle").innerHTML = "";
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<h4 style=\"color:#cc5200\">Leadership / Management</strong>";
};