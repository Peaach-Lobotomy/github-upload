//Draw a text saying "Hello World"
var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");
pen.font = "30px Arial";
pen.fillText("Hello World",20,140);

//Draw a line
pen.moveTo(0,0);
pen.lineTo(200,200);
pen.stroke();

//Draw a circle
pen.beginPath();
pen.arc(95,50,40,0,2*Math.PI);
pen.stroke();
