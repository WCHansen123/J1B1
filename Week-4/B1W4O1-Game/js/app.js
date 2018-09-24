/*
function start() {
	console.log("DOM body.onload -> app.js -> start()");
	var audio = new Audio('../mp3/Queen.mp3');
	audio.play();   
	audio.loop = true;

	var input = document.getElementById("myInput1");

	// Execute a function when the user releases a key on the keyboard
	input.addEventListener("keyup", function(event) {
	  // Cancel the default action, if needed
		event.preventDefault();
		if (event.keyCode === 13) {
	    	console.log('When \'Enter\' is released, see the input');
	    	var value = input.value;
	    	console.log(value);
		}
	  
	  	if (value == 50) {
	  		console.log('antwoord goed');
	  		document.getElementById('myInput1').style.color = "#008000";
		} else if (value != 50) {
	 		console.log('antwoord fout');
	  		document.getElementById('myInput1').style.color = "#FF0000";
		}
	});

	var input = document.getElementById("myInput2");

	// Execute a function when the user releases a key on the keyboard
	input.addEventListener ("keyup", function(event) {
	  // Cancel the default action, if needed
	  event.preventDefault();
	  if (event.keyCode === 13) {
	    console.log("When 'Enter' is released, see the input");
	    var value = input.value;
	    console.log(value);}
	  if (value == 21){
	  	console.log('antwoord goed');
	  	document.getElementById('myInput2').style.color = "#008000"
	}
	  else if (value != 21){
	 	console.log('antwoord fout');
	  	document.getElementById('myInput2').style.color = "#FF0000"
	}
});
}
*/
var punt = 0;
 document.getElementById('punt');

function controleer (element, calc, x, y, punt) {
  console.log(element.value);
  if (calc == "multiply") {
    if (x * y == element.value) {
      console.log("wow je kan rekenen!");
      element.style.color = "#008000";
      punt++;
    } else {
      console.log("Jeez wat een sukkel ben jij!");
      element.style.color = "#FF0000";
    }
  } else if (calc == "plus") {
    if (x + y == element.value) {
      console.log("wow je kan rekenen!");
      element.style.color = "#008000";
    } else {
      console.log("Jeez wat een sukkel ben jij!");
      element.style.color = "#FF0000";
    }
  } else if (calc == "minus") {
    if (x - y == element.value) {
      console.log("wow je kan rekenen!");
      element.style.color = "#008000";
    } else {
      console.log("Jeez wat een sukkel ben jij!");
      element.style.color = "#FF0000";
    }
  }
}

function simple() {
    var z = document.getElementById("Ssom1");
    if (z.style.display === "block") {
        z.style.display = "none";
    } else {
        z.style.display = "block";
    }
  }

  function hard() {
    var h = document.getElementById("Hsom1");
    if (h.style.display === "block") {
        h.style.display = "none";
    } else {
        h.style.display = "block";
    }
  }

