//This function will run once a student clicks
// on an image of a symbol.
function chooseWinner(userChoice, compChoice)
{

// compChoice is parameter for testing purposes
if(compChoice === undefined)
{
    //select CompChoice if not passed in as argument.

    //TODO let's grab all three images using a css selector for imgs
    var imgArray = document.querySelectorAll("img");

    //TODO select a random number 0, 1 or 2
	var random = Math.floor(Math.random()*imgArray.length);
    //TODO set the compChoice variable to string
    // rock paper or scissors (same strings as element's ids)

    if(random==0){ compChoice='scissors';}
    if(random==1){ compChoice='paper';}
    if(random==2){ compChoice='rock';}
}

//This uses an alert to tell user what choices
//  were made
alert(`User Chose ${userChoice}`);
alert(`Computer Chose ${compChoice}`);

//TODO loop through imgArray (counting loop) and hide all non choices.
for(var index=0; index < imgArray.length; index++ ) {
    //TODO If userChoice is NOT same as Element's id
    if(userChoice != imgArray[index].id) { imgArray [index].style.display="none";
        // TODO Change display on current element to none like so
        // currentEL.style.display = "none";
    }
}
var winner;
//TODO Use if statements to decide winner for all choices
if(userChoice === 'rock' && compChoice === 'paper') {
	winner = 'computer';
}
if(userChoice === 'scissors' && compChoice === 'rock') {
  winner = 'computer';
}
if(userChoice === 'paper' && compChoice === 'scissors') {
  winner = 'computer';
}
  if(userChoice === 'rock' && compChoice === 'scissors') {
    winner = 'user';
}
  if(userChoice === 'paper' && compChoice === 'rock') {
      winner = 'user';
}
  if(userChoice === 'scissors' && compChoice === 'paper') {
        winner = 'user';
}
        if(userChoice === 'rock' && compChoice === 'rock') {
          winner = 'draw';
}
        if(userChoice === 'paper' && compChoice === 'paper') {
            winner = 'draw';
}
        if(userChoice === 'scissors' && compChoice === 'scissors') {
              winner = 'draw';
}



// .....

//display winner in contents of div id="content"
//TODO select content Element
var contentElement = document.querySelector("#content");
//TODO set contents of that element to be winning image
if (winner=='draw'){
  contentElement.innerHTML = "ARE YOU TWO TWINS? (DRAW)";
}
else {
  contentElement.innerHTML = "THE WINNER IS " + winner;
}
}
