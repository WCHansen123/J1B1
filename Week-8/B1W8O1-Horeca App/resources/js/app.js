
const PrijsFris = 1;
const PrijsBier = 1.20;
const PrijsWijn = 2.30;

var fris = 0;
var bier = 0;
var wijn = 0;

function bestel(){
	var keuze = prompt("Wat wilt u te drinken?");
		if (keuze == "fris"){
			var fris = prompt("Hoeveel fris wilt u bestellen?");
			console.log("U heeft " + fris + " fris besteld");
			document.getElementById("BestelFris").innerHTML = fris + " fris";
			bestel()
		}
		else if  (keuze == "bier"){
			var bier = prompt("Hoeveel bier wilt u bestellen?");
			console.log("U heeft " + bier + " bier besteld");
			document.getElementById("BestelBier").innerHTML = bier + " bier";
			bestel()
		}

		else if  (keuze == "wijn"){
			var wijn = prompt("Hoeveel wijn wilt u bestellen?");
			console.log("U heeft " + wijn + " wijn besteld");
			document.getElementById("BestelWijn").innerHTML = wijn + " wijn";
			bestel()
		}

		else if (keuze == "stop") {
		}

		else{
			alert("Het ingevoerde item is ongeldig!")
			bestel()
		}
}


// function bestel(){
// 	var keuze = prompt("Wat wilt u te drinken?");
// 		if (drankje == "stop") {
// 		}
// 		else if(drankje == "fris" || drankje == "bier" || drankje == "wijn"){
// 			document.getElementById("bestellingen").innerHTML = drankje;
//  			bestel();
// 		}
// 		else if(drankje == "" || drankje == "null"){
// 			alert("Kies een drankje")
// 			bestel()
// 		}

// 		else{
//  			alert("U kunt geen " + drankje + " bestellen");
//  			bestel();
// 		}
// 	}
