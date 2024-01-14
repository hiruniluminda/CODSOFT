/*developed by: P.A.H.Niluminda*/
//main function
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;
    switch (buttonText) {
      case "C":
        display.innerText = "";
        break;
      case "<":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "=":
        const result = display.innerText ? eval(display.innerText) : "Empty!";
        display.innerText = typeof result === "number" ? result.toFixed(2) : result;
        setTimeout(() => (display.innerText = ""), 20000);
        break;
      default:
        display.innerText += buttonText;
        break;
    }
  });
});


//dark mode calling

  document.getElementById("btn1").addEventListener("click",()=>{
    const themeToggleBtn = document.querySelector(".theme");
    const calculator = document.querySelector(".calculator");
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");

 });

