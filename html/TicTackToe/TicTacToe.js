//This area used for global(scene) properties
//You will need to keep track of whose turn it is here..
var clickCounter=0;   //when odd, player is X

//function that registers all event handlers for html
window.onload = function() {
    //Grab all divs using querySelectorAll
    var divSave = document.querySelectorAll("div");

    //Loop through all divs and ...
    //for(... )
    for (var i = 0; i < divSave.length; i++) {
        //Add myClickFunction to all elements onclick attribute
      divSave[i].onclick = myClickFunction;
    }
}
//Implement our Click Function
function myClickFunction(ev) {
    //Determine whether we should place an X or O
    var player;
    clickCounter++;
    if(clickCounter%2==0){
      player='X';
    } else {
      player='O';
    }
    //change the contents of the event's target property
    //This is the element that triggered the event by being clicked on.
    ev.target.innerHTML=player;
    //Call checkWinner after we have updated the element.
    checkWinner();
}

function checkWinner() {
    //hint: to create an empty array use:
    //   var myArray=[];
    var myElArray = document.querySelectorAll('div');
    //Check for all possible winning combinations
     // 3 possible wins across


     if (myElArray[0].innerHTML=== myElArray[1].innerHTML && myElArray[1].innerHTML=== myElArray[2].innerHTML){
          //decide whether x or 0 has one..
          if(myElArray[0].innerHTML === 'X'){

          } else if(myElArray[0].innerHTML === 'O') {
          }

     }
     if (myElArray[3].innerHTML===myElArray[4].innrtHTML && myElArray[4].innerHTML=== myElArray[5].innerHTML) {

     } else {

     }
     if (myElArray[6].innerHTML===myElArray[7].innerHTML && myElArray[7].innerHTML===myElArray[8].innerHTML) {

     } else {

     }

// 3 possible wins down

      if (myElArray[0].innerHTML===myElArray[3].innerHTML && myElArray[3].innerHTML===myElArray[6].innerHTML) {

      } else {

      }
      if (myElArray[1].innerHTML===myElArray[4].innerHTML && myElArray[4].innerHTML===myElArray[7].innerHTML) {

      } else {

      }
      if (myElArray[2].innerHTML===myElArray[5].innerHTML && myElArray[5].innerHTML===myElArray[8].innerHTML) {

      } else {

      }

    // 2 possible wins across diagonal
    if (myElArray[0].innerHTML===myElArray[4].innerHTML && myElArray[4].innerHTML===myElArray[7].innerHTML) {

    } else {

    }
    if (myElArray[2].innerHTML===myElArray[4].innerHTML && myElArray[4].innerHTML===myElArray[6].innerHTML) {

    } else {

    }
    //If there is a winning combination, update the contents
    //    of h1 id="winner" to say who won)

    //Extra Idea Goals for a challenge (not graded or required) :
    //1) try and change the style of all the divs that contain the
    //   winning X's or O's.
    //
    // 2) Use an image (by changing its source) instead of placing text
    //    X or text O in the div contents.  Make sure the img's css
    //    style rules make it fit appropriately inside the div
    //
    // 3) change game to play SOS and keep track of scores for two
    //    players
    //
    // 4) Reset game to play again after someone wins.  Alternate who
    //    starts (X or O).
    //
    // 5) Create an algorithm that plays as the computer.


}
