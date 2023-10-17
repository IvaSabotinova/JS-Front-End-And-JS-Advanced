function juiceFlavor(input) {
    let juices = new Map();
    let bottles = new Map();

    for (const item of input) {
        const [juice, quantity] = item.split(' => ');
        if (!juices.has(juice)) {
            juices.set(juice, 0);
        }
        juices.set(juice, juices.get(juice) + Number(quantity));

        if (juices.get(juice)>= 1000) {
            const numOfBottles = Math.floor(juices.get(juice) / 1000);
            const remainder = juices.get(juice) % 1000;
            if (!bottles.has(juice)) {
                bottles.set(juice, 0);
            }
            bottles.set(juice, bottles.get(juice) + numOfBottles);
            juices.set(juice, remainder);
        }
    }
   for (const [juice, numBottles] of bottles) {
     console.log(`${juice} => ${numBottles}`)
   }
}

juiceFlavor(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)

juiceFlavor(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)