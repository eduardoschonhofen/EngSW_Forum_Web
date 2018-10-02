function getTitulo()
{
	return document.getElementById("title").value;
}

function getPergunta()
{
	return document.getElementById("question").value;
}
function getUsername()
{
	return getCookie("gafonseca");
}

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


document.getElementById('submit').addEventListener("click", function() {

	if (getTitulo() == "" || getPergunta() == "")
	{
		alert("Preencha todos os campos.");
		return;
	}

	console.log("REG");

	var xhr = new XMLHttpRequest();
	var url = "question";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	var data = JSON.stringify({"title": getTitulo(), "question": getPergunta(),"username":getUsername()});
	xhr.send(data);

	alert("Redirecionando para página de Perguntas");
	document.location.href = '/search.html';
})
console.log("AA");
console.log(getUsername());
