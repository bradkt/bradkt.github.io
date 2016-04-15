$(document).ready(function(){

    $( "nav a" ).click(function() {
        var $thisClass = $(this).attr('class');
        hideSection();
        $('section.' + $thisClass).toggleClass( "hide" );
    });

   function hideSection() {
       $( "section" ).each(function() {
           if($(this).hasClass("hide")){
            } else {
               $(this).addClass("hide");
            }
        });
   }

   $(function(){
    $(".typed-element").typed({
        strings: ["isn't that a cool jellyfish...","...I mean..", "I build websites...mostly"],
        typeSpeed: 0
    });
  });
});

