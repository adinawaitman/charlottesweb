// on ready, make the initial call and append to HTML
$(document).ready( function() {

  console.log("Ready!");

  // add keydown router
  $(window).keydown(keydownRouter);

  addToCarousel();

});



function addToCarousel() {
  var photos = {"img/DSC_3600.JPG",

  };

  $.each(photos, function(i, photo)) {
        var src = photo;
        let active;
        if (i == 0)
          active = " active";
        else
            active = '';

        // Create the img html and set the src attribute to our URL
        let imgHtml = $("<img/>").attr("src", src);

        // add the src and photo id to dict mapper for purpose of getting ID
        let link = '<img src="' + src + '"' + '>';
        idMapper[link] = photo.id;

        // Create the .item div and insert the img html into it
        let itemDivHtml = $("<div class='item" + active + "' width='460' height='345'/>").append(imgHtml);

        // Insert the .item div into the .carousel-inner div
        $(".carousel-inner").append(itemDivHtml);
  })
}
