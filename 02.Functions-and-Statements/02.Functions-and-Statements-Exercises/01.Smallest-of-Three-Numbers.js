function smallestOfThreeNumbers(num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
        console.log(num1)
    } else if (num2 <= num1 && num2 <= num3) {
        console.log(num2)
    } else if (num3 <= num1 && num3 <= num2) {
        console.log(num3)
    }
}

// solution 2

function smallestOfThreeNumbers(...numbers) {
   
    let smallestNumber = Number.MAX_SAFE_INTEGER;

    for (const number of numbers) {
        if (number < smallestNumber){
            smallestNumber = number;
        }
    }
  console.log(smallestNumber);
}

smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);
smallestOfThreeNumbers(2, 2, 2);
