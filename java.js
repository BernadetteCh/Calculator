function display(val) {
  removeZero();
  calculateMinus();
  document.getElementById("output").innerHTML += val; //+=it allows you to add something to a variable and store the result in that variable;
}
//i wähl erstaml des id Element aus wo derRechnung angezeigt werden soll
//dann erst geb i der Varaible ein neues Value hinzu nämlich mit dem val Parameter;

function solveCalculation() {
  var calculation = document.getElementById("output");
  calculation.innerHTML = eval(calculation.innerHTML); //eval() -> Wandelt Ausdruck in Ergebnis um
}

function removeCalculation() {
  document.getElementById("output").innerHTML = "0";
}

function calculatePerc() {
  var percentage = document.getElementById("output");
  var result = percentage.innerHTML / 100;
  percentage.innerHTML = result;
}

function removeZero() {
  var defaultvalue = document.getElementById("output").innerHTML;
  if (defaultvalue == 0) {
    defaultvalue = "";
    var x = document.getElementById("output");
    x.innerHTML = defaultvalue;
  }
}

function calculateMinus() {
  var v = document.querySelector(".btn-minus");
  var x = document.getElementById("output").innerHTML;
  if (v) {
    var y = x * "-1";
      console.log(y);
  
  }


}
