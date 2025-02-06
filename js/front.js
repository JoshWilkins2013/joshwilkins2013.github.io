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
    // Search Popup
    // ------------------------------------------------------ //
    $('.search-open').on('click', function (e) {
        e.preventDefault();
        $('.search-panel').fadeIn(100);
    })
    $('.search-panel .close-btn').on('click', function () {
        $('.search-panel').fadeOut(100);
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
            $(".page-content").animate({width:newWidth}, {duration:500, complete:function(){ $(".page-content").width("calc(100% - 280px)"); } });
        }
    });

    // ------------------------------------------------------- //
    // Sidebar Collapsing Non-Active Items
    // ------------------------------------------------------ //
    $('.sidebar-category').on('click', function () {
        var current_state = $(this).find('ul').css('display');
        $('.sidebar-category').each(function(){
            $(this).find('ul').hide();
            $(this).find('i').next().next().attr('class', 'fas fa-angle-left')
        })

        if(current_state == "none") {
            $(this).find('ul').show();
            $(this).find('i').next().next().attr('class', 'fas fa-angle-down')
        } else {
            $(this).find('ul').hide();
            $(this).find('i').next().next().attr('class', 'fas fa-angle-left')
        }
    });

    // ------------------------------------------------------- //
    // Table Collapsing Non-Active Items
    // ------------------------------------------------------ //
    $('.t_closed').on('click', function () {
        $('.t_open').find('ul').removeClass('show');
        $('.t_open').addClass('t_closed');
        $('.t_open').removeClass('t_open');

        $(this).addClass('t_open');
        $(this).removeClass('t_closed');
        $(this).find('ul').addClass('show');
    });

    // ------------------------------------------------------- //
    // Expanding Blocks
    // ------------------------------------------------------ //
    $('.fa-plus-square').on('click', function () {
        $('.block').toggleClass('nodisp');
        var block = $(this).closest("div").parent();
        block.removeClass('nodisp');
        block.parent().toggleClass('col-lg-4 col-lg-12');
        $(this).toggleClass('fa-plus-square fa-minus-square')
    });
});
