jQuery(document).ready(function($){
	if( $('.floating-labels').length > 0 ) floatLabels();

	function floatLabels() {
		var inputFields = $('.floating-labels .cd-label').next();
		inputFields.each(function(){
			var singleInput = $(this);
			//check if user is filling one of the form fields
			checkVal(singleInput);
			singleInput.on('change keyup', function(){
				checkVal(singleInput);
			});
		});
	}

	function checkVal(inputField) {
		( inputField.val() == '' ) ? inputField.prev('.cd-label').removeClass('float') : inputField.prev('.cd-label').addClass('float');
	}

});




/**KONAMI CODE**/
var audio = new Audio('Konami.mp3');
var easter_egg = new Konami(function() {
				$('#konami').removeClass('hideo');
				$('#konami').addClass('code');
				audio.play();
				$(audio).bind("ended", function(){
				$('#konami').removeClass('code');
				$('#konami').addClass('hideo');
				});
			});


$( ".flip-card" ).click(function() {
	if ($( ".flip-card" ).hasClass("flipped")) {
  $( ".flip-card" ).removeClass("flipped");
  } else {
  $( ".flip-card" ).addClass("flipped");
  }
});
$( ".title-flip" ).click(function() {
	if ($( ".flip-card" ).hasClass("flipped")) {
  $( ".flip-card" ).removeClass("flipped");
  } else {
  $( ".flip-card" ).addClass("flipped");
  }
});

$('.report-card.treehouse').reportCard({
    userName: 'danielcarter2',
    site: 'treehouse',
    badgesAmount: 12
});
