function validityChecker(x1, y1, x2, y2) {

    let firstCheckIsValid = Number.isInteger(Math.sqrt(x1 ** 2 + y1 ** 2));
    let secondCheckIsValid = Number.isInteger(Math.sqrt(x2 ** 2 + y2 ** 2));
    let thirdCheckIsValid = Number.isInteger(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
    let output = '';
    if (firstCheckIsValid) {
        output += `{${x1}, ${y1}} to {${0}, ${0}} is valid \n`;
    }
    else {
        output += `{${x1}, ${y1}} to {${0}, ${0}} is invalid \n`;
    }
    if (secondCheckIsValid) {
        output += `{${x2}, ${y2}} to {${0}, ${0}} is valid \n`;
    }
    else {
        output += `{${x2}, ${y2}} to {${0}, ${0}} is invalid \n`;
    }
    if (thirdCheckIsValid) {
        output += `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
    }
    else {
        output += `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }
    console.log(output);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
