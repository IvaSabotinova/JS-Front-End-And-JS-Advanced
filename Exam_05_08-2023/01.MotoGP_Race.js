
function motorGPRace(input) {
    const noOfRiders = Number(input.shift());
    let allRiders = [];
    for (let i = 0; i < noOfRiders; i++) {
        const [name, fuelCapacity, position] = input[i].split('|');
        if (Number(fuelCapacity) <= 100) {
            allRiders.push({ name: name, fuelCapacity: Number(fuelCapacity), position: Number(position) });
        }
    }
    const newInput = input.slice(noOfRiders);

    for (const line of newInput) {
        if (line.startsWith('Finish')) {
            break;
        }
        if (line.startsWith('StopForFuel')) {
            const [_command, rider, minimumFuel, changedPosition] = line.split(' - ');
            const currRider = allRiders.find(x => x.name === rider);
            if (currRider) {
                if (currRider.fuelCapacity < Number(minimumFuel)) {                  
                    currRider.position = Number(changedPosition);
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`)
                }
                else {
                    console.log(`${rider} does not need to stop for fuel!`)
                }
            }

        }
        else if (line.startsWith('Overtaking')) {
            const [_command, riderOne, riderTwo] = line.split(' - ');
            const riderOneObj = allRiders.find(x => x.name === riderOne);
            const riderTwoObj = allRiders.find(x => x.name === riderTwo);
            if (riderOneObj.position < riderTwoObj.position) {                
                const temp = riderOneObj.position;
                riderOneObj.position = riderTwoObj.position;
                riderTwoObj.position = temp;
                console.log(`${riderOne} overtook ${riderTwo}!`)
            }

        }
        else if (line.startsWith('EngineFail')) {
            const [_command, rider, lapsLeft] = line.split(' - ');
            const indexToRemove = allRiders.findIndex(x => x.name === rider);
            if (indexToRemove >= 0) {
                allRiders.splice(indexToRemove, 1);
                console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
            }
        }
    }

    for (const { name, fuelCapacity, position } of allRiders) {
        console.log(name);
        console.log(`  Final position: ${position}`)
    }

}

motorGPRace((["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]));

motorGPRace((["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]));