var SlideIndex= 1;

function Slides(n, image_paths, name) {
  var image_array = image_paths.split(",");
  if (n > image_array.length - 1) {SlideIndex = 1}
  if (n < 1) {SlideIndex = image_array.length - 1}
  current_image_path = image_array[SlideIndex-1];
  current_image_name = current_image_path.split("/").at(-1).split(".")[0].replaceAll("_", " ");
  document.getElementById(name + "_Image").src = current_image_path;
  if (!current_image_path.includes("img/Travel/")) {
    document.getElementById(name + "_Caption").innerHTML = current_image_name;  // Don't caption travel images
  }
}

function load_html(project_name, html_path) {
    var description = "<iframe src=" + html_path + " style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById(project_name + "_Content").innerHTML = description;
}

function load_pdf(project_name, pdf_path) {
    var description = "<iframe src=" + pdf_path + "#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById(project_name + "_Content").innerHTML = description;
}