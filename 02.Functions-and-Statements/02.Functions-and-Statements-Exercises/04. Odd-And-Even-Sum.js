function oddAndEvenSum(number) {
    let numberAsString = number.toString();
    let evenSum = 0;
    let oddSum = 0;
    for (let index = 0; index < numberAsString.length; index++) {       
        let digit = parseInt(numberAsString[index]);
        if (digit % 2 === 0) {
            evenSum += digit;
        }
        else {
            oddSum += digit;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);