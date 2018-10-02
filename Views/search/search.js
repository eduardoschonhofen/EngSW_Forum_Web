(function() {
  this.printTopic = function(title, msg, username) {
    return document.getElementById("listTopic").innerHTML += ` <div class="w3-card-4 topic">\n		 <header class="w3-container w3-teal">\n		   <h3 class="title">${title}</h3>\n		 </header>\n\n		 <div class="w3-container">\n			 <p class="username"><b>Usuário: ${username}</b></p>\n		   <p class="msg">${msg}</p>\n		 </div>\n</div>`;
  };

}).call(this);

var xhr = new XMLHttpRequest();
var url = "search";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var success = xhr.responseText;
    console.log(xhr.responseText);
    success=JSON.parse(success);
    console.log(success);

    console.log(success);
  }
};

var data = JSON.stringify("");
xhr.send(data);




printTopic("abc", "def", "ghi");
printTopic("abcu", "deuf", "ghiu");
