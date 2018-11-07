
function printTopic(title, msg) {
    document.getElementById("title").innerHTML += title;
    return document.getElementById("question").innerHTML += msg;
};

function printAnswer(msg, name, speciality, city, nota) {
    return document.getElementById("topic").innerHTML += "<div class=\"post\">\n        <div class=\"user\">\n                <img></img>\n                <div>\n                        <span class=\"username\">" + name + "</span>\n        <span class=\"nota\">" + nota + "</span>\n                  <span class=\"speciality\">" + speciality + "</span>\n                        <span class=\"city\">" + city + "</span>\n                </div>\n        </div>\n\n        <div class=\"answer\">" + msg + "</div>\n</div>";
};

function alertEmptyAnswer()
{
  alert("Você precisa digitar uma resposta");
}
function alertSaveAnswer()
{
  alert("Resposta salva e aguardando e aguardando aceitação dos moderadores");
}
function notLoged()
{
   document.getElementById('error').textContent = 'Voce nao esta logado';
}
function notDoctor()
{
  document.getElementById('error').textContent = 'Voce nao pode responder perguntas pois nao e medico';
}
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
	if(usuario === undefined)
	{
		notLoged();
		//document.getElementById('error').style.display = 'block';
	}
	else if(usuario.speciality === undefined)
	{
    notDoctor();
		//document.getElementById('error').style.display = 'block';
	}
	else if(getAnswer()=="")
  {
    alertEmptyAnswer();
  }

	else{

		var answer = getAnswer(); // remove trailing spaces
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
          var answerText = xhr.responseText;
          console.log(xhr.responseText);
          answerText = JSON.parse(answerText);
          console.log(answerText);

          console.loog(getAnswer());

          if(answerText =="true")
          {
            alertSaveAnswer();
          }
				}
			};

      var endAnswer = JSON.stringify({"topico_id": getParameter("id", document.location.href.split("?")[1]), "cookie":getCookie("username"),"texto":getAnswer()})
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

// Requisição da página
var xhr = new XMLHttpRequest();
var url = "/topic";
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

var parser = document.createElement('a');
parser.href = document.location.href;



var endtopic = JSON.stringify({"topico_id": getParameter("id", document.location.href.split("?")[1]), "cookie": getCookie("username")})
xhr.send(endtopic);
