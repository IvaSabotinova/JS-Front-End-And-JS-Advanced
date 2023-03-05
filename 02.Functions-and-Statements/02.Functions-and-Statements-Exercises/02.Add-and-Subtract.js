function addAndSubtract(num1, num2, num3) {
    function sum() {
        return num1 + num2;
    }
    function subtract() {
        return sum() - num3;
    }
    console.log(subtract());
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);

