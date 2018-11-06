
function printTopic(title, msg) {
    document.getElementById("title").innerHTML += title;
    return document.getElementById("question").innerHTML += msg;
};

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

function ans() {
	usuario = getCookie("username");
	if(usuario === undefined)
	{
		document.getElementById('error').textContent = 'Voce nao esta logado';
		//document.getElementById('error').style.display = 'block';
	}
	else if(getAnswer()=="")
  {
    alert("Você precisa digitar uma resposta");
  }

	else{

		var answer = getAnswer(); // remove trailing spaces
		if(answer.length > 0)
		{
			alert("TESTE");
			//printAnswer(answer, usuario.name, usuario.speciality, usuario.city);
			var xhr = new XMLHttpRequest();
			var url = "answer";
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
            alert("Resposta salva e aguardando aceitação dos moderadores");
          }
          else
          {
			  alert("Apenas medicos podem responder")
		  }
				}
			};

      var endAnswer = JSON.stringify({"topico_id": 1,"username":getCookie("username"),"texto":getAnswer()})
			xhr.send(endAnswer);
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
var url = "topic";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		console.log(xhr.responseText);
		var response = JSON.parse(xhr.responseText);
		console.log(response);
		var pergunta = response.question[0];
		var resposta = response.answer;
		printTopic(pergunta.titulo,pergunta.texto)
		for(var i=0; i<resposta.length;i++)
		{
			printAnswer(resposta[i].texto, resposta[i].nomeUsuario, resposta[i].especialidade, resposta[i].cidade,resposta[i].mediaAvaliacao);
		}
	}
};

var endtopic = JSON.stringify({"topico_id": 1,"cookie":getCookie("username")})
xhr.send(endtopic);

/*
// Requisição da página
var xhr = new XMLHttpRequest();
var url = "testeModerador";
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
				var xhr = new XMLHttpRequest();
				var url = "pendingQuestions";
				xhr.open("POST", url, true);
				xhr.setRequestHeader("Content-Type", "application/json");
				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4 && xhr.status === 200) {
						console.log(xhr.responseText);
						var response = JSON.parse(xhr.responseText);
						console.log(response);
						var pergunta = response.question[0];
						var resposta = response.answer;
						printTopic(pergunta.titulo,pergunta.texto)
						for(var i=0; i<resposta.length;i++)
						{
							printAnswer(resposta[i].texto, resposta[i].nomeUsuario, resposta[i].especialidade, resposta[i].cidade,resposta[i].mediaAvaliacao);
						}
					}
				};
		  }
		  else
		  {
			  alert("Area restrita para moderadores");
		  }
	}
};

var endtopic = JSON.stringify({"username":getCookie("username")})
xhr.send(endtopic);*/

// Requisição da página
var xhr = new XMLHttpRequest();
var url = "testeModerador";
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
				alert("true");
		  }
		  else
		  {
			  alert("Area restrita para moderadores");
		  }
	}
};

var endtopic = JSON.stringify({"username":getCookie("username")})
xhr.send(endtopic);
