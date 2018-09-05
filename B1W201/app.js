/* small = 5 eu.
	Middel= 7,50.
	Groot= 12,00 */

var VIJF = 5;

function SmallP()
{
    var Small = prompt("Please provide an Adjective");

    console.log("newElement");

    var li = document.createElement("li");
    var t = document.createTextNode(Small);
    li.appendChild(t);
    document.getElementById("Small").appendChild(li); 

   
    
}

 



function MediumP()
{
    var Medium = prompt("Please provide an Adjective");
    console.log("newElement");

    var li = document.createElement("li");
    var t = document.createTextNode(Medium);
    li.appendChild(t);
    document.getElementById("Medium").appendChild(li);
}

function LargeP()
{
    var Large = prompt("Please provide an Adjective");
    console.log("newElement");

    var li = document.createElement("li");
    var t = document.createTextNode(Large);
    li.appendChild(t);
    document.getElementById("Large").appendChild(li);
}



