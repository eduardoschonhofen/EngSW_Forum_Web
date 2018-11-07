
function printTopic(title, msg) {
    document.getElementById("title").innerHTML += title;
    return document.getElementById("question").innerHTML += msg;
};

function printAnswer(n, msg, name, speciality, city, nota) {
    return document.getElementById("topic").innerHTML +=
    `<div class='post-container w3-card-4'>
      <header class="w3-container w3-teal">
        <h6>#${n}</h6>
      </header>

      <div class='post w3-container'>
         <div class=\"user\">
           <img src="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png" height="140" width="140"></img>
           <div><br>
             <span class=\"username\">${name}</span><br><br>
             <span class=\"nota\">Nota média: ${nota}</span><br>
             <span class=\"speciality\">Especialidade: ${speciality}</span><br>
             <span class=\"city\">Cidade: ${city}</span>
           </div>
          </div>
         <div class=\"answer\">${msg}</div>
       </div>
     </div>`;
};

function alertEmptyAnswer()
{
  alert("Você precisa digitar uma resposta");
}
function alertSaveAnswer()
{
  alert("Resposta salva");
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
	
	var answer = getAnswer(); // remove trailing spaces
	if(answer.length > 0)
	{
		//printAnswer(answer, usuario.name, usuario.speciality, usuario.city);
		var xhr = new XMLHttpRequest();
		var url = 'answer';
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
	  var answerText = xhr.responseText;
	  answerText = JSON.parse(answerText);

	  if(answerText =="true")
	  {
		alertSaveAnswer();
	  }
	  else
	  {
		  alert("Apenas medicos podem responder perguntas");
	  }
			}
		};

  var endAnswer = JSON.stringify({"topico_id": getParameter("id", document.location.href.split("?")[1]), "username":getCookie("username"),"texto":getAnswer()})
		xhr.send(endAnswer);
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
		var response = JSON.parse(xhr.responseText);
		var pergunta = response.question[0];
		var resposta = response.answer;
		printTopic(pergunta.titulo,pergunta.texto)
		for(var i=0; i<resposta.length;i++)
		{
			printAnswer(i+1,resposta[i].texto, resposta[i].nomeUsuario, resposta[i].especialidade, resposta[i].cidade,resposta[i].mediaAvaliacao);
		}
	}
};

var endtopic = JSON.stringify({"topico_id": getParameter("id", document.location.href.split("?")[1]), "cookie": getCookie("username")})
xhr.send(endtopic);
