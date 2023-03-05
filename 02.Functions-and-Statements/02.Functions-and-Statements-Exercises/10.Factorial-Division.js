function factorialDivision(num1, num2){
    let num1Factorial = 1;
    let num2Factorial = 1;

    for (let index = 1; index <= num1; index++) {
       num1Factorial *= index;        
    }
    for (let index = 1; index <= num2; index++) {
        num2Factorial *= index;        
     }

     console.log((num1Factorial / num2Factorial).toFixed(2));
 }



 //With recursion

 function factorialDivision(num1, num2){

    function getFactorial(num){
        if(num === 1){
            return num;
        }
        return num * getFactorial(num - 1);
    }

    console.log((getFactorial(num1) / getFactorial(num2)).toFixed(2));
 }

 factorialDivision(5,2);
 factorialDivision(6,2);
