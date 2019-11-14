window.onload = loadDocument;

function loadDocument() {
//This command adds the startGame to when the button is pushed.
	var buttonEL = document.getElementById("start");
	buttonEL.onclick = startGame;
}

//Start game when button is pushed.
function startGame() {
	console.log("You are standing in an open field west of a white house, with a boarded front door. There is a small mailbox here.");
	var option
	do {
		option = prompt("What would you like to do? your two options are \"open\" or \"knock\"");
	} while(option != "open" && option != "knock")

	if(option == "open") {
		runOpen();
	} else {
		runKnock();
	}

}

function runOpen() {
	console.log("The owner of house comes out with shotgun asking you why you are looking through his mail.");
	console.log("Your options are \"talk\" your way out of it or \"run\"");
	var option
	do {
		option = prompt("What would you like to do? your two options are \"talk\" or \"run\"");
	} while(option != "talk" && option != "run")

	if(option == "talk") {
		console.log("talk your way out of it and he understands its a misunderstanding and tells you to get off his property");
		//we return here because game is ended.
		return;
	} else {
		//we get three chances to get away while running.
		for(var index =1; index <= 3; index++) {
			//random number example in Javascript
			var randomNum = Math.random();  //gives number from 0 (inclusive) to 1 (exclusive)
			if(randomNum < .3) {
				console.log("He fires at you while running away and his aim is dead on. Your story ends here.");
				console.log("refresh the page to play again");
				//we need a return because our game has ended here.
				return;
			} else {
				console.log("He fires his " + index + " shot at you and misses.");
				console.log(" You continue to run.");
			}
		}
		console.log("If you have made it this far, you have run far enough away, he has stopped shooting at you.");
		console.log("You have survived another day and won the game. Congrats. Refresh to play again");
	}
}

function runKnock() {
	console.log("You knock on the door and a shotgun blast comes through the door and kills you. Apparently this guy doesn't like solicitor's at his door and you are the unfortunate casualty.");
	console.log("refresh the page to play again");
}
