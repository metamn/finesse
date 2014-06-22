$('.arrow').click(function() {
  var arrow = $(this);
  
  if (arrow.hasClass('down')) {
    arrow.removeClass('down');
    arrow.addClass('top');
    
    var next = arrow.parent().next();
    scrollTo(next);
  }
}); 



