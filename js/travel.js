// Configure AWS parameters
AWS.config.region = "us-east-2"; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-east-2:7959eafc-fa96-478e-8ba9-e1cbcff426cd"
});

// Create a new service object
var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: "joshwilkins2013" }
});

function convert_to_gallery(items) {
  var num_items = items.length;
  var num_per_col = Math.floor(num_items / 3);
  var remainder = num_items % 3;

  //  Division rounds down, need to add remainders to first/second columns
  var num_in_first = (remainder<=2) ? num_per_col + 1 : num_per_col;
  var num_in_second = (remainder===2) ? num_per_col + 1 : num_per_col;

  var slice_spot = num_in_first + num_in_second;  // Where to slice between 2nd and 3rd
  var first_col_items = items.slice(0, num_in_first);
  var second_col_items = items.slice(num_in_first, slice_spot);
  var third_col_items = items.slice(slice_spot);

  return { first_col_items, second_col_items, third_col_items }
}

s3.listObjects({ Prefix: "img/Travel/", Delimiter: "/" }, function (err, data) {
  // Get all folder names in img/travel folder
  const { first_col_items, second_col_items, third_col_items } = convert_to_gallery(data.CommonPrefixes);
  var gallery_content = "<div id=\"First_Col\" class=\"col-lg-4\">\n"
  document.getElementById("travel_content").insertAdjacentHTML("beforeend", gallery_content);

  first_col_items.forEach(place_item => {
    var images = [];
    var place_path = place_item.Prefix
    s3.listObjects({ Prefix: place_path }, function (err, data) {
      for (const row of data.Contents) {
        images.push(row.Key)
      }

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

      document.getElementById("First_Col").insertAdjacentHTML("beforeend", block_content + "</div>\n</div>\n</div>\n</div>");  // Replace block content with gallery
    });
  });

  var gallery_content = "<div id=\"Second_Col\" class=\"col-lg-4\">\n"
  document.getElementById("travel_content").insertAdjacentHTML("beforeend", gallery_content);
  second_col_items.forEach(place_item => {
    var images = [];
    var place_path = place_item.Prefix
    s3.listObjects({ Prefix: place_path }, function (err, data) {
      for (const row of data.Contents) {
        images.push(row.Key)
      }

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

      document.getElementById("Second_Col").insertAdjacentHTML("beforeend", block_content + "</div>\n</div>\n</div>\n</div>");  // Replace block content with gallery
    });
  });

  var gallery_content = "<div id=\"Third_Col\" class=\"col-lg-4\">\n"
  document.getElementById("travel_content").insertAdjacentHTML("beforeend", gallery_content);
  third_col_items.forEach(place_item => {
    var images = [];
    var place_path = place_item.Prefix
    s3.listObjects({ Prefix: place_path }, function (err, data) {
      for (const row of data.Contents) {
        images.push(row.Key)
      }

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

      document.getElementById("Third_Col").insertAdjacentHTML("beforeend", block_content + "</div>\n</div>\n</div>\n</div>");  // Replace block content with gallery
    });
  });
});


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
      const { first_col_items, second_col_items, third_col_items } = convert_to_gallery(data.Contents);

      var href = this.request.httpRequest.endpoint.href;  // 'this' references the AWS.Request instance that represents the response
      var bucketUrl = href + "joshwilkins2013" + "/";

      var row_starter = "<div style=\"padding-top: 10px;\" class=\"row\">\n";
      var column_starter = "<div class=\"col-lg-4\">\n";
      var gallery_content = row_starter + column_starter;

      first_col_items.forEach(image => {
        gallery_content += '<img style="width: 100%; padding: 10 0 10 0;" src="' + bucketUrl + encodeURIComponent(image.Key) + '"/>\n';
      });

      gallery_content += '</div>\n' + column_starter; // end the column
      second_col_items.forEach(image => {
        gallery_content += '<img style="width: 100%; padding: 10 0 10 0;" src="' + bucketUrl + encodeURIComponent(image.Key) + '"/>\n';
      });

      gallery_content += '</div>\n' + column_starter;  // end the column
      third_col_items.forEach(image => {
        gallery_content += '<img style="width: 100%; padding: 10 0 10 0;" src="' + bucketUrl + encodeURIComponent(image.Key) + '"/>\n';
      });

      gallery_content += '</div>\n</div>'; // end the column and the row
      document.getElementById(albumName.slice(0, -1).split("/").pop() + "_Content").innerHTML = gallery_content;  // Replace block content with gallery
    });
  }
}
