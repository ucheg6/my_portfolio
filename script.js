var $ = jQuery.noConflict();

$(document).ready(function ($) {
    "use strict";


    $(window).scroll(function() {
        
        if ($(window).scrollTop() > 200) {
           
            $('.main-nav').addClass('navbar-fixed-top ');
        } else {

            $('.main-nav').removeClass('navbar-fixed-top ');

        }
    });

});

