

var Small = prompt("hoeveel kleine pizza's wilt u");
var Medium = prompt("hoeveel middel pizza's wilt u");
var Large = prompt("hoeveel grote pizza's wilt u");

const Psmall = Small  * 5.00;
const Pmedium = Medium  * 7.20;
const Plarge = Large * 11.25;

document.write('small pizza prijs: € ' + Psmall  + "<br>");
document.write('medium pizza prijs: € ' + Pmedium  + "<br>");
document.write('Large pizza prijs: € ' +  Plarge  + "<br>" + "<br>");


var Totaal = Psmall + Pmedium + Plarge;
document.write('Totaal:' + Totaal);