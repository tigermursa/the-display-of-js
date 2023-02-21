document.getElementById("button1").addEventListener("click", function () {
  const input1 = document.getElementById("num1");
  const input2 = document.getElementById("num2");
  const display = document.getElementById("the-main-display");

  const input1String = input1.value;
  const input1Number = parseInt(input1String);

  const input2String = input2.value;
  const input2Number = parseInt(input2String);
  const result = input1Number + input2Number;

  if (window.matchMedia("(max-width: 576px)").matches) {
    // apply styles for small screens
    document.getElementById("the-main-display").style.fontSize = "40px";
  } else {
    // apply styles for larger screens
    document.getElementById("the-main-display").style.fontSize = "90px";
  }
  if (isNaN(input1Number) && isNaN(input2Number)) {
    display.textContent = `Error!! invalid input! please try again `;
    display.style.color = "red";
    return;
  } else display.textContent = result;
});

document.getElementById("button2").addEventListener("click", function () {
  const input1 = document.getElementById("num3");
  const input2 = document.getElementById("num4");
  const display = document.getElementById("the-main-display");

  const input1String = input1.value;
  const input3Number = parseInt(input1String);

  const input2String = input2.value;
  const input4Number = parseInt(input2String);

  const result = input3Number * input4Number;
  if (window.matchMedia("(max-width: 576px)").matches) {
    // apply styles for small screens
    document.getElementById("the-main-display").style.fontSize = "40px";
  } else {
    // apply styles for larger screens
    document.getElementById("the-main-display").style.fontSize = "90px";
  }
  if (isNaN(input3Number) && isNaN(input4Number)) {
    display.textContent = `Error!! invalid input! please try again `;
    display.style.color = "red";
    return;
  } else display.textContent = result;

  display.textContent = result;
});
