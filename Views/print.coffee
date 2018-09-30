@printTopic = (title, msg) ->
	document.getElementById("title").innerHTML += title
	document.getElementById("question").innerHTML += msg

@printAnswer = (msg, name, speciality, city) ->
	document.getElementById("topic").innerHTML += """
        <div class="post">
                <div class="user">
                        <img></img>
                        <div>
                                <span class="username">#{name}</span>
                                <span class="speciality">#{speciality}</span>
                                <span class="city">#{city}</span>
                        </div>
                </div>

                <div class="answer">#{msg}</div>
        </div>
	"""

  printAnswer("MSG1", "User1", "Pediatra", "Seattle")
  printAnswer("MSG2", "User2", "Clinico", "Alvorada")
  printAnswer("MSG3", "User3", "Psicologo", "POA")
