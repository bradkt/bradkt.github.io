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
});

