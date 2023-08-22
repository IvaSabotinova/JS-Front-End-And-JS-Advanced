
function astroAdventure(input) {

    const noOfAstronauts = Number(input.shift());
    let astronauts = {};
    const allAstronauts = input.splice(0, noOfAstronauts);

    for (const astronaut of allAstronauts) {
        const [name, oxygen, energy] = astronaut.split(' ');
        astronauts[name] = {};
        astronauts[name].oxygen = Number(oxygen);
        astronauts[name].energy = Number(energy);

    }

    for (const line of input) {
        if (line.startsWith('End')) {
            break;
        }
        else if (line.startsWith('Explore')) {
            const [_command, name, energy] = line.split(' - ');
            if (astronauts.hasOwnProperty(name)) {
                if (astronauts[name].energy >= Number(energy)) {
                    astronauts[name].energy -= Number(energy);
                    console.log(`${name} has successfully explored a new area and now has ${astronauts[name].energy} energy!`)
                }
                else{
                    console.log(`${name} does not have enough energy to explore!`);
                }
            }    

        }
        else if(line.startsWith('Refuel')){
            const [_command, name, amount] = line.split(' - ');
            if (astronauts.hasOwnProperty(name)) {
                let oldEnergy = astronauts[name].energy;
                astronauts[name].energy += Number(amount);
                if(astronauts[name].energy > 200){
                    astronauts[name].energy = 200;                    
                }
                console.log(`${name} refueled their energy by ${astronauts[name].energy - oldEnergy}!`);
            }
        }

        else if (line.startsWith('Breathe')){
            const [_command, name, amount] = line.split(' - ');
            if (astronauts.hasOwnProperty(name)) {
                let oldOxygen = astronauts[name].oxygen;
                astronauts[name].oxygen += Number(amount);
                if(astronauts[name].oxygen > 100){
                    astronauts[name].oxygen = 100;                    
                }
                console.log(`${name} took a breath and recovered ${astronauts[name].oxygen - oldOxygen} oxygen!`);
            }
        }
    }

    for (const astronaut in astronauts) {
       console.log(`Astronaut: ${astronaut}, Oxygen: ${astronauts[astronaut].oxygen}, Energy: ${astronauts[astronaut].energy}`)
    }



}

astroAdventure(['3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End']);

astroAdventure(['4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End']);