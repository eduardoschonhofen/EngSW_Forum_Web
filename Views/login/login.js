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
			success=JSON.parse(success);

			if (success=="true")
			{
				alert("Redirecionando para lista de tópicos");
				document.location.href = '/search.html';
			}
			else {
				alert("Usuário e/ou senha não foi encontrado");
			}
		}
	};

	var data = JSON.stringify({"username": getNomeUsuario(), "password": getSenhaUsuario()});
	xhr.send(data);
})
