var albums = {
		"ENR153": [
			"<img src=\"img/Robotics/ENR153/Front.jpg\"><p>Front View</p>",
			"<img src=\"img/Robotics/ENR153/Back.jpg\"><p>Rear View</p>",
			"<img src=\"img/Robotics/ENR153/Inside.jpg\"><p>Inside View</p>",
			"<img src=\"img/Robotics/ENR153/Gears.jpg\"><p>Gear Assembly</p>",
			"<img src=\"img/Robotics/ENR153/Top.jpg\"><p>3D Printed Shell</p>",
			"<img src=\"img/Robotics/ENR153/McLarenF1_Front.jpg\"><p>Model Front</p>",
			"<img src=\"img/Robotics/ENR153/McLarenF1_Back.jpg\"><p>Model Rear</p>"
		],
		"ENR157": [
			"<img src=\"img/MCC/ENR157.jpg\"><p>Front View</p>",
			"<img src=\"img/Robotics/ENR153/Back.jpg\"><p>Rear View</p>",
			"<img src=\"img/Robotics/ENR153/Inside.jpg\"><p>Inside View</p>",
			"<img src=\"img/Robotics/ENR153/Gears.jpg\"><p>Gear Assembly</p>",
			"<img src=\"img/Robotics/ENR153/Top.jpg\"><p>3D Printed Shell</p>",
			"<img src=\"img/Robotics/ENR153/McLarenF1_Front.jpg\"><p>Model Front</p>",
			"<img src=\"img/Robotics/ENR153/McLarenF1_Back.jpg\"><p>Model Rear</p>"
		]
}

document.getElementById("header-text").innerHTML = "<a href=\"mcc\"><img src=\"img/Banners/MCC_Banner.png\"></a>";

function MCC_Transcript() {
	var description = "<iframe src=\"Storage\\MCC\\Transcript.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
	var title = "<h5 style=\"color:#cc5200\">Transcript</h5>";
	document.getElementById("course-title").innerHTML = title;
    document.getElementById("course-description").innerHTML = description;
    document.getElementById("course-extra").innerHTML = "";
};

function ENR153() {
    ENR153SlideIndex = 1;
	var description = "An introduction to solid modeling, computer aided manufacturing, the engineering design process, and machine shop operations. \
	SolidWorks will be used to design parts and assemblies. CamWorks will be used to create tool paths for common 2.5 axis milling operations. \
	Prototyping will be done using CNC mills, lathes, and a 3D printer. Parametric modeling techniques that preserve design intent with dimensioning, \
	geometric relations, external references, equations, and design tables will be emphasized. A design-build project will require students to build a working prototype \
	to the instructor's specifications and then implement a redesign of it. Students will document their design process in both written and oral reports.<br><br>\
    <div id=\"enr153_description\">\
    <a onclick=\"ENR153_Report()\" target=\"_blank\"><button type=\"submit\">Final Report</button></a><br><br>\
      <div class=\"slideshow-container\">\
        <div id=\"Slider\" class=\"mySlides\"></div>\
        <a class=\"prev\" onclick=\"ENR153Slides(ENR153SlideIndex -= 1)\"><p class=\"arrow\">&#10094;</p></a>\
        <a class=\"next\" onclick=\"ENR153Slides(ENR153SlideIndex += 1)\"><p class=\"arrow\">&#10095;</p></a>\
      </div>\
    </div>"
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Graphing & Machining</h5>";
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-extra").innerHTML = "";
	ENR153Slides(ENR153SlideIndex);
};

var ENR153SlideIndex = 1;
function ENR153Slides(n) {
  if (n > albums["ENR153"].length) {ENR153SlideIndex = 1}
  if (n < 1) {ENR153SlideIndex = albums["ENR153"].length}
  document.getElementById("Slider").innerHTML = albums["ENR153"][ENR153SlideIndex-1];
}

function ENR153_Report() {
    var description = "<iframe src=\"Storage\\MCC\\ENR153_Report.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("enr153_description").innerHTML = description;
}

function ENR157() {
    ENR157SlideIndex = 1;
	var description = "This course introduces the basic logic functions, components and methodologies used in the design of digital systems. \
	This course covers basic logic gates, boolean algebra, number systems, digital arithmetic, combinational logic circuits, multiplexers, \
	decoders, flip-flops and registers. Digital system applications will include counters, magnitude comparators, ADCs, DACs, \
	feedback control, sensor interfacing, and signal conditioning. Schematic capture and VHDL programming will be implemented in a digital system on an FPGA.\
	The course will culminate in a team design-build project requiring prototype demonstration, written documentation and presentation.<br><br>\
    <div id=\"enr157_description\">\
      <a onclick=\"ENR157_Report()\" target=\"_blank\"><button type=\"submit\">Final Report</button></a><br><br>\
      <div class=\"slideshow-container\">\
        <div id=\"Slider\" class=\"mySlides\"></div>\
        <a class=\"prev\" onclick=\"ENR157Slides(ENR157SlideIndex -= 1)\"><p class=\"arrow\">&#10094;</p></a>\
        <a class=\"next\" onclick=\"ENR157Slides(ENR157SlideIndex += 1)\"><p class=\"arrow\">&#10095;</p></a>\
      </div>\
    </div>"
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\"><h5 style=\"color:#cc5200\">Digital Electronics & Microcontrollers</h5></h5>";
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-extra").innerHTML = "";
	ENR157Slides(ENR157SlideIndex);
};

var ENR157SlideIndex = 1;
function ENR157Slides(n) {
  if (n > albums["ENR157"].length) {ENR157SlideIndex = 1}
  if (n < 1) {ENR157SlideIndex = albums["ENR157"].length}
  document.getElementById("Slider").innerHTML = albums["ENR157"][ENR157SlideIndex-1];
}

function ENR157_Report() {
    var description = "<iframe src=\"Storage\\MCC\\ENR157_Report.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("enr157_description").innerHTML = description;
}

function ENR161() {
	var description = "An introduction to solving a variety of engineering related problems using Microsoft Excel and LabVIEW.\
	Excel topics include functions, graphing, matrices, linear regression, statistics, and root finding. LabVIEW topics \
	include a variety of data types, functions, loops, case structures, and graphical user interfaces. LabVIEW programs will \
	include linear algebra, graphing, and data analysis. A final design project will be implemented using LabVIEW and LEGO Mindstorms robotics."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Engineering Computing I</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function ENR161() {
    ENR161SlideIndex = 1;
	var description = "An introduction to solving a variety of engineering related problems using Microsoft Excel and LabVIEW.\
	Excel topics include functions, graphing, matrices, linear regression, statistics, and root finding. LabVIEW topics \
	include a variety of data types, functions, loops, case structures, and graphical user interfaces. LabVIEW programs will \
	include linear algebra, graphing, and data analysis. A final design project will be implemented using LabVIEW and LEGO Mindstorms robotics.<br><br>\
    <div id=\"ENR161_description\">\
    <a onclick=\"ENR161_Report()\" target=\"_blank\"><button type=\"submit\">Final Report</button></a><br><br>\
      <div class=\"slideshow-container\">\
        <div id=\"Slider\" class=\"mySlides\"></div>\
        <a class=\"prev\" onclick=\"ENR161Slides(ENR161SlideIndex -= 1)\"><p class=\"arrow\">&#10094;</p></a>\
        <a class=\"next\" onclick=\"ENR161Slides(ENR161SlideIndex += 1)\"><p class=\"arrow\">&#10095;</p></a>\
      </div>\
    </div>"
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Graphing & Machining</h5>";
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-extra").innerHTML = "";
	ENR161Slides(ENR161SlideIndex);
};

var ENR161SlideIndex = 1;
function ENR161Slides(n) {
  if (n > albums["ENR161"].length) {ENR161SlideIndex = 1}
  if (n < 1) {ENR161SlideIndex = albums["ENR161"].length}
  document.getElementById("Slider").innerHTML = albums["ENR161"][ENR161SlideIndex-1];
}

function ENR161_Report() {
    var description = "<iframe src=\"Storage\\MCC\\ENR161_Report.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("ENR161_description").innerHTML = description;
}

function ENR251() {
    ENR251SlideIndex = 1;
	var description = "Fundamentals of statics applied to problems of engineering interest. A vector algebra approach \
	will be presented. Topics include equivalent force systems, equilibrium, structural mechanics, friction, and properties of surfaces.<br><br>\
    <div id=\"ENR251_description\">\
    <a onclick=\"ENR251_Report()\" target=\"_blank\"><button type=\"submit\">Final Report</button></a><br><br>\
      <div class=\"slideshow-container\">\
        <div id=\"Slider\" class=\"mySlides\"></div>\
        <a class=\"prev\" onclick=\"ENR251Slides(ENR251SlideIndex -= 1)\"><p class=\"arrow\">&#10094;</p></a>\
        <a class=\"next\" onclick=\"ENR251Slides(ENR251SlideIndex += 1)\"><p class=\"arrow\">&#10095;</p></a>\
      </div>\
    </div>"
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Graphing & Machining</h5>";
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-extra").innerHTML = "";
	ENR251Slides(ENR251SlideIndex);
};

var ENR251SlideIndex = 1;
function ENR251Slides(n) {
  if (n > albums["ENR251"].length) {ENR251SlideIndex = 1}
  if (n < 1) {ENR251SlideIndex = albums["ENR251"].length}
  document.getElementById("Slider").innerHTML = albums["ENR251"][ENR251SlideIndex-1];
}

function ENR251_Report() {
    var description = "<iframe src=\"Storage\\MCC\\ENR251_Report.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("ENR251_description").innerHTML = description;
}

function ENR253() {
	var description = "Basic electrical concepts including passive circuit element models, Kirchhoff's Laws,\
	operational amplifier models, topological properties of circuits, complete response for RC, RL and RLC circuits;\
	phasor concepts for RLC circuit driven by sinusoidal forcing functions. The laboratory will provide examples of these concepts."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Circuit Analysis I</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function ENR254() {
    ENR254SlideIndex = 1;
	var description = "A continuation of ENR253. Topics include complex power; complex frequency analysis; \
	Laplace transform analysis; transfer functions; passive and active filter design and analysis; Bode plots;\
	magnetically coupled networks; two-port networks; and Fourier series and transforms.<br><br>\
    <div id=\"ENR254_description\">\
    <a onclick=\"ENR254_Report()\" target=\"_blank\"><button type=\"submit\">Final Report</button></a><br><br>\
      <div class=\"slideshow-container\">\
        <div id=\"Slider\" class=\"mySlides\"></div>\
        <a class=\"prev\" onclick=\"ENR254Slides(ENR254SlideIndex -= 1)\"><p class=\"arrow\">&#10094;</p></a>\
        <a class=\"next\" onclick=\"ENR254Slides(ENR254SlideIndex += 1)\"><p class=\"arrow\">&#10095;</p></a>\
      </div>\
    </div>"
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Graphing & Machining</h5>";
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-extra").innerHTML = "";
	ENR254Slides(ENR254SlideIndex);
};

var ENR254SlideIndex = 1;
function ENR254Slides(n) {
  if (n > albums["ENR254"].length) {ENR254SlideIndex = 1}
  if (n < 1) {ENR254SlideIndex = albums["ENR254"].length}
  document.getElementById("Slider").innerHTML = albums["ENR254"][ENR254SlideIndex-1];
}

function ENR254_Report() {
    var description = "<iframe src=\"Storage\\MCC\\ENR254_Report.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("ENR254_description").innerHTML = description;
}

function ENR256() {
	var description = "Fundamentals of the theory of elasticity will be presented. Stress-strain relations will be applied to the study of \
	the mechanics of deformable solids including the analysis of beams, shafts, and columns, and the use of energy methods."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Mechanics of Materials</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function ENR259() {
	var description = "Students will work in teams to solve an engineering design problem of their choice subject to approval from the instructor. \
	Students will be encouraged to choose a project from an intercollegiate engineering design competition. Teams will design and build a working prototype, \
	keep an engineering notebook, submit a weekly time sheets, create a final design report, and make a final oral presentation."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Engineering Design Lab</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function ENR261() {
	var description = "A course that uses structured software programming techniques to implement problem solving methodologies and develop solutions to various\
	engineering problems. Techniques such as numerical and statistical analysis, numerical methods, symbolic solutions and graphical techniques are applied in the \
	solutions. Pseudo-code, and flowcharts are used to develop a structured approach to the problem solution which will often require the development of user-defined \
	functions and decision making programming constructs utilized in short script files. Some larger projects may include the development of a graphical user interface (GUI)\
	to handle the program inputs, solution options and outputs."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Engineering Computing II</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function MTH211() {
	var description = "A second course in single variable calculus. Topics include techniques of integration, applications of definite integrals,\
	first order separable differential equations, indeterminate limit forms, improper integrals, infinite series, Taylor polynomials, and power series.\
	A specific calculator may be required of students in this course."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Calculus II</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function MTH212() {
	var description = "The calculus of functions of more than one variable, partial differentiation, multiple integrals, polar coordinates, solid analytic geometry\
	and vectors, and the calculus of vector-valued functions are covered. A specific calculator will be required of all students in this course. Students are advised \
	to check with the Mathematics Department."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Calculus III</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function MTH220() {
	var description = "An introduction to discrete mathematics primarily intended for students majoring in Mathematics or Computer Science. \
	Topics will include propositional and predicate logic, elementary number theory, mathematical induction, set theory, combinatorics, functions, and relations. \
	Methods of proof will be developed in a variety of mathematical contexts."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Discrete Mathematics</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function MTH225() {
	var description = "An introduction to ordinary differential equations and their applications. Analytical methods include:\
	separation of variables, linear first order equations, substitution methods, second order linear equations with constant coefficients, \
	undetermined coefficients, variation of parameters, autonomous systems of two first order equations, series solutions about ordinary points, \
	and the Laplace Transform. In addition to analytical methods, quantitative and qualitative analysis will be employed through the use of Euler’s Method, \
	phase lines, phase planes, and slope fields."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Differential Equations</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function MTH230() {
	var description = "Topics include systems of linear equations, vectors and matrices, determinants, vector spaces, linear \
	transformations, eigenvectors and eigenvalues, and inner product spaces."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Linear Algebra</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function CHE151() {
	var description = "This is the first semester of college chemistry and is appropriate for students interested in pursuing further studies \
	in science or engineering. It is a mathematical approach to the principles of chemistry and assumes that students have had an above average preparation in chemistry. \
	Topics include a brief review of problem solving using dimensional analysis, graphing, and significant figures; chemical stoichiometry; gas laws; thermochemistry; \
	an in-depth treatment of atomic structure, periodicity, and chemical bonding; phase relationships."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">General College Chemistry I</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function PHY161() {
	var description = "An introductory course in classical mechanics using calculus; intended for those seeking a concentration in engineering, mathematics,\
	or natural science. Topics include kinematics, Newton's Laws, work, energy, momentum, rotational motion of rigid bodies, and harmonic motion."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">University Physics I</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function PHY261() {
	var description = "An introduction to electric and magnetic fields. Topics include Coulomb's, Gauss's, Biot-Savart, Ampere's, \
	Faraday's Laws, and Maxwell's Equations."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">University Physics II</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function PHY262() {
	var description = "An introductory course in modern physics for those who have completed two semesters of University Physics. \
	Topics include relativity, quantum mechanics, and the application of quantum mechanics to atomic and nuclear structure."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Modern Physics</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function CSC202() {
	var description = "The student will learn how to program, interface and troubleshoot a modern embedded processor such as the Motorola 68HC12 in both C and Assembly Language. \
	Microcontroller architecture will be stressed. Topics include Synchronous and Asynchronous Input/Output, Analog to Digital Conversion, Pulse Width Modulation, Timer/Counters, \
	Interrupts and Parallel Port Programming. Laboratory work will focus on program development, implementation and debugging techniques. Several programming projects will be assigned \
	to be completed outside of class and in lab. A final project and student presentation are required."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Programming Embedded Microcontrollers in C & Assembly</h5>";
	document.getElementById("course-extra").innerHTML = "";
};