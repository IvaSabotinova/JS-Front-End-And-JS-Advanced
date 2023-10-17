function juiceFlavors(input) {
    let juices = {};
    let bottles = {};
    for (const item of input) {
        const [juice, quantity] = item.split(' => ');

        if (!juices.hasOwnProperty(juice)) {
            juices[juice] = 0;

        }
        juices[juice] += Number(quantity);

        if (juices[juice] >= 1000) {
            const numOfBottles = Math.floor(juices[juice] / 1000);
            const remainder = juices[juice] % 1000;
            if (!bottles.hasOwnProperty(juice)) {
                bottles[juice] = 0;
            }
            bottles[juice] += numOfBottles;
            juices[juice] = remainder;
        }
    }

    for (const [juice, numBottles] of Object.entries(bottles)) {
        console.log(`${juice} => ${numBottles}`);
    }
}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);