window.ghastly = (function( ghastly, $, document, undefined ) {

  'use strict';

  var me = ghastly.utils = ghastly.utils || {};

    me.init = function() {

        me.log('init utils');

    };

    me.log = function(msg) {

        if(ghastly.config.debug) {
            console.log('[ghastly] ' + msg);
        }

    };

    me.reload = function() {

        location.href = location.href;

    };

    me.showError = function(message) {


    };

  return ghastly;

})( window.ghastly || {}, jQuery, window.document );