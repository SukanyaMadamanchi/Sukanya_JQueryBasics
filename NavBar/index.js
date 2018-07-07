$(document).ready(function(){

	$(window).resize(function(e){
		e.preventDefault();
		var size= $(this).width();
		if(size<600)
		{
			$("li").hide();
		}
	});
	$(".menu").click(function(){
		$("div").find("li").addClass("res").slideToggle();
	});
});