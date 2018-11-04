
const PrijsFris = 1;
const PrijsBier = 2;
const PrijsWijn = 3;
const PrijsBitterballen8 = 8;
const PrijsBitterballen16 = 10;

var TotaalPrijsFris = 0;
var TotaalPrijsBier = 0;
var TotaalPrijsWijn = 0;
var TotaalPrijsBitterbalen8 = 0;
var TotaalPrijsBitterbalen16 = 0;

var TotaalPrijs = 0;

var fris = 0;
var bier = 0;
var wijn = 0;
var bitterballen8 = 0;
var bitterballen16 = 0;




function bestel(){
		var keuze = prompt("Wat wilt u bestellen?").toLowerCase();
			if (keuze == "fris"){
				var aantalfris = parseInt(prompt("Hoeveel fris wilt u bestellen?"));
				parseInt(fris = fris + aantalfris);
				uitrekenen();
				console.log("U heeft " + fris + " fris besteld");
				document.getElementById("BestelFris").innerHTML = fris + " Fris  = " +"€"+ TotaalPrijsFris;
				bestel();
			}
			else if  (keuze == "bier"){
				var aantalbier = parseInt(prompt("Hoeveel bier wilt u bestellen?"));
				parseInt(bier = bier + aantalbier);
				uitrekenen();
				document.getElementById("BestelBier").innerHTML = bier + " Bier  = " +"€"+ TotaalPrijsBier;
				bestel();

			}

			else if  (keuze == "wijn"){
				var aantalwijn = parseInt(prompt("Hoeveel wijn wilt u bestellen?"));
				parseInt(wijn = wijn + aantalwijn);
				uitrekenen();
				document.getElementById("BestelWijn").innerHTML = wijn + " Wijn  = " +"€"+ TotaalPrijsWijn;
				bestel();
			}

			else if (keuze == "bitterballen"){
				bitterbal();
			}
			else if (keuze == "stop") {
				uitrekenen();
				TotaalPrijsRekening();
			}

			else{
				alert("Het ingevoerde item is ongeldig!");
				bestel();

		}
	}

function bitterbal(){
	var keuzeBitterbal = prompt("Hoeveel Bitterballen wilt u? 8 of 16?").toLowerCase();
		if (keuzeBitterbal == "8") {
			var schalen = parseInt(prompt("Hoeveel schalen wilt u bestellen?"));
			parseInt(bitterballen8 = bitterballen8 + schalen);
			uitrekenen();
			document.getElementById("BestelBitterbal8").innerHTML = bitterballen8 + " Biterballen 8 stuks = " +"€"+ TotaalPrijsBitterbalen8;
			bestel();
		}

		else if (keuzeBitterbal == "16") {
			var schalen = parseInt(prompt("Hoeveel schalen wilt u bestellen?"));
			parseInt(bitterballen16 = bitterballen16 + schalen);
			uitrekenen();
			document.getElementById("BestBitterbal16").innerHTML = bitterballen16 + " Biterballen 16 stuks = " +"€"+ TotaalPrijsBitterbalen16;
			bestel();
		}

		else {
			alert("Het ingevoerde item is ongeldig!");
			bitterbal()
		}
}

function uitrekenen(){
	TotaalPrijsFris = fris * PrijsFris;
	TotaalPrijsBier = bier * PrijsBier;
	TotaalPrijsWijn = wijn * PrijsWijn;
	TotaalPrijsBitterbalen8 = bitterballen8 * PrijsBitterballen8;
	TotaalPrijsBitterbalen16 = bitterballen16 * PrijsBitterballen16;
	console.log(TotaalPrijsFris);
	console.log(TotaalPrijsBier);
	console.log(TotaalPrijsWijn);
	console.log(TotaalPrijsBitterbalen8);
	console.log(TotaalPrijsBitterbalen16);
	
}


function TotaalPrijsRekening(){
	TotaalPrijs = TotaalPrijsFris + TotaalPrijsBier + TotaalPrijsWijn + TotaalPrijsBitterbalen8 + TotaalPrijsBitterbalen16;
	console.log(TotaalPrijs);
	document.getElementById("TotaalPrijsRekening").innerHTML = "€ " + TotaalPrijs;
}