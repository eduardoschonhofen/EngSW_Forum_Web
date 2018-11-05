
function printTopic(title, msg) {
    document.getElementById("title").innerHTML += title;
    return document.getElementById("question").innerHTML += msg;
};

function printAnswer(msg, name, speciality, city) {
    return document.getElementById("topic").innerHTML += "<div class=\"post\">\n        <div class=\"user\">\n                <img></img>\n                <div>\n                        <span class=\"username\">" + name + "</span>\n                        <span class=\"speciality\">" + speciality + "</span>\n                        <span class=\"city\">" + city + "</span>\n                </div>\n        </div>\n\n        <div class=\"answer\">" + msg + "</div>\n</div>";
};

function quit()
{
	var indexOfSlash = document.location.href.lastIndexOf('/');
	document.location.href = document.location.href.substr(0, indexOfSlash) + '/login.html';
}

function ans() {
	/*if(usuario === undefined)
	{
		document.getElementById('error').textContent = 'Voce nao esta logado';
		//document.getElementById('error').style.display = 'block';
	}
	else if(usuario.speciality === undefined)
	{

		document.getElementById('error').textContent = 'Voce nao pode responder perguntas pois nao e medico';
		//document.getElementById('error').style.display = 'block';
	}
	else*/
	{

		var answer = document.getElementById('resposta').value.trim(); // remove trailing spaces
		if(answer.length > 0)
		{
			alert("TESTE");
			//printAnswer(answer, usuario.name, usuario.speciality, usuario.city);
			var xhr = new XMLHttpRequest();
			var url = topic;
			xhr.open("POST", url, true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4 && xhr.status === 200) {

					var response = JSON.parse(xhr.responseText);
					console.log(xhr.responseText);
				}
			};

			xhr.send(answer);
		}
	}
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

// Requisição da página
var xhr = new XMLHttpRequest();
var url = "/topic";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {

		var response = JSON.parse(xhr.responseText);
		console.log(xhr.responseText);
	}
};

xhr.send(JSON.stringify({"topico_id": 1,"cookie":getCookie("username")}));

printTopic("Title", "Pergunta");
printAnswer("gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg gggggggg ", "NOME", "ESPEC", "CIDADE");
printAnswer("gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg", "NOME", "ESPEC", "CIDADE");
printAnswer("gggggggg", "NOME", "ESPEC", "CIDADE");