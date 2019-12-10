import objectdraw.*;

/**
 * Write a description of class TextBoxMiddleOfCanvas here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class TextBoxMiddleOfCanvas extends WindowController
{
    public void begin()
    {
        new Text("",0,0,canvas);
        Text myText = new Text("w:" + canvas.getWidth(),0,0,canvas);
        
        double x = canvas.getWidth()/2 - myText.getWidth()/2;
        double y = canvas.getHeight()/2 - myText.getHeight()/2;
        //now I will move the text box where I want it...
        myText.moveTo(x,y);
    }
}
