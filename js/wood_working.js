var albums = {
        "BarStool": [
			"<img src=\"img/Wood_Working/Bar_Stool/Finished.jpg\"><p>Finished</p>",
			"<img src=\"img/Wood_Working/Bar_Stool/Model.jpg\"><p>Model</p>",
			"<img src=\"img/Wood_Working/Bar_Stool/Support.jpg\"><p>Leg Support</p>",
			"<img src=\"img/Wood_Working/Bar_Stool/Uncut.jpg\"><p>Uncut Tops</p>",
			"<img src=\"img/Wood_Working/Bar_Stool/Cut.jpg\"><p>Cut tops</p>"
		],
		"BedFrame": [
			"<img src=\"img/Wood_Working/Bed_Frame/Finished.jpg\"><p>Finished</p>",
			"<img src=\"img/Wood_Working/Bed_Frame/Model.jpg\"><p>Model</p>",
			"<img src=\"img/Wood_Working/Bed_Frame/Slats.jpg\"><p>Slats</p>",
			"<img src=\"img/Wood_Working/Bed_Frame/Rails.jpg\"><p>Rails</p>",
			"<img src=\"img/Wood_Working/Bed_Frame/Head_Board1.jpg\"><p>Head Board</p>",
			"<img src=\"img/Wood_Working/Bed_Frame/Head_Board2.jpg\"><p>Head Board and Legs</p>",
			"<img src=\"img/Wood_Working/Bed_Frame/Finished_Frame.jpg\"><p>Frame Only</p>",
			"<img src=\"img/Wood_Working/Bed_Frame/Finished_Slats.jpg\"><p>Frame with Slats</p>"
		],
		"BookCase": [
			"<img src=\"img/Wood_Working/Book_Case/Finished.jpg\"><p>Finished</p>",
			"<img src=\"img/Wood_Working/Book_Case/Model.jpg\"><p>Model</p>",
			"<img src=\"img/Wood_Working/Book_Case/Frame.jpg\"><p>Frame Assembled</p>",
			"<img src=\"img/Wood_Working/Book_Case/Back_Attached.jpg\"><p>Frame with Back</p>",
			"<img src=\"img/Wood_Working/Book_Case/Shelves.jpg\"><p>Shelves Added</p>",
			"<img src=\"img/Wood_Working/Book_Case/Stained.jpg\"><p>Stained</p>"
		],
		"CuttingBoard": [
			"<img src=\"img/Wood_Working/Cutting_Board/First_Top.jpg\"><p>Top of First</p>",
			"<img src=\"img/Wood_Working/Cutting_Board/First_Bottom.jpg\"><p>Bottom of First</p>",
			"<img src=\"img/Wood_Working/Cutting_Board/First_Model.jpg\"><p>Model of First</p>",
			"<img src=\"img/Wood_Working/Cutting_Board/Second_Jig.jpg\"><p>Jig for Second</p>",
			"<img src=\"img/Wood_Working/Cutting_Board/Second_Top.jpg\"><p>Top of Second</p>",
			"<img src=\"img/Wood_Working/Cutting_Board/Second_Bottom.jpg\"><p>Bottom of Second</p>",
			"<img src=\"img/Wood_Working/Cutting_Board/Second_Set.jpg\"><p>Set of Second Boards</p>"
		],
        "EndTable": [
			"<img src=\"img/Wood_Working/End_Table/Finished.jpg\"><p>Finished</p>",
			"<img src=\"img/Wood_Working/End_Table/Model.jpg\"><p>Model</p>",
			"<img src=\"img/Wood_Working/End_Table/Legs.jpg\"><p>Legs</p>",
			"<img src=\"img/Wood_Working/End_Table/Legs_Attached.jpg\"><p>Legs Attached</p>",
			"<img src=\"img/Wood_Working/End_Table/Shelf_Attached.jpg\"><p>Shelf Attached</p>",
			"<img src=\"img/Wood_Working/End_Table/Pre-Finished.jpg\"><p>Assembled</p>"
		],
        "NightStand": [
			"<img src=\"img/Wood_Working/Night_Stand/Finished.jpg\"><p>Finished</p>",
			"<img src=\"img/Wood_Working/Night_Stand/Bedroom_Finished.jpg\"><p>Finished in Room</p>",
			"<img src=\"img/Wood_Working/Night_Stand/Model.jpg\"><p>Model</p>",
			"<img src=\"img/Wood_Working/Night_Stand/Handles.jpg\"><p>Handles</p>",
			"<img src=\"img/Wood_Working/Night_Stand/Legs.jpg\"><p>Legs</p>",
			"<img src=\"img/Wood_Working/Night_Stand/Drawers.jpg\"><p>Drawers</p>",
			"<img src=\"img/Wood_Working/Night_Stand/Assembled.jpg\"><p>Assembled</p>",
			"<img src=\"img/Wood_Working/Night_Stand/Both_Assembled.jpg\"><p>Both Assembled</p>"
		],
		"TravelMug": [
			"<img src=\"img/Wood_Working/Travel_Mug/Iso.jpg\"><p>Finished</p>",
			"<img src=\"img/Wood_Working/Travel_Mug/Side.jpg\"><p>Missing Finish</p>"
		],
        "Lamps": [
			"<img src=\"img/Wood_Working/Lamps/First_Finished.jpg\"><p>Finished</p>",
			"<img src=\"img/Wood_Working/Lamps/Set_Finished.jpg\"><p>Set Finished</p>",
			"<img src=\"img/Wood_Working/Lamps/Model.jpg\"><p>Model</p>",
			"<img src=\"img/Wood_Working/Lamps/Bedroom_Finished.jpg\"><p>Placed in Bedroom</p>"
		],
		"TissueBox": [
			"<img src=\"img/Wood_Working/Tissue_Box/Finished1.jpg\"><p>First One Finished</p>",
			"<img src=\"img/Wood_Working/Tissue_Box/Finished2.jpg\"><p>Second One Finished</p>",
			"<img src=\"img/Wood_Working/Tissue_Box/Model.jpg\"><p>Model / Ideas</p>",
			"<img src=\"img/Wood_Working/Tissue_Box/Clamping.jpg\"><p>Clamping</p>"
		],
		"TTT": [
			"<img src=\"img/Wood_Working/3D_TTT/Blocks.jpg\"><p>Complete Set</p>",
			"<img src=\"img/Wood_Working/3D_TTT/No_Blocks.jpg\"><p>Without Blocks</p>"
		],
		"Chest": [
			"<img src=\"img/Wood_Working/Chest/Iso.jpg\"><p>Front</p>",
			"<img src=\"img/Wood_Working/Chest/Inside.jpg\"><p>Inside</p>"
		]
}

document.getElementById("header-text").innerHTML = "<a style=\"text-decoration: none\" href=\"wood-working\">Wood Working Projects</a>";

var BarStoolSlideIndex = 1;
BarStoolSlides(BarStoolSlideIndex);
function BarStoolSlides(n) {
  if (n > albums["BarStool"].length) {BarStoolSlideIndex = 1}
  if (n < 1) {BarStoolSlideIndex = albums["BarStool"].length}
  document.getElementById("BarStoolSlider").innerHTML = albums["BarStool"][BarStoolSlideIndex-1];
}

var BedFrameSlideIndex = 1;
BedFrameSlides(BedFrameSlideIndex);
function BedFrameSlides(n) {
  if (n > albums["BedFrame"].length) {BedFrameSlideIndex = 1}
  if (n < 1) {BedFrameSlideIndex = albums["BedFrame"].length}
  document.getElementById("BedFrameSlider").innerHTML = albums["BedFrame"][BedFrameSlideIndex-1];
}

var BookCaseSlideIndex = 1;
BookCaseSlides(BookCaseSlideIndex);
function BookCaseSlides(n) {
  if (n > albums["BookCase"].length) {BookCaseSlideIndex = 1}
  if (n < 1) {BookCaseSlideIndex = albums["BookCase"].length}
  document.getElementById("BookCaseSlider").innerHTML = albums["BookCase"][BookCaseSlideIndex-1];
}

var CuttingBoardSlideIndex = 1;
CuttingBoardSlides(CuttingBoardSlideIndex);
function CuttingBoardSlides(n) {
  if (n > albums["CuttingBoard"].length) {CuttingBoardSlideIndex = 1} 
  if (n < 1) {CuttingBoardSlideIndex = albums["CuttingBoard"].length}
  document.getElementById("CuttingBoardSlider").innerHTML = albums["CuttingBoard"][CuttingBoardSlideIndex-1];
}

var EndTableSlideIndex = 1;
EndTableSlides(EndTableSlideIndex);
function EndTableSlides(n) {
  if (n > albums["EndTable"].length) {EndTableSlideIndex = 1}
  if (n < 1) {EndTableSlideIndex = albums["EndTable"].length}
  document.getElementById("EndTableSlider").innerHTML = albums["EndTable"][EndTableSlideIndex-1];
}

var NightStandSlideIndex = 1;
NightStandSlides(NightStandSlideIndex);
function NightStandSlides(n) {
  if (n > albums["NightStand"].length) {NightStandSlideIndex = 1}
  if (n < 1) {NightStandSlideIndex = albums["NightStand"].length}
  document.getElementById("NightStandSlider").innerHTML = albums["NightStand"][NightStandSlideIndex-1];
}

var LampsSlideIndex = 1;
LampsSlides(LampsSlideIndex);
function LampsSlides(n) {
  if (n > albums["Lamps"].length) {LampsSlideIndex = 1}
  if (n < 1) {LampsSlideIndex = albums["Lamps"].length}
  document.getElementById("LampsSlider").innerHTML = albums["Lamps"][LampsSlideIndex-1];
}

var TissueBoxSlideIndex = 1;
TissueBoxSlides(TissueBoxSlideIndex);
function TissueBoxSlides(n) {
  if (n > albums["TissueBox"].length) {TissueBoxSlideIndex = 1}
  if (n < 1) {TissueBoxSlideIndex = albums["TissueBox"].length}
  document.getElementById("TissueBoxSlider").innerHTML = albums["TissueBox"][TissueBoxSlideIndex-1];
}

var TravelMugSlideIndex = 1;
TravelMugSlides(TravelMugSlideIndex);
function TravelMugSlides(n) {
  if (n > albums["TravelMug"].length) {TravelMugSlideIndex = 1}
  if (n < 1) {TravelMugSlideIndex = albums["TravelMug"].length}
  document.getElementById("TravelMugSlider").innerHTML = albums["TravelMug"][TravelMugSlideIndex-1];
}

var TTTSlideIndex = 1;
TTTSlides(TTTSlideIndex);
function TTTSlides(n) {
  if (n > albums["TTT"].length) {TTTSlideIndex = 1}
  if (n < 1) {TTTSlideIndex = albums["TTT"].length}
  document.getElementById("TTTSlider").innerHTML = albums["TTT"][TTTSlideIndex-1];
}

var ChestSlideIndex = 1;
ChestSlides(ChestSlideIndex);
function ChestSlides(n) {
  if (n > albums["Chest"].length) {ChestSlideIndex = 1}
  if (n < 1) {ChestSlideIndex = albums["Chest"].length}
  document.getElementById("ChestSlider").innerHTML = albums["Chest"][ChestSlideIndex-1];
}
