window.ghastly = (function( ghastly, $, document, undefined ) {
    'use strict';

    var me = ghastly.header = ghastly.header || {},

    // functions
    cacheElements,
    bindEvents,
    privateFunction,

    // data cache
    cache = {

        bodyElement: null,

    };

    privateFunction = function() {

        // private function

    };

    bindEvents = function() {

        cache.bodyElement.on('click', privateFunction);

    };

    cacheElements = function() {

        cache.bodyElement = $('body');

    };

    me.init = function() {

        cacheElements();
        bindEvents();

        ghastly.utils.log('init header');

    };

    me.publicFunction = function() {

        // public function

    };

    return ghastly;

})( window.ghastly || {}, jQuery, window.document );