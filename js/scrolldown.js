$(document).ready(function(){
  if (document.documentElement.clientWidth <= 992) {$(".test").css({
        height: $(window).height()
        });
      }
  // Fade the scroll icon in and out based on whether the user is scrolling or not
  var buffer = 800;
  var totalMargin = (120 * 30);

  $(document).on("scroll",(function(){
        //remove the fixed property via the class
        $('.mousewrap, .mousebackground, .leave-scrub').removeClass('visible').addClass('hidden');
    }));

    //when the end of a scrolling occurs
      $.fn.scrollStopped = function(callback) {
    var that = this, $this = $(that);
    $this.scroll(function(ev) {
      clearTimeout($this.data('scrollTimeout'));
      $this.data('scrollTimeout', setTimeout(callback.bind(that), 1000, ev));
    });
    };

    $(window).scrollStopped(function(ev){
    //console.log(ev);
    $('.mousewrap, .mousebackground, .leave-scrub').removeClass('hidden').addClass('visible');
    });

  // -end- Fade the scroll icon in and out based on whether the user is scrolling or not

  function isScrolledIntoView(elem) {
      var $window = $(window),
          docViewTop = $window.scrollTop(),
          docViewBottom = docViewTop + $window.height(),
          elemTop = $(elem).offset().top,
          elemBottom = elemTop + $(elem).outerHeight();
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

$('a[href^="#"]').pageScroll({
        speed: 1000,
        maxDuration: 2500
    });
$('a[href^="#content"]').pageScroll({
        speed: 650,
        maxDuration: 2500
    });

  $(window).scroll(function(){
      if ($(window).scrollTop() < totalMargin){
          $('.leave-scrub').css({'display': 'none'});
          //$('#nav-icon').css({'display': 'none'});
          $("#mousewrapUp").css({'display': 'none'});
          $("#mousewrapDown").css({'display': 'block'});
      } else if ($(window).scrollTop() >= totalMargin){
        $('.leave-scrub').css({'display': 'block'});
        $("#mousewrapUp").css({'display': 'block'});
        $("#mousewrapDown").css({'display': 'none'});
      }
  });
  $(window).scroll(function(){
      if ($(window).scrollTop() > (totalMargin + window.innerHeight + 500)){
        //$('#nav-icon').fadeIn(1000);
        //$('.content').addClass('visible');
      //  $('#blurb1').addClass('floating');
      //  $('#blurb2').addClass('floating');
      //  $('#blurb3').addClass('floating');
        $('#rewind').fadeIn(1000);
      } else if ($(window).scrollTop() < (totalMargin + window.innerHeight + 500)){
        //$('#nav-icon').fadeOut('fast');
        $('#rewind').fadeOut('fast');
      }
      });


//helmet fade-ins and outs


});
