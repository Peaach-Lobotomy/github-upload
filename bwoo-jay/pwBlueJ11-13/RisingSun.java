import objectdraw.*;
import java.awt.*;
/**
 * A program that produces an animation of the sun rising.
 * The animation is driven by clicking the mouse button.
 * The faster the mouse is clicked, the faster the sun will rise.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class RisingSun extends WindowController
{
    
    private FilledOval sun;
    private Text instructions;
    private Location initialLocation = new Location (150, 350);
    
    
    //The begin method is called when the program starts.
    /**
     * Constructor for objects of class RisingSun
     */
    public void begin()
    {
       //Create a circle at location (150, 350) with radius 100
      sun = new FilledOval (initialLocation, 100, 100, canvas);
      
      Color myColor = new Color(0, 200, 255);
      
      sun.setColor(myColor);
       
       instructions = new Text ("Please click the mouse repeatedly", 20, 20, canvas);
       
       
    }
    
    public void onMouseClick (Location point)
    {
        sun.move (0, -10);
        instructions.hide();
    }
    
    public void onMouseExit (Location point)
    {
     sun.moveTo(initialLocation);
     instructions.show();
}
}