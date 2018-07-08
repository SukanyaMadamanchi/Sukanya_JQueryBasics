$(document).ready(function(){
           $(".card1").hide();

           $("#get-data").click(()=>{
           	let value=$("#formInput").val();
                     if(value == null ||value == "")
                     {
                     	alert("Enter movie name in the search box")
                     }else{
                     	getData(value);
                     	$(".card1").show();
                     }
           })
});

let  getData= (value)=>{

	$.ajax ({

		type: 'GET', // request type GET, POST, PUT
        dataType: 'json', // requesting datatype
        url: 'http://www.omdbapi.com/?i=tt3896198&apikey=3d460a70', // URL of getting data
        async: true,
        success: (response) => { // in case of success response
            
            console.log(response)

            if(response.Title==value|| response.Year == value || response.imdbID== value)
            {
                   	   	$(".card-img-top").html('<img src="' + response.poster + '" class="img-fluid "/>');
            	$("#title").append(response.Title);
                 $("#Yr").append(response.Year);
				$("#rated").append(response.Rated);
				$("#release").append(response.Released);

 $("#rt").append(response. Runtime );

 $("#genre").append(response. Genre);

 $("#director").append(response. Director);

$("#writer").append(response.Writer);

 $("#plot").append(response.Plot);

 $("#language").append(response.Language);

 $("#country").append(response.Country);

 $("#awards").append(response.Awards);

$("#poster").append(response.Poster);


 $("#ratings").append(response.Ratings);

$("#metascore").append(response. Metascore);

 $("#IR").append(response.imdbRating);

 $("#IV").append(response.imdbVotes);

 $("#imdbID").append(response.imdbID);

 $("#type").append(response.Type);
 $("#dvd").append(response.DVD);

 $("#boxoffice").append(response.BoxOffice);

 $("#pro").append(response.Production);

 $("#response").append(response.Response);
$("#website").append(response.Website);
            }
            else{
            	alert("no data exist");
            	$(".card1").hide();

            }
	}
	
})

}