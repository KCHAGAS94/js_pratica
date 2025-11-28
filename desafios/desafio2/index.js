
let productValue = Number(prompt("Enter the product value:"));

if (productValue >= 20) {
    document.getElementById("result").innerText = "Aprovoed";
} else {
    document.getElementById("result").innerText = "Denied";
}