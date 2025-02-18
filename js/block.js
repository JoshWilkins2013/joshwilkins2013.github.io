var s3bucket_path = "https://joshwilkins2013.s3.us-east-2.amazonaws.com/"

var SliderIndices = {};  // Keep track of each blocks slider individually

function Slides(direction, image_paths, name) {
  let n = (direction === '+') ? SliderIndices[name] + 1 : SliderIndices[name] - 1;
  var image_array = image_paths.split(",");
  if (n > image_array.length - 1) {SliderIndices[name] = 0}
  else if (n < 0) {SliderIndices[name] = image_array.length - 1}
  else {SliderIndices[name] = n}
  var current_image_path = image_array[SliderIndices[name]];
//  current_image_name = current_image_path.split("/").at(-1).split(".")[0].replaceAll("_", " ");
  document.getElementById(name + "_Image").src = s3bucket_path + current_image_path;
//  if (!current_image_path.includes("img/Travel/") && !current_image_path.includes("img/About_Me/") ) {
//    document.getElementById(name + "_Caption").innerHTML = current_image_name;  // Don't caption travel images
//  }
}

function load_html(project_name, html_path) {
  var src = s3bucket_path + html_path + "#toolbar=0&view=FitH";
  var description = "<iframe src=\"" + src + "\" style=\"width: 100%;border: none;\"></iframe>";
  document.getElementById(project_name + "_Slider").innerHTML = description;
  remove_button(project_name);
}

function load_pdf(project_name, pdf_path) {
  var src = s3bucket_path + pdf_path + "#toolbar=0&view=FitH";
  var description = "<iframe src=\"" + src + "\" style=\"width: 100%;border: none;\"></iframe>";

  if (project_name != "About_Me") {  // Don't remove all breaks on resume
    document.getElementById(project_name + "_Slider").innerHTML = description;
    remove_button(project_name);
  } else {
    document.getElementById(project_name + "_Content").innerHTML = description;
  }
}

function remove_button(project_name) {
  // Hide the button that loaded the html/pdf file. Also remove extra <br> tags
  var description_object = document.getElementById(project_name + "_Description");
  description_object.innerHTML = description_object.innerHTML.replaceAll("<br>", "")
  $('#' + project_name + "_Description").find('button').hide();
}

function convert_to_gallery(items) {
  var num_items = items.length;
  var num_per_col = Math.floor(num_items / 3);
  var remainder = num_items % 3;

  //  Division rounds down, need to add remainders to first/second columns
  var num_in_first = (remainder===1 || remainder===2) ? num_per_col + 1 : num_per_col;
  var num_in_second = (remainder===2) ? num_per_col + 1 : num_per_col;

  var slice_spot = num_in_first + num_in_second;  // Where to slice between 2nd and 3rd
  var first_col_items = items.slice(0, num_in_first);
  var second_col_items = items.slice(num_in_first, slice_spot);
  var third_col_items = items.slice(slice_spot);

  return { first_col_items, second_col_items, third_col_items }
}

function place_blocks(items, col_name) {
  var gallery_content = "<div id=\"" + col_name + "\" class=\"col-lg-4\">\n"
  document.getElementById("row_content").insertAdjacentHTML("beforeend", gallery_content);
  items.forEach(place_item => {
    var images = [];
    var place_path = place_item.Prefix
    var description_file = "";
    s3.listObjects({ Prefix: place_path }, function (err, data) {
      description_file = "";
      for (const row of data.Contents) {

        var block_content = "<div class=\"block\">\n"
        var place_name = place_path.slice(0,-1).split("/").pop();
        block_content += "<h4 class=\"block-header\" id=\"Block_Title\">" + place_name.replaceAll("_", " ") + "<i onclick=\"viewAlbum(this, \'" + place_path + "\')\" class=\"fas fa-plus-square\"></i></h4>\n"
        block_content += "<div id=\"" + place_name + "_Content" + "\">\n"

        var file = row.Key;
        if (file.includes(".txt")){
          description_file = file;
        } else {
          images.push(file);
        }
      }

      block_content += "<div class=\"block-description\" id=\"" + place_name + "_Description\" >";
      images = images.filter(item => !item.endsWith('/')); // Sometimes the pull gets the folder name with it?
      if (description_file != "") {
        fetch(s3bucket_path + description_file).then(response => response.text()).then(text => {
          block_content += text + "</div>\n<div id=\"" + place_name + "_Slider_Container\" class=\"slideshow-container\">\n";
          block_content = finish_block_content(block_content, images, place_name, col_name);
          document.getElementById(col_name).insertAdjacentHTML("beforeend", block_content + "</div>\n</div>\n</div>\n</div>");  // Replace block content with gallery
        });
      } else {
        block_content += "</div>\n<div id=\"" + place_name + "_Slider_Container\" class=\"slideshow-container\">\n";
        block_content = finish_block_content(block_content, images, place_name, col_name);
        document.getElementById(col_name).insertAdjacentHTML("beforeend", block_content + "</div>\n</div>\n</div>\n</div>");  // Replace block content with gallery
      }
    });
  });
}

function finish_block_content(block_content, images, place_name) {
  block_content += "<div id=\"" + place_name + "_Slider\" class=\"mySlides\">\n"

  first_src = s3bucket_path + images[0];
  SliderIndices[place_name] = 0;
  block_content += "<span onclick=\'toggle_lightbox(this)\'><img id=\"" + place_name + "_Image" + "\" src=\"" + first_src + "\" alt=\"image\" /></span>\n"
  block_content += "<a class=\"prev\" onclick=\'Slides(\"-\" ,\"" + images + "\", \"" + place_name + "\")\' style=\"margin-bottom: 0;\"><p class=\"arrow\">&#10094;</p></a>\n";
  block_content += "<a class=\"next\" onclick=\'Slides(\"+\" ,\"" + images + "\", \"" + place_name + "\")\' style=\"margin-bottom: 0;\"><p class=\"arrow\">&#10095;</p></a>\n</div>\n"
  return block_content;
}

function fill_page(prefix_path) {
  prefix_path = prefix_path.replaceAll("-", "_");
  s3.listObjects({ Prefix: prefix_path, Delimiter: "/" }, function (err, data) {
    // Get all folder names in img/travel folder
    const { first_col_items, second_col_items, third_col_items } = convert_to_gallery(data.CommonPrefixes);
    place_blocks(first_col_items, "First_Col");
    place_blocks(second_col_items, "Second_Col");
    place_blocks(third_col_items, "Third_Col");
  });
}

var original_content;  // Variable to remember original state of block before expansion

// Show the photos that exist in an album.
function viewAlbum(element, albumName) {
  var current_col = element.closest(".col-lg-4");  // Find block associated with clicked +
  var place_name = albumName.slice(0, -1).split('/').pop();
  var block_content = document.getElementById(place_name + "_Content");

  var current_block = $(element.closest(".block"));  // Find block associated with clicked +
  $(".block").not(current_block).toggle().promise().then(function() {
    current_block.parent().toggleClass('col-lg-12');  // Then enlarge it
  });

  $(element).toggleClass('fa-plus-square fa-minus-square')

  if(current_col.classList.contains("col-lg-12")) {  // Restore slider in smaller block
    block_content.innerHTML = original_content;
  } else {
    original_content = block_content.innerHTML;  // Keep track of original slider data to restore on block shrinkage
    s3.listObjects({ Prefix: albumName }, function (err, data) {
      var images = [];
      for (const row of data.Contents) {
        images.push(row.Key)
      }
      images = images.filter(item => !item.endsWith('/')); // Sometimes the pull gets the folder name with it?
      images = images.filter(item => !item.endsWith('.txt'));
      const { first_col_items, second_col_items, third_col_items } = convert_to_gallery(images);

      var href = this.request.httpRequest.endpoint.href;  // 'this' references the AWS.Request instance that represents the response
      var bucketUrl = href + "joshwilkins2013" + "/";

      var row_starter = "<div id=\"" + place_name + "_Slider\" class=\"row\">\n";
      var column_starter = "<div class=\"col-lg-4\">\n";
      var gallery_content = row_starter + column_starter;

      first_col_items.forEach(image => {
        gallery_content += '<span><img onclick=\'toggle_lightbox(this)\' style="width: 100%; margin: 10 0 10 0" src="' + bucketUrl + image + '"/></span>\n';
      });

      gallery_content += '</div>\n' + column_starter; // end the column
      second_col_items.forEach(image => {
        gallery_content += '<span><img onclick=\'toggle_lightbox(this)\' style="width: 100%; margin: 10 0 10 0" src="' + bucketUrl + image + '"/></span>\n';
      });

      gallery_content += '</div>\n' + column_starter;  // end the column
      third_col_items.forEach(image => {
        gallery_content += '<span><img onclick=\'toggle_lightbox(this)\' style="width: 100%; margin: 10 0 10 0" src="' + bucketUrl + image + '"/></span>\n';
      });

      gallery_content += '</div>\n</div>'; // end the column and the row
      document.getElementById(albumName.slice(0, -1).split("/").pop() + "_Slider_Container").innerHTML = gallery_content;  // Replace block content with gallery
    });
  }
}

function add_slider(folder_name, place_name) {
  prefix_path = "img/" + folder_name + "/" + place_name + "/"

  var images = [];
  // Get all folder names in img/travel folder
  s3.listObjects({ Prefix: prefix_path }, function (err, data) {
    for (const row of data.Contents) {
      images.push(row.Key)
    }

    images = images.filter(item => !item.endsWith('/')); // Sometimes the pull gets the folder name with it?
    var block_content = finish_block_content("", images, place_name)
    document.getElementById(folder_name + "_Slider").innerHTML = block_content;
  });
}

function toggle_lightbox(element) {
    $(element).parent().toggleClass('lightbox');
    $('.navbar-brand').toggle();
    $('.navbar-navigation').toggle();
    $('.header-title-text').toggle();
}

function UpdateBlock(place_name, block_key) {
    document.getElementById(place_name + "_Title").innerHTML = block_info[block_key]["title"];
    document.getElementById(place_name + "_Subtitle").innerHTML = block_info[block_key]["subtitle"];
    document.getElementById(place_name + "_Description").innerHTML = block_info[block_key]["description"];

    slider_name = block_info[block_key]["image"];
    if (slider_name === "") {
        document.getElementById(place_name + "_Slider").innerHTML = "";  // No image or slider
    } else if (slider_name.includes("png")) {  // Just a single image
        image = "<div class=\"mySlides\"><span onclick=\'toggle_lightbox(this)\'><img src=\"https://joshwilkins2013.s3.us-east-2.amazonaws.com/img/" + place_name + "/" + slider_name + "\"></span></div>";
        document.getElementById(place_name + "_Slider").innerHTML = image;  // No image or slider
    } else if (slider_name.includes(".html")) {  // html file in place of images
        load_html(place_name, "storage/" + place_name + "/" + slider_name);
    } else {
        add_slider(place_name, slider_name);
    }
}