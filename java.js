function display(val) {
  removeZero();
  document.getElementById("output").innerHTML += val; //+=it allows you to add something to a variable and store the result in that variable;
}

/* var calculation = document.getElementById("output");
   calculation.value+=val;*/
//i wähl erstaml des id Element aus wo derRechnung angezeigt werden soll
//dann erst geb i der Varaible ein neues Value hinzu nämlich mit dem val Parameter;

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
  var percentage = document.getElementById("output");
  var result = percentage.innerHTML / 100;
  percentage.innerHTML = result;
}

//inner.HTML vo output ist bei default 0
//lös i a function aus jedesmal wenn i an button klicke
//mit diesem klick übermitlle ich mit an parameter an Wert
//dieser Wert erscheint dann im output mit dem Wert den es bei default hat

//! inner.html vo output soll verschwinden sobald i an button klicke und a Parameter übermittle

function removeZero() {
  var defaultvalue = document.getElementById("output").innerHTML;
  if (defaultvalue == 0) {
    defaultvalue = "";
    var x = document.getElementById("output");
    x.innerHTML = defaultvalue;
  }
}
