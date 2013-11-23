window.ghastly = (function( ghastly, $, document, undefined ) {
    'use strict';

    var me = ghastly.config = ghastly.config || {};

    // ghastly.config.*
    me.debug = true;

    me.animatedSpeedSlow = 750;
    me.animationSpeedMedium = 500;
    me.animationSpeedFast = 250;

    return ghastly;

})( window.ghastly || {}, jQuery, window.document );