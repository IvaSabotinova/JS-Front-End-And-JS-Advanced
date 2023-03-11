function employees(input) {
    let obj = {};
    let arr = [];
    for (const employee of input) {
        obj[employee] = employee.length;
        arr.push(`Name: ${employee} -- Personal Number: ${obj[employee]}`);
    }
    arr.forEach(x => console.log(x));
}

// Solution 2

function employees(input) {
    let all = input.reduce((obj, employee) => {
        obj[employee] = employee.length;
        return obj;
    }, {});
    for (const key in all) {
        console.log(`Name: ${key} -- Personal Number: ${key.length}`)
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);


