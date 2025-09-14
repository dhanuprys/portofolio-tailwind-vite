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

  $('#cert-load-btn').on('click', () => {
    $('#cert-container').removeClass('h-[50vh]');
    $('#cert-filter').remove();
    $('#cert-load-btn').remove();
  });
});