var album = ["<img src=\"img/Carestream/CBCT.png\"><p>CBCT: 3d X-Rays</p>",
			"<img src=\"img/Carestream/Revo.png\"><p>Revo: Mobile X-Ray Machine</p>",
			"<center><img src=\"img/Carestream/Desk.png\"><p>My Desk</p>"
			]

var CarestreamSlideIndex = 1;
CarestreamSlides(CarestreamSlideIndex);
function CarestreamSlides(n) {
  var i;
  if (n > album.length) {CarestreamSlideIndex = 1}
  if (n < 1) {CarestreamSlideIndex = album.length}
  document.getElementById("CarestreamSlider").innerHTML = album[CarestreamSlideIndex-1];
}

function task11() {
	var description = "Performed capacity testing on AGM lead-acid batteries through the cycled discharging of the batteries.\
	Built the fixture using a large heatsink with 2 ohm resistors attached to it to quickly discharge the batteries.\
	Wrote excel macros to analyze and plot results.<br><br>\
	<img src=\"img\\Carestream\\AGM.png\" width=50%>"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<strong>AGM Battery Test Fixture</strong>";
};

function task12() {
	var description = "Researched battery life enhancement designs using methods such as switched capacitors.<br>Some proposed solutions:<br><br>\
	<a href=\"Storage\\Carestream\\Balancing1.pdf\" target=\"_blank\"><button type=\"submit\">Solution1</button></a>\
	<a href=\"Storage\\Carestream\\Balancing2.pdf\" target=\"_blank\"><button type=\"submit\">Solution2</button></a><br>\
	<img src=\"img\\Carestream\\SwitchedCaps.png\" width=50%>"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<strong>Battery Life Enhancement</strong>";
};

function task13() {
	var description = "Analyzed and debugged problems on the PCBs within the X-Ray machine buckies.<br><br>\
	<img src=\"img\\Carestream\\Bucky.png\" width=50%>"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<strong>X-Ray Bucky</strong>";
};

function task21() {
	var description = "Refactored the entire automation framework following the structure below (A page-based infrastructure).\
	Also managed and updated the automated test suites to verify the functionality of software.\
	Wrote scripts to automate the machine calibration processes as well.<br><br>\
	<img src=\"img\\Carestream\\Framework.png\" width=50%>"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<strong>Framework</strong>";
};

function task22() {
	var description = "Greatly enhanced communication between teams. Automation test engineers need to have very good\
	communication links between both the software developers and quality assurance team (QA). The developers communicate all\
	new features and development areas to the automation team. The automation team reports any bugs to the developers to \
	fix before it gets to QA. QA needs to be aware of both of these things and helps the automation team correctly test the software."
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<strong>Communication</strong>";
};

function task23() {
	var description = "Utilized Agile practices and actively participated daily in scrum meetings.\
	Utilized test driven development practices to ensure quality software.<br><br>\
	<img src=\"img\\Carestream\\TDD.png\" width=50%>"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<strong>Kanban</strong>";
};

function task24() {
	var description = "Although officially I may not have had the title of automation test lead (I think it was 'test technician'),\
	it was the role I had within the company. I was in charge of running the lab, training all new automation hires (usually interns)\
	and ensuring both the QA team and the software developers had a good understanding of the changes being made to the software.\
	I was also responsible for training the new (official) automation lead, which happened just before I left Carestream"
	document.getElementById("details-description").innerHTML = description;
	document.getElementById("details-title").innerHTML = "<strong>Leadership / Management</strong>";
};