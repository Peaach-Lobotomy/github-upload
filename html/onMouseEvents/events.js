var x = 0;
var y = 0;
var z = 0;


function myMoveFunction() {
  document.getElementById("demo").innerHTML = z+=1;
}

function myEnterFunction() {
  document.getElementById("demo2").innerHTML = x+=1;
}

function myOverFunction() {
  document.getElementById("demo3").innerHTML = y+=1;
}



function myFunction(e) {
  var x = e.clientX;
  var y = e.clientY;
  var coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo4").innerHTML = coor;
}

function clearCoor() {
  document.getElementById("demo4").innerHTML = "";
}
