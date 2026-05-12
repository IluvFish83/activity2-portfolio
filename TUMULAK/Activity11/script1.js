function forLoop() {
    const num = parseInt(document.getElementById("num1").value);
    const text = document.getElementById("text1").value;
    const output = document.getElementById("output1");

    output.innerHTML = "";

    for (let i = 1; i <= num; i++) {
        output.innerHTML += i + ". " + text + "<br>";
    }
}

function whileLoop() {
    const num = parseInt(document.getElementById("num2").value);
    const text = document.getElementById("text2").value;
    const output = document.getElementById("output2");

    output.innerHTML = "";

    let i = 1;

    while (i <= num) {
        output.innerHTML += i + ". " + text + "<br>";
        i++;
    }
}

function doWhileLoop() {
    const num = parseInt(document.getElementById("num3").value);
    const text = document.getElementById("text3").value;
    const output = document.getElementById("output3");

    output.innerHTML = "";

    let i = 1;

    do {
        output.innerHTML += i + ". " + text + "<br>";
        i++;
    } while (i <= num);
}

function clearFor() {
    document.getElementById("output1").innerHTML = "";
}

function clearWhile() {
    document.getElementById("output2").innerHTML = "";
}

function clearDoWhile() {
    document.getElementById("output3").innerHTML = "";
}