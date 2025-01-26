var albums = {
		"Entryway": [
			"<img src=\"img/House/Entryway/Before.jpg\"><p>Before Picture</p>",
			"<img src=\"img/House/Entryway/Closet_Removed.jpg\"><p>Closet Removed</p>",
			"<img src=\"img/House/Entryway/Leaky_Ceiling.jpg\"><p>Ceiling Drywall Replaced</p>"
		],
		"Roof": [
			"<img src=\"img/House/Roof/Before.jpg\"><p>Before Picture</p>",
			"<img src=\"img/House/Roof/Front_Start.jpg\"><p>Front in Progress</p>",
			"<img src=\"img/House/Roof/Side_Start.jpg\"><p>Side in Progress</p>",
			"<img src=\"img/House/Roof/Front_Close.jpg\"><p>Front Almost Done</p>",
			"<img src=\"img/House/Roof/Front_Done.jpg\"><p>Roof Completed</p>",
			"<img src=\"img/House/Roof/Side_Done.jpg\"><p>Roof Completed</p>",
			"<img src=\"img/House/Roof/Chimney_Flash.jpg\"><p>Chimney Flashed</p>"
		],
		"LinenCloset": [
			"<img src=\"img/House/Linen_Closet/Before.jpg\"><p>Second Shower</p>",
			"<img src=\"img/House/Linen_Closet/Demo.jpg\"><p>Demo Time</p>",
			"<img src=\"img/House/Linen_Closet/Drywall.jpg\"><p>Drywall Added</p>",
			"<img src=\"img/House/Linen_Closet/Paint.jpg\"><p>Painted</p>",
			"<img src=\"img/House/Linen_Closet/Floor.jpg\"><p>Floor Finished</p>",
			"<img src=\"img/House/Linen_Closet/Shelves.jpg\"><p>Shelves Added</p>"
		],
		"Kitchen": [
			"<img src=\"img/House/Kitchen/Before1.jpg\"><p>Before</p>",
			"<img src=\"img/House/Kitchen/Before2.jpg\"><p>Before</p>",
			"<img src=\"img/House/Kitchen/Underlayment.jpg\"><p>Underlayment Placed</p>",
			"<img src=\"img/House/Kitchen/Tiles_Started.jpg\"><p>Tiling Started</p>",
			"<img src=\"img/House/Kitchen/Tiles_Finished.jpg\"><p>Tiling Finished</p>",
			"<img src=\"img/House/Kitchen/Grouting.jpg\"><p>Grouting Underway</p>",
			"<img src=\"img/House/Kitchen/Lighting.jpg\"><p>Cabinet Lighting</p>",
			"<img src=\"img/House/Kitchen/Stove_Cab.jpg\"><p>Stove Cabinet</p>",
			"<img src=\"img/House/Kitchen/Pantry_Cab.jpg\"><p>Pantry</p>",
			"<img src=\"img/House/Kitchen/Sink_Cutout.jpg\"><p>Sink_Cutout</p>"
		],
        "Siding": [
			"<img src=\"img/House/Siding/Before_Front.jpg\"><p>Before - Front of House</p>",
			"<img src=\"img/House/Siding/Before_Garage.jpg\"><p>Before - Side of House</p>",
			"<img src=\"img/House/Siding/Removing_Shakes.jpg\"><p>Removing Shakes</p>",
			"<img src=\"img/House/Siding/Front_Started.jpg\"><p>Front of House Wrapped</p>",
			"<img src=\"img/House/Siding/Side_Started.jpg\"><p>Side of House Started</p>",
			"<img src=\"img/House/Siding/Front_Finished.jpg\"><p>Front of House Finished</p>",
			"<img src=\"img/House/Siding/Side_Finished.jpg\"><p>Side of House Finished</p>",
            "<img src=\"img/House/Siding/Garage_Finished.jpg\"><p>Garage Side Finished</p>"
		],
        "Misc": [
			"<img src=\"img/House/Misc/Back_Steps.jpg\"><p>Steps to Back of House</p>",
			"<img src=\"img/House/Misc/Garage_Shelves.jpg\"><p>Garage Shelves</p>",
			"<img src=\"img/House/Misc/Miter_Saw_Stand.jpg\"><p>Miter Saw Stand</p>",
			"<img src=\"img/House/Misc/NW_Bedroom_Painted.jpg\"><p>Bedroom Painted</p>",
			"<img src=\"img/House/Misc/Table_Saw_Bench.jpg\"><p>Table Saw Bench</p>",
			"<img src=\"img/House/Misc/Wall_Pictures.jpg\"><p>Wall Pictures</p>"
		]
}

document.getElementById("header-text").innerHTML = "House Projects";

var EntrywaySlideIndex = 1;
EntrywaySlides(EntrywaySlideIndex);
function EntrywaySlides(n) {
  if (n > albums["Entryway"].length) {EntrywaySlideIndex = 1}
  if (n < 1) {EntrywaySlideIndex = albums["Entryway"].length}
  document.getElementById("EntrywaySlider").innerHTML = albums["Entryway"][EntrywaySlideIndex-1];
}

var RoofSlideIndex = 1;
RoofSlides(RoofSlideIndex);
function RoofSlides(n) {
  if (n > albums["Roof"].length) {RoofSlideIndex = 1}
  if (n < 1) {RoofSlideIndex = albums["Roof"].length}
  document.getElementById("RoofSlider").innerHTML = albums["Roof"][RoofSlideIndex-1];
}

var LinenClosetSlideIndex = 1;
LinenClosetSlides(LinenClosetSlideIndex);
function LinenClosetSlides(n) {
  if (n > albums["LinenCloset"].length) {LinenClosetSlideIndex = 1}
  if (n < 1) {LinenClosetSlideIndex = albums["LinenCloset"].length}
  document.getElementById("LinenClosetSlider").innerHTML = albums["LinenCloset"][LinenClosetSlideIndex-1];
}

var KitchenSlideIndex = 1;
KitchenSlides(KitchenSlideIndex);
function KitchenSlides(n) {
  if (n > albums["Kitchen"].length) {KitchenSlideIndex = 1}
  if (n < 1) {KitchenSlideIndex = albums["Kitchen"].length}
  document.getElementById("KitchenSlider").innerHTML = albums["Kitchen"][KitchenSlideIndex-1];
}

var SidingSlideIndex = 1;
SidingSlides(SidingSlideIndex);
function SidingSlides(n) {
  if (n > albums["Siding"].length) {SidingSlideIndex = 1}
  if (n < 1) {SidingSlideIndex = albums["Siding"].length}
  document.getElementById("SidingSlider").innerHTML = albums["Siding"][SidingSlideIndex-1];
}

var MiscSlideIndex = 1;
MiscSlides(MiscSlideIndex);
function MiscSlides(n) {
  if (n > albums["Misc"].length) {MiscSlideIndex = 1}
  if (n < 1) {MiscSlideIndex = albums["Misc"].length}
  document.getElementById("MiscSlider").innerHTML = albums["Misc"][MiscSlideIndex-1];
}
