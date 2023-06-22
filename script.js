$(document).ready(function() {
  // Smooth scrolling to anchor links
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
      // Highlight current page on navigation bar
      $('nav a').removeClass('active');
      $(this).addClass('active');
    }
  });

  // Dynamic image gallery
  $('.gallery-item').click(function() {
    var imgSrc = $(this).find('img').attr('src');
    var imgAlt = $(this).find('img').attr('alt');
    $('.modal-body img').attr({
      'src': imgSrc,
      'alt': imgAlt
    });
    $('.modal').modal('show');
  });

  // Countdown timer
  var eventDate = new Date('2022-12-31 23:59:59').getTime();
  var countdown = setInterval(function() {
    var now = new Date().getTime();
    var distance = eventDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('countdown').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById('countdown').innerHTML = 'EXPIRED';
    }
  }, 1000);
});
