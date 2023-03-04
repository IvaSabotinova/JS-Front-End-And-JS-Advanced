function gladiator(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let numOfHelmetRepairs = Math.floor(lostFightsCount / 2);
    let numOfSwordRepairs = Math.floor(lostFightsCount / 3);
    let numOfShieldRepairs = Math.floor(lostFightsCount / 6);
    let numOfArmorRepairs = Math.floor(lostFightsCount / 12);

    let totalExpenses = numOfHelmetRepairs * helmetPrice
        + numOfSwordRepairs * swordPrice
        + numOfShieldRepairs * shieldPrice
        + numOfArmorRepairs * armorPrice;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiator(7,
    2,
    3,
    4,
    5
);
gladiator(23,
    12.50,
    21.50,
    40,
    200
);