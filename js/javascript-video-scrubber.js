/*
Javascript-video-scrubber Demo
Created by Gary Hepting and the Dev Team at Emerge Interactive
Fork, follow and watch on Github at https://github.com/ghepting/javascript-video-scrubber
Visit Emerge Interctive at http://emergeinteractive.com/
*/
var step = 1; // visible frame
var targetStep = 1; // frame to animate to
var images = new Array; // stores all of the frames for quick access
var scrollPos; // scroll position of the window
var totalFrames = 120; // the number of images in the sequence of JPEG files (this could be calculated server-side by scanning the frames folder)

window.requestAnimFrame = (function(){ // reduce CPU consumption, improve performance and make this possible
  return  window.requestAnimationFrame       ||
		  window.webkitRequestAnimationFrame ||
		  window.mozRequestAnimationFrame    ||
		  window.oRequestAnimationFrame      ||
		  window.msRequestAnimationFrame     ||
		  function( callback ){
			window.setTimeout(callback, 1000 / 60);
		  };
})();

(function animloop(){ // the smoothest animation loop possible
  requestAnimFrame(animloop);
  targetStep = Math.max( Math.round( getYOffset() / 30 ) , 1 ); // what frame to animate to
  if(targetStep != step ) { step += (targetStep - step) / 5; } // increment the step until we arrive at the target step
  changeFrame();
})();

function changeFrame() {
	var thisStep = Math.round(step); // calculate the frame number
	if(images.length > 0 && images[thisStep]) { // if the image exists in the array
		if(images[thisStep].complete) { // if the image is downloaded and ready
			if($('#video').attr('src') != images[thisStep].src) { // save overhead...?
				$('#video').attr('src',images[thisStep].src); // change the source of our placeholder image
			}
		}
	}
}

function resizeAdjustments() { // fit everything to the screen
	$('html').css('height',(totalFrames*30)+'px'); // increase the height of the document 30 pixels for every frame in the JPEG sequence
	var image_width   = $('#video').css('width').replace('px','');
	var image_height  = $('#video').css('height').replace('px','');
	var height_ratio  = image_height / document.body.clientHeight;
	var width_ratio   = image_width / document.body.clientWidth;
	if (height_ratio < width_ratio) {
		$('#video').css('top',0); // reposition the video image
		var difference = parseInt(image_width-document.body.clientWidth); // calculate the difference we need to accomodate for
		$('#video').css('width','auto');
		$('#video').css('height','100%'); // resize image to fill the height of the viewport
		if(document.body.clientWidth<image_width) {
			$('#video').css('left',(difference/2)*-1); // reposition the video image from the left
		}else{
			$('#video').css('left',0);
		}
	}else{
		$('#video').css('left',0);
		var difference = parseInt(image_height-document.body.clientHeight); // calculate the difference we need to accomodate for
		if(document.body.clientHeight<image_height) {
			$('#video').css('top',(difference/2)*-1); // reposition the video image from the top
		}else{
			$('#video').css('top',0);
		}
		$('#video').css('width','100%'); // resize image to fill the width of the viewport
		$('#video').css('height','auto');
	}
}

function getYOffset() { // get distance scrolled from the top
    var pageY;
	if(typeof(window.pageYOffset)=='number') {
		pageY=window.pageYOffset;
	}else{
		pageY=document.documentElement.scrollTop; // IE
	}
	return pageY;
}

function pad(number, length) { // pad numbers with leading zeros for JPEG sequence file names
	var str = '' + number; while (str.length < length) { str = '0' + str; } return str;
}

    // loader gif for mobile scrubber to hide the elements as they get scaled and stuff

  totalFrames = 120;
   // the number of images in the sequence of JPEG files (this could be calculated server-side by scanning the frames folder)

  $(document).ready(function() {
    resizeAdjustments(); // adjust the size of video placeholder image to fit the screen and keep aspect ratio (zoom crop)
  });

//-->

  <!--//
  // image filenames in frames folder should be "image_000000.jpg" through "image_000098.jpg"
  for (i = 1; i < totalFrames; i++) { // loop for each image in sequence
    images[i] = new Image(); // add image object to array
    images[i].src = "frames3/image_" + pad(i, 6) + ".jpg"; // set the source of the image object
  }
  /* for (i = 1; i < 50; i++) { // loop for each image in sequence
    images[i] = new Image(); // add image object to array
    images[i].src = "frames3/image_" + pad(i, 6) + ".png"; // set the source of the image object
  }
  for (i = 50; i < totalFrames; i++) { // loop for each image in sequence
    images[i] = new Image(); // add image object to array
    images[i].src = "frames3/image_" + pad(i, 6) + ".jpg"; // set the source of the image object
  }
  If we double total frames (say from 120 to 240) and divide that variable in the above loop then run this loop, we can double the image array, mirroring it at its center, allowing for a reverse video scrub. dont forget to adjust the jquery stylings that rely on totalFrams to set the window height (divide totaFrames by 2)
  for (i = totalFrames; i > 120; i--) {
    images[i] = new Image(); // add image object to array
    images[i].src = "frames3/image_" + pad((totalFrames - i + 1), 6) + ".jpg";
  }*/
