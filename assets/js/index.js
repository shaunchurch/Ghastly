// app
window.ghastly = (function( ghastly, $, document, undefined ) {

    var init;

    init = function() {

        if(ghastly.utils) ghastly.utils.init();
        if(ghastly.header) ghastly.header.init();
        if(ghastly.proximity) ghastly.proximity.init();
        if(ghastly.image) ghastly.image.init();

        // is touch device?
        if(ghastly.utils.isTouchDevice()) {
            $('html').addClass('is-touch');
        }

    };

    $( document ).ready( init ); //kick off

    return ghastly;

})( window.ghastly || {}, jQuery, window.document );