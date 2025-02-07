document.getElementById("header-text").innerHTML = "<a style=\"text-decoration: none\" href=\"travel\">Travel</a>";

var SlideIndex= 1;
function Slides(n, image_paths, place) {
  var image_array = image_paths.split(",");
  if (n > image_array.length - 1) {SlideIndex = 1}
  if (n < 1) {SlideIndex = image_array.length - 1}
  document.getElementById(place + "_Image").src = image_array[SlideIndex-1];
}
