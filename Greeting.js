var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var firstCapLetter = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);
alert("Hello " + firstCapLetter + restOfName + "! " + "How are you doing?")
