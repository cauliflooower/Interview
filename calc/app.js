let r = document.getElementById("result")
let temp;
let rezb = document.getElementById("1")
let sub = document.getElementById("sub")
let add = document.getElementById("add")
let multiply = document.getElementById("multiply")
let share = document.getElementById("share")
sub.addEventListener('click', ()=> temp = "+")
add.addEventListener('click', ()=> temp = "-")
multiply.addEventListener('click', ()=> temp = "*")
share.addEventListener('click', ()=> temp = "/")
function func() {
    let result = 0
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    

    switch (temp) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }

console.log(result)

}

rezb.addEventListener('click', func)

