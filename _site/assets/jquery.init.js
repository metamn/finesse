$('document').ready(function() {
  
  // Scrolling to the Beauty slide and up to the previous slide
  $('#beauty .arrow').click(function() {
    ($(this).hasClass('down')) ? slideTo($('#beauty'), $(this), 'down', 'top') : slideTo($('#intro'), $(this), 'top', 'down');
  });
  
  
  
  // Sliding through blockquotes in Beauty
  // -------------------------------------
  
  $('#beauty .slideshow ul li').first().addClass('active');
  $('#beauty .slideshow blockquote').first().addClass('active');
  
  $('#beauty .slideshow ul li').on('click', function() {
    var index = $(this).index();
    var item = $('#beauty .slideshow blockquote').eq(index);
    navigate($(this));
    navigate(item);
    
    if (index == 2) {
      $('#beauty #formula').addClass('active');
    }
  });
  
  function navigate(item) {
    item.siblings().removeClass('active');
    item.addClass('active');
  }
  
  setInterval(function() {
    var active = $('#beauty .slideshow ul li.active');
    var next = active.next();
    if (!next.length) {
      next = $('#beauty .slideshow ul li').first();
    }
    next.trigger('click');
  }, 5000);
  
  
  // Helpers
  // ---------------------------------------
  
  
  // Sliding to a section
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
