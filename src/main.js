$(document).on('mousemove', (e) => {
  if ($(window).scrollTop() > $(window).height() * 1.5) {
    $('#cursor-follower').css('opacity', 0);
  } else {
    $('#cursor-follower').css({
      opacity: 1,
      left: e.clientX,
      top: e.clientY
    });
  }
});