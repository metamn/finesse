// Subparts of this script can be found in atoms/, molecules/ etc.

$('document').ready(function() {
  
  // Don't cache submodules
  $.ajaxSetup({
    cache: false
  });
  
  
  // Slideshow
 
  // Show slide navigator on the Beauty slide
  $('#beauty-slideshow').bind('slideshowItemClicked', function(event, item) { 
    if (item == 2) {
      $('#beauty .navbar').addClass('active'); 
      $('#formula').addClass('active');
    }
  });
  
  $.getScript('assets/scripts/molecules/slideshow.js');
  
  
  // Scrolling down to a slide
  $.getScript('assets/scripts/molecules/section-navbar.js');
  
  
  // Helpers
  // ---------------------------------------
  
  // Scrolling to a div
  $.getScript('assets/scripts/atoms/scrollTo.js');
});
