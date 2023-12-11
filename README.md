# Simple Computation

This is a simple JavaScript application that calculates the value of the expression \(x^2 + y^2\). It provides a user-friendly interface for entering values of `x` and `y`, performing the calculation, and displaying the result.

## Live site URL [click to see ](https://dev-kumaraguru.github.io/simple-computation/)

![screenshot of the output site](./Screenshot%202023-12-11%20at%2021-03-24%20Document.png)

## Code Overview

The JavaScript code handles the logic for calculating \(x^2 + y^2\). It uses the `parseFloat` function to convert input values to numbers, checks for valid input, and updates the result accordingly. The event listener prevents the default form submission behavior to avoid page reload.

Certainly! Below is an explanation of the JavaScript code in detail:

## JavaScript Explanation

### Event Listener and Form Submission

```javascript
let displayAnswer = document.getElementById("result");
let calculates = document
  .getElementById("calculate")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    calculate();
  });
```

- The code sets up an event listener on the form with the ID "calculate."
- The event listener is triggered when the form is submitted.
- `e.preventDefault()` prevents the default form submission behavior, which would cause a page reload.

### Calculation Function

```javascript
function calculate() {
  let x = document.getElementById("x").value;
  let y = document.getElementById("y").value;

  num1 = parseFloat(x);
  num2 = parseFloat(y);

  if (isNaN(num1) || isNaN(num2)) {
    displayAnswer.innerHTML = `<p class="text-red-500">Enter number only.</p>`;
  } else {
    z = x * x + y * y;
    displayAnswer.innerHTML = `x = ${num1} <br/> y = ${num2}<br/> x<sup>2</sup>+y<sup>2</sup> = ${z}`;
  }

  document.getElementById("x").value = "";
  document.getElementById("y").value = "";
}
```

- The `calculate` function retrieves the values of `x` and `y` from the input fields.
- It uses `parseFloat` to convert the input values to floating-point numbers.
- The function checks if both `num1` and `num2` are valid numbers using `isNaN`.
- If either input is not a valid number, an error message is displayed in the result container with a red color.
- If both inputs are valid, the calculation \(x^2 + y^2\) is performed, and the result is displayed in the result container.
- Finally, the input fields are cleared for the next calculation.

### HTML Result Container

```html
<div id="result " class="p-3 h-48 border-2 rounded-md border-blue-300 w-full">
  <h3 class="text-xl">values:</h3>
  <div id="result"></div>
</div>
```

- The HTML includes a result container with the ID "result," where the calculation result is displayed.
- The container has predefined styling using Tailwind CSS classes, providing a visually appealing display.



