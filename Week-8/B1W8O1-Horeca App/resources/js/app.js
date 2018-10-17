
const PrijsFris = 1;
const PrijsBier = 2;
const PrijsWijn = 3;

var TotaalPrijsFris = 0;
var TotaalPrijsBier = 0;
var TotaalPrijsWijn = 0;

var TotaalPrijs = 0;

var fris = 0;
var bier = 0;
var wijn = 0;

function bestel(){
	var keuze = prompt("Wat wilt u te drinken?");
		if (keuze == "fris"){
			fris = prompt("Hoeveel fris wilt u bestellen?");
			console.log("U heeft " + fris + " fris besteld");
			uitrekenen()
			document.getElementById("BestelFris").innerHTML = fris + " Fris  = " +"€"+ TotaalPrijsFris;
			verwijder();
			bestel();
		}
		else if  (keuze == "bier"){
			bier = prompt("Hoeveel bier wilt u bestellen?");
			console.log("U heeft " + bier + " bier besteld");
			uitrekenen()
			document.getElementById("BestelBier").innerHTML = bier + " Bier  = " +"€"+ TotaalPrijsBier;
			verwijder();
			bestel();

		}

		else if  (keuze == "wijn"){
			wijn = prompt("Hoeveel wijn wilt u bestellen?");
			console.log("U heeft " + wijn + " wijn besteld");
			uitrekenen()
			document.getElementById("BestelWijn").innerHTML = wijn + " Wijn  = " +"€"+ TotaalPrijsWijn;
			verwijder();
			bestel();
		}

		else if (keuze == "stop") {
			TotaalPrijsRekening();
		}

		else{
			alert("Het ingevoerde item is ongeldig!");
			bestel();
		}
}

function verwijder(){
	if (fris == "0"){
		document.getElementById("BestelFris").innerHTML = "";
	
	}

	if( bier == "0"){
		document.getElementById("BestelBier").innerHTML = "";
	}

	if( wijn == "0"){
		document.getElementById("BestelWijn").innerHTML = "";
		
	}
}

function uitrekenen(){
	TotaalPrijsFris = fris * PrijsFris;
	TotaalPrijsBier = bier * PrijsBier;
	TotaalPrijsWijn = wijn * PrijsWijn;
	console.log(TotaalPrijsFris);
	console.log(TotaalPrijsBier);
	console.log(TotaalPrijsWijn);
	
}


function TotaalPrijsRekening(){
	TotaalPrijs = TotaalPrijsFris + TotaalPrijsBier + TotaalPrijsWijn;
	console.log(TotaalPrijs);
	document.getElementById("TotaalPrijsRekening").innerHTML = "€ " + TotaalPrijs;
}