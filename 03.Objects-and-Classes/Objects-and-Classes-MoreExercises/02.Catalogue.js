function catalogue(input) {
    let prod = {};
    for (const line of input) {
        let [productName, productPrice] = line.split(' : ');
        prod[productName] = Number(productPrice);
    }

    let previousLetter = '';
    for (const [key, value] of Object.entries(prod).sort((a, b) => a[0].localeCompare(b[0]))) {
        let firstLetter = key.slice(0, 1);
        if (firstLetter !== previousLetter) {
            console.log(`${firstLetter}`)
        }
        console.log(`  ${key}: ${value}`)
        previousLetter = key.slice(0, 1);
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);