var dbService= require("../services/dbService");
exports.getAllMovies=function(req,res)
{
	var db=dbService.database;
     var moviesCollection = db.collection("movies").find({}).toArray(function(err,result)
     	{
     		if(err)
     		{
     			console.log("ERROR",err);
     		}
     		else
     		{
     			return res.json(result);
     		}
     	});
 }
exports.addNewMovie = function(req, res)
 {
 	var movie = req.body;
 	console.log("movie" , movie); 
 	var db=dbService.database;

	db.collection("movies").insert(movie, function(err, response) {
    if (err) throw err;
    console.log("inserted now");
    return res.json(
    		{"inserted" : true}
    	);
  });
}
exports.getMovieDetails= function(req,res)
{
	var db=dbService.database;
  var mName = req.params.moviename;
  console.log("req params",req.params.name);
      var moviesCollection = db.collection("movies").find({"name":mName}).toArray(function(err,response)
      {
      if(err)
      {
      	console.log("Error",err);
      }		
      else
      {
      	console.log(response);
      	return res.json(response);
      }
      });
}