window.onload = loadDocument;

function loadDocument() {
//This command adds the startGame to when the button is pushed.
	var buttonEL = document.getElementById("start");
	buttonEL.onclick = startGame;
}

//Start game when button is pushed.
function startGame() {
	console.log("You are in a field of tall grass, between a small house and a windmill.");
	var option
	do {
		option = prompt("Would you rather go to the house or the windmill? \"house\" or \"windmill\"");
	} while(option != "house" && option != "windmill")

	if(option == "house") {
		runHouse();
	} else {
		runWindmill();
	}

}

function runHouse() {
	console.log("you walk through the tall grass, pushing it out of your way, seems like whoever lives here doesn't know a thing about landscaping, if anyone lives here at all.");
	console.log("The windows seem to be broken in some places, this place seems very old. There is a door, the handle rusted and door falling apart. Would you like to try the door? Or go somewhere else?");
	var option
	do {
		option = prompt("Your options are \"try the door\" or  \"say screw it and try the windmill\"");
	} while(option != "door" && option != "windmill")

	if(option == "door") {
		console.log("You knock on the door, like a civilized human. Even though your first thought was to just say screw it and push through the door or to aim for the window. You are greeted by a squak... of a bird?");
		//we return here because game is ended
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

function runWindmill() {
	console.log("you manage to find a spot in the grass, where it is flattened as if someone was walking along it, and you walk that path till you end up at the windmill.");
	console.log("This place looks very unkempt, wooden door slightly ajar and splintering. Its old, do you want to enter?");
	var option
	do {
		option = prompt("Your options are \"yes\" or  \"no\"");
	} while(option != "yes" && option != "no")


	if(option == "yes") {
		console.log("You knock on the door, like a civilized human. Even though your first thought was to just say screw it and push through the door or to aim for the window. You are greeted by a squak... of a bird?");

}
if(option == "no") {
	console.log("You knock on the door, like a civilized human. Even though your first thought was to just say screw it and push through the door or to aim for the window. You are greeted by a squak... of a bird?");

}
}
