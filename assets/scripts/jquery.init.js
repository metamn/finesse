// Subparts of this script can be found in atoms/, molecules/ etc.

$('document').ready(function() {
  
  // Don't cache submodules
  $.ajaxSetup({
    cache: false
  });
  
  
  // Slideshow
  $.getScript('assets/scripts/molecules/slideshow.js');
  
  
  
  // Scrolling between sections
  $.getScript('assets/scripts/atoms/scrollToSlide.js');
  
  
  // Check if the arrow must be show again
function showNavigationArrow() {
  var arrow = $('.arrow.top');
  if (isElementInViewport(arrow)) {
    arrow.removeClass('top');
    arrow.addClass('bottom');
  }
}

$(window).on('DOMContentLoaded load resize scroll', showNavigationArrow); 



function isElementInViewport (el) {
  
  //special bonus for those using jQuery
  if (el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}
  
  
  // Helpers
  // ---------------------------------------
  
  
  // Scrolling to a div
  $.getScript('assets/scripts/atoms/scrollTo.js');
});
