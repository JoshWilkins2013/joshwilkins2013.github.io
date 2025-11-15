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

let previous_screen_width = $(window).width();

function hideSidebar() {
    // Hide the sidebar, avatar, etc.
    $('.brand-text').hide();
    $('.avatar-link').hide();
    $('#sidebar').hide();
    $(".page-content").width("100%")
    $(".header-title-text").css("left", "0");
    $(".sidebar-toggle").find('i').attr('class', 'fa fa-long-arrow-right arrow');
}

function handleScreenResize() {
    // Hide sidebar stuff if shrinking screen past 1199 px wide
    const current_width = $(window).width();
    if (current_width < previous_screen_width && current_width <= 1199) {
        hideSidebar();
    }
    // Show avatar if screen growing and sidebar is open
    var arrow_dir = $(".sidebar-toggle").find('i').attr('class')
    if (current_width > previous_screen_width && current_width >= 1199 && arrow_dir === 'fa fa-long-arrow-left arrow') {
        $('.brand-text').show();
        $('.avatar-link').show();
    }
    previous_screen_width = current_width
}

$(function () {
    // ------------------------------------------------------- //
    // Handling resizing events
    // ------------------------------------------------------ //

    // Hide sidebar if page load starts with small screen size
    if($(window).width() <= 1199) {
        hideSidebar();
    }

    $(window).on('resize', function(){
        handleScreenResize()
    });

    // ------------------------------------------------------- //
    // Adding fade effect to dropdowns
    // ------------------------------------------------------ //
    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(100).addClass('active');
    });
    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(100).removeClass('active');
    });

    // ------------------------------------------------------- //
    // Sidebar Toggle Display
    // ------------------------------------------------------ //
    $('.sidebar-toggle').on('click', function () {
        if($(this).find('i').attr('class') == 'fa fa-long-arrow-left arrow') {
            // Hide sidebar, expand page content and footer
            $('.brand-text').hide();
            $('.avatar-link').hide();
            $(this).find('i').attr('class', 'fa fa-long-arrow-right arrow');

//            $('.header-title-text').css('left', '0px');

            $("#sidebar").animate({width: '0px'}, { duration: 500, queue: false });
            $(".page-content").animate({width: '100%'}, { duration: 500, queue: false });
            $('.header-title-text').animate({left: '0px'}, { duration: 500, queue: false });
        } else {
            // Show sidebar, shrink page content and footer
            $('.brand-text').show();
            $('.avatar-link').show();
            $('#sidebar').show();
            $(this).find('i').attr('class', 'fa fa-long-arrow-left arrow');
            $('.header-title-text').animate({left: '140px'}, { duration: 500, queue: false });

            $("#sidebar").animate({width: '280px'}, { duration: 500, queue: false });
            var newWidth = ($(".page-content").width() - 280);
            $(".page-content").animate({width:newWidth}, {duration:500, queue: false, complete:function(){
                $(".page-content").width("calc(100% - 280px)"); }
            });

        // Check media type / screen size
        if ($(window).width() <= 1199) {
            $('.brand-text').hide();
            $('.avatar-link').hide();
        }

        }
    });

    // ------------------------------------------------------- //
    // Sidebar Collapsing Non-Active Items
    // ------------------------------------------------------ //
    $('.sidebar-category').on('click', function (event) {
        if (event.target.className !== 'sidebar_link') { // Check if the clicked element is a span

            var current_state = $(this).find('ul').css('display');
            $(this).find('ul').animate({height: 'toggle'});  // Animate opening/closing of selected sidebar category
            $(this).find('i').next().next().toggleClass('fa-angle-down fa-angle-left')


            $('.sidebar-category').not(this).each(function() {
              $(this).find('ul').hide();  // Hide all other sidebar categories
              $(this).find('i').next().next().attr('class', 'fas fa-angle-left')
            });
        }
    });

    // ------------------------------------------------------- //
    // Table Collapsing Non-Active Items
    // ------------------------------------------------------ //
    $('.expandable-row').on('click', function () {
        var current_row = $(this).parent().find('ul');
        if(current_row.css('display') == 'none'){
            current_row.toggle();
        }
        $('.expandable-row').not(this).parent().find('ul').hide();
    });

    // ------------------------------------------------------- //
    // Expanding Blocks
    // ------------------------------------------------------ //
    $('.fa-plus-square').on('click', function () {
        var current_block = $(this).closest(".block");  // Find block associated with clicked +

        $(".block").not(current_block).toggle().promise().then(function() {
            current_block.parent().toggleClass('col-lg-12');  // Then enlarge it
        });

        $(this).toggleClass('fa-plus-square fa-minus-square')
    });
});
