function getNome()
{
	return document.getElementById("name").value;
}

function getNomeUsuario()
{
	return document.getElementById("username").value;
}

function getSenhaUsuario()
{
	return document.getElementById("password").value;
}

document.getElementById('submit').addEventListener("click", function() {

	if (getNome() == "" || getNomeUsuario() == "" || getSenhaUsuario() == "")
	{
		alert("Preencha todos os campos.");
		return;
	}

	console.log("REG");

	var xhr = new XMLHttpRequest();
	var url = "register";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	var data = JSON.stringify({"name": getNome(), "username": getNomeUsuario(), "password": getSenhaUsuario()});
	xhr.send(data);
})
