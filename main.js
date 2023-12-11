let displayAnswer = document.getElementById("result");
let calculates = document
  .getElementById("calculate")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    calculate();
  });

function calculate() {
  let x = document.getElementById("x").value;
  let y = document.getElementById("y").value;

  num1 = parseFloat(x);
  num2 = parseFloat(y);

  if (isNaN(num1) || isNaN(num2)) {
    displayAnswer.innerHTML = `<p class="text-red-500">Enter number only.</p>
    `;
  } else {
    z = x * x + y * y;
    displayAnswer.innerHTML = `x = ${num1} <br/> y = ${num2}<br/> x<sup>2</sup>+y<sup>2</sup> = ${z}`;
  }
  document.getElementById("x").value = "";
  document.getElementById("y").value = "";
}
