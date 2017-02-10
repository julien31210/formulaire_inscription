$(document).ready(function(){

	var users = [];
	$("form").submit(function(event){
		event.preventDefault();
		console.log("send");
		var nom = $("#nom").val();
		var prénom = $("#prénom").val();
		var login = $("#login").val();
		var mdp = $("#mdp").val();
		var naissance = $("#naissance").val();
		var ville = $("#ville").val();
		var mail = $("#mail").val();
		var url = $("#url").val();
		var hobbys = $("#hobbys");
		var num = $("#num").val();
		var couleur = $("#couleur").val();
		var obj = {
			nom:nom,
			prénom:prénom,
			login:login,
			mdp:mdp,
			naissance:naissance,
			ville:ville,
			mail:mail,
			url:url,
			hobbys:hobbys,
			num:num,
			couleur:couleur,
		};
		users.push(obj);
		console.log(users);
		localStorage.setItem("users", JSON.stringify(users));
		var user = localStorage.getItem("users");
		var parseUser = JSON.parse(user);
		for (var i = 0; i<parseUser; i++){
			console.log(parseUser[i]);
			$("#app").append(parseUser[i] + nom);
		}
		console.log("recoucou");
	})
});