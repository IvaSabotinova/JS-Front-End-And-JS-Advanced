function wordsUppercase(text) {
    let newArr = [];
    let words = text.matchAll(/[A-z0-9]+/g);

    for (const word of words) {
        newArr.push(word.map(x => x.toUpperCase()));
    }

    console.log(newArr.join(', '))
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');


