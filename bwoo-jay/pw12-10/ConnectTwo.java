import objectdraw.*;
import java.awt.*;

// A program that displays the words "Pressed" and "Released"
// where the mouse button is pressed and released while connecting
// each such pair of points with a line.
public class ConnectTwo extends WindowController{

    private Location firstPoint;
    private FramedRect rect;
    private Text dimText,coordsText;
    // The location where button was pressed
   //DrawingCanvas canvas;
    public void begin (){
        //initialize dimText
        dimText = new Text("",0,0,canvas);
        //initialize coordsText
        coordsText = new Text("(x,y)", canvas.getWidth()/2 , canvas.getHeight()-15 ,canvas);
    }
    // Display "Pressed" when the button is pressed.
    public void onMousePress(Location pressPoint){
        //save firstPoint where we clicked
        firstPoint = pressPoint;
        //create new Rectangle
        rect = new FramedRect (pressPoint, 100, 100, canvas);
        //change color cause we fancy
        Color myColor = new Color(0, 200, 255);
        rect.setColor(myColor);
        
        //update mouse Coordinates
        coordsText.setText("(x:" + pressPoint.getX() + ",y:" + pressPoint.getY() + ")");
        //TODO recenter coordsText
        coordsText.moveTo( canvas.getWidth()/2 - coordsText.getWidth()/2  , canvas.getHeight()-15);
    }
    
    public void onMouseDrag(Location p)
    {
        double newX,newY;
        //set teh width to be ??
        rect.setWidth(Math.abs(firstPoint.getX() - p.getX()));
        //set the height to be from firstPoint to p
        rect.setHeight(Math.abs(firstPoint.getY() - p.getY()));
        if(p.getX() < firstPoint.getX() ) {
            newX = p.getX();
        } else {
            newX = firstPoint.getX();
        }
        if(p.getY() < firstPoint.getY() ) {
            newY = p.getY();
        } else {
            newY = firstPoint.getY();
        }
        rect.moveTo(newX,newY);
      
        Text myText = new Text("" + canvas.getWidth(),0,0,canvas);

        
        double x = rect.getX()+rect.getWidth()/2 - myText.getWidth()/2;
        double y = rect.getY()+rect.getHeight()/2 - myText.getHeight()/2;
        //now I will move the text box where I want it...
        myText.moveTo(x,y);
        //update mouse Coordinates
        coordsText.setText("(x:" + p.getX() + ",y:" + p.getY() + ")");
        //TODO recenter coordsText
       coordsText.moveTo( canvas.getWidth()/2 - coordsText.getWidth()/2  , canvas.getHeight()-15);
    }
    
    public void onMouseRelease(Location releasePoint){
       
       //new Line(firstPoint, releasePoint, canvas);
       new FramedRect(firstPoint,releasePoint,canvas);
       
       
    }
     public void onMouseMove(Location pressPoint){
         //update mouse Coordinates
        coordsText.setText("(x:" + pressPoint.getX() + ",y:" + pressPoint.getY() + ")");
        //TODO recenter coordsText
        coordsText.moveTo( canvas.getWidth()/2 - coordsText.getWidth()/2  , canvas.getHeight()-15);
     }
    

}