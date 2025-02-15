var s3bucket_path = "https://joshwilkins2013.s3.us-east-2.amazonaws.com"
var SlideIndex= 1;

function Slides(n, image_paths, name) {
  var image_array = image_paths.split(",");
  if (n > image_array.length - 1) {SlideIndex = 1}
  if (n < 1) {SlideIndex = image_array.length - 1}
  current_image_path = image_array[SlideIndex-1];
  current_image_name = current_image_path.split("/").at(-1).split(".")[0].replaceAll("_", " ");
  document.getElementById(name + "_Image").src = s3bucket_path + current_image_path.trim();
//  if (!current_image_path.includes("img/Travel/") && !current_image_path.includes("img/About_Me/") ) {
//    document.getElementById(name + "_Caption").innerHTML = current_image_name;  // Don't caption travel images
//  }
}

function load_html(project_name, html_path) {
    var description = "<iframe src=" + html_path + " style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById(project_name + "_Content").innerHTML = description;
}

function load_pdf(project_name, pdf_path) {
    var description = "<iframe src=" + pdf_path + "#toolbar=0&view=FitH\" style=\"width: 100%;border: none;\"></iframe>"
    document.getElementById(project_name + "_Content").innerHTML = description;
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
    s3.listObjects({ Prefix: place_path }, function (err, data) {
      for (const row of data.Contents) {
        images.push(row.Key)
      }

      images = images.filter(item => !item.endsWith('.txt'));
      var block_content = "<div class=\"block\">\n"
      var place_name = place_path.slice(0,-1).split("/").pop();
      block_content += "<h4 class=\"block-header\" id=\"Block_Title\">" + place_name.replaceAll("_", " ") + "<i onclick=\"viewAlbum(this, \'" + place_path + "\')\" class=\"fas fa-plus-square\"></i></h4>\n"
      block_content += "<div style=\"padding-top: 10px;\" id=\"" + place_name + "_Content" + "\">\n"

      block_content += "<div id=\"Block_Slider_Container\" class=\"slideshow-container\">\n";
      block_content += "<div id=\"Block_Slider\" class=\"mySlides\">\n"
      var s3bucket_path = "https://joshwilkins2013.s3.us-east-2.amazonaws.com/"

      first_src = s3bucket_path + images[0];

      images = images.join(",")
      images = images.replaceAll("img", "/img")

      block_content += "<img id=\"" + place_name + "_Image" + "\" src=\"" + first_src + "\" alt=\"image\" />\n</div>\n"
      block_content += "<a class=\"prev\" onclick=\'Slides(SlideIndex -= 1, \"" + images + "\", \"" + place_name + "\")\' style=\"margin-bottom: 0;\"><p class=\"arrow\">&#10094;</p></a>\n";
      block_content += "<a class=\"next\" onclick=\'Slides(SlideIndex += 1, \"" + images + "\", \"" + place_name + "\")\' style=\"margin-bottom: 0;\"><p class=\"arrow\">&#10095;</p></a>\n"

      document.getElementById(col_name).insertAdjacentHTML("beforeend", block_content + "</div>\n</div>\n</div>\n</div>");  // Replace block content with gallery
    });
  });
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
  var block_content = document.getElementById(albumName.slice(0, -1).split('/').pop() + "_Content");

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
      images = images.filter(item => !item.endsWith('.txt'));
      const { first_col_items, second_col_items, third_col_items } = convert_to_gallery(images);

      var href = this.request.httpRequest.endpoint.href;  // 'this' references the AWS.Request instance that represents the response
      var bucketUrl = href + "joshwilkins2013" + "/";

      var row_starter = "<div style=\"padding-top: 10px;\" class=\"row\">\n";
      var column_starter = "<div class=\"col-lg-4\">\n";
      var gallery_content = row_starter + column_starter;

      first_col_items.forEach(image => {
        gallery_content += '<img style="width: 100%; padding: 10 0 10 0;" src="' + bucketUrl + image + '"/>\n';
      });

      gallery_content += '</div>\n' + column_starter; // end the column
      second_col_items.forEach(image => {
        gallery_content += '<img style="width: 100%; padding: 10 0 10 0;" src="' + bucketUrl + image + '"/>\n';
      });

      gallery_content += '</div>\n' + column_starter;  // end the column
      third_col_items.forEach(image => {
        gallery_content += '<img style="width: 100%; padding: 10 0 10 0;" src="' + bucketUrl + image + '"/>\n';
      });

      gallery_content += '</div>\n</div>'; // end the column and the row
      document.getElementById(albumName.slice(0, -1).split("/").pop() + "_Content").innerHTML = gallery_content;  // Replace block content with gallery
    });
  }
}
