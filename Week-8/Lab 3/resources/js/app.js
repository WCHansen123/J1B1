

function Vragen(){
	var name = prompt("wat is uw Naam?");
		if (name == "stop") {
			alert("klaar");
		}
		else{
			var age = prompt("wat is uw Leeftijd?");
			document.write("Naam: " + name + "<br>" + "Leeftijd: " + age + "<br>" + "<br>");
			Vragen();
		}
	}
	
Vragen();