jQuery(function($) {
$(document).ready( function() {
    //enabling stickUp on the '.navbar-wrapper' class
    $('.navbar-wrapper').stickUp({
        parts: {
            0: 'banner',
            1: 'aboutus',
            2: 'team',
            3: 'gallery',
            4: 'tweets',
            5: 'contact'
        },
        itemClass: 'menuItem',
        itemHover: 'active',
        topMargin: 'auto'
        });
    });
});