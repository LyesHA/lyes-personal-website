$("#btnEduc").click(function() {
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#divEduc").offset().top - 70
    }, 2000);
});

$("#btnExp").click(function() {
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#divExp").offset().top - 70
    }, 2000);
});

$("#btnSkills").click(function() {
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#divSkills").offset().top - 70
    }, 2000);
});

$("#btnExtra").click(function() {
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#divExt").offset().top - 30
    }, 2000);
});

$("#btnResume").click(function() {
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#divResume").offset().top 
    }, 2000);
});
$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 300){
    	$(".navbar").css("background","rgba(3, 53, 99, 1)");
    }
    else{
        $(".navbar").css("background","transparent");
        $(".navbar").css("transition","500ms ease");

    }
  });
});