$('document').ready(function() {
  
  // Scrolling to the Beauty slide and up to the previous slide
  $('#beauty .arrow').click(function() {
    ($(this).hasClass('down')) ? slideTo($('#beauty'), $(this), 'down', 'top') : slideTo($('#intro'), $(this), 'top', 'down');
  });
  
  
  
  // Sliding through blockquotes in Beauty
  // -------------------------------------
  
  $('.beauty span ').click(function() {
    var item = $('.beauty blockquote.active');
    item.removeClass('active');
    
    var next = item.next();
    if (!(next.is('blockquote'))) {
      next = $('.beauty blockquote').first();
    } 
    next.addClass('active');
  });
  
  
  // Slideing to a section
  function slideTo(section, scroller, removeClass, addClass) {
    scrollTo(section);
    scroller.addClass(addClass);
    scroller.removeClass(removeClass);
  }
  
  // Scrolling to a div
  // - if no div then scroll to top
  function scrollTo(div) {
    (div.length) ? $("html, body").animate({ scrollTop: $(div).offset().top }, "slow") : $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  }
});
