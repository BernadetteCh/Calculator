function display(val) {
  var x= document.getElementById("output")+=val;//+=it allows you to add something to a variable and store the result in that variable,

  /* var calculation = document.getElementById("output");
   calculation.value+=val;*/
  //i wähl erstaml des id Element aus wo derRechnung angezeigt werden soll
  //dann erst geb i der Varaible ein neues Value hinzu nämlich mit dem val Parameter;
}

function solveCalculation() {
  var calculation = document.getElementById("output");
  calculation.innerHTML = eval(calculation.innerHTML);
  /* 
  let x = document.getElementById("output").value; //ich weiße dem output quasi an leeren Wert zu
  console.log(x);//hier erkennt es 1+2
  let y = eval(x); // eval() -> Wandelt Ausdruck in Ergebnis um
  console.log(y);//hier erkennt er 3 
  let result=document.getElementById("output");
  result.value=y;
  console.log(result);
*/
}

function removeCalculation() {
  document.getElementById("output").innerHTML = "0";
}

function calculatePerc() {
 
var percentage=document.getElementById("output");
var result=percentage.innerHTML/100;
percentage.innerHTML=result;


}
