//Array of student names
clsOf2021 = ['Francelix','Gloribel','Daniel','Wendy','Jayden','Paige','Carlos','Albert','Joe'];
//parallel list of student ids for above students.
idsOf2021 = [185582 ,187968 ,178457 ,176875 ,189385, 177257 ,178927 , 178460 ,180553];

/////////////////////////////////////////////////////////////
// Here is my initialization in the ready event
////////////////////////////////////////////////////////////
window.onload = function () {
    //initialize the click event handler of the selectStudent button
    var buttonEL = document.querySelector('#selectStudent');
    buttonEL.addEventListener('click',selectStudent);

    //Initialize list of student buttons
    var listEL = document.querySelector('#studentList');
    //TODO USE A COUNTING LOOP HERE to add all students to the list
    //loop using length of clsOf2021
    for(var index=1; index < clsOf2021.length; index++ ) {
        //add that student name as a LI element inside the list.
        listEL.innerHTML += makeLIfromName(clsOf2021[index]);
    }
}

function selectStudent(e) {
    //Get array of List Items
    var listItems = document.querySelectorAll("li");
    //TODO pick a random index from the list.
    //Math.random returns between 0 and 1 not including 1
    var random = Math.floor(Math.random()* clsOf2021.length);

    //TODO Select that element from listItems array using random and
    // style it differently somehow.
    listItems[random].style.borderColor= "#f0f0f0";
}


function makeLIfromName(name) {
        return "<li>" + name + "</li>";
}
