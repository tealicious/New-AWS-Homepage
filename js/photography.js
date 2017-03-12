// Add overlay and append an image element inside of it
var $image = $('<img>');                      
var $overlay = $('<div class="overlay"></div>');
$("body").append($overlay)
$overlay.append($image);  


// Capture image click
$(".photo-shadow .row a").click(function(event){
  event.preventDefault(); 
  
  var imageHref = $(this).attr("href");
  
  $image.attr("src", imageHref);
  
  console.log("href");
  
  $overlay.show(); 

  
 
  
  // Place image in overlay
  // Set caption with alt attribute

 });





// Hide overlay on click.

$overlay.click(function() {
  $overlay.hide();

});
