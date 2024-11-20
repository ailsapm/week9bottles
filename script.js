

function showlyrics (){

for (var numBtls = 99; numBtls >= 0; numBtls--) {
    if (numBtls >= 3) {
        document.getElementById("reveal").innerHTML+= (numBtls + " bottles of beer on the wall,<br>");
        document.getElementById("reveal").innerHTML+= (numBtls + " bottles of beer,<br>");
        document.getElementById("reveal").innerHTML+= ("Take one down, pass it around,<br>");
        document.getElementById("reveal").innerHTML+= ((numBtls-1) + " bottles of beer.<br>");
   }
   else if (numBtls == 2) {
    document.getElementById("reveal").innerHTML+= (numBtls + " bottles of beer on the wall,<br>");
    document.getElementById("reveal").innerHTML+= (numBtls + " bottles of beer,<br>");
    document.getElementById("reveal").innerHTML+= ("Take one down, pass it around,<br>");
    document.getElementById("reveal").innerHTML+= ((numBtls-1) + " bottle of beer.<br>");
}
   else if (numBtls == 1 ) {
    document.getElementById("reveal").innerHTML += (numBtls + " bottle of beer on the wall,<br>");
    document.getElementById("reveal").innerHTML += (numBtls + " bottle of beer,<br>");
    document.getElementById("reveal").innerHTML += ("Take one down, pass it around,<br>");
    document.getElementById("reveal").innerHTML += ("No more bottles of beer.<br>");
}
   else if (numBtls <= 0) {
    document.getElementById("reveal").innerHTML += ("No more bottles of beer on the wall,<br>"); 
    document.getElementById("reveal").innerHTML += ("No more bottles of beer,<br>");
    document.getElementById("reveal").innerHTML += ("Go to the store and buy some more,<br>");
    document.getElementById("reveal").innerHTML += ("99 bottles of beer.");
   }
}
}
