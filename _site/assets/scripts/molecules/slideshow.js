// add a navigation list to every slideshow
$('.slideshow').each(function() {
  // which items define the slideshow
  var item_id = $(this).attr('data-item');
  
  // quit if there are no items defined for this slideshow
  if (!item_id) return false;
  
  // count items
  var items = $(this).children(item_id);
  
  // quit if there are no items present
  if (!items.length) return false;
  
  
  
  // add a navigation list (<ul>) to the slideshow
  appendNavigationToSlideshow($(this), items);
  
  // show the first element of the slideshow, and the corresponding navigation item
  showFirstItemOfSlideshow($(this), item_id);
  
  // handle the click event
  slideshowClick($(this), item_id);
  
  // autoscroll
  slideshowAutoScroll($(this));
});


function slideshowAutoScroll(slideshow) {
  var check = slideshow.attr('data-autoscroll');
  
  if ((check) && (check == 'auto-scroll')) {
    setInterval(function() {
      var active = slideshow.children('ul.navigator').children('li.active');
      var next = active.next();
      if (!next.length) {
        next = slideshow.children('ul.navigator').children('li').first();
      }
      next.trigger('click');
    }, 5000);
  }
}


function slideshowClick(slideshow, item_id) {
  slideshow.children('ul.navigator').children('li').on('click', function() {
    var index = $(this).index();
    var item = slideshow.children(item_id).eq(index);
    slideshowNavigate($(this));
    slideshowNavigate(item);
  });
}

function slideshowNavigate(item) {
  item.siblings().removeClass('active');
  item.addClass('active');
}


function showFirstItemOfSlideshow(slideshow, item_id) {
  slideshow.children(item_id).first().addClass('active');
  slideshow.children('ul.navigator').children('li').first().addClass('active');
}


function appendNavigationToSlideshow(slideshow, items) {
  var ret = "<ul class='navigator'>";
  
  // get the content for <li>
  var li = slideshow.attr('data-navigator');
  if (!li) li = '&mdash;';
  
  for (var i = 0; i < items.length; i++) {
    ret += "<li>" + li + "</li>";
  }
  
  ret += "</ul>"
  
  // append the navigation list to the slideshow
  slideshow.append(ret);
}