jQuery(function($) {
$(document).ready( function() {
    //enabling stickUp on the '.navbar-wrapper' class
    $('.navbar-wrapper').stickUp({
        parts: {
            0: 'banner',
            1: 'aboutus',
            2: 'specialties',
            3: 'contact',
            4: 'gallery',
            5: 'coaches',
            6: 'feedback'
        },
        itemClass: 'menuItem',
        itemHover: 'active',
        topMargin: 'auto'
        });
    });
});