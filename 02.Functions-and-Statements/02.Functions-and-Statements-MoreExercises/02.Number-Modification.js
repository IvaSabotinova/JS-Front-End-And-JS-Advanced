function numberModification(input) {
    let number = input.toString().split('');
    let average = 0;
    while (average <= 5) {
        average = number.reduce((a, b) => Number(a) + Number(b)) / number.length;
        if (average > 5) {
            break;
        }
        number = number.concat('9');
    }

    console.log(Number(number.join('')));
}

numberModification(101);
numberModification(5835);