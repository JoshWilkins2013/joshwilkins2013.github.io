function RIT_Transcript() {
	var description = "<iframe src=\"Storage\\RIT\\Transcript.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
	var title = "Transcript";
	document.getElementById("course-title").innerHTML = title;
    document.getElementById("course-description").innerHTML = description;
};

function EEEE220() {
	var description = "In the first part, the course covers the design of digital systems using a hardware description\
	language. In the second part, it covers the design of large digital systems using the computer\
	design methodology, and culminates with the design of a reduced instruction set central\
	processing unit, associated memory and input/output peripherals. The course focuses on the\
	design, capture, simulation, and verification of major hardware components such as: the datapath,\
	the control unit, the central processing unit, the system memory, and the I/O modules.\
	The lab sessions enforce and complement the concepts and design principles exposed in the\
	lecture through the use of CAD tools and emulation in a commercial FPGA. This course assumes\
	a background in C programming."
	document.getElementById("course-title").innerHTML = "Digital Systems II";
	document.getElementById("course-description").innerHTML = description;
};

function EEEE260() {
	var description = "An introductory course on the fundamentals of semiconductor physics and principles of operation\
	of basic devices. Topics include semiconductor fundamentals (crystal structure, statistical\
	physics of carrier concentration, motion in crystals, energy band models, drift and diffusion\
	currents) as well as the operation of pn junction diodes, bipolar junction transistors (BJT),\
	metal-oxide-semiconductor (MOS) capacitors and MOS field-effect transistors."
	document.getElementById("course-title").innerHTML = "Intro to Semiconductor Devices";
	document.getElementById("course-description").innerHTML = description;
};

function EEEE346() {
	var description = "Introduction to Object-Oriented Programming in C++. Topics will be review of C (control\
	structures, functions, and arrays), pointers, classes, operator overloading, inheritance, polymorphism,\
	data structures, class string, and STL. At the end of the semester, everyone will\
	have the working knowledge of C++. Projects will be assigned to build your C++ programming skills."
	document.getElementById("course-title").innerHTML = "Advanced Programming";
	document.getElementById("course-description").innerHTML = description;
};

function EEEE353() {
	var description = "Linear Systems provides the foundations of continuous and discrete signal and system analysis\
	and modeling. Topics include a description of continuous linear systems via differential equations,\
	a description of discrete systems via difference equations, input-output relationship of\
	continuous and discrete linear systems, the continuous time convolution integral, the discrete\
	time convolution sum, application of convolution principles to system response calculations,\
	exponential and trigonometric forms of Fourier series and their properties, Fourier transforms\
	including energy spectrum and energy spectral density. Sampling of continuous time signals\
	and the sampling theorem, the Laplace, Z and DTFT. The solution of differential equations and\
	circuit analysis problems using Laplace transforms, transfer functions of physical systems, block\
	diagram algebra and transfer function realization is also covered. A comprehensive study of\
	the z transform and its inverse, which includes system transfer function concepts, system frequency\
	response and its interpretation, and the relationship of the z transform to the Fourier\
	and Laplace transform is also covered. Finally, an introduction to the design of digital filters,\
	which includes filter block diagrams for Finite Impulse Response (FIR) and Infinite Impulse\
	Response (IIR) filters is introduced."
	document.getElementById("course-title").innerHTML = "Linear Systems";
	document.getElementById("course-description").innerHTML = description;
};

function EEEE374() {
	var description = "The course provides the foundations of EM fields, static and time varying, and a study of propagation,\
	reflection and transmissions of electromagnetic waves in unbounded regions and in\
	transmission lines. Topics include the following: electric field intensity and potential, Guass'\
	Law, polarization, electric flux density, dielectric constant and boundary conditions, Poisson's\
	and Laplace's equations, methods of images, steady electric current and conduction current\
	density, vector magnetic potential, Biot-Savart law, magnetization, magnetic field intensity,\
	permeability, boundary conditions, Faraday's law, Maxwell's equations and the continuity equation.\
	Time harmonic EM fields, wave equations, uniform plane waves, polarization, Poynting\
	theorem and power, reflection and transmission from multiple dielectric interfaces, transmission\
	line equations, transients on transmission lines, pulse and step excitations, reflection\
	diagrams, sinusoidal steady state solutions, standing waves, the Smith Chart and impedance\
	matching techniques, TE and TM waves in rectangular waveguides. experiments using stateof-art\
	RF equipment illustrating fundamental wave propagation and reflection concepts, design\
	projects with state-of-art EM modeling tools."
	document.getElementById("course-title").innerHTML = "EM Fields & Transmission Lines";
	document.getElementById("course-description").innerHTML = description;
};

function EEEE381() {
	var description = "This course is the first in a two-part sequence on analog electronic circuit design, \
	covering fundamental concepts and techniques. Topics include the current-voltage characteristics of MOSFETs, \
	DC and small-signal analysis of MOS devices and circuits, and the design of single-stage MOS amplifiers. The \
	course also explores DC biasing circuits, such as current sources and mirrors, two-transistor amplifier \
	stages (including differential and cascode amplifiers), and the design of multistage amplifiers. Additional \
	topics include the frequency response of amplifiers, semiconductor diodes and diode circuits (including \
	rectifiers and clamping circuits), and the use of Zener diodes for voltage regulation. Students will also \
	learn to design ideal op-amp circuits in both non-inverting and inverting configurations.<br><br>\
	<div id=\"EEEE381_description\">\
      <a onclick=\"EEEE381_Report()\" target=\"_blank\"><button type=\"submit\">Final Report</button></a>\
    </div>"
	document.getElementById("course-title").innerHTML = "Electronics I";
	document.getElementById("course-description").innerHTML = description;
};

function EEEE381_Report() {
    var description = "<iframe src=\"Storage\\RIT\\EEEE381_Report.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("EEEE381_description").innerHTML = description;
}

function EEEE414() {
	var description = "This course introduces students to the study of linear continuous-time classical control systems,\
	their behavior, design, and use in augmenting engineering system performance. The course is\
	based on classical control methods using Laplace-transforms, block-diagrams, root-locus, and\
	frequency-domain analysis. Topics include: Laplace-transform review; Bode plot review; system\
	modeling for control; relationships of transfer-function poles and zeros to time-response behaviors;\
	stability analysis; steady-state error, error constants, and error specification; feedback\
	control properties; relationships between stability margins and transient behavior; lead, lag, and\
	PID control; root-locus analysis and design; frequency-response design and Nyquist stability. A\
	laboratory will provide students with hands-on analysis and design-build-test experience, and\
	includes the use of computer-aided design software such as MATLAB.<br><br>\
    <div id=\"EEEE414_description\">\
      <a onclick=\"EEEE414_Report()\" target=\"_blank\"><button type=\"submit\">Final Report</button></a>\
    </div>"
	document.getElementById("course-title").innerHTML = "Classical Control";
	document.getElementById("course-description").innerHTML = description;
};

function EEEE414_Report() {
    var description = "<iframe src=\"Storage\\RIT\\EEEE414_Report.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("EEEE414_description").innerHTML = description;
}

function EEEE482() {
	var description = "This course is the second in a two-course sequence focused on analog and digital \
	electronic circuit analysis and design. The analog portion includes DC and small-signal analysis of bipolar \
	junction transistor (BJT) circuits, BJT DC biasing, and the design of simple and compound BJT amplifier \
	stages. It also covers multi-stage BJT amplifiers, op-amps, frequency response, and feedback and stability \
	in both BJT and MOSFET amplifiers. The digital portion introduces the principles of digital circuits using \
	NMOS and CMOS technologies, including the behavior of NMOS and CMOS inverters, combinational and sequential \
	CMOS logic networks, and advanced topics such as dynamic CMOS logic, memory, and low-power logic techniques."
	document.getElementById("course-title").innerHTML = "Electronics II";
	document.getElementById("course-description").innerHTML = description;
};

function EEEE483() {
	var description = "This course covers the fundamental principles of electric machines, focusing on sensors and \
	actuators, particularly high-performance electromechanical motion devices such as permanent-magnet DC motors, \
	synchronous motors, and stepper motors. It explores power electronics and control systems for electromechanical \
	systems, utilizing the MATLAB environment for simulation, analysis, and control of mechatronic systems. \
	The course also introduces the application of digital signal processors and microcontrollers in mechatronics, \
	with practical case studies to reinforce learning."
	document.getElementById("course-title").innerHTML = "Mechatronics";
	document.getElementById("course-description").innerHTML = description;
};

function EEEE484() {
	var description = "Introduction to Communication Systems provides the basics of the formation, transmission\
	and reception of information over communication channels. Spectral density and correlation\
	descriptions for deterministic and stationary random signals. Amplitude and angle modulation\
	methods (e.g. AM and FM) for continuous signals. Carrier detection and synchronization.\
	Phase-locked loop and its application. Introduction to digital communication. Binary ASK, FSK\
	and PSK. Noise effects. Optimum detection: matched filters, maximum-likelihood reception.\
	Computer simulation.<br><br>\
    <div id=\"EEEE484_description\">\
      <a onclick=\"EEEE484_Report()\" target=\"_blank\"><button type=\"submit\">Final Report</button></a>\
    </div>"
	document.getElementById("course-title").innerHTML = "Communication Systems";
	document.getElementById("course-description").innerHTML = description;
};

function EEEE484_Report() {
    var description = "<iframe src=\"Storage\\RIT\\EEEE484_Report.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("EEEE484_description").innerHTML = description;
}

function EEEE485() {
	var description = "This course will cover basic electrical and mechanical engineering topics related to Robotics,\
	including but not limited to: basic electrical and electronics components (resistors, capacitors,\
	inductors, diodes, transistors, op-amps, timers) and concepts (sensors, signal conditioning,\
	oscillators) and basic mechanical components (chains, gears, ratchets and pawl belt and chain\
	drives, bearing) and concepts (motion, dynamics equations, and force and torque analysis). In\
	addition, robotics system modeling, control, and applications will be explored. Students will\
	design electronic interfaces and controllers for mechanical devices. Finally, sensor and actuator\
	selection, installation, and application strategies will be explored.<br><br>\
    <div id=\"EEEE485_description\">\
      <a onclick=\"EEEE485_Report()\" target=\"_blank\"><button type=\"submit\">Final Report</button></a>\
    </div>"
	document.getElementById("course-title").innerHTML = "Robotic Systems";
	document.getElementById("course-description").innerHTML = description;
};

function EEEE485_Report() {
    var description = "<iframe src=\"Storage\\RIT\\EEEE485_Report.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("EEEE485_description").innerHTML = description;
}

function EEEE497() {
	var description = "MSD-I is the first half of a two-semester design course oriented to the solution of engineering\
	problems. The mission is to enhance engineering education through a capstone design\
	experience that integrates engineering theory, principles and processes within a collaborative\
	environment. Working in multidisciplinary teams and following an engineering design process,\
	students will assess customer needs and engineering specifications, evaluate concepts,\
	resolve major technical hurdles, and employ rigorous engineering principles to design a prototype\
	which is fully tested and documented.<br><br>\
    <div id=\"EEEE498_description\">\
      <a onclick=\"EEEE498_Report()\" target=\"_blank\"><button type=\"submit\">Final Report</button></a>\
    </div>"
	document.getElementById("course-title").innerHTML = "Senior Design Project I";
	document.getElementById("course-description").innerHTML = description;
};

function EEEE498() {
	var description = "MSD-II is the second half of a two-semester design course oriented to the solution of engineering\
	problems. The mission is to enhance engineering education through a capstone design\
	experience that integrates engineering theory, principles and processes within a collaborative\
	environment. Working in multidisciplinary teams and following an engineering design process,\
	students will assess customer needs and engineering specifications, evaluate concepts,\
	resolve major technical hurdles, and employ rigorous engineering principles to design a prototype\
	which is fully tested and documented.<br><br>\
    <div id=\"EEEE498_description\">\
      <a onclick=\"EEEE498_Report()\" target=\"_blank\"><button type=\"submit\">Final Report</button></a>\
    </div>"
	document.getElementById("course-title").innerHTML = "Senior Design Project II";
	document.getElementById("course-description").innerHTML = description;
};

function EEEE498_Report() {
    var description = "<iframe src=\"Storage\\RIT\\VArm_Report.pdf#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById("EEEE498_description").innerHTML = description;
}

function EEEE579() {
	var description = "A study of the various techniques for the design of filters to meet the given specifications. The\
	emphasis is on the design of active filters using op amps. The following topics are discussed\
	in detail: Review of transfer functions, Bode diagrams and the analysis of op amp circuits;\
	ideal filter characteristics, approximations to the ideal filter using Butterworth, Chebyshev\
	and Bessel-Thompson polynomials; standard filter stages; magnitude and frequency scaling;\
	low-pass filter design; design of high-pass, band-pass and band-reject filters; passive ladder\
	filter network design; frequency dependent negative resistance networks; switched capacitor filters."
	document.getElementById("course-title").innerHTML = "Analog Filter Design";
	document.getElementById("course-description").innerHTML = description;
};

function EEEE593() {
	var description = "This course covers the principles and practices of modern digital data communication \
	systems. Topics include pulse code modulation, error probabilities, M-ary signaling, AWGN channels, \
	band-limited and distorting channels, filter design, equalizers, and optimal detection for channels \
	with memory. It also explores synchronization methods, non-linear modulation, and introduces advanced \
	concepts such as multipath fading channels, spread spectrum, and OFDM."
	document.getElementById("course-title").innerHTML = "Digital Data Communication";
	document.getElementById("course-description").innerHTML = description;
};

function EEEE661() {
	var description = "This course deals with a complete description of physical systems its analysis and design of\
	controllers to achieve desired performance. The emphasis in the course will be on continuous\
	linear systems. Major topics are: state space representation of physical systems, similarities/\
	differences between input-output representation (transfer function) and state spate representations,\
	conversion of one form to the other, minimal realization, solution of state equations,\
	controllability, observability, design of control systems for desired performance, state feedback,\
	observers and their realizations."
	document.getElementById("course-title").innerHTML = "Modern Control Theory";
	document.getElementById("course-description").innerHTML = description;
};

function EEEE663() {
	var description = "This first course in a graduate elective sequence will begin by presenting a general road map of\
	real-time and embedded systems. The course will be conducted in a studio class/lab format with\
	lecture material interspersed with laboratory work. This course will introduce a representative\
	family of microcontrollers that will exemplify unique positive features as well as limitations\
	of microcontrollers in embedded and real-time systems. These microcontrollers will then be\
	used as external, independent performance monitors of more complex real-time systems. The\
	majority of the course will present material on a commercial real-time operating system and\
	using it for programming projects on development systems and embedded target systems.\
	Some fundamental material on real-time operating systems and multiprocessor considerations\
	for real-time systems will also be presented. Examples include scheduling algorithms,\
	priority inversion, and hardware-software co-design."
	document.getElementById("course-title").innerHTML = "RTOS & Embedded Systems";
	document.getElementById("course-description").innerHTML = description;
};

function MATH326() {
	var description = "A course that focuses on the mathematical methods used to solve differential equations \
	with specified values (boundary conditions) at the boundaries of the domain. The course covers a range of \
	topics including the theory and solution techniques for ordinary and partial differential equations, the \
	method of separation of variables, eigenvalue problems, and Fourier series. Students will also study \
	Sturm-Liouville theory, Green\'s functions, and the use of transform methods in solving boundary value \
	problems. Emphasis is placed on both analytical techniques and computational methods, with applications \
	in physics, engineering, and other scientific fields where boundary conditions play a \
	critical role in problem-solving."
	document.getElementById("course-title").innerHTML = "Boundary Value Problems";
	document.getElementById("course-description").innerHTML = description;
};

function MATH381() {
	var description = "This course explores the theory and applications of functions of complex variables. Topics \
	include the complex plane, analytic functions, Cauchy-Riemann equations, contour integration, and the Cauchy \
	Integral Theorem. Students will study techniques such as Taylor and Laurent series, residue calculus, and \
	conformal mapping. The course also covers applications of complex analysis in solving real-world problems \
	in physics and engineering, particularly in fluid dynamics, electromagnetism, and signal processing. \
	Emphasis is placed on both theoretical understanding and practical problem-solving using complex function theory."
	document.getElementById("course-title").innerHTML = "Complex Variables";
	document.getElementById("course-description").innerHTML = description;
};

function MATH441() {
	var description = "A course that introduces students to the study of algebraic structures and their \
	properties. Topics include groups, subgroups, group homomorphisms, rings, fields, and vector spaces, \
	along with related concepts such as group actions, quotient structures, and polynomial rings. The course \
	emphasizes the development of formal mathematical proof techniques and provides a deep understanding of how \
	these algebraic structures underpin many areas of mathematics and its applications. Students will explore \
	the theoretical foundations of algebra, with applications in areas such as cryptography, coding \
	theory, and symmetry."
	document.getElementById("course-title").innerHTML = "Abstract Algebra";
	document.getElementById("course-description").innerHTML = description;
};