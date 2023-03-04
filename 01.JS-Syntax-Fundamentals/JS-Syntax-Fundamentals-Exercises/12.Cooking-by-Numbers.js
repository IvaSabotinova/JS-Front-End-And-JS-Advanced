function solve(number, ...operations) {
    number = parseInt(number);
    for (let index = 0; index < operations.length; index++) {
        switch (operations[index]) {
            case 'chop': number = number / 2.00; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number *= 0.80; break;
        }
        if (number.toString().includes('.'))
            console.log(number.toFixed(1))
        else
            console.log(number);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');