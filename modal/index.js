$(document).ready(()=>
{
	$(".modal").hide();
	$("#myBtn").on("click",function(){
		$(".modal").show();

			});
	$(".close").on("click",function(){
		$(".modal").hide();
	})

})