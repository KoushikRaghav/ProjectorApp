$(document).ready(function()
{
  console.log("ready ")
  var pageUrl=window.location.href;
  var moviename = pageUrl.substring(pageUrl.indexOf('#')+1); 
  console.log("HELLLLOOOO");
        $.ajax({
          type : "GET",
          url: "/movies/"+moviename,
          dataType:'json',
          //var data="";
          success: function(result)
          {
            console.log("result",result);
            result=result[0];
            console.log(result.name);
            var data = "";
            data += '<h1>' + result.name + '</h1>';
            data += '<h1>' + result.language + '</h1>';
            data += '<div class="stars">'; 
            if(result.rating==5)
            {
              for(var j=0;j<5;j++)
                data+='<img src="./images/star.png">';
            }
            else if (result.rating==4) 
            {
              for(var j=0;j<4;j++)
                data +='<img src="./images/star.png">';
                data +='<img src="./images/star-empty.png">';
            }
            else if (result.rating==3) 
            {
              for(var j=0;j<3;j++)
                data +='<img src="./images/star.png">';
                data +='<img src="./images/star-empty.png">';
            }
            else if (result.rating==2) 
            {
              for(var j=0;j<2;j++)
                data +='<img src="./images/star.png">';
                data +='<img src="./images/star-empty.png">';
            }
            else if (result.rating==1) 
            {
              for(var j=0;j<1;j++)
                data +='<img src="./images/star.png">';
                data +='<img src="./images/star-empty.png">';
            }
            data += '</div>';
            data += '<div class="poster"><img src="'+result.posterUrl+'"></div>';
            data += '<div id="flef">'+result.plot+'</div>';
            data += '<div id="frigh">'+result.cast+'</div>';


       $("#movie-description").html(data);
        }

});
});
