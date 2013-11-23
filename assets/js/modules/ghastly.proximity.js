window.ghastly = (function( ghastly, $, document, undefined ) {
    'use strict';

    var me = ghastly.proximity = ghastly.proximity || {},

    // functions
    cacheElements,
    bindEvents,
    cursorIsInProximity,

    // data cache
    cache = {

        bodyElement: null,
        proximityElements: null

    };

    cursorIsInProximity = function(event, proximity, distance) {

        var element = $(event.currentTarget);
        var handle = 'in-proximity';

        if(proximity < 0.3 && element.hasClass(handle)) {
            element.removeClass(handle);
        }

        if(proximity > 0.3 && !element.hasClass(handle)) {
            element.addClass(handle);
        }

    };

    bindEvents = function() {

        cache.proximityElements.each(function(index, element) {
            element = $(element);
            element.on('proximity', {max: element.data('proximity') }, cursorIsInProximity);
        });


    };

    cacheElements = function() {

        cache.bodyElement = $('body');
        cache.proximityElements = $('[data-proximity]');
        console.log(cache.proximityElements);

    };

    me.init = function() {

        cacheElements();
        bindEvents();

        ghastly.utils.log('init proximity');

    };

    me.publicFunction = function() {

        // public function

    };

    return ghastly;

})( window.ghastly || {}, jQuery, window.document );