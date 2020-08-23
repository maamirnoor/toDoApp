
// for date on top 
var year = new Date().getFullYear();
var date = new Date().getDate();
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var monthName = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
var date1 = document.getElementById("date").innerHTML = days[new Date().getDay()] + " , " + monthName[new Date().getMonth()] + " " + date + " , " + year;


// add a list

var list = document.getElementById("list");

function addItem() {
    var toDoItems = document.getElementById("todo-items");
    // create list items
    var li = document.createElement('li');
    var liKaText = document.createTextNode(toDoItems.value);
    li.setAttribute("class", "list-design bg-light text-primary");
    li.appendChild(liKaText);
    list.appendChild(li);
    toDoItems.value = "";

    // Edit and delete item
    var editBtn = document.createElement('i');
    editBtn.setAttribute("class", "fa fa-edit editIcon");
    editBtn.setAttribute("onclick","editItems(this);")
    var removeBtn = document.createElement('i');
    removeBtn.setAttribute("class", "fa fa-trash-o deleteIcon");
    removeBtn.setAttribute("onclick","deleteItems(this);");
    li.appendChild(editBtn);
    li.appendChild(removeBtn);
}
function deleteItems(d){
    d.parentNode.remove();
}
function deleteAll(){
    list.innerHTML = "";
}
function editItems(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value", val);
    e.parentNode.firstChild.nodeValue = editValue;
    alert("Successfully updated!");
}