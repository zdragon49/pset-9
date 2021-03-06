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
function setClick(){
for(var i=0; i < 64; i++){
	let currentSquare = document.getElementById(i.toString());
	currentSquare.onclick = function(){
		if((closede == false || currentSquare.id == nowid || currentSquare.style.backgroundColor == "red") && !win){
		if(currentSquare.innerHTML.includes('<div class="firstPlayer">') && plays == "white"){
			reset();
			var leftSquare = document.getElementById(currentSquare.id-9);
			var rightSquare = document.getElementById(currentSquare.id-7);
			var moreLeft = document.getElementById(currentSquare.id - 18);
			var moreRight = document.getElementById(currentSquare.id - 14);
			var leftSquar = document.getElementById(currentSquare.id - (-9));
			var rightSquar = document.getElementById(currentSquare.id - (-7));
			var moreLef = document.getElementById(currentSquare.id - (-18));
			var moreRigh = document.getElementById(currentSquare.id - (-14));
			if(!(!leftSquare) && leftSquare.innerHTML == "" && (leftSquare.id - (leftSquare.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 1){
				leftSquare.style.backgroundColor = "red";
			}
			else if(!(!leftSquare) && leftSquare.innerHTML.includes('<div class="secondPlayer">') && !(!moreLeft) && moreLeft.innerHTML == "" && (moreLeft.id - (moreLeft.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 2){
				moreLeft.style.backgroundColor = "red";
			}
			if(!(!rightSquare) && rightSquare.innerHTML == "" && (rightSquare.id - (rightSquare.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 1){
				rightSquare.style.backgroundColor = "red";
			}
			else if(!(!rightSquare) && rightSquare.innerHTML.includes('<div class="secondPlayer">') && !(!moreRight) && moreRight.innerHTML == "" && (moreRight.id - (moreRight.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 2){
				moreRight.style.backgroundColor = "red";
			}
			if(currentSquare.innerHTML.includes('K')){
				if(!(!leftSquar) && leftSquar.innerHTML == "" && (leftSquar.id - (leftSquar.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 1){
					leftSquar.style.backgroundColor = "red";
				}
				else if(!(!leftSquar) && leftSquar.innerHTML.includes('<div class="secondPlayer">') && !(!moreLef) && moreLef.innerHTML == "" && (moreLef.id - (moreLef.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 2){
					moreLef.style.backgroundColor = "red";
				}
				if(!(!rightSquar) && rightSquar.innerHTML == "" && (rightSquar.id - (rightSquar.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 1){
					rightSquar.style.backgroundColor = "red";
				}
				else if(!(!rightSquar) && rightSquar.innerHTML.includes('<div class="secondPlayer">') && !(!moreRigh) && moreRigh.innerHTML == "" && (moreRigh.id - (moreRigh.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 2){
					moreRigh.style.backgroundColor = "red";
				}
			}
			currentSquare.style.backgroundColor = "green";
		}
		if(currentSquare.innerHTML.includes('<div class="secondPlayer">') && plays == "black"){
			reset();
      var leftSquare = document.getElementById(currentSquare.id - (-9));
      var rightSquare = document.getElementById(currentSquare.id - (-7));
      var moreLeft = document.getElementById(currentSquare.id - (-18));
      var moreRight = document.getElementById(currentSquare.id - (-14));
      var leftSquar = document.getElementById(currentSquare.id-9);
      var rightSquar = document.getElementById(currentSquare.id-7);
      var moreLef = document.getElementById(currentSquare.id - 18);
      var moreRigh = document.getElementById(currentSquare.id - 14);
      if(!(!leftSquare) && leftSquare.innerHTML == "" && (leftSquare.id - (leftSquare.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 1){
        leftSquare.style.backgroundColor = "red";
      }
      else if(!(!moreLeft) && leftSquare.innerHTML.includes('<div class="firstPlayer">') && moreLeft.innerHTML == "" && (moreLeft.id - (moreLeft.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 2){
        moreLeft.style.backgroundColor = "red";
      }
      if(!(!rightSquare) && rightSquare.innerHTML == "" && (rightSquare.id - (rightSquare.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 1){
        rightSquare.style.backgroundColor = "red";
      }
      else if(!(!moreRight) && rightSquare.innerHTML.includes('<div class="firstPlayer">') && moreRight.innerHTML == "" && (moreRight.id - (moreRight.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 2){
        moreRight.style.backgroundColor = "red";
      }
      if(currentSquare.innerHTML.includes('K')){
        if(!(!leftSquar) && leftSquar.innerHTML == "" && (leftSquar.id - (leftSquar.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 1){
          leftSquar.style.backgroundColor = "red";
        }
        else if(!(!leftSquar) && leftSquar.innerHTML.includes('<div class="firstPlayer">') && !(!moreLef) && moreLef.innerHTML == "" && (moreLef.id - (moreLef.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 2){
          moreLef.style.backgroundColor = "red";
        }
        if(!(!rightSquar) && rightSquar.innerHTML == "" && (rightSquar.id - (rightSquar.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 1){
          rightSquar.style.backgroundColor = "red";
        }
        else if(!(!rightSquar) && rightSquar.innerHTML.includes('<div class="firstPlayer">') && !(!moreRigh) && moreRigh.innerHTML == "" && (moreRigh.id - (moreRigh.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 2){
          moreRigh.style.backgroundColor = "red";
        }
      }
      currentSquare.style.backgroundColor = "green";
      }
      if(currentSquare.innerHTML == "" && currentSquare.style.backgroundColor == "red"){
      var oldSquare = "";
      for(var i = 0; i < 64; i++){
        if(document.getElementById(i.toString()).style.backgroundColor == "green"){
          oldSquare = document.getElementById(i.toString());
        }
      }
      if(oldSquare.id == currentSquare.id - 18){
        document.getElementById(currentSquare.id - 9).innerHTML = "";
        secondplays = true;
      }
      if(oldSquare.id == currentSquare.id - 14){
        document.getElementById(currentSquare.id - 7).innerHTML = "";
        secondplays = true;
      }
      if(oldSquare.id == currentSquare.id - (-18)){
        document.getElementById(currentSquare.id - (-9)).innerHTML = "";
        secondplays = true;
      }
      if(oldSquare.id == currentSquare.id - (-14)){
        document.getElementById(currentSquare.id - (-7)).innerHTML = "";
        secondplays = true;
      }
      currentSquare.innerHTML = oldSquare.innerHTML;
      oldSquare.innerHTML = "";
      var blackcount = 0;
      var whitecount = 0;
      for(let i = 0; i < 64; i++){
        if(document.getElementById(i).innerHTML.includes('<div class="secondPlayer">')){
          blackcount++;
        }
        else if(document.getElementById(i).innerHTML.includes('<div class="firstPlayer">')){
          whitecount++;
        }
      }
      if(blackcount == 0){
        win = "white";
      }
      else if(whitecount == 0){
        win = "black";
        }
      else if(amountplays == 20){
        win = "No one";
      }
      if(currentSquare.id - currentSquare.id % 8 == 0 || currentSquare.id - currentSquare.id % 8 == 56){
        if(currentSquare.innerHTML.includes('<div class="firstPlayer">')){
          currentSquare.innerHTML = '<div class="firstPlayer">K</div>';
        }
        else{
          currentSquare.innerHTML = '<div class="secondPlayer">K</div>';
        }
      }
      let movementSquare = -1;
      if(secondplays == true){
        currentSquare.click();
        for(let i = 0; i < 64; i++){
          if(document.getElementById(i).style.backgroundColor == "red" && Math.abs(currentSquare.id - i) > 10){
            movementSquare = i;
          }
        }
      }
      if(movementSquare >= 0){
        nowid = currentSquare.id;
        closede = true;
      }
      else{
        plays = plays == "white" ? "black": "white";
        secondplays = false;
        closede = false;
      }
      if(blackcount == 1 && whitecount == 1){
        amountplays++;
      }
      if(!win){
        header.textContent = "plays: " + plays;
        reset();
        var possible = false;
        for(let i = 0; i < 64; i++){
          document.getElementById(i).click();
          for(let i = 0; i < 64; i++){
            if(document.getElementById(i).style.backgroundColor == "red"){
              possible = true;
            }
          }
          reset();
        }
        document.getElementById(63).style.backgroundColor = "#D2691E";
        if(possible == false){
          if(plays == "black"){
            win = "white"
          }
          else{
            win = "black"
          }
          header.textContent = win + " wins";
        }
        if(players == "One"){
          computerplays();
          plays = plays == "white" ? "black": "white";
        }
      }
      else{
        header.textContent = win + " wins";

      }

      }
      }
      }
      }
      }
      function reset(){
      for(var i=0; i<64; i++){
      document.getElementById(i).style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? '#D2691E' : '#778899';
      }
      }
