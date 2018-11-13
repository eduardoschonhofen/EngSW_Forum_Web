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
	return getCookie("username");
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

function quit()
{
	saveCookie("username", "");
	document.location.href = '/login.html';
}

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
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
		  var answerText = xhr.responseText;
		  console.log(xhr.responseText);
		  answerText = JSON.parse(answerText);
		  console.log(answerText);

		  console.log(getAnswer());

		  if(answerText =="true")
		  {
			alert("Pergunta salva e aguardando aceitação dos moderadores");
			document.location.href = '/search.html';
		  }
		  else
		  {
			  alert("Apenas pacientes podem perguntar")
		  }
		}
	};

	var data = JSON.stringify({"title": getTitulo(), "question": getPergunta(),"username":getUsername()});
	xhr.send(data);

})
