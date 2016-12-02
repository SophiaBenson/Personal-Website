console.log("chirp");
$(document).ready(function(){
  $("button").click(function() {
    $('html,body').animate({
        scrollTop: $("#section1").offset().top},
        'slow');
});//end button
});//end document
