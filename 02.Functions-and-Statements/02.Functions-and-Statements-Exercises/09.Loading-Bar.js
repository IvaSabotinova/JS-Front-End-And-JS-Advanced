function loadingBar(number) {
    let array = [];
    let loading = number / 10;
    for (let index = 0; index < loading; index++) {
        array.push('%');
    }
    for (let index = 0; index < 10 - loading; index++) {
        array.push('.');

    }
    let output;
    if (loading === 10) {
        output =  `100% Complete!\n[${array.join('')}]`;
    }
    else {
        output = `${number}% [${array.join('')}]\nStill loading...`;
    }
    console.log(output);
}

loadingBar(30);
loadingBar(50);
loadingBar(100);

