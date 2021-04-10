const container = document.querySelector("#container");
container.addEventListener("input", update);

function update() {
  let bill = Number(document.querySelector("#yourBill").value);
  let tipPercent = document.querySelector("#tipInput").value;
  let split = document.querySelector("#splitInput").value;

  let tipValue = bill * (tipPercent / 100);
  let tipEach = tipValue / split;
  let newBillEach = (bill + tipValue) / split;
  console.log(tipValue);

  document.getElementById("tipPercent").innerHTML = `${tipPercent}%`;
  document.getElementById("tipValue").innerHTML = tipValue;
  document.getElementById("totalWithTip").innerHTML = bill + tipValue;
  document.getElementById("splitValue").innerHTML = split;
  document.getElementById("billEach").innerHTML = newBillEach;
  document.getElementById("tipEach").innerHTML = tipEach;
}
