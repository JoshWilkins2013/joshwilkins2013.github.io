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
    // Sidebar <-- Functionality
    // ------------------------------------------------------ //
    $('.sidebar-toggle').on('click', function () {
        $(this).toggleClass('active');

        $('#sidebar').toggleClass('shrinked');
        $('.page-content').toggleClass('active');

        if ($('.sidebar-toggle').hasClass('active')) {
            $('.navbar-brand .brand-sm').addClass('visible');
            $('.navbar-brand .brand-big').removeClass('visible');
            $(this).find('i').attr('class', 'fa fa-long-arrow-right arrow');
        } else {
            $('.navbar-brand .brand-sm').removeClass('visible');
            $('.navbar-brand .brand-big').addClass('visible');
            $(this).find('i').attr('class', 'fa fa-long-arrow-left arrow');
        }
    });

    // ------------------------------------------------------- //
    // Sidebar Collapsing Non-Active Items
    // ------------------------------------------------------ //
    $('.closed').on('click', function () {
        $('.open').find('ul').removeClass('show');
        $('.open').addClass('closed');
        $('.open').removeClass('open');

        /* Arrows */
        $('.fa-angle-down').addClass('fa-angle-left')
        $('.fa-angle-down').removeClass('fa-angle-down')

        $(this).addClass('open');
        $(this).removeClass('closed');
        $(this).removeClass('collapsed');
        $(this).find('ul').addClass('show');

        /* Arrows */
        $(this).find('i').next().next().removeClass('fa-angle-left')
        $(this).find('i').next().next().addClass('fa-angle-down')
    });

    // Not sure why this part is needed, the above code should work fine but doesn't
    // Has to do with sidebar item starting open
    $('.special').on('click', function () {
        $('.open').toggleClass('closed');
        $('.open').find('ul').toggleClass('show');
        $('.open').toggleClass('open');

        /* Arrows */
        $('.fa-angle-down').addClass('fa-angle-left')
        $('.fa-angle-down').removeClass('fa-angle-down')

        $(this).toggleClass('open');
        $(this).toggleClass('closed');
        $(this).find('ul').toggleClass('show');

        /* Arrows */
        $(this).find('i').next().next().removeClass('fa-angle-left')
        $(this).find('i').next().next().addClass('fa-angle-down')
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
});
