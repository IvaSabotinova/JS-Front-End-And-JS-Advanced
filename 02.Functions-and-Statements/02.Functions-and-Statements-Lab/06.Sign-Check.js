function signCheck(numOne, numTwo, numThree) {
    let output;
    if ((numOne < 0 && numTwo > 0 && numThree > 0)
        || (numTwo < 0 && numOne > 0 && numThree > 0)
        || (numThree < 0 && numOne > 0 && numTwo > 0)
        || (numOne < 0 && numTwo < 0 && numThree < 0)) {
        output = 'Negative'
    }
    else {
        output = 'Positive'
    }
    console.log(output);
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);