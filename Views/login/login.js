
function getNomeUsuario()
{
	return document.getElementsByName('first')[0].value;
}

function getSenhaUsuario()
{
	return document.getElementsByName('last')[0].value;
}

document.getElementById('submit').addEventListener("click", function() {
	var xhr = new XMLHttpRequest();
	var url = "checkLogin";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var json = JSON.parse(xhr.responseText);
			console.log(xhr.responseText);
		}
	};
	var data = JSON.stringify({"nomeUsuario": getNomeUsuario(), "senha": getSenhaUsuario()});
	xhr.send(data);

})
