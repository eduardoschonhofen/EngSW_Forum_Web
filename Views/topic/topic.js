
function printTopic(title, msg) {
    document.getElementById("title").innerHTML += title;
    document.getElementById("question").innerHTML += msg;

    document.getElementById("paddingTopic").innerHTML +=
    `<div class="rating">
      <p>Nota: <span id="rating0"><span></p>
      <input id="sendNotaTopic" type="range" min="1" max="5" value="4" onchange="refreshRating('rating0', this.value)">
      <button onclick="postQuestion(sendNotaTopic)" class="w3-btn w3-teal" id='submit0'>Enivar</button></p>
    </div>`;
};

function printAnswer(n, msg, name, speciality, city, nota) {
    return document.getElementById("topic").innerHTML +=
    `<div class='post-container w3-card-4'>
      <header class="w3-container w3-teal">
        <h6>#${n}</h6>
      </header>

      <div class="padding">
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

         <div class="rating">
           <p>Nota: <span id="rating${n}"><span></p>
           <input type="range" min="1" max="5" value="4" onchange="refreshRating('rating${n}', this.value)">
           <button class="w3-btn w3-teal" id='submit${n}'>Enivar</button></p>
         </div>
      </div>

     </div>`;
};

function refreshRating(id, val) {
  document.getElementById(id).innerHTML = val;
}

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

function getNota(id)
{
  return document.getElementById("id").value.trim();
}

function quit()
{
	saveCookie("username", "");
	document.location.href = '/login.html';
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
	  console.log(xhr.responseText);
	  answerText = JSON.parse(answerText);
	  console.log(answerText);

	  console.log(getAnswer());

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

postQuestion = function(id, nota) {
// Requisição da página
var xhr = new XMLHttpRequest();
var url = "/evaluateQuestion";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");

var endtopic = JSON.stringify({"topico_id": getParameter("id", document.location.href.split("?")[1]), "nota": getNota(id)})
xhr.send(endtopic);
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
			printAnswer(i+1,resposta[i].texto, resposta[i].nomeUsuario, resposta[i].especialidade, resposta[i].cidade,resposta[i].mediaAvaliacao);
		}
	}
};

var endtopic = JSON.stringify({"topico_id": getParameter("id", document.location.href.split("?")[1]), "cookie": getCookie("username")})
xhr.send(endtopic);

// Esconder itens restrito a usuários não logados
if (getCookie("username") == "") {
  document.getElementById("wrapperComment").style.display = "none";

  var x = document.getElementsByClassName("rating");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
