import objectdraw.*;
import java.awt.*;

// This program allows its user to draw simple lines on the screen
// using the mouse as if it were a pencil.
public class Scribble extends WindowController {

    Location previousPosition;   // Last known position of mouse
    private FilledOval myEraser;
    private Line myLine;
    private Text drawingModeText;
    private final double radius = 25;
    private boolean isDrawing = true;
    
    public void begin (
    ) {
        //init drawingModeText
        drawingModeText = new Text ("pen is in draw mode",0,0,canvas);
    }
    
    // When the mouse button is depressed, note its location
    public void onMousePress( Location pressPoint) {
        //save first point where we clicked
        previousPosition = pressPoint;
    }   

    public void onMouseClick(Location pressPoint){
        //toggle isDrawing on or off
        //toggle text
        isDrawing = !isDrawing;
        if(isDrawing){
            drawingModeText.setText("pen is in draw mode");
        }else{
           drawingModeText.setText("pen is in erase mode") ;
        }   
       

    }
    
    // Connect current and previous mouse positions with a line
    public void onMouseDrag( Location currentPosition) {
               //int isDrawing
        
        if(isDrawing){
            //drawing
             new Line( previousPosition, currentPosition, canvas);
              previousPosition = currentPosition;
        } else {
            //eraser
            currentPosition.translate(-radius, -radius);
            myEraser = new FilledOval(currentPosition,2*radius,2*radius,canvas);
            myEraser.setColor(Color.WHITE);
        }
         drawingModeText.sendToFront();
    }

    public void onMouseExit (Location p){
     //clear canvas to start over drawing   
    }
}
