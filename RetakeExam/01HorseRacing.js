function solve(input) {
    const initialPositions = input.shift();   
    const horsesInit = initialPositions.split('|');

    let horses = [];
    for (let index = horsesInit.length - 1; index >= 0; index--) {
        const horse = horsesInit[index];
        horses.push(horse)
    }

    for (const item of input) {
        if (item === 'Finish') {
            break;
        }

        if (item.startsWith('Retake')) {
            const [_retake, overtakingHorse, overtakenHorse] = item.split(' ');
            const indexOvertakingHorse = horses.indexOf(overtakingHorse);
            const indexOvertakenHorse = horses.indexOf(overtakenHorse);
            if (indexOvertakingHorse > indexOvertakenHorse && indexOvertakenHorse !== -1 && indexOvertakingHorse !== -1) {
                const temp = horses[indexOvertakingHorse]
                horses[indexOvertakingHorse] = horses[indexOvertakenHorse];
                horses[indexOvertakenHorse] = temp;
                console.log(`${overtakingHorse} retakes ${overtakenHorse}.`)
            }           

        }     
        else if (item.startsWith('Trouble')) {
            const [_trouble, horseName] = item.split(' ');
            let indexHorse = horses.indexOf(horseName)
            if (indexHorse !==horses.length - 1 && indexHorse !== -1) {
                const temp = horses[indexHorse + 1];
                horses[indexHorse + 1] = horses[indexHorse];
                horses[indexHorse] = temp;
                console.log(`Trouble for ${horseName} - drops one position.`)
            }
        
        }
        else if (item.startsWith('Rage')) {
            const [_rage, horseName] = item.split(' ');
            let indexHorse = horses.indexOf(horseName);         
                if (indexHorse === 1) {
                    const temp = horses[1];
                    horses[1] = horses[0];
                    horses[0] = temp;
                }
                else if (indexHorse >= 2 && indexHorse !== -1) {
                    horses.splice(indexHorse, 1);
                    horses.splice(indexHorse - 2, 0, horseName)              
                }               
            
            console.log(`${horseName} rages 2 positions ahead.`); 
                 
        }
        else if (item.startsWith('Miracle')) {      
            const lastHorse = horses.pop();
             horses.unshift(lastHorse)           
            console.log(`What a miracle - ${lastHorse} becomes first.`);
           
        }
    }
    console.log(horses.reverse().join('->'))  
    console.log(`The winner is: ${horses[horses.length - 1]}`)
}

solve(['Bella|Alexia|Sugar',
    'Retake Alexia Sugar',
    'Rage Bella',
    'Trouble Bella',
    'Finish'])


solve(['Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish'])

solve(['Fancy|Lilly',
    'Retake Lilly Fancy',
    'Trouble Lilly',
    'Trouble Lilly',
    'Finish',
    'Rage Lilly'])

