(function() {
  this.printTopic = function(title, msg, username, id) {
    return document.getElementById("listTopic").innerHTML +=
    ` <div class="w3-card-4 topic">
        <header class="w3-container w3-teal">
          <h3 class="title"><a href="/topic.html?id=${id}">${title}</a></h3>
        </header>
        <div class="w3-container">
          <p class="username"><b>Usuário: ${username}</b></p>
          <p class="msg">${msg}</p>
        </div>
      </div>`;
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
      printTopic(success[i].titulo,success[i].texto,success[i].nomeUsuario, success[i].id);
    }
  }
};

var data = JSON.stringify({"cookie":getCookie("username")});
xhr.send(data);

