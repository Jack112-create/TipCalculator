const container = document.querySelector("#container");
container.addEventListener("input", update);

function update() {
  let bill = document.querySelector("#yourBill").value;
  let tipPercent = document.querySelector("#tipInput").value;
  let splitInput = document.querySelector("#splitInput").value;
  //let tipSpan = document.querySelector("#tipPercent");

  /*
  if (tipPercent >= 0) {
    tipSpan.textContent = `${tipPercent++}%`;
  }
   */
  console.log({ bill, tipPercent, splitInput });
}
