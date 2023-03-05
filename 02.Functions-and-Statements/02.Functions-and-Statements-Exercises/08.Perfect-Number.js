function perfectNumber(number) {
    let positiveDivisors = [];
    for (let index = 1; index < number; index++) {
        if (number % index === 0) {
            positiveDivisors.push(index);
        }
    }
    let sum = positiveDivisors.reduce((a, b) => a + b, 0);
    let output;
    if (sum === number) {
        output = "We have a perfect number!";
    }
    else {
        output = "It's not so perfect.";
    }
    console.log(output)
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);