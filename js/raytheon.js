var albums = {
		"Raytheon": [
		    "<img src=\"img/Raytheon/Radar.png\"><p>Radar Communications</p>",
		    "<img src=\"img/Raytheon/Space.png\"><p>Satellite Communications</p>",
		    "<img src=\"img/Raytheon/Missile.png\"><p>Missile Development</p>",
		    "<img src=\"img/Raytheon/Missile_Launch.png\"><p>Missile Testing</p>",
		    "<img src=\"img/Raytheon/Aircraft.png\"><p>Aircraft Development</p>"
		]
}

document.getElementById("header-text").innerHTML = "<a href=\"raytheon\"><img src=\"img/Banners/Raytheon_Banner.png\"></a>";

var RaytheonSlideIndex = 1;
RaytheonSlides(RaytheonSlideIndex);
function RaytheonSlides(n) {
  if (n > albums["Raytheon"].length) {RaytheonSlideIndex = 1}
  if (n < 1) {RaytheonSlideIndex = albums["Raytheon"].length}
  document.getElementById("RaytheonSlider").innerHTML = albums["Raytheon"][RaytheonSlideIndex-1];
}

function CSM() {
	var description = "I developed a versatile synthesizer module that was integrated into larger, more complex \
	systems. As such, this module was designed with flexibility in mind, enabling it to be used across multiple \
	product lines. For context, a synthesizer is a device that generates electrical signals at precise frequencies, \
	which are then utilized in various fields such as wireless communications and signal processing. \
	These modules are crucial in systems that demand high-frequency stability and accuracy.<br><br>\
	There are several approaches to designing a synthesizer, each with its own benefits depending on the specific \
	requirements of the application. Common architectures include Direct Digital Synthesis (DDS), Phase-Locked \
	Loops (PLLs), and Voltage-Controlled Oscillators (VCOs). Each design offers different trade-offs in terms \
	of cost, complexity, and bandwidth. For example, a DDS allows for fine frequency control and flexibility \
	but can be more complex and power-hungry. PLLs offer better frequency stability with lower power consumption \
	but might have limitations in tuning speed or bandwidth. VCOs, provide simple and cost-effective solutions \
	for certain applications, but may lack the precision of DDS or PLL systems.<br><br>\
    Choosing the right synthesizer architecture depends on factors such as required frequency range, signal \
    purity, cost constraints, and system complexity. My work on this synthesizer module involved evaluating these \
    factors and selecting the best approach to ensure reliable performance across multiple product applications."
    var title = "Synthesizer Module";
    document.getElementById("details-title").innerHTML = title;
    document.getElementById("details-subtitle").innerHTML = "";
    document.getElementById("details-description").innerHTML = description;
}

function LBR() {
	var description = "I developed an L-band receiver at Raytheon that converts radio signals in the 1 GHz to 2 GHz \
	range into useful data for various applications. While I can't disclose the specific application, I can say that \
	L-band frequencies are commonly used in wireless communication systems, like GPS, due to their ideal balance of \
	range, penetration, and bandwidth. These signals are typically transmitted by antennas on satellites, aircraft, \
	or ground stations.<br><br>\
	The L-band receiver itself is a complex circuit that performs several essential tasks. It must be finely tuned \
	to the precise frequency of the incoming signal using specially designed filters. Since these signals are often \
	encoded, the receiver also needs to demodulate them. The signals are then converted into usable data through \
	Digital-to-Analog Converters (DACs), and the processed data is further interpreted or utilized on an FPGA."
    var title = "L-Band Receiver";
    document.getElementById("details-title").innerHTML = title;
    document.getElementById("details-subtitle").innerHTML = "";
    document.getElementById("details-description").innerHTML = description;
}

function XLC() {
	var description = "I developed an X-band to L-band converter, which is a device that takes radio signals in \
	the X-band frequency range (8 to 12 GHz) and shifts them down to the L-band (1 to 2 GHz). This conversion \
	process uses a technique called mixing, where the incoming signal is combined with a reference frequency from a \
	local oscillator, creating a new, lower-frequency signal. However, this process can also produce unwanted \
	signals, so careful planning and filtering are required to remove them.<br><br>\
	Converters like this are essential because many systems or devices are designed to operate within specific \
	frequency ranges. For instance, in satellite communication, signals may be transmitted in the X-band, but \
	the ground stations or receivers may be set up to work in the L-band. By converting the signal, you ensure \
	smoother processing and compatibility between different systems. In some cases, the transmitted signals are \
	out of your control, and in others, processing is simply more efficient at a particular frequency."
    var title = "X-L Band Converter";
    document.getElementById("details-title").innerHTML = title;
    document.getElementById("details-subtitle").innerHTML = "";
    document.getElementById("details-description").innerHTML = description;
}

//function ADS() {
//	var description = ""
//    var title = "Keysight ADS";
//    document.getElementById("details-title").innerHTML = title;
//    document.getElementById("details-subtitle").innerHTML = "";
//    document.getElementById("details-description").innerHTML = description;
//}
//
//function Filters() {
//	var description = ""
//    var title = "Filter Design";
//    document.getElementById("details-title").innerHTML = title;
//    document.getElementById("details-subtitle").innerHTML = "";
//    document.getElementById("details-description").innerHTML = description;
//}
