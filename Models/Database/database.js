mysql=require('mysql');



exports.printf=function printf(str, params) {
var i;
console.log("printf");
  for (i = 0; i < params.length; i++) {
    str = str.replace("{}", params[i]);
  }

  return str;
}
