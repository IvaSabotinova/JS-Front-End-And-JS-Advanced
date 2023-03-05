function palindromeIntegers(numbers) {
  for (const number of numbers.toString().split(',')) {
    let numberAsString = number.toString();
    let isPalindrome = true;
    for (let index = 0; index < numberAsString.length / 2; index++) {     
        if (Number(numberAsString[index]) !== Number(numberAsString[numberAsString.length - 1 - index])) {
            isPalindrome = false;
            break;
        }
    }
    let output = isPalindrome ? true : false
    console.log(output);
  }   
}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);