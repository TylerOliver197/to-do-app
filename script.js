//create a close button

var myNodeList = document.getElementsByTagName("LI");
for (var i=0; i<myNodeList.length; i++){
  var btn = document.createElement("BUTTON");
  var txt = document.createTextNode("\u2713");
  btn.className = "close";
  btn.appendChild(txt);
  myNodeList[i].appendChild(btn);
}

//clicking the close button will remove the item from he list

var close = document.getElementsByClassName("close");
for (var i=0; i<close.length; i++){
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
}
}

//create a new list item when clicking on submit button

function newElement(){
var li=document.createElement("LI"); //creates a list element and assigns it to li variable
var inputValue=document.getElementById("myInput").value; //retrieves input value from "id=myInput" and assigns it inputValue variable
var t= document.createTextNode(inputValue); // turns inputValue into text
li.appendChild(t); // appends var t to li element
  if (inputValue === "") {
    alert("You have to write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
// if nothing is written an alert message pops up. If something is written it is appended to "myUL"
  document.getElementById("myInput").value = ""; // resets the myInput id to blank 

  var btn = document.createElement("BUTTON");
  var txt = document.createTextNode("\u2713");
  btn.className = "close";
  btn.appendChild(txt);
  li.appendChild(btn);
  
  for(var i=0; i<close.length; i++){
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
