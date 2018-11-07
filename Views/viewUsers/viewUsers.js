
function printUsers(username,mediaAvaliacao)
{
    return document.getElementById("listUsers").innerHTML += ` <div class="w3-card-4 topic">\n		 <header class="w3-container w3-teal">\n		   <h3 class="title">${username}</h3>\n		 </header>\n\n		 <div class="w3-container">\n				   <p class="msg">${mediaAvaliacao}</p>\n		 </div>\n</div> <p><button class="w3-btn w3-teal" onclick="deleteUser(\'' + username + '\'})">Deletar Usuário</button></p>`;
}

saveCookie = function(name, value) {
	return document.cookie = `${name}=${value}` + "; expires=Fri, 31 Dec 9999 23:59:59 GMT" + "; domain:/" + "; path=/";
};

getCookie = function(name) {
	var parts, value;
	value = "; " + document.cookie;
	parts = value.split("; " + name + "=");
	if (parts.length === 2) {
		return parts.pop().split(";").shift();
	} else {
		return "";
	}
};

getParameter = function(key, str) {
	var parts, value;
	value = "; " + str;
	parts = value.split("; " + key + "=");
	if (parts.length === 2) {
		return parts.pop().split(";").shift();
	} else {
		return "";
	}
};


function deleteUser(username)
{
  var xhr = new XMLHttpRequest();
	var url = 'deleteUser';
  xhr.open("POST",url,true);
    var endPost = JSON.stringify({"username":username})
  xhr.send(endPost);
}


// Requisição da página
var xhr = new XMLHttpRequest();
var url = "listusers";
xhr.open("POST",url,true);
xhr.setRequestHeader("Content-Type","application/json");
xhr.onreadystatechange = function()
{
  if(xhr.readyState === 4 && xhr.status ===200)
  {
    console.log(xhr.responseText);
    var users = JSON.parse(xhr.responseText);
    console.log(users);
	users = users.results;
    for(var i=0; i<users.length; i++)
    {
      printUsers(users[i].nomeUsuario,users[i].mediaAvaliacao);
    }
  }
}


var endUsers = JSON.stringify({"topico_id": getParameter("id", document.location.href.split("?")[1]), "cookie": getCookie("username")});
xhr.send(endUsers);
