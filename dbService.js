var MongoClient= require('mongodb').MongoClient

var databaseURL= "mongodb://admin:admin123@ds259210.mlab.com:59210/projectordb";

module.exports = 
{
  createConnection: function() 
  {
  	console.log("Connection under progress..");
  	MongoClient.connect(databaseURL,(err,dBase)=>
  	{
  		if(err)
  		{
  			console.log("Connection Error",err);
  		}
  		else
  		{
  			console.log("Connection Established");
  			module.exports.database=dBase.db("projectordb"); //details of db is initialized to database object 
  		}
  	});
  }
}
