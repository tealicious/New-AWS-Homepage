var $animation_elements  = $('.blurb h2');
var $animation_elements2 = $('.content');
var $animation_elements3 = $('.dickbutt h1');
var $trigger             = $('#first-trigger');
var $trigger1            = $('#trigger1');
var $trigger2            = $('#trigger2');
var $trigger3            = $('#trigger3');
var $trigger4            = $('#trigger4');
var $trigger5            = $('#trigger5');
var $trigger6            = $('#trigger6');
var $blurbTriggerBegin   = $('#blurb-trigger-begin');
var $blurbTrigger1       = $('#blurb-trigger1');
var $blurbTrigger2       = $('#blurb-trigger2');
var $blurbTrigger3       = $('#blurb-trigger3');
var $stateTriggerBegin   = $('#state-trigger-begin');
var $stateTrigger1       = $('#state-trigger1');
var $stateTrigger2       = $('#state-trigger2');
var $stateTrigger3       = $('#state-trigger3');

var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements2, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.add('footer').addClass('visible');
      } else {
        $element.add('footer').removeClass('visible');
      }
  });

  $.each($animation_elements3, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $('.dickbutt').addClass('dick');
      $(this).addClass('visible');
    } else {
      $('.dickbutt').removeClass('dick');
      $(this).removeClass('visible');
    }
});


$.each($trigger, function() {
  var $element = $(this);
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = (element_top_position + element_height);

  //check to see if this current container is within viewport
  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
    $('#helmet-dot1').addClass('visibleFast');
    $('#helmet-dot1').removeClass('invisibleFast');
    $('#helmet-shadow').removeClass('visible');
    $('#helmet-shadow').addClass('invisible');

    $('#helmet-dot').removeClass('visibleFast');
    $('#helmet-open').removeClass('visibleFast');
    $('#helmet-closed').removeClass('visibleFast');
    $('#helmet-drop').removeClass('visibleFast');
    $('#helmet-strap').removeClass('visibleFast');

    $('#helmet-dot').addClass('invisibleFast');
    $('#helmet-open').addClass('invisibleFast');
    $('#helmet-closed').addClass('invisibleFast');
    $('#helmet-drop').addClass('invisibleFast');
    $('#helmet-strap').addClass('invisibleFast');
  }
});

$.each($trigger1, function() {
  var $element = $(this);
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = (element_top_position + element_height);

  //check to see if this current container is within viewport
  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
        $('#helmet-dot').addClass('visibleFast');
        $('#helmet-dot').removeClass('invisibleFast');
        $('#helmet-shadow').addClass('visible');
        $('#helmet-shadow').removeClass('invisible');

        $('#helmet-dot1').removeClass('visibleFast');
        $('#helmet-open').removeClass('visibleFast');
        $('#helmet-closed').removeClass('visibleFast');
        $('#helmet-drop').removeClass('visibleFast');
        $('#helmet-strap').removeClass('visibleFast');

        $('#helmet-dot1').addClass('invisibleFast');
        $('#helmet-open').addClass('invisibleFast');
        $('#helmet-closed').addClass('invisibleFast');
        $('#helmet-drop').addClass('invisibleFast');
        $('#helmet-strap').addClass('invisibleFast');
  }
});

$.each($trigger2, function() {
  var $element = $(this);
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = (element_top_position + element_height);

  //check to see if this current container is within viewport
  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
        $('#helmet-open').addClass('visibleFast');
        $('#helmet-open').removeClass('invisibleFast');

        $('#helmet-dot1').removeClass('visibleFast');
        $('#helmet-dot').removeClass('visibleFast');
        $('#helmet-closed').removeClass('visibleFast');
        $('#helmet-drop').removeClass('visibleFast');
        $('#helmet-strap').removeClass('visibleFast');

        $('#helmet-dot1').addClass('invisibleFast');
        $('#helmet-dot').addClass('invisibleFast');
        $('#helmet-closed').addClass('invisibleFast');
        $('#helmet-drop').addClass('invisibleFast');
        $('#helmet-strap').addClass('invisibleFast');
  }
});

$.each($trigger3, function() {
  var $element = $(this);
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = (element_top_position + element_height);

  //check to see if this current container is within viewport
  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
        $('#helmet-closed').addClass('visibleFast');
        $('#helmet-closed').removeClass('invisibleFast');

        $('#helmet-dot1').removeClass('visibleFast');
        $('#helmet-dot').removeClass('visibleFast');
        $('#helmet-open').removeClass('visibleFast');
        $('#helmet-drop').removeClass('visibleFast');
        $('#helmet-strap').removeClass('visibleFast');

        $('#helmet-dot1').addClass('invisibleFast');
        $('#helmet-dot').addClass('invisibleFast');
        $('#helmet-open').addClass('invisibleFast');
        $('#helmet-drop').addClass('invisibleFast');
        $('#helmet-strap').addClass('invisibleFast');
  }
});

$.each($trigger4, function() {
  var $element = $(this);
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = (element_top_position + element_height);

  //check to see if this current container is within viewport
  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
        $('#helmet-strap').addClass('visibleFast');
        $('#helmet-strap').removeClass('invisibleFast');

        $('#helmet-dot1').removeClass('visibleFast');
        $('#helmet-dot').removeClass('visibleFast');
        $('#helmet-open').removeClass('visibleFast');
        $('#helmet-drop').removeClass('visibleFast');
        $('#helmet-closed').removeClass('visibleFast');

        $('#helmet-dot1').addClass('invisibleFast');
        $('#helmet-dot').addClass('invisibleFast');
        $('#helmet-open').addClass('invisibleFast');
        $('#helmet-drop').addClass('invisibleFast');
        $('#helmet-closed').addClass('invisibleFast');
  }
});

$.each($trigger5, function() {
  var $element = $(this);
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = (element_top_position + element_height);

  //check to see if this current container is within viewport
  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
        $('#helmet-drop').addClass('visibleFast');
        $('#helmet-drop').removeClass('invisibleFast');

        $('#helmet-dot1').removeClass('visibleFast');
        $('#helmet-dot').removeClass('visibleFast');
        $('#helmet-open').removeClass('visibleFast');
        $('#helmet-strap').removeClass('visibleFast');
        $('#helmet-closed').removeClass('visibleFast');

        $('#helmet-dot1').addClass('invisibleFast');
        $('#helmet-dot').addClass('invisibleFast');
        $('#helmet-open').addClass('invisibleFast');
        $('#helmet-strap').addClass('invisibleFast');
        $('#helmet-closed').addClass('invisibleFast');

  }
});

$.each($trigger6, function() {
  var $element = $(this);
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = (element_top_position + element_height);

  //check to see if this current container is within viewport
  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
        $('#helmet-shadow').addClass('invisibleSlow');
  } else {
      $('#helmet-shadow').removeClass('invisibleSlow');
  }
});


$.each($blurbTriggerBegin, function() {
  var $element = $(this);
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = (element_top_position + element_height);

  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {

        $('#percent').addClass('visibleFast');
        $('#percent').removeClass('invisibleFast');



        $('#percent1').removeClass('visibleFast');
        $('#percent2').removeClass('visibleFast');
        $('#percent2').removeClass('visibleFast');

        $('#percent1').addClass('invisibleFast');
        $('#percent2').addClass('invisibleFast');


  }
});

$.each($blurbTrigger1, function() {
  var $element = $(this);
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = (element_top_position + element_height);

  //check to see if this current container is within viewport
  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
        if ($('#percent').hasClass('visibleFast')) {

        } else if ($('#percent1').hasClass('visibleFast')) {
          var demo = new CountUp("percent", 70, 50, 0, .5);
          demo.start();

          } else {
              var demo = new CountUp("percent", 0, 50, 0, .5);
              demo.start();
            }


        $('#percent').addClass('visibleFast');
        $('#percent').removeClass('invisibleFast');

        $('#percent1').removeClass('visibleFast');
        $('#percent2').removeClass('visibleFast');
        $('#percent2').removeClass('visibleFast');

        $('#percent1').addClass('invisibleFast');
        $('#percent2').addClass('invisibleFast');


  }
});

$.each($blurbTrigger2, function() {
  var $element = $(this);
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = (element_top_position + element_height);

  //check to see if this current container is within viewport
  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
        if ($('#percent1').hasClass('visibleFast')) {

        } else if ($('#percent2').hasClass('visibleFast')) {
          var demo = new CountUp("percent1", 300, 70, 0, .5);
          demo.start();
          } else {
          var demo = new CountUp("percent1", 50, 70, 0, .5);
          demo.start();
        }

        $('#percent1').addClass('visibleFast');
        $('#percent1').removeClass('invisibleFast');

        $('#percent').removeClass('visibleFast');
        $('#percent2').removeClass('visibleFast');

        $('#percent').addClass('invisibleFast');
        $('#percent2').addClass('invisibleFast');
  }
});

$.each($blurbTrigger3, function() {
  var $element = $(this);
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = (element_top_position + element_height);

  //check to see if this current container is within viewport
  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
        if ($('#percent2').hasClass('visibleFast')) {

        } else {
            var demo = new CountUp("percent2", 70, 300, 0, .5);
            demo.start();
          }

        $('#percent2').addClass('visibleFast');
        $('#percent2').removeClass('invisibleFast');
        $('#percent2').removeClass('invisibleFast');

        $('#percent1').removeClass('visibleFast');
        $('#percent').removeClass('visibleFast');

        $('#percent1').addClass('invisibleFast');
        $('#percent').addClass('invisibleFast');
  }
});

$.each($stateTriggerBegin, function() {
  var $element = $(this);
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = (element_top_position + element_height);

  //check to see if this current container is within viewport
  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {

        $('#state-percent').addClass('visibleFast');
        $('#state-percent').removeClass('invisibleFast');

        $('#state-percent1').removeClass('visibleFast');
        $('#state-percent2').removeClass('visibleFast');
        $('#state-percent2').removeClass('visibleFast');

        $('#state-percent1').addClass('invisibleFast');
        $('#state-percent2').addClass('invisibleFast');
  }
});

$.each($stateTrigger1, function() {
  var $element = $(this);
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = (element_top_position + element_height);

  //check to see if this current container is within viewport
  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
        if ($('#state-percent').hasClass('visibleFast')) {

        } else if ($('#state-percent1').hasClass('visibleFast')) {
          var demo = new CountUp("state-percent", 30, 37, 0, .5);
          demo.start();
          } else {
            var demo = new CountUp("state-percent", 0, 37, 0, .5);
            demo.start();
          }

        $('#state-percent').addClass('visibleFast');
        $('#state-percent').removeClass('invisibleFast');

        $('#state-percent1').removeClass('visibleFast');
        $('#state-percent2').removeClass('visibleFast');
        $('#state-percent2').removeClass('visibleFast');

        $('#state-percent1').addClass('invisibleFast');
        $('#state-percent2').addClass('invisibleFast');
  }
});

$.each($stateTrigger2, function() {
  var $element = $(this);
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = (element_top_position + element_height);

  //check to see if this current container is within viewport
  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
        if ($('#state-percent1').hasClass('visibleFast')) {

        } else if ($('#state-percent2').hasClass('visibleFast')) {
          var demo = new CountUp("state-percent1", 70, 30, 0, .5);
          demo.start();
          } else {
            var demo = new CountUp("state-percent1", 37, 30, 0, .5);
            demo.start();
          }

        $('#state-percent1').addClass('visibleFast');
        $('#state-percent1').removeClass('invisibleFast');

        $('#state-percent').removeClass('visibleFast');
        $('#state-percent2').removeClass('visibleFast');

        $('#state-percent').addClass('invisibleFast');
        $('#state-percent2').addClass('invisibleFast');
  }
});

$.each($stateTrigger3, function() {
  var $element = $(this);
  var element_height = $element.outerHeight();
  var element_top_position = $element.offset().top;
  var element_bottom_position = (element_top_position + element_height);

  //check to see if this current container is within viewport
  if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
        if ($('#state-percent2').hasClass('visibleFast')) {

        } else {
          var demo = new CountUp("state-percent2", 30, 70, 0, .5);
          demo.start();
        }


        $('#state-percent2').addClass('visibleFast');
        $('#state-percent2').removeClass('invisibleFast');
        $('#state-percent2').removeClass('invisibleFast');

        $('#state-percent1').removeClass('visibleFast');
        $('#state-percent').removeClass('visibleFast');

        $('#state-percent1').addClass('invisibleFast');
        $('#state-percent').addClass('invisibleFast');
  }
});



}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
