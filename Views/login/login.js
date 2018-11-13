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

function getNomeUsuario()
{
	return document.getElementById("username").value;
}

function getSenhaUsuario()
{
	return document.getElementById("password").value;
}

function quit()
{
	saveCookie("username", "");
	document.location.href = '/login.html';
}

document.getElementById('submit').addEventListener("click", function() {

	if (getNomeUsuario() == "" || getSenhaUsuario() == "")
	{
		alert("Preencha todos os campos.");
		return;
	}

	var xhr = new XMLHttpRequest();
	var url = "login";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var success = xhr.responseText;
			console.log(xhr.responseText);
			success=JSON.parse(success);
			console.log(success);
			console.log("TREU");

			console.log(getNomeUsuario());
			if (success=="true")
			{
				console.log(saveCookie("username",getNomeUsuario()));
				alert("Login efetuado com sucesso");
				document.location.href = '/search.html';
				return false;
			}
			else {
				alert("Usuário e/ou senha não foi encontrado");
			}
		}
	};

	var data = JSON.stringify({"username": getNomeUsuario(), "password": getSenhaUsuario()});
	xhr.send(data);
})

var user = "Mod";

function changeVisibility() {
    if (user == "Mod") {

      var x = document.getElementsByClassName("moderator");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.cssText = 'display:block !important';
      }
    }
}

changeVisibility();
