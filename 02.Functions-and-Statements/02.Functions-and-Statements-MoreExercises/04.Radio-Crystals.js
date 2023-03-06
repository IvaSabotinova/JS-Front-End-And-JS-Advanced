function radioCrystals(input) {
    let desired = input[0];
    let chops = input.slice(1);
    let output = '';
    for (let index = 0; index < chops.length; index++) {
        let currentChop = chops[index];
        let operations = {
            'cut': 0,
            'lap': 0,
            'grind': 0,
            'etch': 0,
            'x-ray': 0,
        }
        output += `Processing chunk ${currentChop} microns\n`;
        while (currentChop / 4 >= desired) {
            currentChop /= 4;
            operations['cut']++;
        }

        currentChop = Math.floor(currentChop);
        output += operations['cut'] > 0 ? `Cut x${operations['cut']}\nTransporting and washing\n` : '';

        while (currentChop * 0.80 >= desired) {
            currentChop *= 0.80;
            operations['lap']++;
        }
        currentChop = Math.floor(currentChop);
        output += operations['lap'] > 0 ? `Lap x${operations['lap']}\nTransporting and washing\n` : '';

        while (currentChop - 20 >= desired) {
            currentChop -= 20;
            operations['grind']++;
        }
        currentChop = Math.floor(currentChop);
        output += operations['grind'] > 0 ? `Grind x${operations['grind']}\nTransporting and washing\n` : '';

        while (currentChop - 2 >= desired) {
            currentChop -= 2;
            operations['etch']++;
        }
        currentChop = Math.floor(currentChop);

        if (currentChop > desired || currentChop + 1 === desired) {
            currentChop += 1;
            operations['x-ray']++;
        }
        if (currentChop - desired >= 2) {
            currentChop -= 2;
            operations['etch']++;
        }
        output += operations['etch'] > 0 ? `Etch x${operations['etch']}\nTransporting and washing\n` : '';
        output += operations['x-ray'] === 1 ? `X-ray x1\n` : '';
        output += `Finished crystal ${desired} microns\n`;
    }
    console.log(output.trimEnd())
}

radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);
radioCrystals([100, 99])