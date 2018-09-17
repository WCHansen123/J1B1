
// Geeft uitleg over wat er moet gaan gebeuren.
window.alert('Beantwoord de volgende vragen alleen met \'ja\' of \'nee\'')

// Stelt de vraag aan de gebruiker waarop 'ja' of 'nee' moet worden beantwoord.
var vraag = prompt('Is de kaas geel?');
var ja;
var nee;


if(vraag == 'ja'){
    ja = prompt('Zitten er gaten in?');
} else if(vraag == 'nee'){
    nee = prompt('Heeft de kaas blauwe schimmels?');
} 

//defineerd 'duur' en 'hard'.
var duur;
var hard;


if(ja == 'ja'){
    duur = prompt('Is de kaas belachelijk duur?');
} else if(ja == 'nee'){
    hard = prompt('Is de kaas hard als steen?');
}

//defineerd 'Emmenthaler' en 'Leerdammer'.
var Emmenthaler;
var Leerdammer;

if(duur == 'ja'){
    Emmenthaler = window.alert('Emmenthaler');
} else if(duur == 'nee'){
    Leerdammer = window.alert('Leerdammer');
}

//defineerd 'Goudsekaas' en 'PamigianoReggiano'.
var Goudsekaas;
var PamigianoReggiano;

if(hard == 'nee'){
    Goudsekaas = window.alert('Goudse kaas');
} else if(hard == 'ja'){
    PamigianoReggiano = window.alert('Pamigiano Reggiano');
}

//defineerd 'korst1' en 'korst2'.
var korst1;
var korst2;

if(nee == 'ja'){
    korst1 = prompt('Heeft de kaas een korst?');
} else if(Kaasnietgeel == 'nee'){
    korst2 = prompt('Heeft de kaas een korst?');
}

//defineerd 'BluedeRochbaron' en 'FoummedAmbert'.
var BluedeRochbaron;
var FoummedAmbert;

if(korst1 == 'ja'){
    BluedeRochbaron = window.alert('Blue de Rochbaron');
} else if(korst1 == 'nee'){
    FoummedAmbert = window.alert('Foumme d\'Ambert\'');
}

//defineerd 'Camembert' en 'Mozzarella'.
var Camembert;
var Mozzarella;

if(korst2 == 'ja'){
    Camembert = window.alert('Camembert');
} else if(korst2 == 'nee'){
    Mozzarella = window.alert('Mozzarella');
}