jsPlumb.ready(function() {
  jsPlumb.setContainer($("body"));
  
  jsPlumb.connect({
    source: "beauty-1",
    target: "beauty-3",
    anchors: ["BottomCenter", "Continuous"],
    paintStyle: { strokeStyle:"red", lineWidth:1 },
    endpoint: "Blank"
  });
});


$('document').ready(function() {
  
  
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
});
