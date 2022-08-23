// funtion for player name text and add player in the list

function getPlayerNameById(player) {
	const player1 = document.getElementById(player);
	const playerinnertext = player1.innerText;
	// btnid4.setAttribute("disabled", "");
	const playertext = playerinnertext;

	console.log(playerinnertext);
	let oderlistid = document.getElementById("selected-li");
	const li = document.createElement("li");
	li.innerText = playertext;
	const numbers = oderlistid.appendChild(li);
	let linumbers = oderlistid.childElementCount;
	
	if (linumbers >5) {
		const oderlistid2 = document.getElementById("selected-li");
		 oderlistid2.removeChild(oderlistid2.lastElementChild);
		alert("your  selection is full! You can't select now!!!!!");
		console.log(linumbers);

	}
}

// functionfor btn disabled
function disabledbtn(btnid) {
	const playerbtn = document.getElementById(btnid);
	playerbtn.setAttribute("disabled", "");
}

function getInputValue(inputfieldId) {
        
	const test2 = document.getElementById(inputfieldId);
	const valueString = test2.value;
	const value = parseFloat(valueString);
	return value;
}