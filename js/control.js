
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $('#nav').toggleClass('open');
		$('body').toggleClass('stop-scroll');
		$('.rewind').toggleClass('invisible');
	});
