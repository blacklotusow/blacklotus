jQuery(function($) {
$(document).ready( function() {
    //enabling stickUp on the '.navbar-wrapper' class
    $('.navbar-wrapper').stickUp({
        parts: {
            0: 'banner',
            1: 'aboutus',
            2: 'specialties',
            3: 'gallery',
            4: 'tweets',
            5: 'feedback',
            6: 'contact'
        },
        itemClass: 'menuItem',
        itemHover: 'active',
        topMargin: 'auto'
        });
    });
});