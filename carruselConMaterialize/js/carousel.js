$(document).ready(function(){
     $('.carousel').carousel();

     //TODO Eventos NEXT Y PREVIOUS
     $('#next').click(function(){
        $('.carousel').carousel('next');
     });
     $('#previous').click(function(){
        $('.carousel').carousel('prev');
     });
});
