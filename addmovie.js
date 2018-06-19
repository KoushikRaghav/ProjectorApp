function addMovie() 
{
  console.log("inside addmovie method");
    $.ajax({
            url: "/movies/add",
            type: 'post',
            dataType: 'json',
            data: $("#add_movie_form").serialize(),
            success: function(response) {
              console.log(response);
              
              if(response){
                 window.location.href="index.html";
              }
            },
            error :function(response) {
               console.log("Error:"+ response);
            }
    });
}
