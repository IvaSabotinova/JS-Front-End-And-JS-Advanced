function passwordValidator(password) {
    let output = '';
    let isValid = true;
    if (!(password.length >= 6 && password.length <= 10)) {
        output += 'Password must be between 6 and 10 characters\n';
        isValid = false;
    }
    let lettersAndDigitsChecker = password.split('').filter(x=>(/[A-Za-z0-9]/).test(x))
    if (lettersAndDigitsChecker.length !== password.length) {
        output += "Password must consist only of letters and digits\n";
        isValid = false;
    }
    let digitChecker = password.split('').filter(x => /^\d$/.test(x));
    if (digitChecker.length < 2) {
        output += "Password must have at least 2 digits\n";
        isValid = false;
    }
    if (isValid) {
        output += "Password is valid";
    }
    console.log(output.trimEnd());
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');