$(window).ready(function() {
  // Animate loader off screen
  $('body').addClass('stop-scroll');
  $('.dickbutt1').addClass('dick1');
  $('.butts').fadeIn('slow');
  $('.loader h2 span:nth-of-type(1)').fadeIn('slow').css({'display':'block'});
  function endCountdown() {
  $(".loader").fadeOut("slow");
  $('body').removeClass('stop-scroll');
}

function handleTimer() {
if(count === 0) {
  clearInterval(timer);
  endCountdown();
  } else {
      //$('#count_num').html(count);
      count--;
    }
if(count === 4) {
        $('.dick1').css({'stroke' : '#F3F315'});
        $('.loader h2 span:nth-of-type(2)').css({'color' : '#F3F315'});
        $('.loader h2 span:nth-of-type(2)').fadeIn('slow').css({'display':'block'});
      } else if(count === 1) {
          $('.dick1').css({'stroke' : '#7CFC00'});
          $('.loader h2 span:nth-of-type(3)').css({'color' : '#7CFC00'});
          $('.loader h2 span:nth-of-type(3)').fadeIn('slow').css({'display':'block'});
        }
}

var count = 7;
var timer = setInterval(function() {
handleTimer(count);
  }, 1000);
});
