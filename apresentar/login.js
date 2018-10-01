
document.getElementById('error').style.display = 'none';

function getNomeUsuario()
{
	return document.getElementsByName('first')[0].value;
}

function getSenhaUsuario()
{
	return document.getElementsByName('last')[0].value;
}

var dict = {
	'cassiano': 'seattle',
	'eduardo': 'batatafrita',
	'felipe': 'idk',
	'giovane': 'racket',
	'matheus': 'bigwaves'
};

var hash = {
	'cassiano': 'JHASKLjdfhJKHnkjanjkasngjkang2184717657823626262968w9ugmndskgjmkdsgsdg45d4g65a45641i40912u8aouh7asfya78',
	'eduardo': 'ASKODFY(*SAY(f8asghf87a87G*GFGH(A&SYD&*SAFGY*SAGF*SAF&GSAfh0asfhJP)jhfa90fpUAFUS()U(SH(SFH(SHFASJSKAHKS*',
	'felipe': 'SDYYASD*&SATD&AGYg*Ysgaf8gsG*gf*GF*g*gfA*GFSFJ)AFSJ)F(JKSA)(KFSA(FKSA)(KF)(KFS)A(KFS)AKF)(SAKF()SAFK)F(SK',
	'giovane': 'akjLKJLKAJFKLSJaJKPOJPEPHeKaasG*gf*GF*g*gfA*GFSFugmndskgjmkdsgsdg4sasKSA)(KF)sadsadsa)AKF)(SAdasdaAFK)SK',
	'matheus': 'ANsadasadaasJFOISAJfijaoifjoankjnvjkcxbvznvbzxljhhjfhafhasuoishF(Y(AFYhfhFH(AUHfa98hf(AHFhFHFF(*AHF*SHASH'
};

document.getElementById('submit').addEventListener("click", function() {
	var username = getNomeUsuario();
	var password = getSenhaUsuario();
	var correctPassword = dict[username];
	if(correctPassword === undefined || correctPassword != password)
	{
		document.getElementById('error').style.display = 'block';
	}
	else
	{
		var indexOfSlash = document.location.href.lastIndexOf('/');
		document.location.href = document.location.href.substr(0, indexOfSlash) + '/test.html' + '?user=' + hash[username];
	}
})
