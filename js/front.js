$(function () {

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
        $('.brand-text').toggle();
        $('.avatar-link').toggle();

        if($(this).find('i').attr('class') == 'fa fa-long-arrow-left arrow') {
            $(this).find('i').attr('class', 'fa fa-long-arrow-right arrow');
            $('.header-title-text').css('left', '0px');
            $(".page-content").animate({"width": '100%'});
        } else {
            $(this).find('i').attr('class', 'fa fa-long-arrow-left arrow');
            $('.header-title-text').css('left', '140px');

            var newWidth = ($(".page-content").width() - 280);
            $(".page-content").animate({width:newWidth}, {duration:500, complete:function(){
                $(".page-content").width("calc(100% - 280px)"); }
            });
        }
    });

    // ------------------------------------------------------- //
    // Sidebar Collapsing Non-Active Items
    // ------------------------------------------------------ //
    $('.sidebar-category').on('click', function () {
        var current_state = $(this).find('ul').css('display');
        $(this).find('ul').animate({height: 'toggle'});  // Animate opening/closing of selected sidebar category
        $(this).find('i').next().next().toggleClass('fa-angle-down fa-angle-left')

        $('.sidebar-category').not(this).each(function() {
          $(this).find('ul').hide();  // Hide all other sidebar categories
          $(this).find('i').next().next().attr('class', 'fas fa-angle-left')
        });
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
