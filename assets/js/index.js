// app
window.ghastly = (function( ghastly, $, document, undefined ) {

  var init;

  init = function() {

    if(ghastly.utils) ghastly.utils.init();
    if(ghastly.header) ghastly.header.init();
    if(ghastly.proximity) ghastly.proximity.init();

  };

  $( document ).ready( init ); //kick off

  return ghastly;

})( window.ghastly || {}, jQuery, window.document );