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
	const linumbers = oderlistid.childElementCount;
	console.log(linumbers);
	if (linumbers > 5) {
		const oderlistid2 = document.getElementById("player-list");
		oderlistid.removeChild(li);
		alert("your selection is full!");
	}
}
	
	// functionfor btn disabled
	function disabledbtn(btnid) {
		const playerbtn = document.getElementById(btnid);
		playerbtn.setAttribute("disabled", "");
	}


// alert for 5 player selection


// functionCall for player 1 

document.getElementById("btn-1").addEventListener("click", function () { 
	const player1add = getPlayerNameById("player-1");
	disabledbtn('btn-1')
})

// functionCall for player 2
document.getElementById("btn-2").addEventListener("click", function (){
	const player1add = getPlayerNameById("player-2");
	disabledbtn("btn-2");
})
// functionCall for player 3
document.getElementById("btn-3").addEventListener("click", function (){
	const player1add = getPlayerNameById("player-3");
	disabledbtn("btn-3");
})
// functionCall for player 4
document.getElementById("btn-4").addEventListener("click", function (){
	const player1add = getPlayerNameById("player-4");
	disabledbtn("btn-4");
})
// functionCall for player 5
document.getElementById("btn-5").addEventListener("click", function (){
	const player1add = getPlayerNameById("player-5");
	disabledbtn("btn-5");
})
// functionCall for player 6
document.getElementById("btn-6").addEventListener("click", function (){
	const player1add = getPlayerNameById("player-6");
	disabledbtn("btn-6");
})