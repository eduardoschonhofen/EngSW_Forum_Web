mysql=require('mysql');
var database;
function connect()
{
if(!database)
{
database = mysql.createPool({
  connectionLimit : 10,
  host: "us-cdbr-iron-east-01.cleardb.net",
  user: "b089b876f46b39",
  password: "e7e02c90",
  database: "heroku_cb42695d67403c5"
});
}
return database;
}
//mysql --host=us-cdbr-iron-east-01.cleardb.net --user=b089b876f46b39 --password=e7e02c90 --reconnect heroku_cb42695d67403c5
module.exports=connect();
