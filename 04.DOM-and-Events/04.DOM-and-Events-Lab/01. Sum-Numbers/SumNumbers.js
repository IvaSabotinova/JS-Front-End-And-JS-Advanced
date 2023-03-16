function calc() {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
const sumInput = document.getElementById('sum');
let sum = Number(num1.value) + Number(num2.value);
sumInput.value = sum;
    
}
