function solve(array, numOfRotations) {    
    for (let index = 0; index < numOfRotations; index++) {
        let element = array.shift();        
        array.push(element);
    }
    console.log(array.join(' '))
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);