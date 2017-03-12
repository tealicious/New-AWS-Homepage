var controller = new ScrollMagic.Controller();

$(function () { // wait for document ready

  var scene2 = new ScrollMagic.Scene({triggerElement: "#blurb-trigger", duration: '300%'}) // set duration a little bit over needed in order to create the helmet 'hanging and dragging' effect. match the percentage to the vh % set in the skrollr animation on #pin1 in the dom2
          .setPin("#blurb-pin1", {pushFollowers: false})
          //.addIndicators()  //add indicators (requires plugin)
          .addTo(controller);


  var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: '610%'}) // set duration a little bit over needed in order to create the helmet 'hanging and dragging' effect. match the percentage to the vh % set in the skrollr animation on #pin1 in the dom
          .setPin("#pin1", {pushFollowers: false})
          //.addIndicators()  //add indicators (requires plugin)
          .addTo(controller);


var scene3 = new ScrollMagic.Scene({triggerElement: "#state-trigger", duration: '300%'}) // set duration a little bit over needed in order to create the helmet 'hanging and dragging' effect. match the percentage to the vh % set in the skrollr animation on #pin1 in the dom2
        .setPin("#state-pin1", {pushFollowers: false})
        //.addIndicators()  //add indicators (requires plugin)
        .addTo(controller);


	});
