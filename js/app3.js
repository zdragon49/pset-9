var plays = "white";
var header = document.getElementById("h2");
header.textContent = "plays: white";
var secondplays = false;
var nowid = -1;
var closede = false;
var win = "";
var amountplays = 0;
var players = "Two";
window.onload = function(){
for (var i=0; i< 64; i++){
    let dive = document.createElement("div");
    dive.style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? '#D2691E' : 'white';
    dive.className = "pawn";
	  dive.id = i;
	  dive.innerHTML = parseInt((i / 8) + i) % 2 == 0 && (i < 24) ? '<div class="secondPlayer"></div>' : (parseInt((i / 8) + i) % 2 == 0 && (i > 40) ? '<div class="firstPlayer"></div>' : '');
    document.getElementById("checkersBoard").appendChild(dive);
}

setClick();
setReset();
}

function setReset(){
	document.getElementById("reset-button").onclick = function(){
		plays = "white";
		header = document.getElementById("h2");
		header.textContent = "plays: white";
		secondplays = false;
		nowid = -1;
		closede = false;
		win = "";
		amountplays = 0;
		for(var i = 0; i < 64; i++){
			document.getElementById(i).remove();
		}
		for (var i=0; i< 64; i++){
			let dive = document.createElement("div");
			dive.style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? "#D2691E": "white";
			dive.className = "pawn";
			dive.id = i;
			dive.innerHTML = parseInt((i / 8) + i) % 2 == 0 && (i < 24) ? '<div class="secondPlayer"></div>' : (parseInt((i / 8) + i) % 2 == 0 && (i > 40) ? '<div class="firstPlayer"></div>' : '');
			document.getElementById("checkersBoard").appendChild(dive);
		}
		setClick();
	}
}
