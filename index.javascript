function newElement(){
var li=document.createElement("li"); <!--creates a list element and assigns it to li variable-->
var inputValue=document.getElementById("myInput").value; <!--retrieves input value from "id=myInput" and assigns it inputValue variable -->
var t= document.createTextNode(inputValue); <!-- turns inputValue into text -->
li.appendChild(t); <!-- appends var t to li element -->
  if (inputValue === "") {
    alert("You have to write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
<!-- if nothing is written an alert message pops up. If something is written it is appended to "myUL" -->
  document.getElementById("myInput").value = ""; <!-- resets the myInput id to blank -->
}
