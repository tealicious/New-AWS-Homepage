if (document.documentElement.clientWidth > 1024) {
    $('head').append('<link rel="stylesheet" type="text/css" href="css/desktop.css">');
	// scripts
document.addEventListener('DOMContentLoaded', function() {
var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 6250,
    // get page height from video duration
    setHeight = document.getElementById("set-height"),
    // select video element
    vid = document.getElementById('v0');
    // var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});


// Use requestAnimationFrame for smooth playback
function scollPlay(){
  var frameNumber  = window.pageYOffset/playbackConst;
  vid.currentTime  = frameNumber;
  window.requestAnimationFrame(scollPlay);
}

window.requestAnimationFrame(scollPlay);
}, false);

}
