function arrayManipulator(array, commands) {

    for (let i = 0; i < commands.length; i++) {
        let tokens = commands[i].split(' ');
        let operation = tokens[0];
        if (operation === 'add') {
            let index = tokens[1];
            let element = tokens[2];
            array.splice(index, 0, Number(element))
        }
        else if (operation === 'addMany') {
            let index = tokens[1];
            let arrayToInsert = tokens.slice(2);
            array.splice(index, 0, ...arrayToInsert.map(x => Number(x)));
        }
        else if (operation === 'contains') {
            console.log(array.indexOf(Number(tokens[1])));
        }
        else if (operation === 'remove') {
            let index = tokens[1];
            array.splice(index, 1);
        }
        else if (operation === 'shift') {
            let positions = Number(tokens[1]);
            if (positions >= 0) {
                for (let index = 0; index < positions; index++) {
                    let first = array.shift();
                    array.push(first);
                }
            }
            else {
                positions *= -1;
                for (let index = 0; index < positions; index++) {
                    let last = array.pop();
                    array.unshift(last);
                }
            }
        }
        else if (operation === 'sumPairs') {            
            let rotations = Math.floor(array.length / 2);
            for (let index = 0; index < rotations; index++) {
                let firstTwo = array.splice(index, 2);
                array.splice(index, 0, firstTwo.reduce((a, b) => Number(a) + Number(b)));                         
            }        
              
        }
        else if (operation === 'print') {
            console.log(`[ ${array.join(', ')} ]`);
            break;
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])

