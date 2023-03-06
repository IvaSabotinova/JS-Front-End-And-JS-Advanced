function printDNA(number) {
    let output = '';
    let index = 0;
    for (let row = 0; row < number; row++) {
        let letters = 'ATCGTTAGGG'.split('');
        if (index === letters.length) {
            index = 0;
        }        
        if (row % 4 === 0) {
            output += `**${letters.slice(index, index + 1)}${letters.slice(index + 1, index + 2)}**\n`;
        }
        else if (row % 4 === 1) {
            output += `*${letters.slice(index, index + 1)}--${letters.slice(index + 1, index + 2)}*\n`;
        }
        else if (row % 4 === 2) {
            output += `${letters.slice(index, index + 1)}----${letters.slice(index + 1, index + 2)}\n`;
        }
        else if (row % 4 === 3) {
            output += `*${letters.slice(index, index + 1)}--${letters.slice(index + 1, index + 2)}*\n`;
        }
        index += 2;
    }
    console.log(output);
}

printDNA(4);
printDNA(10);

