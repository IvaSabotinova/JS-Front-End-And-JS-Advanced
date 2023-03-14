function garage(input) {
    let garage = {};
    for (const element of input) {
        let garageNo = element.split(' - ')[0];
        let carInfo = element.split(' - ')[1].split(', ');

        if (!garage.hasOwnProperty(garageNo)) {
            garage[garageNo] = [];
        }
        let newCarInfo = [];
        for (const el of carInfo) {
            let newElement = el.replace(': ', ' - ');
            newCarInfo.push(newElement);
        }
        garage[garageNo].push(newCarInfo);      
    }
    for (const [garageNo, carArr] of Object.entries(garage)) {
        console.log(`Garage № ${garageNo}`);
        carArr.forEach(x => console.log(`--- ${x.join(', ')}`));     
    }
}


garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']);