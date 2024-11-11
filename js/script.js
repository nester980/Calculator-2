let display = document.querySelector('.display');
let buttons = Array.from(document.querySelectorAll(".button"));

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = 0;
        break;
      case "=":
        try {
          const result = calculateResult(display.innerText);
          display.innerText = result.toString();
        } catch (e) {
          display.innerText = "Error";
        }
        break;
      case "+/-":
        const currentValue = parseFloat(display.innerText);
        display.innerText = (currentValue * -1).toString();
        break;
      case "%":
        let value = parseInt(display.innerText) / 100;
        display.innerText = value.toString();
        break;
      default:
        if (display.innerText === "0" && e.target.innerText !== ".") {
          display.innerText = e.target.innerText;
        } else {
          display.innerText += e.target.innerText;
        }
    }
  });
});

// Функция для безопасного вычисления выражения
function calculateResult(expression) {
  return Function('return ' + expression)();
}
