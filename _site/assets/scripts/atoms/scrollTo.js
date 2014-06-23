// Scrolling to a div
// - if no div then scroll to top
function scrollTo(div) {
  (div.length) ? $("html, body").animate({ scrollTop: $(div).offset().top }, "slow") : $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
}