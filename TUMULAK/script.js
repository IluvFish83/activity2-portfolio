function calculate(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("sum").innerHTML = "Please enter valid numbers.";
        document.getElementById("diff").innerHTML = "Please enter valid numbers.";
        document.getElementById("prod").innerHTML = "Please enter valid numbers.";
        document.getElementById("quos").innerHTML = "Please enter valid numbers.";
        document.getElementById("mod").innerHTML = "Please enter valid numbers.";
        return;
    }

    const sum = (num1 + num2).toFixed(2);
    const diff = (num1 - num2).toFixed(2);
    const prod = (num1 * num2).toFixed(2);
    const quos = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero";
    const mod = num2 !== 0 ? (num1 % num2).toFixed(2) : "Cannot divide by zero";
    document.getElementById("sum").innerHTML = "The sum is: " + sum;
    document.getElementById("diff").innerHTML = "The difference is: " + diff;
    document.getElementById("prod").innerHTML = "The product is: " + prod;
    document.getElementById("quos").innerHTML = "The quotient is: " + quos;
    document.getElementById("mod").innerHTML = "The remainder is: " + mod;
}

function clearFields(){
    document.getElementById("sum").innerHTML = " ";
    document.getElementById("diff").innerHTML = " ";
    document.getElementById("prod").innerHTML = " ";
    document.getElementById("quos").innerHTML = " ";
    document.getElementById("mod").innerHTML = " ";
}