function pyramid(baseDimension, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let step = 0;
    while (baseDimension > 2) {
        let currentStone = (baseDimension - 2) ** 2 * increment;
        stone += (baseDimension - 2) ** 2 * increment;
        step++;
        if (step % 5 === 0) {
            lapisLazuli += baseDimension ** 2 * increment - currentStone;
        }
        else {
            marble += baseDimension ** 2 * increment - currentStone;
        }
        baseDimension -= 2;
    }

    gold = baseDimension ** 2 * increment;
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor((step + 1) * increment)}`);
}

pyramid(11, 1);
pyramid(11, 0.75)
pyramid(12,1);
pyramid(23, 0.5);