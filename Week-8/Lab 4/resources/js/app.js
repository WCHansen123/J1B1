var getal2 = prompt("kies een getal")

function math(aantal,){
	var getal = 1;
	for (var a = 0; a <= getal2; a++) {
	
		for( i=0; i < aantal; aantal--){
			document.write( getal + " * " + getal2 + " = " + "<br>");
			getal++;
			}	
		}
	}
math(10)

