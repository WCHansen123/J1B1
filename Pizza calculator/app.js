

var Small = prompt("hoeveel kleine pizza's wilt u");
var Medium = prompt("hoeveel middel pizza's wilt u");
var Large = prompt("hoeveel grote pizza's wilt u");

const Prijssmall = Small  * 5.00;
const Prijsmedium = Medium  * 7.20;
const Prijslarge = Large * 11.25;

document.write('small pizza prijs: € ' + Prijssmall  + "<br>");
document.write('medium pizza prijs: € ' + Prijsmedium  + "<br>");
document.write('Large pizza prijs: € ' +  Prijslarge  + "<br>" + "<br>");


var Totaal = Prijssmall + Prijsmedium + Prijslarge;
document.write('Totaal:' + Totaal);