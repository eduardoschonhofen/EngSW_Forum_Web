
(function() {
  this.printTopic = function(title, msg, username, pergunta_id) {
    return document.getElementById("listTopic").innerHTML += ` <div class="w3-card-4 topic" id='${pergunta_id}'>\n		 <header class="w3-container w3-teal">\n		   <h3 class="title">${title}</h3>\n		 </header>\n\n		 <div class="w3-container">\n			 <p class="username"><b>Usuário: ${username}</b></p>\n		   <p class="msg">${msg}</p>\n		 </div>\n</div> <p><button class="w3-btn w3-teal" onclick='aprovaPergunta(${pergunta_id})'>Aprovar pergunta</button> <button class="w3-btn w3-teal" onclick='removePergunta(${pergunta_id})'>Cancelar pergunta</button> </p>`;
  };

}).call(this);

function printAnswer(msg, name, speciality, city, nota) {
    return document.getElementById("topic").innerHTML += "<div class=\"post\">\n        <div class=\"user\">\n                <img></img>\n                <div>\n                        <span class=\"username\">" + name + "</span>\n        <span class=\"nota\">" + nota + "</span>\n                  <span class=\"speciality\">" + speciality + "</span>\n                        <span class=\"city\">" + city + "</span>\n                </div>\n        </div>\n\n        <div class=\"answer\">" + msg + "</div>\n</div>";
};

function getAnswer()
{
  return document.getElementById("resposta").value.trim();
}
function quit()
{
	var indexOfSlash = document.location.href.lastIndexOf('/');
	document.location.href = document.location.href.substr(0, indexOfSlash) + '/login.html';
}

function aprovaPergunta(pergunta_id) {

	//printAnswer(answer, usuario.name, usuario.speciality, usuario.city);
	var xhr = new XMLHttpRequest();
	var url = "approveQuestion";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
    var endAnswer = JSON.stringify({"pergunta_id":pergunta_id})
	xhr.send(endAnswer);
}

deletaPerguntaHTML = function(pergunta_id)
{
	document.getElementById(pergunta_id).innerHTML = "";
}

function removePergunta(pergunta_id) {

	//printAnswer(answer, usuario.name, usuario.speciality, usuario.city);
	var xhr = new XMLHttpRequest();
	var url = "removeQuestion";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
    var endAnswer = JSON.stringify({"pergunta_id":pergunta_id})
	deletarPerguntaHTML(pergunta_id);
	xhr.send(endAnswer);
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
var url = "pendingQuestions";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		var answerText = xhr.responseText;
		  console.log(xhr.responseText);
		  answer = JSON.parse(answerText);
		  console.log(answerText);
			answer = answer.results;
		  if(answer.length > 0)
		  {

				for(var i=0; i<answer.length;i++)
				{
					printTopic(answer[i].titulo,answer[i].texto, answer[i].nomeUsuario, answer[i].pergunta_id);
				}

		  }
		  else
		  {
			  alert("Não há perguntas pendentes!");
		  }
	}
};

var endtopic = JSON.stringify({"username":getCookie("username")})
xhr.send(endtopic);
