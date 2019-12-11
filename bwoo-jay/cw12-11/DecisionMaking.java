import java.awt.*;
import objectdraw.*;
/**
 * Write a description of class DecisionMaking here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class DecisionMaking extends WindowController
{
    // instance variables - replace the example below with your own
    private double midX;
    private Text display;
    private FilledRect myRect;
    private boolean rectanglePressed = false;
    private Location prevPoint;

    /**
     * Constructor for objects of class DecisionMaking
     */
    public void begin()
    {
        // initialise instance variables
        midX = canvas.getWidth()/2;
        myRect = new FilledRect(100, 100, 30, 70, canvas);
        
        display = new Text("Nothing clicked yet",0,0,canvas);
    }

    
    public void onMousePress(Location p )
    {
       if(myRect.contains(p))
       {
           //inside rect
           rectanglePressed = true;
           prevPoint= p;
       } else {
           //outside rect
           rectanglePressed = false;            
       }
         
    }
    
    public void onMouseDrag (Location p)
    {
        double dx;
        double dy;
        if(rectanglePressed)
        {
            dx = p.getX() - prevPoint.getX();
            dy= p.getY() - prevPoint.getY();
            myRect.move(dx, dy);
            prevPoint = p;
        }
    }
}
