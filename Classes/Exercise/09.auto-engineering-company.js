function autoEngineeringCompany(input) {
    let brands = new Map();
    for (const item of input) {
        const [brand, model, count]  = item.split(' | ')
        if (!brands.has(brand)) {
            brands.set(brand, new Map());
        }
        if (!brands.get(brand).has(model)) {
            brands.get(brand).set(model, 0);
        }
        brands.get(brand).set(model, brands.get(brand).get(model) + Number(count));

    }
    for (const [brand, innerMap] of brands) {
        console.log(brand);
        for (const [model, count] of innerMap) {
            console.log(`###${model} -> ${count}`);            
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);
