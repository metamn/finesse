// Subparts of this script can be found in atoms/, molecules/ etc.

$('document').ready(function() {
  
  // Don't cache submodules
  $.ajaxSetup({
    cache: false
  });
  
  
  // Slideshow
  // ---------------------------------------
  $.getScript('assets/scripts/molecules/slideshow.js');
  
  
  
  
  // Helpers
  // ---------------------------------------
  
  
  // Scrolling to a div
  $.getScript('assets/scripts/atoms/scrollTo.js');
});
