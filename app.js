document.getElementById("button1").addEventListener("click", function () {
  const input1 = document.getElementById("num1");
  const input2 = document.getElementById("num2");
  const display = document.getElementById("the-main-display");

  const input1String = input1.value;
  const input1Number = parseInt(input1String);

  const input2String = input2.value;
  const input2Number = parseInt(input2String);

  const result = input1Number + input2Number;
  display.textContent = result;
});

document.getElementById("button2").addEventListener("click", function () {
  const input1 = document.getElementById("num3");
  const input2 = document.getElementById("num4");
  const display = document.getElementById("the-main-display");

  const input1String = input1.value;
  const input1Number = parseInt(input1String);

  const input2String = input2.value;
  const input2Number = parseInt(input2String);

  const result = input1Number + input2Number;
  display.textContent = result;
});
