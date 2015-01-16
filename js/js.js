$('#about').css('opacity',0).one('inview', function(isInView){
                if (isInView) {$('#about').css('opacity',1).addClass('animated flipInX');}
                });

$('#alben').css('opacity',0).one('inview', function(isInView){
                if (isInView) {$('#alben').css('opacity',1).addClass('animated flipInX');}
                });

$('#konzerte').css('opacity',0).one('inview', function(isInView){
                if (isInView) {$('#konzerte').css('opacity',1).addClass('animated flipInX');}
                });

$('#kontakt').css('opacity',0).one('inview', function(isInView){
                if (isInView) {$('#kontakt').css('opacity',1).addClass('animated flipInX');}
                });



$(document).ready(function () {
    $(".albumdata").click(function(){
        var slide = +($(this).attr('id'));
        //alert(slide);
        $("#theCarousel").carousel(slide);

        //alert($(this).attr('id'));
        //$("#theCarousel").carousel($(this).attr('id'));

    });
});