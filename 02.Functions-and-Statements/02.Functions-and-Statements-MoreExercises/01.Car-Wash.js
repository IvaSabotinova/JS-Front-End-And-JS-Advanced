function carWash(commands) {
    let current = 10;
    for (let index = 1; index <= commands.length; index++) {
        switch (commands[index]) {
            case 'soap': current += 10; break;
            case 'water': current *= 1.20; break;
            case 'vacuum cleaner': current *= 1.25; break;
            case 'mud': current *= 0.90; break;
            default: break;
        }
    }
    console.log(`The car is ${current.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);

