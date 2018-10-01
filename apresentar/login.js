
document.getElementById('error').style.display = 'none';

function getNomeUsuario()
{
	return document.getElementsByName('first')[0].value;
}

function getSenhaUsuario()
{
	return document.getElementsByName('last')[0].value;
}

document.getElementById('submit').addEventListener("click", function() {
	var username = getNomeUsuario();
	var password = getSenhaUsuario();
	if(password == '123' && (username === 'cassiano' || username === 'eduardo' || username === 'felipe' || username === 'giovane' || username === 'matheus'))
	{
		var indexOfSlash = document.location.href.lastIndexOf('/');
		document.location.href = document.location.href.substr(0, indexOfSlash) + '/test.html';
	}
	else
	{
		document.getElementById('error').style.display = 'block';
	}
})
