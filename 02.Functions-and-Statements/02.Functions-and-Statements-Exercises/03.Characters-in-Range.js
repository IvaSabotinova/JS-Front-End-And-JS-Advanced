function charactersInRange(charOne, charTwo) {
    let asciiCodeCharOne = charOne.charCodeAt(0);
    let asciiCodeCharTwo = charTwo.charCodeAt(0);
    let smaller = asciiCodeCharOne;
    let bigger = asciiCodeCharTwo;
    if (asciiCodeCharOne > asciiCodeCharTwo) {
        smaller = asciiCodeCharTwo;
        bigger = asciiCodeCharOne;
    }

    let array = [];
    for (let index = smaller + 1; index < bigger; index++) {
        array.push(String.fromCharCode(index));
    }
    console.log(array.join(' '));
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');
