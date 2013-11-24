window.ghastly = (function( ghastly, $, document, undefined ) {
    'use strict';

    var me = ghastly.image = ghastly.image || {},

    // functions
    cacheElements,
    bindEvents,
    checkForMainImage,

    // data cache
    cache = {

        bodyElement: null,
        images: null,
        postHeader: null

    };

    checkForMainImage = function() {

        cache.images.each(function(index, element) {
            var el = $(element);
            var alt = el.attr('alt');
            if(alt === 'main image') {
                cache.postHeader.css('background-image', 'url(' + el.attr('src') + ')');
                el.remove();
            }
        });

    };

    bindEvents = function() {

    };

    cacheElements = function() {

        cache.bodyElement = $('body');
        cache.postHeader = $('.post-image');
        cache.images = $('img');

    };

    me.init = function() {

        cacheElements();
        bindEvents();
        checkForMainImage();

        ghastly.utils.log('init image');

    };

    me.publicFunction = function() {

        // public function

    };

    return ghastly;

})( window.ghastly || {}, jQuery, window.document );