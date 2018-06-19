$(document).ready(function()
{
        $.ajax({
        	type : "GET",
        	url: "/movies/all",
        	success: function(result)
            {
        	var data = "";
        	for(var i=0; i<result.length; i++)
                {
            		console.log("movie name",result[i].name);
            		// <div class="poster">
            		// 	<img src="some url">
            		// </div>
            		data += '<div class="eachMovie">';
                    data += '<a href = "/moviedetails.html#' + result[i].name + '">'
            		data += '<div class="poster"><img src='+result[i].posterUrl+'></div></a>';
                    data += '<div class="name">'+result[i].name+'</div>';
            		data += '<div class="releaseYear">'+result[i].releaseYear+'</div>';    
                    data +='<div class="stars">';
                    if(result[i].rating==5)
                    {
                        for(var j=0;j<5;j++)
                        data +='<img src="./images/star.png">';
                    }
                    else if(result[i].rating==4)
                    {
                        for(var j=0;j<4;j++)
                            data +='<img src="./images/star.png">';
                            data +='<img src="./images/star-empty.png">';
                    }
                    else if(result[i].rating==3)
                    {
                        for(var j=0;j<3;j++)
                            data +='<img src="./images/star.png">';
                            data +='<img src="./images/star-empty.png">';
                    }
                    else if(result[i].rating==2)
                    {
                        for(var j=0;j<2;j++)
                            data +='<img src="./images/star.png">';
                            data +='<img src="./images/star-empty.png">';
                    }
                    else if(result[i].rating==1)
                    {
                        for(var j=0;j<1;j++)    
                            data +='<img src="./images/star.png">';
                            data +='<img src="./images/star-empty.png">';
                    }
                    else if(result[i].rating==4.5)
                    {
                        for(var j=0;j<4.5;j++)    
                            data +='<img src="./images/star.png">';
                            data +='<img src="./images/star-half.png">';
                    }
                    data += '</div>';
                    data += '</div>';           	
                }
            	$(".content").html(data);
            }
    	});
});