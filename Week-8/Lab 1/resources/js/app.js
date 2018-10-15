

function helloWorld(aantal) {
	var getal = 1;
    for( i=0; i < aantal; aantal--){
    document.write( getal +". Hello World!" + "<br>")
	getal++;
	}

}

helloWorld(3);
document.write("<br>")
helloWorld(7);