const l = $('.left')
const r = $('.right')

l.mouseenter(function() {
  $('.content-test').addClass('left-is-hovered');
}).mouseleave(function() {
  $('.content-test').removeClass('left-is-hovered');
});

r.mouseenter(function() {
  $('.content-test').addClass('right-is-hovered');
}).mouseleave(function() {
  $('.content-test').removeClass('right-is-hovered');
});