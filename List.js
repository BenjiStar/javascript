let dailyTask = ["eat","sleep","rave","repeat"];
var addTask = window.prompt("Do you want to add a task or delete a task?");
var newTask = "";
var keepGoing = "";
var tackTask = "";
var deleteTask = "";

function personalList(){
    if(addTask == "add"){
        tackTask = window.prompt("what do you want to add?");
        dailyTask.unshift(tackTask);
}
    if(addTask == "delete"){
        console.log(dailyTask);
        deleteTask = window.prompt("what do you want to delete?");
        dailyTask.shift(deleteTask-1);
}
    console.log(dailyTask);
    keepGoing = window.prompt("Want to do anything else?");
    if(keepGoing == "yes"){
        addTask = window.prompt("Do you want to add a task or delete a task?");;
        personalList();
    }
}
personalList();