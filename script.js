function appendToResult(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculate() {
  let result = document.getElementById("result").value;
  let calculation = eval(result);
  document.getElementById("result").value = calculation;
}
