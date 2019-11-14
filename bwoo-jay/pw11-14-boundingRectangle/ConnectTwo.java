import objectdraw.*;
import java.awt.*;

// A program that displays the words "Pressed" and "Released"
// where the mouse button is pressed and released while connecting
// each such pair of points with a line.
public class ConnectTwo extends WindowController{

    private Location firstPoint;
    private FramedRect rect;
    // The location where button was pressed
   //DrawingCanvas canvas;
   
   
    // Display "Pressed" when the button is pressed.
    public void onMousePress(Location pressPoint){
        firstPoint = pressPoint;
           rect = new FramedRect (pressPoint, 100, 100, canvas);
      
      Color myColor = new Color(0, 200, 255);
      
      rect.setColor(myColor);
        
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
      
    }
    
    public void onMouseRelease(Location releasePoint){
       
       //new Line(firstPoint, releasePoint, canvas);
       new FilledRect(firstPoint,releasePoint,canvas);
    }

}