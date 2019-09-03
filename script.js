$(document).ready(function() {


 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
    $("p").click(function() {
	  	$("p").addClass('red');
	});
    $("h2").hover(function(){
        $("h2").addClass( "background-blue");
    });
    $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black");
    });
    $(".bottom_button").mouseleave(function(){
        $("body").css( "background-color", "#eee");
    });
    $("#hr-html").hover(function(){
        $("#hr-html").addClass("zoom");
        $("#hr-mysql").removeClass("zoom");
        $("#hr-python").removeClass("zoom");
        $("#hr-jquery").removeClass("zoom");
        $("#hr-django").removeClass("zoom");
        $("#hr-css").removeClass("zoom");
    });
    $("#hr-mysql").hover(function(){
        $("#hr-html").removeClass("zoom");
        $("#hr-mysql").addClass("zoom");
        $("#hr-python").removeClass("zoom");
        $("#hr-jquery").removeClass("zoom");
        $("#hr-django").removeClass("zoom");
        $("#hr-css").removeClass("zoom");
    });
    $("#hr-python").hover(function(){
        $("#hr-html").removeClass("zoom");
        $("#hr-mysql").removeClass("zoom");
        $("#hr-python").addClass("zoom");
        $("#hr-jquery").removeClass("zoom");
        $("#hr-django").removeClass("zoom");
        $("#hr-css").removeClass("zoom");
    });
    $("#hr-jquery").hover(function(){
        $("#hr-html").removeClass("zoom");
        $("#hr-mysql").removeClass("zoom");
        $("#hr-python").removeClass("zoom");
        $("#hr-jquery").addClass("zoom");
        $("#hr-django").removeClass("zoom");
        $("#hr-css").removeClass("zoom");
    });
    $("#hr-django").hover(function(){
        $("#hr-html").removeClass("zoom");
        $("#hr-mysql").removeClass("zoom");
        $("#hr-python").removeClass("zoom");
        $("#hr-jquery").removeClass("zoom");
        $("#hr-django").addClass("zoom");
        $("#hr-css").removeClass("zoom");
    });
    $("#hr-css").hover(function(){
        $("#hr-html").removeClass("zoom");
        $("#hr-mysql").removeClass("zoom");
        $("#hr-python").removeClass("zoom");
        $("#hr-jquery").removeClass("zoom");
        $("#hr-django").removeClass("zoom");
        $("#hr-css").addClass("zoom");
    });


});
