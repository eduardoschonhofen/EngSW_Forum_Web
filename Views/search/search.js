(function() {
  this.printTopic = function(title, msg, username) {
    return document.getElementById("listTopic").innerHTML += ` <div class="w3-card-4 topic">\n		 <header class="w3-container w3-teal">\n		   <h3 class="title">${title}</h3>\n		 </header>\n\n		 <div class="w3-container">\n			 <p class="username"><b>Usuário: ${username}</b></p>\n		   <p class="msg">${msg}</p>\n		 </div>\n</div>`;
  };

}).call(this);

getCookie = function(name) {
	var parts, value;
  console.log(document.cookie);
	value = "; " + document.cookie;
	parts = value.split("; " + name + "=");
	if (parts.length === 2) {
		return parts.pop().split(";").shift();
	} else {
		return "";
	}
};

var xhr = new XMLHttpRequest();
var url = "search";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");



xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  console.log(xhr.status);
  console.log(getCookie("username"));
  if (xhr.readyState === 4 && xhr.status === 200) {
    var success = xhr.responseText;
    console.log(xhr.responseText);
    success=JSON.parse(success);
    console.log(success);
    for(var i=0;i<success.length;i++)
    {
      printTopic(success[i].titulo,success[i].texto,success[i].nomeUsuario);
    }
  }
};

var data = JSON.stringify({"cookie":getCookie("username")});
xhr.send(data);
