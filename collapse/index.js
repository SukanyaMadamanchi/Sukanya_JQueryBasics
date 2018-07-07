$(document).ready(()=>{

	$("#p1").hide();
	$("#p2").hide();
        
        $("#coll1").click(function(){
        	$("#p1").slideToggle();
        	$("#p2").hide();
        })
        $("#coll2").click(function(){
        	$("#p2").slideToggle();
        	$("#p1").hide();
        })

})