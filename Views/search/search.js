(function() {
  this.printTopic = function(title, msg, username) {
    return document.getElementById("listTopic").innerHTML += ` <div class="w3-card-4 topic">\n		 <header class="w3-container w3-teal">\n		   <h3 class="title">${title}</h3>\n		 </header>\n\n		 <div class="w3-container">\n			 <p class="username"><b>Usuário: ${username}</b></p>\n		   <p class="msg">${msg}</p>\n		 </div>\n</div>`;
  };

}).call(this);

printTopic("abc", "def", "ghi");
printTopic("abcu", "deuf", "ghiu");
