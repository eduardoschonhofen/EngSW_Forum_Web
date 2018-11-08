mysql=require('mysql');

var database = mysql.createPool({
  connectionLimit : 10,
  host: "us-cdbr-iron-east-01.cleardb.net",
  user: "b089b876f46b39",
  password: "e7e02c90",
  database: "heroku_cb42695d67403c5"
});
//mysql --host=us-cdbr-iron-east-01.cleardb.net --user=b089b876f46b39 --password=e7e02c90 --reconnect heroku_cb42695d67403c5
exports.database=database;


exports.printf=function printf(str, params) {
var i;
console.log("printf");
  for (i = 0; i < params.length; i++) {
    str = str.replace("{}", params[i]);
  }

  return str;
}
