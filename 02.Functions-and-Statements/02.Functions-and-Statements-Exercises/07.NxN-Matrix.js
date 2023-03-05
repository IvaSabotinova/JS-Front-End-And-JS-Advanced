function nxnMatrix(number) {
    for (let row = 0; row < number; row++) {
        let currentRow = [];
        for (let column = 0; column < number; column++) {
            currentRow.push(number);
        }
        console.log(currentRow.join(' '));
    }
}

nxnMatrix(3);
nxnMatrix(7);
nxnMatrix(2);