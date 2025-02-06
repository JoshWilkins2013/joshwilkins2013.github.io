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
			"<img src=\"img/MCC/ENR157/UserInterface.png\"><p>User Interface</p>",
			"<img src=\"img/MCC/ENR157/Subsystems.png\"><p>Subsystems</p>",
			"<img src=\"img/MCC/ENR157/BlockDiagram.png\"><p>Block Diagram</p>",
			"<img src=\"img/MCC/ENR157/Flowchart.png\"><p>Flowchart</p>"
		],
		"ENR161": [
			"<img src=\"img/MCC/ENR161/LabViewCode.png\"><p>Labview Code</p>",
			"<img src=\"img/MCC/ENR161/CompetitionResults.png\"><p>Competition Results</p>"
		],
		"ENR251": [
			"<img src=\"img/MCC/ENR251/ENR251.png\"><p>Scale Model</p>",
			"<img src=\"img/MCC/ENR251/MathModel.png\"><p>Mathematical Model</p>",
			"<img src=\"img/MCC/ENR251/500gForce.png\"><p>500g Equivalent Force</p>"
		],
		"ENR254": [
			"<img src=\"img/MCC/ENR254/ButterworthHPF.png\"><p>Butterworth HPF</p>",
			"<img src=\"img/MCC/ENR254/ActiveLPF.png\"><p>Active LPF</p>",
			"<img src=\"img/MCC/ENR254/PassiveLPF.png\"><p>Passive LPF</p>"
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
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Engineering Computing I</h5>";
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
	var description = "A foundational course that focuses on the study of forces and their effects on objects \
	at rest. Students will learn to analyze static equilibrium, including how forces and moments interact within \
	structures such as beams, trusses, and frames. Topics include force systems, free-body diagrams, equilibrium \
	equations, centroids, and moments of inertia. The course emphasizes problem-solving techniques for analyzing \
	structures under various loading conditions, using both analytical and graphical methods. Through this course, \
	students will develop the skills to assess and design stable structures, which are essential for careers in \
	civil, mechanical, and aerospace engineering.<br><br>\
    <div id=\"ENR251_description\">\
    <a onclick=\"ENR251_Report()\" target=\"_blank\"><button type=\"submit\">Final Report</button></a><br><br>\
      <div class=\"slideshow-container\">\
        <div id=\"Slider\" class=\"mySlides\"></div>\
        <a class=\"prev\" onclick=\"ENR251Slides(ENR251SlideIndex -= 1)\"><p class=\"arrow\">&#10094;</p></a>\
        <a class=\"next\" onclick=\"ENR251Slides(ENR251SlideIndex += 1)\"><p class=\"arrow\">&#10095;</p></a>\
      </div>\
    </div>"
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Statics</h5>";
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
	var description = "An introductory course that focuses on the fundamental principles of electrical circuits. \
	Topics include Ohm\'s Law, Kirchhoff\'s voltage and current laws, resistive circuits, voltage and current \
	dividers, and power analysis. Students will learn to analyze and solve both DC and AC circuits, using \
	techniques such as mesh analysis, nodal analysis, and Thevenin\'s and Norton\'s theorems. The course \
	emphasizes hands-on learning with practical applications, helping students develop the skills needed to \
	analyze and design basic electrical circuits. This course is essential for students pursuing careers in \
	electrical engineering, electronics, and related fields."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Circuit Analysis I</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function ENR254() {
    ENR254SlideIndex = 1;
	var description = "Builds on the concepts learned in Circuit Analysis I, with a focus on more advanced \
	techniques and AC circuit analysis. Topics include complex impedance, phasor analysis, reactive components \
	(inductors and capacitors), resonance, and transient response in RLC circuits. Students will also explore \
	the analysis of filters, coupled circuits, and two-port networks. The course emphasizes the application of \
	these concepts to real-world electrical systems, using both analytical methods and computational tools. \
	This course is crucial for students pursuing careers in electrical engineering, electronics, and \
	communications, providing the knowledge needed to analyze and design more complex circuits.<br><br>\
    <div id=\"ENR254_description\">\
    <a onclick=\"ENR254_Report()\" target=\"_blank\"><button type=\"submit\">Final Report</button></a><br><br>\
      <div class=\"slideshow-container\">\
        <div id=\"Slider\" class=\"mySlides\"></div>\
        <a class=\"prev\" onclick=\"ENR254Slides(ENR254SlideIndex -= 1)\"><p class=\"arrow\">&#10094;</p></a>\
        <a class=\"next\" onclick=\"ENR254Slides(ENR254SlideIndex += 1)\"><p class=\"arrow\">&#10095;</p></a>\
      </div>\
    </div>"
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Circuit Analysis II</h5>";
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
	var description = "A foundational engineering course that focuses on the behavior of materials under various \
	loading conditions. Students will learn how to analyze stress, strain, and deformation in structural elements \
	such as rods, beams, and shafts. The course covers key topics such as axial loads, torsion, bending, shear, and \
	combined loading, with an emphasis on understanding material strength and performance. Practical applications \
	will include solving real-world engineering problems, designing structural elements, and assessing material \
	failure using concepts like stress-strain relationships and failure theories. Students will also gain proficiency \
	in using analytical tools and computational methods for material analysis."
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
	var description = "An intermediate-level course that builds on the concepts introduced in Calculus I, focusing \
	on the integration of functions and applications. Topics include techniques of integration (such as \
	substitution, integration by parts, and partial fractions), improper integrals, infinite series, \
	parametric equations, and polar coordinates. Students will also explore applications of integrals, \
	including calculating areas, volumes, and work. The course emphasizes both theoretical understanding and \
	practical problem-solving skills, providing the foundation for more advanced study in mathematics, \
	physics, engineering, and other technical fields."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Calculus II</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function MTH212() {
	var description = "An advanced course that extends the concepts of calculus to multi-variable functions. \
	Topics include partial derivatives, multiple integrals, vector calculus, and the study of vector fields. \
	Students will explore gradient, divergence, and curl, along with applications of line and surface integrals. \
	The course also covers coordinate systems such as cylindrical and spherical coordinates, and introduces the \
	fundamental theorems of calculus in higher dimensions, such as Stokes\' Theorem and the Divergence Theorem. \
	This course is essential for students pursuing careers in engineering, physics, computer science, and other \
	technical disciplines, providing the mathematical foundation for analyzing complex systems in multiple dimensions."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Calculus III</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function MTH220() {
	var description = "A course that focuses on mathematical structures and concepts that are fundamentally \
	discrete rather than continuous. Topics include logic, set theory, combinatorics, graph theory, algorithms, \
	and discrete probability. Students will learn how to analyze mathematical structures like functions, relations, \
	and sequences, and how to apply these concepts to solve problems in computer science, cryptography, and other \
	fields. The course emphasizes problem-solving, proof techniques, and the foundations of theoretical computer \
	science. This course is essential for students pursuing careers in mathematics, computer science, and engineering."
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
	var description = "An essential course in mathematics that introduces students to the fundamental concepts \
	of vector spaces, matrices, and linear transformations. Topics include systems of linear equations, matrix \
	operations, determinants, eigenvalues, and eigenvectors. The course emphasizes both theoretical understanding \
	and practical applications, such as solving linear systems, performing matrix factorizations, and analyzing \
	vector spaces. Students will also explore how linear algebra is used in fields like engineering, computer \
	science, economics, and physics. Through problem-solving and computational tools, students will develop the \
	skills needed to apply linear algebra concepts to real-world scenarios."
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
	var description = "An introductory course that explores the fundamental principles of classical mechanics. \
	Topics include kinematics, dynamics, Newton’s laws of motion, work and energy, momentum, rotational motion, \
	and the laws of gravitation. The course emphasizes problem-solving skills, helping students develop an \
	understanding of physical concepts through mathematical analysis and real-world applications. Students will \
	also gain experience with lab experiments to reinforce theoretical concepts and enhance their ability to apply \
	physics to everyday phenomena. This course is essential for students pursuing careers in engineering, \
	physical sciences, and related fields."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">University Physics I</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function PHY261() {
	var description = "A continuation of classical mechanics, focusing on electricity, magnetism, and wave phenomena. \
	Topics covered include electric fields, magnetic fields, circuits, electromagnetic waves, optics, and modern \
	physics concepts like special relativity and quantum mechanics. The course emphasizes understanding the \
	fundamental forces and their interactions through problem-solving, mathematical analysis, and experimental \
	methods. Students will also engage in laboratory work to deepen their comprehension of concepts and demonstrate \
	practical applications. This course is crucial for students pursuing careers in engineering, physical sciences, \
	and other technical fields."
	document.getElementById("course-description").innerHTML = description;
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">University Physics II</h5>";
	document.getElementById("course-extra").innerHTML = "";
};

function PHY262() {
	var description = "A course that explores the groundbreaking theories and concepts that define the 20th and 21st \
	centuries in physics. Topics include special and general relativity, quantum mechanics, wave-particle duality, \
	atomic structure, nuclear physics, and the principles of particle physics. Students will delve into the nature \
	of light, matter, and energy, understanding how these concepts revolutionized our view of the universe. The \
	course emphasizes both the mathematical foundations and the experimental evidence behind these theories. It is \
	designed for students pursuing advanced studies in physics, engineering, and other scientific disciplines, \
	providing a foundation for understanding the modern technological world."
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
	document.getElementById("course-title").innerHTML = "<h5 style=\"color:#cc5200\">Embedded C & Assembly</h5>";
	document.getElementById("course-extra").innerHTML = "";
};